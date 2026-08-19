-- Phase 5: how much of each thing happened, by day.
--
-- The audit trail deliberately cannot identify an invitation: one row per day
-- per outcome, and a count. No token, no code, no address, no share, nothing
-- that could be joined back to a person. What it answers is the only question
-- worth asking from outside — "is somebody working through the code space?" —
-- which shows up as `code_failed` climbing away from `resolved`.
CREATE TABLE IF NOT EXISTS invite_metrics (
    day TEXT NOT NULL,
    outcome TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (day, outcome)
);
