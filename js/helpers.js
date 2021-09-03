// Disable hover style on cells that don't have a word-based ascii code
export const disableHover = () => {
	document.querySelectorAll('code').forEach(code => {
		if(code.textContent === '-'){
			code.classList.add('disabled')
		}
	});
}

// Add attributes to li items with their respective text content
export const addAttributes = () => {
	document.querySelectorAll('main ul.copyable li').forEach(item => {
		item.classList.add('copyable'); // add class for easier selection
		item.setAttribute('data-clipboard-text',`${item.textContent}`);
	})
}