RACKMATE V1.38 PWA INSTALL

Upload ALL of these to the ROOT of the GitHub RackMate repo:
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png

Keep the icons folder as a folder.

After GitHub Pages updates:
1. Open https://jasonspookbartlett.github.io/RackMate/ in Chrome on Android.
2. Reload and confirm the screen says V1.38.
3. Chrome ⋮ menu -> Install app (or Add to Home screen).
4. Launch RackMate from the new Home Screen icon.
5. It should open standalone in landscape without Chrome's address bar.

If you already made an older RackMate shortcut, remove it before installing this build.

V1.37 replaces the temporary RackMate icon with the approved pool-table / 8-ball RackMate icon.

V1.37 fixes Setup player names being reset when changing game type and adds mobile NEXT/DONE keyboard flow for the two player-name fields.

V1.37: Setup opens with no player field focused; tapping a player name selects its text. Player 1 Next still moves to Player 2; Player 2 Done dismisses the keyboard.

V1.37: mobile-safe player-name selection; Exit App now attempts close and gives an honest Android PWA fallback when the OS blocks self-termination.

V1.37 repairs a JavaScript syntax error in the V1.36 Exit App fallback text and retains the mobile-safe player-name focus flow.

V1.38 normalises the current build/version references and adds a central APP_VERSION constant for easier verification.
