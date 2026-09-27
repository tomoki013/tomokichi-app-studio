# Ticket model migration — Tomokichi records (2026-09-18)

Moved from inquiry-platform `docs/operations/tickets.md`, which now describes the model and rollout without any deployment's data. These are the rehearsal and production results for Tomokichi's database `tomokichi-admin`.

## Migration rehearsal result — 2026-09-18

A private production export was restored locally and migration 0006 was applied twice. Original rows were compared in full (not just their counts); no legacy rows changed. New rows were identical on replay.

| Data | Before | After |
| --- | ---: | ---: |
| Legacy support threads | 16 | 16 |
| Legacy reports | 4 | 4 |
| Legacy support messages | 26 | 26 |
| Legacy report events | 17 | 17 |
| Legacy audit entries | 55 | 55 |
| Unified tickets | — | 18 |
| Ticket source mappings | — | 20 |
| Ticket messages | — | 26 |
| Ticket events | — | 90 |
| Ticket report details | — | 4 |
| Ticket relations | — | 1 |

Missing source mappings/messages, broken report links, internal messages with recipients and terminal tickets without a resolution: all zero. Foreign-key check passed. Separate local Wrangler migration execution succeeded; the test configuration also validates Wrangler's SQL splitter because CASE/END spacing inside triggers is significant to that splitter.

These are rehearsal counts, not a claim that production migration has run. No backup contents are checked into Git.

## Production release — 2026-09-18

Migration 0006 completed remotely (75 statements). Post-migration counts matched the rehearsal: 16 legacy conversations, 4 reports, 26 legacy/new messages, 18 tickets, 20 source mappings and 90 events. Missing support/report/message mappings, internal-note recipients and terminal tickets without resolutions were all zero; `foreign_key_check` returned no violations.

- Admin Core version: `d9d8d0ff-a15f-47f0-b216-d8cdaf341354`
- Admin Web version: `c831d31e-494d-4e5a-bbcf-cd34dcc50224`
- Unauthenticated production ticket endpoints were denied. The browser reaches Cloudflare Access login; authenticated production screen verification is pending operator login.
- Local and automated verification: 356 tests passed across Core, Admin Worker/UI, public API, contracts, mail provider and ingress; related typechecks/builds passed. Browser lifecycle verification used isolated local test data and sent no emails.
