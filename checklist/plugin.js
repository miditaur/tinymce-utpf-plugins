/*******************************
 * TinyMCE Plugin: checklist
 * Author: Yurii Cherniievskyi
 * Version: 1.1.0
 * Description: Inserts and manages styled interactive checklist items with green check marks, light green completed rows, and red strikethrough lines.
 * Created: 2026-07-02
 * Updated: 2026-07-02
 * License: MIT
 *******************************/

(function() {
    const PLUGIN_ID = 'checklist';
    const BUTTON_BACKGROUND_COLOR = '#ebfaeb';
    const STYLE_ID = 'utpf-checklist-style';
    const BUTTON_SELECTOR = '[title="checklist"], [aria-label="checklist"]';

    function getChecklistCss() {
        return `
ul.utpf-checklist {
  list-style: none;
  margin: 0.75em 0;
  padding-left: 0;
}
ul.utpf-checklist li {
  position: relative;
  min-height: 1.6em;
  margin: 0.35em 0;
  padding: 0.15em 0.45em 0.15em 1.95em;
  border-radius: 0.35em;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.18s ease;
}
ul.utpf-checklist li::before {
  content: "";
  position: absolute;
  left: 0.35em;
  top: 50%;
  width: 1em;
  height: 1em;
  border: 1.5px solid #555;
  border-radius: 0.18em;
  background: #fff;
  box-sizing: border-box;
  transform: translateY(-50%);
}
ul.utpf-checklist li::after {
  content: "";
  position: absolute;
  left: 0.67em;
  top: 50%;
  width: 0.28em;
  height: 0.56em;
  border: solid #2e7d32;
  border-width: 0 0.14em 0.14em 0;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(-62%) rotate(45deg);
  transform-origin: center;
}
ul.utpf-checklist li[data-checked="true"] {
  background: #e8f5e9;
  text-decoration-line: line-through;
  text-decoration-color: #d32f2f;
  text-decoration-thickness: 2px;
}
ul.utpf-checklist li[data-checked="true"]::before {
  border-color: #2e7d32;
  background: #f6fff6;
}
ul.utpf-checklist li[data-checked="true"]::after {
  opacity: 1;
}`;
    }

    function injectEditorStyle(editor) {
        const doc = editor.getDoc();
        if (!doc || doc.getElementById(STYLE_ID)) {
            return;
        }
        const style = doc.createElement('style');
        style.id = STYLE_ID;
        style.textContent = getChecklistCss();
        doc.head.appendChild(style);
    }

    function applyButtonBackground() {
        document.querySelectorAll(BUTTON_SELECTOR).forEach(function(button) {
            button.style.backgroundColor = BUTTON_BACKGROUND_COLOR;
        });
    }

    function createChecklistHtml() {
        return '<ul class="utpf-checklist" data-utpf-plugin="checklist">' +
            '<li data-checked="false">Checklist item 1</li>' +
            '<li data-checked="false">Checklist item 2</li>' +
            '<li data-checked="false">Checklist item 3</li>' +
            '</ul>';
    }

    function isChecklistItem(target) {
        return target && target.nodeName === 'LI' && target.closest('ul.utpf-checklist');
    }

    tinymce.PluginManager.add(PLUGIN_ID, function(editor) {
        editor.on('init', function() {
            injectEditorStyle(editor);
            setTimeout(applyButtonBackground, 0);
            setTimeout(applyButtonBackground, 300);
        });

        editor.on('SetContent BeforeSetContent', function() {
            injectEditorStyle(editor);
        });

        editor.on('click', function(event) {
            const target = event.target;
            if (!isChecklistItem(target)) {
                return;
            }
            const checked = target.getAttribute('data-checked') === 'true';
            target.setAttribute('data-checked', checked ? 'false' : 'true');
            editor.undoManager.add();
        });

        editor.addCommand(PLUGIN_ID, function() {
            injectEditorStyle(editor);
            editor.insertContent(createChecklistHtml());
        });

        editor.ui.registry.addButton(PLUGIN_ID, {
            text: 'Checklist',
            title: PLUGIN_ID,
            tooltip: PLUGIN_ID,
            icon: 'checklist',
            onAction: function() {
                editor.execCommand(PLUGIN_ID);
            }
        });
    });
})();
