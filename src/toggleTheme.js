import {doc} from 'prettier';

const toggleTheme = (() => {
	const checkbox = document.querySelector('#checkbox');
	const body = document.querySelector('body');
	const particles = document.querySelector('#particles-js');
	const sectionHeaders = document.querySelectorAll('.section-header');
	const dotsP = document.querySelectorAll('.dots');
	function toggle() {
		body.classList.toggle('light');
		particles.classList.toggle('light');
		sectionHeaders.forEach((sectionHeader) => {
			sectionHeader.classList.toggle('light');
		});
		dotsP.forEach((dot) => {
			dot.classList.toggle('light');
		});
	}

	checkbox.addEventListener('change', toggle);

	return {
		toggle,
	};
})();

export {toggleTheme};
