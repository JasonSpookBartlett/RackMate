RackMate v2.05 BETA
Upload THESE ROOT FILES directly over the root of the GitHub RackMate repository.
Do not create a RackMate_v2.05_BETA subfolder.

v2.05 fixes:
- Exact 1602 x 982 master-background aspect ratio (801:491).
- Background uses contain/no distortion; UI and image share one uniformly-scaled canvas.
- PWA manifest requests fullscreen landscape mode.
- In ordinary browser mode RackMate requests fullscreen on the first user interaction (browser permission rules still apply).
- Service-worker/cache/version bumped to v2.05.

- v2.05 anchors the locked 2048x876 canvas directly to the top of the available viewport; no vertical centring gap.
