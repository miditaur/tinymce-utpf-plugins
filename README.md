# tinymce-utpf-plugins
Modular TinyMCE 5.x plugins for the UTPF architecture.
A collection of modular plugins for TinyMCE 5.x, designed for the Universal TinyMCE Plugin Framework (UTPF).

Each plugin is independent and follows a consistent structure, making it easy to install, maintain, and reuse.

Features
Modular architecture
One plugin = one feature
Clean, readable source code
MIT licensed
Designed for TinyMCE 5.x
Compatible with the UTPF Loader
Independent plugins with minimal dependencies
Repository Structure
tinymce-utpf-plugins/

README.md
LICENSE
plugins.json
shared/

plugin-name/
    plugin.js
    README.md

Example:

remove-br-tags/
    plugin.js
    README.md

remove-empty-paragraphs/
    plugin.js
    README.md
Plugin Format

Each plugin consists of a directory containing:

plugin.js — plugin source code
README.md — plugin documentation

Optional files:

plugin.css
icon.svg
plugins.json

The repository contains a plugins.json file listing all available plugins.

Example:

[
    "remove-br-tags",
    "remove-empty-paragraphs",
    "remove-data-attrs"
]
Plugin Standards

Every plugin follows the UTPF rules:

one feature per plugin;
no duplicated code;
MIT license;
English plugin header;
clean JavaScript source;
no placeholder implementations;
no functionality loss during conversion.
Compatibility
TinyMCE 5.x
JavaScript (ES5/ES6 depending on the original implementation)
Publii Integration

To use these plugins with Publii, install the Publii UTPF Loader:

https://github.com/miditaur/publii-utpf-loader

License

This project is licensed under the MIT License.
