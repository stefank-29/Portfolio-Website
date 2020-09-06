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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/particles.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/particles.js":
/*!**************************!*\
  !*** ./src/particles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("particlesJS('particles-js', {\n  particles: {\n    number: {\n      value: 100,\n      density: {\n        enable: true,\n        value_area: 800\n      }\n    },\n    color: {\n      value: ['#44bccc', '#161748', '#ff414e', '#ffb766']\n    },\n    shape: {\n      type: 'circle',\n      stroke: {\n        width: 0,\n        color: '#000000'\n      },\n      polygon: {\n        nb_sides: 5\n      },\n      image: {\n        src: 'img/github.svg',\n        width: 100,\n        height: 100\n      }\n    },\n    opacity: {\n      value: 0.8,\n      random: true,\n      anim: {\n        enable: true,\n        speed: 1,\n        opacity_min: 0,\n        sync: false\n      }\n    },\n    size: {\n      value: 4,\n      random: true,\n      anim: {\n        enable: false,\n        speed: 2,\n        size_min: 0.3,\n        sync: false\n      }\n    },\n    line_linked: {\n      enable: false,\n      distance: 150,\n      color: '#ffffff',\n      opacity: 0.4,\n      width: 1\n    },\n    move: {\n      enable: true,\n      speed: 1,\n      direction: 'none',\n      random: true,\n      straight: false,\n      out_mode: 'out',\n      bounce: false,\n      attract: {\n        enable: false,\n        rotateX: 600,\n        rotateY: 600\n      }\n    }\n  },\n  interactivity: {\n    detect_on: 'canvas',\n    events: {\n      onhover: {\n        enable: false,\n        mode: 'bubble'\n      },\n      onclick: {\n        enable: false,\n        mode: 'push'\n      },\n      resize: true\n    },\n    modes: {\n      grab: {\n        distance: 400,\n        line_linked: {\n          opacity: 1\n        }\n      },\n      bubble: {\n        distance: 250,\n        size: 0,\n        duration: 2,\n        opacity: 0,\n        speed: 3\n      },\n      repulse: {\n        distance: 400,\n        duration: 0.4\n      },\n      push: {\n        particles_nb: 4\n      },\n      remove: {\n        particles_nb: 2\n      }\n    }\n  },\n  retina_detect: true\n});\n\nvar count_particles, stats, _update;\n\nstats = new Stats();\nstats.setMode(0);\nstats.domElement.style.position = 'absolute';\nstats.domElement.style.left = '0px';\nstats.domElement.style.top = '0px';\ndocument.body.appendChild(stats.domElement);\ncount_particles = document.querySelector('.js-count-particles');\n\n_update = function update() {\n  stats.begin();\n  stats.end();\n\n  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {\n    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;\n  }\n\n  requestAnimationFrame(_update);\n};\n\nrequestAnimationFrame(_update);\n\n//# sourceURL=webpack:///./src/particles.js?");

/***/ })

/******/ });