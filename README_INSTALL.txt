RackMate v2.36 BETA
Upload THESE ROOT FILES directly over the root of the GitHub RackMate repository.
Do not create a RackMate_v2.17_BETA subfolder.

v2.17 fixes:
- Exact 1602 x 982 master-background aspect ratio (801:491).
- Background uses contain/no distortion; UI and image share one uniformly-scaled canvas.
- PWA manifest requests fullscreen landscape mode.
- In ordinary browser mode RackMate requests fullscreen on the first user interaction (browser permission rules still apply).
- Service-worker/cache/version bumped to v2.17.

- v2.17 anchors the locked 2048x1024 canvas directly to the top of the available viewport; no vertical centring gap.

- v2.17 uses the locked 2048x1024 (2:1) Q90 WebP production master.
- Canvas scaling is uniform only; no independent X/Y stretching, no intentional crop.

v2.33 Setup spacing:
- Rebuilt from clean v2.27 source.
- Decisive three-column layout: Game Type left; Break Format / First Break centre; Race To / Best Of right.
- No physical shell or production-background changes.

- Preserves v2.30 three-column X axes; spaces all three columns lower and aligns the upper content row.
- Corrects the visible/runtime version badge to v2.33.

- v2.33 is a Y-axis-only refinement: upper control headings aligned lower beneath the player row; First Break lowered proportionally. Three-column X axes are unchanged.

- v2.33: decisive three-column reposition: Game Type under Player 1, Break Format/First Break under Swap Sides, Race To/Best Of under Player 2; all lower groups moved down together.


v2.34: Measured mock-up layout pass. Preserves v2.33 fullscreen shell; repositions Setup lower columns only.

v2.36: Top player row moved halfway back from v2.35 toward v2.34. Fullscreen shell and lower setup columns unchanged.
