import {doc} from 'prettier';

const toggleTheme = (() => {
	const checkbox = document.querySelector('#checkbox');

	const body = document.querySelector('body');
	const particles = document.querySelector('#particles-js');
	const sectionHeaders = document.querySelectorAll('.section-header');
	const dotsP = document.querySelectorAll('.dots');
	const aboutP = document.querySelectorAll('.about-p');
	const logos = document.querySelectorAll('.logo');
	const projectsAbout = document.querySelector('#about-projects');
	const projectsHeaders = document.querySelectorAll('.project-desc .header');
	const projectsDesc = document.querySelectorAll('.project-desc .about');
	const contactAbout = document.querySelectorAll('#contact p.about');
	const labels = document.querySelectorAll('.form label');
	const errorMessages = document.querySelectorAll('.inputDiv .error');

	function toggle() {
		body.classList.toggle('light');
		particles.classList.toggle('light');
		sectionHeaders.forEach((sectionHeader) => {
			sectionHeader.classList.toggle('light');
		});
		dotsP.forEach((dot) => {
			dot.classList.toggle('light');
		});
		aboutP.forEach((about) => {
			about.classList.toggle('light');
		});
		logos.forEach((logo) => {
			logo.classList.toggle('light');
		});
		projectsAbout.classList.toggle('light');
		projectsHeaders.forEach((header) => {
			header.classList.toggle('light');
		});
		projectsDesc.forEach((desc) => {
			desc.classList.toggle('light');
		});

		contactAbout.forEach((contact) => {
			contact.classList.toggle('light');
		});
		labels.forEach((label) => {
			label.classList.toggle('light');
		});
		errorMessages.forEach((error) => {
			error.classList.toggle('light');
		});
	}

	checkbox.addEventListener('change', toggle);

	return {
		toggle,
	};
})();

export {toggleTheme};
