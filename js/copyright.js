export const getCopyright = () => {
	const year = new Date().getFullYear();
	return document.querySelector('footer').innerHTML = `<p>&copy;${year} easyASCII <span>&bull;</span> Made by <a href="https://kelbyhawn.com" target="_blank">Kelby Hawn</a></p>`; 
}