# Verification record — 30 October 2026
- PASS: node --test bridge/*.test.mjs (3 tests).
- PASS: Node syntax checks for app and bridge.
- PASS: browser demo, 3 distinct simulated voices unlock first chapter; reveal opens; saving increments album to 1.
- PASS: localStorage survives preview reload (unlocked state preserved).
- PASS: local HTTP smoke test (homepage, status and overlay 200; unconfigured auth 400; foreign-origin POST rejected 403).
- Pending: mobile visual inspection, real Twitch OAuth, EventSub permission, reconnect and revocation against Twitch; OBS recording; film publication.
- The UI simulation is not evidence that Twitch works. Synthetic viewer labels are explicit.

## Real acceptance test
1. Register Public Twitch app and exact localhost callback. Authorize broadcaster account.
2. Ensure channel.chat.message subscription returns HTTP 202 and real chat updates overlay.
3. One account sends !moment repeatedly: still one voice.
4. Two other consenting accounts send !moment: chapter unlocks.
5. All send !claim: one entry per user ID, no duplicates.
6. Non-broadcaster !next: does not advance. Broadcaster !next: advances.
7. !claim 01: prior unlocked chapter remains claimable.
8. Restart: ledger survives, token does not; reconnect authorization required.
9. Disconnect: events stop, token revocation attempted.
10. Record real behavior plus Codex usage before entering contest.
