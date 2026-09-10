RACKMATE V1.35 PWA INSTALL

Upload ALL of these to the ROOT of the GitHub RackMate repo:
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png

Keep the icons folder as a folder.

After GitHub Pages updates:
1. Open https://jasonspookbartlett.github.io/RackMate/ in Chrome on Android.
2. Reload and confirm the screen says V1.35.
3. Chrome ⋮ menu -> Install app (or Add to Home screen).
4. Launch RackMate from the new Home Screen icon.
5. It should open standalone in landscape without Chrome's address bar.

If you already made an older RackMate shortcut, remove it before installing this build.

V1.35 replaces the temporary RackMate icon with the approved pool-table / 8-ball RackMate icon.

V1.35 fixes Setup player names being reset when changing game type and adds mobile NEXT/DONE keyboard flow for the two player-name fields.

V1.35: Setup opens with no player field focused; tapping a player name selects its text. Player 1 Next still moves to Player 2; Player 2 Done dismisses the keyboard.
