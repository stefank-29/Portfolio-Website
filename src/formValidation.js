const formValidation = (() => {
	const name = document.querySelector('#input-name');
	const email = document.querySelector('#input-email');
	const message = document.querySelector('#input-message');

	function _setIconAndInputValid(icon, inputDiv) {
		inputDiv.classList.remove('invalid');
		inputDiv.classList.add('valid');
		if (icon.classList.contains('fa-times-circle')) {
			icon.classList.remove('far', 'fa-times-circle');
		}
		icon.classList.add('far', 'fa-check-circle');
		icon.style.color = 'rgb(48, 182, 48)';
	}
	function _setIconAndInputInvalid(icon, inputDiv) {
		inputDiv.classList.remove('valid');
		inputDiv.classList.add('invalid');
		if (icon.classList.contains('fa-check-circle')) {
			icon.classList.remove('far', 'fa-check-circle');
		}
		icon.classList.add('far', 'fa-times-circle');
		icon.style.color = 'rgb(206, 18, 18)';
	}

	function checkEmail() {
		const icon = email.parentNode.querySelector('i');
		const errMesage = email.parentNode.querySelector('.error');
		const emailDiv = email.parentNode;
		const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email.value === '') {
			errMesage.textContent = 'This field is required.';
			_setIconAndInputInvalid(icon, emailDiv);
			return;
		}
		if (reg.test(String(email.value).toLowerCase())) {
			_setIconAndInputValid(icon, emailDiv);
		} else {
			errMesage.textContent = 'Please enter a valid email address.';
			_setIconAndInputInvalid(icon, emailDiv);
		}
	}
	function checkName() {
		const icon = name.parentNode.querySelector('i');
		const errMesage = name.parentNode.querySelector('.error');
		const nameDiv = name.parentNode;
		if (name.value === '') {
			errMesage.textContent = 'This field is required.';
			_setIconAndInputInvalid(icon, nameDiv);
		} else {
			_setIconAndInputValid(icon, nameDiv);
		}
	}
	function checkMessage() {
		const icon = message.parentNode.querySelector('i');
		const errMesage = message.parentNode.querySelector('.error');
		const nameDiv = name.parentNode;
		if (message.value === '') {
			errMesage.textContent = 'This field is required.';
			_setIconAndInputInvalid(icon, nameDiv);
			return;
		}
	}
	function _checkAllInputs() {
		const form = document.querySelector('form');
		const inputDivs = Array.from(form.querySelectorAll('.inputDiv'));
		return inputDivs.slice(0, 5).every((input) => input.classList.contains('valid'));
	}

	function checkForm(e) {
		const form = document.querySelector('.form');
		e.preventDefault();
		checkName();
		checkEmail();
		checkMessage();
		if (_checkAllInputs()) {
			//todo pozvati emailSender
			form.reset();
		}
	}
	name.addEventListener('change', checkName);
	email.addEventListener('change', checkEmail);
	message.addEventListener('click', checkMessage);

	return {
		checkForm,
	};
})();

export {formValidation};
