-- Remeet invitations: the entrance to a CloudKit share, and nothing else.
--
-- No name, no reunion, no photo, no date, no participant identity. The only
-- personal thing here is the CKShare URL, and it is stored encrypted with a
-- key held as a Worker secret rather than in this database.
--
-- `invite_code_hash` is nullable because Phase 2 issues links only. Phase 3
-- fills it for the human-readable invite code; keeping the column now means
-- that arrives as a write rather than a migration on a live table.
CREATE TABLE IF NOT EXISTS invites (
    id TEXT PRIMARY KEY,

    url_token_hash TEXT NOT NULL UNIQUE,
    invite_code_hash TEXT UNIQUE,
    share_url_hash TEXT NOT NULL,

    encrypted_share_url TEXT NOT NULL,
    management_token_hash TEXT NOT NULL,

    status TEXT NOT NULL CHECK (status IN ('active', 'revoked')),
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    revoked_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_invites_url_token ON invites(url_token_hash);
CREATE INDEX IF NOT EXISTS idx_invites_code ON invites(invite_code_hash);
CREATE INDEX IF NOT EXISTS idx_invites_share ON invites(share_url_hash);
CREATE INDEX IF NOT EXISTS idx_invites_expires ON invites(expires_at);
