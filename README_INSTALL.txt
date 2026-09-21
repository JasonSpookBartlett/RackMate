RackMate v2.08 BETA
Upload THESE ROOT FILES directly over the root of the GitHub RackMate repository.
Do not create a RackMate_v2.08_BETA subfolder.

v2.08 fixes:
- Exact 1602 x 982 master-background aspect ratio (801:491).
- Background uses contain/no distortion; UI and image share one uniformly-scaled canvas.
- PWA manifest requests fullscreen landscape mode.
- In ordinary browser mode RackMate requests fullscreen on the first user interaction (browser permission rules still apply).
- Service-worker/cache/version bumped to v2.08.

- v2.08 anchors the locked 2048x1024 canvas directly to the top of the available viewport; no vertical centring gap.

- v2.08 uses the locked 2048x1024 (2:1) Q90 WebP production master.
- Canvas scaling is uniform only; no independent X/Y stretching, no intentional crop.
