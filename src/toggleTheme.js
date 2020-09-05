import {doc} from 'prettier';

const toggleTheme = (() => {
	const checkbox = document.querySelector('#checkbox');
	const body = document.querySelector('body');
	const particles = document.querySelector('#particles-js');
	function toggle() {
		body.classList.toggle('light');
		particles.classList.toggle('light');
	}

	checkbox.addEventListener('change', toggle);

	return {
		toggle,
	};
})();

export {toggleTheme};
