const toggleMenu = (() => {
	const bars = document.querySelector('#bars');
	const menu = document.querySelector('.menu');
	function toggle() {
		menu.classList.toggle('hide');
	}

	bars.addEventListener('click', toggle);

	return {
		toggle,
	};
})();

export {toggleMenu};
