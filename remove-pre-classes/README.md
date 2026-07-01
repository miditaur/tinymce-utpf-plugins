# remove-pre-classes

## Purpose

`remove-pre-classes` is a TinyMCE 5.x UTPF plugin that removes the `class` attribute from all `<pre>` elements in the editor content.

## Button

- ID: `remove-pre-classes`
- Button text: `remove pre classes`
- Tooltip: `remove-pre-classes`
- Icon: `cancel`
- Local button background color: `#ebfaeb`

## Menu

- Menu item ID: `remove-pre-classes`
- Menu item text: `Remove Pre Classes`

## Command

- Command ID: `remove-pre-classes`

## Events

- `init` — reapplies the local button background color after editor initialization.

## Dialogs and Messages

The plugin uses `editor.windowManager.alert()` to report whether any `<pre>` class attributes were removed and how many elements were modified.

## Dependencies

No external dependencies. Requires TinyMCE 5.x.

## Version

- Version: `1.0.1`
- Created: `2026-06-30`
- Updated: `2026-07-01`
- License: MIT
- Author: Yurii Cherniievskyi
