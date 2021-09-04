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
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  // add tooltip
  e.trigger.insertAdjacentHTML('beforeend',`<span class="tooltip">Copied!</span>`);
  
  // hide tooltip after 2 seconds
  const hideTooltip = tooltips => {
    document.querySelectorAll('.tooltip').forEach(tooltip => {
      tooltip.remove();
    })
  }
  //debugger // use when working on tooltip styles
  setTimeout(hideTooltip, 2000); 

  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.log(e);
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

