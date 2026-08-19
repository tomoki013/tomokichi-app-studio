# tomokichi-api

`https://api.tmkch.io` — one Cloudflare Worker, one namespace per app. Domain
logic stays separated: nothing under `remeet/` may depend on another app's
service, and vice versa.

| Namespace | What it is |
|---|---|
| `/api/v1/support`, `/api/support` | the shared contact form |
| `/remeet/v1/invites*` | Remeet invitations |
| `/api/v1/health` | liveness |

```bash
pnpm dev        # wrangler dev on :8787
pnpm check      # wrangler types + tsc
pnpm test       # vitest, in workerd
pnpm deploy
```

## Remeet invitations

The entrance to a CloudKit share, and nothing else about Remeet. The invitation
URL people actually send is not here — it is `https://remeet.tmkch.io/i/{token}`,
served by the site, which asks this API only for the code to display.

| | |
|---|---|
| `POST /remeet/v1/invites` | `{ ckShareUrl }` → `{ inviteUrl, inviteCode, managementToken, expiresAt }` |
| `POST /remeet/v1/invites/resolve` | `{ token }` or `{ code }` → `{ ckShareUrl }`. The app only |
| `POST /remeet/v1/invites/preview` | `{ token }` → `{ inviteCode }`. For the landing page; never returns a share URL |
| `POST /remeet/v1/invites/revoke` | `{ token, managementToken }` → `{ status }` |

A cron trigger sweeps expired invitations nightly — see Housekeeping below.

Source: `src/routes/remeet/invites.ts` (HTTP, rate limits, client filter) over
`src/services/remeet/` (the domain). Schema in `migrations/`.

### What it stores, and what it refuses to

One row per invitation: opaque lookup hashes, an encrypted CKShare URL, an
encrypted invite code, a status and two timestamps. No name, no reunion, no
photo, no date, no participant — none of Remeet's own data comes near this
database. CloudKit remains the only thing that decides who is in a reunion;
this guards the entrance, and revoking cannot remove somebody already inside.

Four properties worth knowing before changing anything here:

- **Tokens and codes are never stored.** D1 holds
  `HMAC-SHA256(secret, value)`, with the secret in a Worker secret. A copy of
  the database is not a working invitation.
- **The share URL and the code are encrypted above D1's own encryption**, with
  AES-GCM and the invite id as additional authenticated data, so a ciphertext
  cannot be moved between rows.
- **Every "no" is the same `INVITE_UNAVAILABLE`.** Unknown, expired, revoked,
  superseded and wrong-management-token are indistinguishable from outside.
- **Nothing here is logged.** Every request carries either a CKShare URL or a
  value that resolves to one — which is why `routes/remeet/invites.ts` has no
  logging while `routes/support.ts` beside it does.

### Who may call it

`REMEET_INVITE_CLIENT_KEY` is a value the Remeet app and the Remeet site send
as `X-Remeet-Client`. It ships inside the app, so it is a filter rather than a
credential: it stops a bare `curl` and the scanners that follow a domain, not
somebody who has opened the binary. Unset means unenforced, so rotating it
cannot lock out builds already in people's hands — add the new value to the
app and the site first, then here.

Rate limits are per IP, tightest on codes: a wrong code spends five of the
minute's ten attempts, so guessing costs two tries a minute. App Attest is the
control that would make this a real answer; it needs a physical device to
develop against and is the one Phase 5 item left open in `docs/invite-flow.md`
in the app repository.

### The audit trail

`invite_metrics` holds one row per day per outcome and a count — `created`,
`resolved`, `resolve_unavailable`, `code_failed`, `previewed`, `revoked`,
`rejected`. No token, no code, no address, no share: an audit trail that could
identify an invitation would be the thing it exists to protect.

What it answers is whether somebody is working through the code space, which
looks like `code_failed` climbing away from `resolved`:

```bash
pnpm exec wrangler d1 execute remeet-invites --remote \
  --command "SELECT day, outcome, count FROM invite_metrics ORDER BY day DESC, outcome"
```

Counting never fails a request — a broken tally must not turn a working
invitation into an error.

### Housekeeping

A cron trigger (`17 3 * * *`) deletes invitations that expired more than a day
ago. The delay is deliberate: an expired invitation cannot be resolved either
way, and keeping the row a while longer is what stops "expired" and "never
existed" from being distinguishable by how long the answer takes.

### Rotating the keys

Both secrets can be replaced without invalidating invitations already in
people's messages. Reads try the current key and fall back to the retiring one;
writes always use the current one.

```bash
# 1. Move the current values into the PREVIOUS slots.
pnpm exec wrangler secret put REMEET_INVITE_TOKEN_SECRET_PREVIOUS   # the old value
pnpm exec wrangler secret put REMEET_INVITE_URL_KEY_PREVIOUS        # the old value

# 2. Put the new values in place.
openssl rand -base64 32 | pnpm exec wrangler secret put REMEET_INVITE_TOKEN_SECRET
openssl rand -base64 32 | pnpm exec wrangler secret put REMEET_INVITE_URL_KEY

# 3. After the longest invitation lifetime has passed — eight days, to be
#    safe — delete the two PREVIOUS secrets.
pnpm exec wrangler secret delete REMEET_INVITE_TOKEN_SECRET_PREVIOUS
pnpm exec wrangler secret delete REMEET_INVITE_URL_KEY_PREVIOUS
```

Deleting the previous keys before step 3's wait is what makes a rotation
destructive: everything written under them stops resolving that moment.

The client key rotates the other way round — app and site first, API last —
because an unset `REMEET_INVITE_CLIENT_KEY` is unenforced rather than closed.

### Provisioning

Done once, and already done for production. To rebuild it elsewhere:

```bash
pnpm exec wrangler d1 create remeet-invites
# put the printed database_id into wrangler.jsonc
pnpm exec wrangler d1 execute remeet-invites --remote --file migrations/0001_create_invites.sql
pnpm exec wrangler d1 execute remeet-invites --remote --file migrations/0002_add_invite_code.sql

openssl rand -base64 32 | pnpm exec wrangler secret put REMEET_INVITE_TOKEN_SECRET
openssl rand -base64 32 | pnpm exec wrangler secret put REMEET_INVITE_URL_KEY
openssl rand -hex 24    | pnpm exec wrangler secret put REMEET_INVITE_CLIENT_KEY
```

Migrations are applied in order; `0003` adds the audit counters.

`REMEET_INVITE_URL_KEY` cannot be rotated on its own — every stored share URL
and code is sealed with it, so rotating invalidates every invitation still out.
That is survivable (they last seven days) but should be deliberate.

The endpoints answer `503` until the database and the first two secrets exist,
rather than running half-configured.

### Checking a deployment

```bash
KEY=$(pnpm exec wrangler secret list >/dev/null; echo "<the client key from the app build settings>")
curl -s -X POST https://api.tmkch.io/remeet/v1/invites \
  -H 'content-type: application/json' -H "X-Remeet-Client: $KEY" \
  -d '{"ckShareUrl":"https://www.icloud.com/share/0000000000000000000000000"}'
```

Without the header the same call answers `403`, which is the quickest way to
confirm the filter is on.
