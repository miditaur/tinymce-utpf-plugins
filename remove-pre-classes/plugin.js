/*******************************
 * TinyMCE Plugin: remove-pre-classes
 * Author: Yurii Cherniievskyi
 * Version: 1.0.1
 * Description: Removes class attributes from all PRE elements.
 * Created: 2026-06-30
 * Updated: 2026-07-01
 * License: MIT
 *******************************/

(function () {
    'use strict';

    const PLUGIN_ID = 'remove-pre-classes';
    const COMMAND_ID = 'remove-pre-classes';
    const BUTTON_BACKGROUND_COLOR = '#ebfaeb';

    tinymce.PluginManager.add(PLUGIN_ID, function (editor) {
        function applyButtonBackgroundColor() {
            window.setTimeout(function () {
                var selectors = [
                    'button[title="' + PLUGIN_ID + '"]',
                    'button[aria-label="' + PLUGIN_ID + '"]'
                ];
                var buttons = document.querySelectorAll(selectors.join(','));

                buttons.forEach(function (button) {
                    button.style.backgroundColor = BUTTON_BACKGROUND_COLOR;
                });
            }, 0);
        }

        function removePreClasses() {
            var count = 0;

            editor.undoManager.transact(function () {
                var body = editor.getBody();

                if (!body) {
                    return;
                }

                var preElements = body.querySelectorAll('pre');

                preElements.forEach(function (pre) {
                    if (pre.hasAttribute('class')) {
                        pre.removeAttribute('class');
                        count++;
                    }
                });
            });

            return count;
        }

        editor.addCommand(COMMAND_ID, function () {
            var count = removePreClasses();

            if (count > 0) {
                editor.windowManager.alert('Success!\n\nRemoved class attributes from ' + count + ' PRE element(s).');
            } else {
                editor.windowManager.alert('No PRE elements with class attributes were found.');
            }
        });

        editor.ui.registry.addButton(PLUGIN_ID, {
            icon: 'cancel',
            text: 'remove pre classes',
            tooltip: PLUGIN_ID,
            onSetup: function () {
                applyButtonBackgroundColor();
                return function () {};
            },
            onAction: function () {
                editor.execCommand(COMMAND_ID);
            }
        });

        editor.ui.registry.addMenuItem(PLUGIN_ID, {
            text: 'Remove Pre Classes',
            onAction: function () {
                editor.execCommand(COMMAND_ID);
            }
        });

        editor.on('init', applyButtonBackgroundColor);
    });
})();
