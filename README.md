# TTR Scorer

Scores Ticket to Ride from a phone photo of the board. Runs entirely in the browser; photos never leave the phone.

## Flow
1. Setup: board (USA or Europe), player names and train colors.
2. Photo, then tap the 4 outer corners of the board. Drag a corner to adjust; a magnifier shows the exact point.
3. Tap 2 trains of each player's color (calibrates to your lighting).
4. Review: every route is colored by owner. Tap a route to change its owner. Enter the trains each player actually has left; if a count doesn't match, the app names the routes most likely to be wrong and outlines them in yellow. It also flags double-route rule breaks (one player on both sides; both sides used in a 2 or 3 player game).
5. Destination tickets per player (completed add, not completed subtract) and bonuses. USA longest path is worked out from the board automatically (can be overridden).
6. Final scores.

The game is saved on the phone as you go. If the page reloads, tap "Resume last game".

## Status
- USA: camera counting works. Tested on 9 labeled game photos: about 94% of routes right before review.
- Europe: routes are entered by length until the Europe board map is built.

## Files
- `index.html` — the whole app.
- `usa_tracks.json` — position of every train slot on the USA board (straightened board is 1500 x 990).
- `usa_empty.json` — color of each slot on an empty board, used to tell empty from occupied.
- `usa_routes.json` — the two cities each route connects (same order as `usa_tracks.json`) and city positions. Checked against the full USA route list: all 100 routes, lengths and double routes match.

Not affiliated with Days of Wonder.
