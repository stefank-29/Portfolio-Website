import {shellAnimation} from './shellSessionAnimation';
import {scrollToDom} from './scrollToDom';
import {emailSender} from './emailSender';
import {formValidation} from './formValidation';
import {toggleTheme} from './toggleTheme';
import {toggleMenu} from './toggleMenu';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});

window.onload = shellAnimation.insertLetter();

//?content
//todo ucitavanje kontenta kako skrolujem(AOS biblioteka)

//?footer
//todo linkovi za linkedin i facebook
//todo strelica za top of page(^^)

//todo README
//todo okaciti na TOP

//*kasnije

//?responsive
//todo napraviti da bude responsive

//?hosting
//todo freedom
//todo github pages + custom domain
