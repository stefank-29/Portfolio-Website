import emailjs from 'emailjs-com';
import apiKeys from './apikeys';

const emailSender = (() => {
	function sendMail(e) {
		e.preventDefault();
		emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return {
		sendMail,
	};
})();
const form = document.querySelector('.form');
form.addEventListener('submit', emailSender.sendMail);
export {emailSender};
