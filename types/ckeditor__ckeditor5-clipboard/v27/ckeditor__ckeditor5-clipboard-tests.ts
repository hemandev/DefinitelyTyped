import Clipboard from '@ckeditor/ckeditor5-clipboard';
import ClipboardObserver from '@ckeditor/ckeditor5-clipboard/src/clipboardobserver';
import normalizeClipboardData from '@ckeditor/ckeditor5-clipboard/src/utils/normalizeclipboarddata';
import plainTextToHTML from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';

class MyEditor extends Editor {}
const editor = new MyEditor();
const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div');

new Clipboard.Clipboard(editor);
Clipboard.Clipboard.requires.map(Plugin => new Plugin(editor).init());

new Clipboard.DragDrop(editor).init();
new Clipboard.DragDrop(editor).destroy();
Clipboard.DragDrop.requires.map(Plugin => new Plugin(editor).init());

Clipboard.PastePlainText.requires.map(Plugin => new Plugin(editor).init());
new Clipboard.PastePlainText(editor).init();

Clipboard.ClipboardPipeline.requires == null;
new Clipboard.ClipboardPipeline(editor).init();

plainTextToHTML(plainTextToHTML(''));

normalizeClipboardData(plainTextToHTML(''));

plainTextToHTML(viewToPlainText(viewElement));

new ClipboardObserver(new View(new StylesProcessor())).onDomEvent(new ClipboardEvent(''));
