RACKMATE V1.47 — STABILITY REBUILD

Rebuilt from the known-good V1.33 PWA baseline.

FIXES
- No autofocus or keyboard on launch.
- Player 1 / Player 2 are placeholders, avoiding fragile scripted text selection.
- Tap Player 1 normally; Android owns the keyboard lifecycle.
- NEXT moves to Player 2.
- DONE dismisses the keyboard.
- Changing game type, race length, break format or settings no longer rewrites names.
- New Match restores blank fields with Player 1 / Player 2 placeholders.
- Service worker now prefers the live network during beta and explicitly checks for updates.
- Exit App remains the safe PWA fallback because Chrome/Android does not guarantee that an installed PWA may terminate its own task.

UPLOAD ALL FILES/FOLDERS TO THE REPO ROOT:
index.html
manifest.webmanifest
sw.js
icons/

PHONE TEST
1. Open app: no keyboard.
2. Tap Player 1: keyboard stays open.
3. Type name and press NEXT.
4. Type Player 2 and press DONE.
5. Change 8/9/10-ball, Race, Best Of and Break Format: names stay unchanged.
6. Open/close App Settings: names stay unchanged and keyboard stays closed.

V1.47: CSS-only UI refinement — Player 1 / Player 2 placeholders are now pale (48% opacity) so they clearly read as prompts rather than entered names. No mobile keyboard/focus logic changed.

V1.47: Player-name placeholder opacity reduced from 48% to 25%. CSS-only refinement; input/focus logic unchanged.

V1.47: Added small v1.43 test label beside RackMate in top-left header. No app/input logic changed.

V1.47: Header version label enlarged to the same size as the RackMate app name for easy beta-build identification. No app logic changed.

V1.47: Replaced the short placeholder Help screen with the complete approved RackMate Help text. Added Help-only heading/list formatting for readability. No scoring, keyboard, breaker, match or settings logic changed.

V1.47: Hardened Help navigation. Help can no longer become its own return destination, the Help button is hidden while Help is open, Help reopens at the top, and CLOSE always falls back safely to Setup if needed. No scoring, breaker, keyboard, match or settings logic changed.

V1.47: Wake Lock reliability fix. RackMate now tracks whether a screen wake lock is actually required, requests it during active gameplay, re-acquires it after visibility/focus/pageshow changes or browser-initiated release, and releases it when gameplay ends or Keep Screen Awake is disabled. No scoring, breaker, keyboard, Help or match logic changed.
