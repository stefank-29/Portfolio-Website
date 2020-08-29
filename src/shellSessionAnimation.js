import {doc} from 'prettier';

const shellAnimation = (() => {
	const shell = document.querySelector('#shell-text');
	const text = `I'm adept with a
    majority of web development frameworks such as Ruby on Rails and
    Django. I also know my way around front-end JS frameworks such as
    React and AngularJS. I have experience working with databases
    (MySQL, PostgreSQL, SQLite), and industry tools such as (Git, AWS,
    Slack, Travis-Cl, Heroku).`;
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
		timer = setTimeout(insertLetter, 31);
	}
	return {
		insertLetter,
	};
})();
export {shellAnimation};
