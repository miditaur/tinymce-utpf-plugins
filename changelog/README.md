# changelog

## Purpose

`changelog` is a standalone UTPF TinyMCE 5.x plugin that inserts a structured changelog template into the editor. It supports MAJOR, MINOR, and PATCH version increments, editable project presets, automatic filename generation from the project title, selectable file extensions, automatic extension-based subfolders, selectable changelog sections, generated download URLs, link title, and aria-label attributes.

## Button

- ID: `changelog`
- Text: `Changelog`
- Tooltip: `changelog`
- Icon: `template`
- Local button background color: `#ebfaeb`

## Menu

No menu items are registered.

## Commands

- `insertChangelog` — opens the changelog dialog.

## Dialog

The dialog includes fields for project title preset, custom title, file extension, auto subfolder, file name, version increment, version separator, version prefix, download base folder, and selectable changelog sections.

## Events

- `SkinLoaded`
- `PostRender`
- `init`

These events are used only to apply the local button background color after the TinyMCE UI is available.

## Dependencies

- TinyMCE 5.x
- No external JavaScript dependencies
- No external CSS dependencies

## Version

- Version: `1.9.14`
- Author: Yurii Cherniievskyi
- License: MIT
