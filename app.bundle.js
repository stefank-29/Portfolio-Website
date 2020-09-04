/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;\nvar EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ \"./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js\");\nObject.defineProperty(exports, \"EmailJSResponseStatus\", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });\nvar UI_1 = __webpack_require__(/*! ./services/ui/UI */ \"./node_modules/emailjs-com/source/services/ui/UI.js\");\nvar _userID = null;\nvar _origin = 'https://api.emailjs.com';\nfunction sendPost(url, data, headers) {\n    if (headers === void 0) { headers = {}; }\n    return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', function (event) {\n            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', function (event) {\n            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));\n        });\n        xhr.open('POST', url, true);\n        for (var key in headers) {\n            xhr.setRequestHeader(key, headers[key]);\n        }\n        xhr.send(data);\n    });\n}\nfunction appendGoogleCaptcha(templatePrams) {\n    var element = document && document.getElementById('g-recaptcha-response');\n    if (element && element.value) {\n        templatePrams['g-recaptcha-response'] = element.value;\n    }\n    element = null;\n    return templatePrams;\n}\nfunction fixIdSelector(selector) {\n    if (selector[0] !== '#') {\n        return '#' + selector;\n    }\n    return selector;\n}\n/**\n * Initiation\n * @param {string} userID - set the EmailJS user ID\n * @param {string} origin - set the EmailJS origin\n */\nfunction init(userID, origin) {\n    _userID = userID;\n    _origin = origin || 'https://api.emailjs.com';\n}\nexports.init = init;\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {Object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nfunction send(serviceID, templateID, templatePrams, userID) {\n    var params = {\n        lib_version: '2.6.3',\n        user_id: userID || _userID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: appendGoogleCaptcha(templatePrams)\n    };\n    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json'\n    });\n}\nexports.send = send;\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nfunction sendForm(serviceID, templateID, form, userID) {\n    if (typeof form === 'string') {\n        form = document.querySelector(fixIdSelector(form));\n    }\n    if (!form || form.nodeName !== 'FORM') {\n        throw 'Expected the HTML form element or the style selector of form';\n    }\n    UI_1.UI.progressState(form);\n    var formData = new FormData(form);\n    formData.append('lib_version', '2.6.3');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', userID || _userID);\n    return sendPost(_origin + '/api/v1.0/email/send-form', formData)\n        .then(function (response) {\n        UI_1.UI.successState(form);\n        return response;\n    }, function (error) {\n        UI_1.UI.errorState(form);\n        return Promise.reject(error);\n    });\n}\nexports.sendForm = sendForm;\nexports.default = {\n    init: init,\n    send: send,\n    sendForm: sendForm\n};\n\n\n//# sourceURL=webpack:///./node_modules/emailjs-com/source/index.js?");

/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EmailJSResponseStatus = void 0;\nvar EmailJSResponseStatus = /** @class */ (function () {\n    function EmailJSResponseStatus(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n    return EmailJSResponseStatus;\n}());\nexports.EmailJSResponseStatus = EmailJSResponseStatus;\n\n\n//# sourceURL=webpack:///./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js?");

/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UI = void 0;\nvar UI = /** @class */ (function () {\n    function UI() {\n    }\n    UI.clearAll = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.remove(this.DONE);\n        form.classList.remove(this.ERROR);\n    };\n    UI.progressState = function (form) {\n        this.clearAll(form);\n        form.classList.add(this.PROGRESS);\n    };\n    UI.successState = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.add(this.DONE);\n    };\n    UI.errorState = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.add(this.ERROR);\n    };\n    UI.PROGRESS = 'emailjs-sending';\n    UI.DONE = 'emailjs-success';\n    UI.ERROR = 'emailjs-error';\n    return UI;\n}());\nexports.UI = UI;\n\n\n//# sourceURL=webpack:///./node_modules/emailjs-com/source/services/ui/UI.js?");

/***/ }),

/***/ "./src/apikeys.js":
/*!************************!*\
  !*** ./src/apikeys.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  USER_ID: \"user_oKHUW4jQqN0eGLkuzZyU8\",\n  TEMPLATE_ID: \"template-for-website\"\n});\n\n//# sourceURL=webpack:///./src/apikeys.js?");

/***/ }),

/***/ "./src/emailSender.js":
/*!****************************!*\
  !*** ./src/emailSender.js ***!
  \****************************/
/*! exports provided: emailSender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailSender\", function() { return emailSender; });\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apikeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apikeys */ \"./src/apikeys.js\");\n\n\n\nvar emailSender = function () {\n  function sendMail(e) {\n    e.preventDefault(); // emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then(\n    // \t(result) => {\n    // \t\tconsole.log(result.text);\n    // \t},\n    // \t(error) => {\n    // \t\tconsole.log(error.text);\n    // \t}\n    // );\n  }\n\n  return {\n    sendMail: sendMail\n  };\n}();\n\nvar form = document.querySelector('.form');\nform.addEventListener('submit', emailSender.sendMail);\n\n\n//# sourceURL=webpack:///./src/emailSender.js?");

