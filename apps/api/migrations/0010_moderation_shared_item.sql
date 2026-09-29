-- Adds `sharedItem` to what a moderation action may target.
--
-- Remeet's "Shared Remeet" work (Remeet docs/shared-remeet.md) puts the small
-- things two people add around a reunion — the first is a line added to a
-- wish — on one generic record type, `SharedItemEntity`. One kind here covers
-- every kind of shared item, so the next one needs no migration.
--
-- SQLite cannot change a CHECK constraint in place, so the table is rebuilt the
-- way 0008 rebuilt the manifest: rename, create, copy, drop. Every column and
-- both indexes are kept exactly as 0007 made them; only the list of kinds grows.
-- Nothing references this table by foreign key.

ALTER TABLE remeet_moderation_actions RENAME TO remeet_moderation_actions_v1;

DROP INDEX IF EXISTS idx_moderation_target;
DROP INDEX IF EXISTS idx_moderation_status;

CREATE TABLE IF NOT EXISTS remeet_moderation_actions (
    action_id    TEXT PRIMARY KEY,
    target       TEXT NOT NULL,
    target_kind  TEXT NOT NULL CHECK (
        target_kind IN ('wish', 'waitingMemory', 'anniversaryCard', 'statusNote', 'sharedItem', 'reunionField')
    ),
    content_id   TEXT,
    reunion_id   TEXT,
    root_field   TEXT,
    reason_code  TEXT NOT NULL,
    report_id    TEXT,
    note         TEXT,
    status       TEXT NOT NULL CHECK (status IN ('active', 'revoked')),
    issued_at    TEXT NOT NULL,
    issued_by    TEXT NOT NULL,
    revoked_at   TEXT,
    revoked_by   TEXT
);

INSERT INTO remeet_moderation_actions (
    action_id, target, target_kind, content_id, reunion_id, root_field, reason_code,
    report_id, note, status, issued_at, issued_by, revoked_at, revoked_by
)
SELECT
    action_id, target, target_kind, content_id, reunion_id, root_field, reason_code,
    report_id, note, status, issued_at, issued_by, revoked_at, revoked_by
FROM remeet_moderation_actions_v1;

DROP TABLE remeet_moderation_actions_v1;

CREATE UNIQUE INDEX IF NOT EXISTS idx_moderation_target ON remeet_moderation_actions(target);
CREATE INDEX IF NOT EXISTS idx_moderation_status ON remeet_moderation_actions(status, issued_at);
