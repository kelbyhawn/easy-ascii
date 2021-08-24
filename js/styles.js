// Disable hover style on cells that don't have a word-based ascii code
export const disableHover = () => {
	document.querySelectorAll('code').forEach(code => {
		if(code.textContent === '-'){
			code.classList.add('disabled')
		}
	});
}