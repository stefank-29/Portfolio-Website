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

//?content
//todo ucitavanje kontenta kako skrolujem(AOS biblioteka)

//todo README
//todo okaciti na TOP

//*kasnije

//?responsive
//todo napraviti da bude responsive

//?hosting
//todo freedom
//todo github pages + custom domain
