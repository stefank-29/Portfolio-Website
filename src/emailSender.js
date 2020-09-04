import emailjs from 'emailjs-com';
import apiKeys from './apikeys';

const emailSender = (() => {
	function sendMail(form) {
		emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID).then(
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

export {emailSender};
