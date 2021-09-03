import {disableHover, addAttributes} from './helpers.js';
import {getCopyright} from './copyright.js';

disableHover();
addAttributes();
getCopyright();

// Click to copy code from clipboard.js 
const items = document.querySelectorAll('li.copyable');
const clipboard = new ClipboardJS(items);

clipboard.on('success', function (e) {
  console.log(e);
});

clipboard.on('error', function (e) {
  console.log(e);
});
