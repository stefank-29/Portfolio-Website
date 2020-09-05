import {shellAnimation} from './shellSessionAnimation';
import {scrollToDom} from './scrollToDom';
import {emailSender} from './emailSender';
import {formValidation} from './formValidation';

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});

window.onload = shellAnimation.insertLetter();

//?menu
//todo menu sa desne strane(moze da se minimizira)

//?pozadina
//todo dark/lighth tema(toggle light class)
//todo podeliti particles na about i contact(vise tackica)

//?content
//todo ucitavanje kontenta kako skrolujem(AOS biblioteka)

//?footer
//todo visi
//todo linkovi za linkedin i facebook
//todo strelica za top of page(^^)

//*kasnije

//?responsive
//todo napraviti da bude responsive

//?hosting
//todo freedom
//todo github pages + custom domain
