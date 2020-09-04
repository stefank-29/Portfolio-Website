import {shellAnimation} from './shellSessionAnimation';
import {scrollToDom} from './scrollToDom';
import {emailSender} from './emailSender';
import {formValidation} from './formValidation';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});

window.onload = shellAnimation.insertLetter();
