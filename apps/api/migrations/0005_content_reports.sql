-- Content reports from Remeet.
--
-- Ids and a status, and nothing else. The reported text and the reporter's
-- comment go to the operator by mail; the photo goes to R2 and expires. This
-- table exists for one reason: to recognise the same `report_id` arriving twice
-- so a retried request does not send a second mail.
--
-- Deliberately no columns for content: a database that holds people's private
-- writing is a database somebody has to protect forever, and this feature does
-- not need one.
CREATE TABLE IF NOT EXISTS remeet_reports (
    report_id    TEXT PRIMARY KEY,
    created_at   TEXT NOT NULL,
    content_type TEXT NOT NULL,
    status       TEXT NOT NULL
);
