# checklist

## Purpose
Inserts a styled interactive checklist into the TinyMCE editor. Checklist items use small checkbox cells. Clicking an item toggles the completed state.

## Buttons
- `checklist` — inserts a checklist with three default items.

## Menu
None.

## Events
- `init` — injects local checklist styles and applies the local button background color.
- `SetContent` / `BeforeSetContent` — ensures checklist styles are available inside the editor document.
- `click` — toggles `data-checked` on checklist list items.

## Commands
- `checklist` — inserts the checklist HTML structure.

## Styling
Completed checklist items have a light green row background, a green check mark that stays inside the checkbox cell, a green checkbox border, and a red strikethrough line.

## Dependencies
TinyMCE 5.x or newer.

## Version
1.1.0

## Notes
The plugin is independent and stores its button background color locally in `plugin.js` using `BUTTON_BACKGROUND_COLOR = '#ebfaeb'`.
