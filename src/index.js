import {shellAnimation} from './shellSessionAnimation';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});

window.onload = shellAnimation.insertLetter();
