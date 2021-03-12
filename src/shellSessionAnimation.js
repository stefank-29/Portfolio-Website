const shellAnimation = (() => {
	const shell = document.querySelector('#shell-text');
	const text = `I am skilled with web development languages and frameworks such as JavaScript, React.js, Vue.js, Node.js,
	Express.js, Keystone.js, GraphQL, CSS3, HTML5 etc. Also, have experience working with object-oriented programming languages such as
	Python, Java and C++, databases (MongoDB, MySQL), and industry tools such as (Webpack, Git, Github, ESLint).`;
	const textArray = text.split('');
	let timer;
	function insertLetter() {
		//console.log('a');
		if (textArray.length > 0) {
			if (textArray[0] === ' ') {
				shell.textContent += textArray.shift();
			}
			shell.textContent += textArray.shift();
		} else {
			clearTimeout(timer);
			return;
		}
		timer = setTimeout(insertLetter, 35);
	}
	return {
		insertLetter,
	};
})();
export {shellAnimation};
