import {doc} from 'prettier';

const shellAnimation = (() => {
	const shell = document.querySelector('#shell-text');
	const text = `I am skilled with web development languages such as JavaScript, CSS3 and HTML5.
	Currently I'm improving my knowledge of React framework. I have experience working with 
	object-oriented programming languages such as Java and C++,
	databases (SQL, MS SQL, LiveSQL), and industry tools such as (Webpack, Git, Github, ESLint).`;
	const textArray = text.split('');
	let timer;
	function insertLetter() {
		if (textArray.length > 0) {
			if (textArray[0] === ' ') {
				shell.textContent += textArray.shift();
			}
			shell.textContent += textArray.shift();
		} else {
			clearTimeout(timer);
		}
		timer = setTimeout(insertLetter, 25);
	}
	return {
		insertLetter,
	};
})();
export {shellAnimation};
