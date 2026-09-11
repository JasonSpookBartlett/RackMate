RACKMATE BETA v1.51 — V3 BANTER ENGINE

BASELINE
Built directly from the clean V1.50 functional baseline.
The existing scoring, breaker, Help, PWA, input and Wake Lock behaviour is retained unless noted below.

WHAT IS NEW
- V3 RackMate banter library implemented as a separate message layer.
- Large central RackMate speech bubble.
- Bubble tail points diagonally toward the RackMate name in the top-left header.
- Speech bubbles are non-modal and do not block touch/swipe scoring.
- Frame-win banter is score-aware and appears after every non-terminal awarded frame.
- Match-win banter is score-aware.
- Banter avoids immediately repeating the same line from a category where practical.
- New Voice Banter setting sits underneath RackMate Banter.
- Voice Banter uses the device/browser speech voice and prefers NZ/AU/UK English when available.
- Voice Banter defaults OFF; RackMate Banter remains ON by default.
- Turning RackMate Banter OFF suppresses all personality bubbles while leaving factual UI intact.
- Pointless Undo pool includes the two approved LOCKED lines:
  "UNDO WHAT? … Take the cloth off the bloody table or something?"
  "UNDO WHAT? We haven't bloody started yet!"

SCORE-AWARE FRAME EVENTS
RackMate can distinguish, among other things:
- opening frame
- routine lead extension
- score levelled
- new leader
- leader pulling away
- trailing player finally getting on the board
- still well behind
- comeback underway
- comeback completed / score levelled
- on the hill
- Hill-Hill

SCORE-AWARE MATCH EVENTS
RackMate can distinguish, among other things:
- Hill-Hill / narrow win
- close win
- comfortable win
- hiding / near-whitewash
- whitewash
- comeback win / blown big lead
- unusually long match
- concession

OPENING BREAK BANTER
- Lag: attempting to score before assigning the lag winner is rejected and can trigger banter.
- Coin Toss: attempting to score before tossing/assigning the coin is rejected and can trigger banter.
- Invalid coin drop triggers banter and snaps back.
- Opening-breaker correction before Frame 1 has its own banter pool.
- Just Play retains its own opening line.

UNDO
- Successful Undo / frame removal has its own banter pool.
- Undo at 0-0 triggers the Pointless Undo pool.

SMALL LOGIC HARDENING
- An invalid/cancelled initial Lag cue drag now remains in Lag-assignment mode, so Frame 1 cannot accidentally be scored before the opening breaker is assigned.

UPLOAD TO EXISTING GITHUB REPO ROOT
Replace these files:
- index.html
- sw.js

README_INSTALL.txt is for reference only.
Leave the existing manifest.webmanifest and icons/ folder in place.

CACHE / VERSION
- Header should display: RackMate v1.51
- Bottom test version should display: BETA v1.51
- Service-worker cache: rackmate-v1.51
- Service-worker registration query: v=1.51

SUGGESTED QA
1. Confirm app opens normally and header reads v1.51.
2. Settings: Banter ON; Voice Banter visible beneath it; Voice defaults OFF.
3. Turn Voice Banter ON and confirm the test/settings banter is spoken.
4. Turn Banter OFF and confirm Voice Banter becomes disabled.
5. Start Lag; try to score before assigning lag winner: score must remain 0-0 and RackMate should speak/show banter.
6. Drag lag cue somewhere invalid: Lag assignment must remain active.
7. Assign lag winner; correct it before Frame 1: correction banter should appear.
8. Start Coin Toss; attempt to score before toss and after toss-before-assignment: both must be rejected with appropriate banter.
9. Drop coin somewhere invalid: coin snaps back and banter appears.
10. Score several frames and watch for score-aware speech bubbles every non-terminal frame.
11. Undo a frame: Undo banter appears.
12. Undo at 0-0: Pointless Undo banter appears.
13. Run a short Race To 2 or 3 through to completion and confirm Winner screen receives score-aware match banter.
14. Confirm Banter OFF leaves scoring and factual UI completely functional.
15. Confirm Keep Screen Awake still applies only during active Gameplay.

NOTE
The wording is deliberately isolated in the BANTER message library inside index.html. Messages can be added, deleted or rewritten later without altering the scoring rules.