/***/ }),

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/*! exports provided: formValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formValidation\", function() { return formValidation; });\nvar formValidation = function () {\n  var name = document.querySelector('#input-name');\n  var email = document.querySelector('#input-email');\n  var message = document.querySelector('#input-message');\n  var submitBtn = document.querySelector('#submit-btn');\n\n  function _setIconAndInputValid(icon, inputDiv) {\n    inputDiv.classList.remove('invalid');\n    inputDiv.classList.add('valid');\n\n    if (icon.classList.contains('fa-times-circle')) {\n      icon.classList.remove('far', 'fa-times-circle');\n    }\n\n    icon.classList.add('far', 'fa-check-circle');\n    icon.style.color = 'rgb(48, 182, 48)';\n  }\n\n  function _setIconAndInputInvalid(icon, inputDiv) {\n    inputDiv.classList.remove('valid');\n    inputDiv.classList.add('invalid');\n\n    if (icon.classList.contains('fa-check-circle')) {\n      icon.classList.remove('far', 'fa-check-circle');\n    }\n\n    icon.classList.add('far', 'fa-times-circle');\n    icon.style.color = 'rgb(206, 18, 18)';\n  }\n\n  function checkEmail() {\n    var icon = email.parentNode.querySelector('i');\n    var errMessage = email.parentNode.querySelector('.error');\n    var emailDiv = email.parentNode;\n    var reg = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n    if (email.value === '') {\n      errMessage.textContent = 'This field is required.';\n\n      _setIconAndInputInvalid(icon, emailDiv);\n\n      return;\n    }\n\n    if (reg.test(String(email.value).toLowerCase())) {\n      _setIconAndInputValid(icon, emailDiv);\n    } else {\n      errMessage.textContent = 'Please enter a valid email address.';\n\n      _setIconAndInputInvalid(icon, emailDiv);\n    }\n  }\n\n  function checkName() {\n    var icon = name.parentNode.querySelector('i');\n    var errMessage = name.parentNode.querySelector('.error');\n    var nameDiv = name.parentNode;\n\n    if (name.value === '') {\n      errMessage.textContent = 'This field is required.';\n\n      _setIconAndInputInvalid(icon, nameDiv);\n    } else {\n      _setIconAndInputValid(icon, nameDiv);\n    }\n  }\n\n  function checkMessage() {\n    var icon = message.parentNode.querySelector('i');\n    var errMessage = message.parentNode.querySelector('.error');\n    var messageDiv = message.parentNode;\n\n    if (message.value === '') {\n      errMessage.textContent = 'This field is required.';\n\n      _setIconAndInputInvalid(icon, messageDiv);\n    } else {\n      _setIconAndInputValid(icon, messageDiv);\n    }\n  }\n\n  function _checkAllInputs() {\n    var form = document.querySelector('form');\n    var inputDivs = Array.from(form.querySelectorAll('.inputDiv'));\n    return inputDivs.slice(0, 3).every(function (input) {\n      return input.classList.contains('valid');\n    });\n  }\n\n  function resetForm(form) {\n    form.reset();\n    var inputDivs = Array.from(form.querySelectorAll('.inputDiv'));\n    inputDivs.forEach(function (inputDiv) {\n      inputDiv.classList.remove('valid');\n    });\n  }\n\n  function checkForm(e) {\n    var form = document.querySelector('.form');\n    e.preventDefault();\n    checkName();\n    checkEmail();\n    checkMessage();\n\n    if (_checkAllInputs()) {\n      //todo pozvati emailSender\n      //todo resetovati box-shadow\n      resetForm(form); //form.reset();\n    }\n  }\n\n  name.addEventListener('change', checkName);\n  email.addEventListener('change', checkEmail);\n  message.addEventListener('change', checkMessage);\n  submitBtn.addEventListener('click', checkForm);\n  return {\n    checkForm: checkForm\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/formValidation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shellSessionAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shellSessionAnimation */ \"./src/shellSessionAnimation.js\");\n/* harmony import */ var _scrollToDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollToDom */ \"./src/scrollToDom.js\");\n/* harmony import */ var _emailSender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailSender */ \"./src/emailSender.js\");\n/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidation */ \"./src/formValidation.js\");\n\n\n\n\nparticlesJS.load('particles-js', './particles.json', function () {\n  console.log('callback - particles.js config loaded');\n});\nwindow.onload = _shellSessionAnimation__WEBPACK_IMPORTED_MODULE_0__[\"shellAnimation\"].insertLetter();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scrollToDom.js":
/*!****************************!*\
  !*** ./src/scrollToDom.js ***!
  \****************************/
/*! exports provided: scrollToDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToDom\", function() { return scrollToDom; });\nvar scrollToDom = function () {\n  function scroll() {\n    document.querySelector('#about').scrollIntoView({\n      behavior: 'smooth'\n    });\n  }\n\n  return {\n    scroll: scroll\n  };\n}();\n\nvar headerBtn = document.querySelector('#headerBtn');\nheaderBtn.addEventListener('click', scrollToDom.scroll);\nvar scrollArrows = document.querySelector('#scroll');\nscrollArrows.addEventListener('click', scrollToDom.scroll);\n\n\n//# sourceURL=webpack:///./src/scrollToDom.js?");

/***/ }),

/***/ "./src/shellSessionAnimation.js":
/*!**************************************!*\
  !*** ./src/shellSessionAnimation.js ***!
  \**************************************/
/*! exports provided: shellAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shellAnimation\", function() { return shellAnimation; });\nvar shellAnimation = function () {\n  var shell = document.querySelector('#shell-text');\n  var text = \"I am skilled with web development languages such as JavaScript, CSS3 and HTML5.\\n\\tCurrently I'm improving my knowledge of React framework. I have experience working with \\n\\tobject-oriented programming languages such as Java and C++,\\n\\tdatabases (SQL, MS SQL, LiveSQL), and industry tools such as (Webpack, Git, Github, ESLint).\";\n  var textArray = text.split('');\n  var timer;\n\n  function insertLetter() {\n    //console.log('a');\n    if (textArray.length > 0) {\n      if (textArray[0] === ' ') {\n        shell.textContent += textArray.shift();\n      }\n\n      shell.textContent += textArray.shift();\n    } else {\n      clearTimeout(timer);\n      return;\n    }\n\n    timer = setTimeout(insertLetter, 10);\n  }\n\n  return {\n    insertLetter: insertLetter\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/shellSessionAnimation.js?");

/***/ })

/******/ });