# TTR Scorer

Scores Ticket to Ride from a phone photo of the board. Runs entirely in the browser; photos never leave the phone.

## Flow
1. Setup: board (USA or Europe), player names and train colors.
2. Photo, then tap the 4 outer corners of the board.
3. Tap 2 trains of each player's color (calibrates to your lighting).
4. Review: every route is colored by owner. Tap a route to change its owner. "Trains left" should match what each player has left over.
5. Destination tickets per player (completed add, not completed subtract) and bonuses.
6. Final scores.

## Status
- USA: camera counting works. Tested on 9 labeled game photos: about 94% of routes right before review.
- Europe: routes are entered by length until the Europe board map is built.

## Files
- `index.html` — the whole app.
- `usa_tracks.json` — position of every train slot on the USA board (straightened board is 1500 x 990).
- `usa_empty.json` — color of each slot on an empty board, used to tell empty from occupied.

Not affiliated with Days of Wonder.
