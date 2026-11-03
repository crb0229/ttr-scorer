# TTR Scorer

Scores Ticket to Ride from a phone photo of the board. Runs entirely in the browser; photos never leave the phone.

## Install on iPhone (works offline)
1. On Wi-Fi, open https://crb0229.github.io/ttr-scorer/ in Safari.
2. Tap Share, then Add to Home Screen.
3. Open it once from the home screen while still online. It saves everything it needs (about 12 MB) on the phone.

After that it runs with no internet, including the ticket reader. Updates download in the background whenever the phone is online and show up the next time the app opens.

## Flow
The app opens on a main menu with New game, Resume, and a short how-it-works guide. Every step has a Back button.

1. Setup: board (USA or Europe), player names and train colors.
2. Photo from any side of the table, then tap the 4 outer corners of the board. The app turns the board the right way up on its own (Turn board button if needed). Drag a corner to adjust; a magnifier shows the exact point.
3. Tap 2 trains of each player's color (calibrates to your lighting).
4. Review: every route is colored by owner. Tap a route to change its owner. Enter the trains each player actually has left; if a count doesn't match, the app names the routes most likely to be wrong and outlines them in yellow. It also flags double-route rule breaks (one player on both sides; both sides used in a 2 or 3 player game).
5. Destination tickets. USA: photograph each player's tickets laid face-up (or pick them from the list). The app reads the city names, checks each ticket against the board, and adds completed ones and subtracts missed ones. A missed ticket names the route(s) it's short; tap a ticket to see its path on the board. Longest path is worked out from the board automatically (can be overridden). Europe: enter ticket points by hand.
6. Final scores.

The game is saved on the phone as you go. If the page reloads, tap "Resume last game".

## Status
- USA: camera counting works. Tested on 9 labeled game photos: about 94% of routes right before review.
- Europe: routes are entered by length until the Europe board map is built.

## Files
- `index.html` — the whole app.
- `sw.js` — saves the app's files on the phone so it works offline.
- `manifest.json`, `icons/` — home screen name and icon.
- `usa_tracks.json` — position of every train slot on the USA board (straightened board is 1500 x 990).
- `usa_empty.json` — color of each slot on an empty board, used to tell empty from occupied.
- `usa_tickets.json` — the 30 USA destination tickets (cities and points). Points written from memory; the four longest (LA–Chicago 16, LA–Miami 20, LA–New York 21, Seattle–New York 22) should be checked against the deck.
- `usa_routes.json` — the two cities each route connects (same order as `usa_tracks.json`) and city positions. Checked against the full USA route list: all 100 routes, lengths and double routes match.

Ticket reading uses Tesseract.js (Apache 2.0), stored in `ocr/` and run on the phone. Title fonts: Rye and Roboto Slab (SIL Open Font License), in `fonts/`.

Not affiliated with Days of Wonder.
