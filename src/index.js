import {shellAnimation} from './shellSessionAnimation';
import {scrollToDom} from './scrollToDom';
import {emailSender} from './emailSender';
import {formValidation} from './formValidation';
import {toggleTheme} from './toggleTheme';
import {toggleMenu} from './toggleMenu';
import {animateOnScroll} from './animateOnScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});
AOS.init();

window.onload = shellAnimation.insertLetter();

//?responsive
//todo napraviti da bude responsive
