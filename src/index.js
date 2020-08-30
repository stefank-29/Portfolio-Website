import {shellAnimation} from './shellSessionAnimation';
import {scrollToDom} from './scrollToDom';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});

window.onload = shellAnimation.insertLetter();
