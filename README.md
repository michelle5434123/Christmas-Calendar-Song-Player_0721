# 🎄 Christmas-Calendar-Song-Player_0721
This is a simple interactive web app where selecting December 25 (Christmas) on a calendar triggers a Christmas song to play. It also counts how many times a user has tried selecting a date — exploring conditional logic, DOM manipulation, and audio playback.


## Features
- **Date Picker** with native HTML `<input type="date">`
- **Plays a Christmas song** when 12/25 is selected
- **Try Counter** — tracks how many date selections have been made
- JavaScript logic using `addEventListener`, `Date`, and template literals


## How It Works
- **Selecting a date** from the calendar triggers a check.
- If the selected date **is December 25**:
  - A festive message is shown.
  - A hidden `<audio>` element begins playing **A Christmas song**
- Each date selection increases a visible **try counter**.
