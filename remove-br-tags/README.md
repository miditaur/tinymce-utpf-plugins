# Remove BR Tags

**Version:** 1.1.0  
**Author:** Yurii Cherniievskyi  
**License:** MIT

## Description

Removes all HTML `<br>` tags from the current TinyMCE editor content while preserving the remaining HTML structure. All changes are executed inside a single Undo transaction.

After processing, the plugin reports the number of removed `<br>` tags. If none are found, an informational message is displayed.

## Features

- Removes all `<br>` tags.
- Supports `<br>`, `<br/>`, `<br />` and `<br>` tags with attributes.
- Preserves all other HTML.
- Single Undo transaction.
- Reports the number of removed tags.

## Toolbar Button

- **Text:** BR
- **Icon:** remove
- **Tooltip:** Remove all <br> tags

## Command

`remove-br-tags`

## Events

None.

## Dependencies

- TinyMCE 5.x
- Universal TinyMCE Plugin Framework (UTPF)

## Files

```
remove-br-tags/
├── plugin.js
└── README.md
```

## Version History

### 1.1.0
- Added removal counter.
- Added TinyMCE command.
- Improved `<br>` detection.

### 1.0.0
- Initial release.
