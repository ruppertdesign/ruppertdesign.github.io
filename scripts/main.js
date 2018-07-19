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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n\n\tvar init = function() {\n\t\tif (!$('html.lt-ie9').length) {\n\t\t\tregisterScrolling();\n\t\t}\n\t\tregisterContactSubmit(!$('html.lt-ie10').length);\n\t\tregisterExternalLinks();\n\t\tregisterBurgerMenu();\n\t\tregisterCookieWarningButton();\n\t\tcheckCookie('acceptsCookies');\n\t\tfetchRatings();\n\t\tupdateYear();\t\t\n\t};\n\n\tvar registerScrolling = function() {\n\t\t$('.scroll-to').on('click', function(e) {\n\t\t\te.preventDefault();\n\t\t\tvar idx = e.target.href.indexOf('#');\n\t\t\tif (idx !== -1) {\n\t\t\t\tscrollTo(e.target.href.substring(idx), 1500);\n\t\t\t}\n\t\t});\n\t};\n\n\tvar registerContactSubmit = function(ajax) {\n\t\tvar form = $('#contactForm');\n\t\tform.attr('novalidate', 'novalidate');\n\t\tform.on('submit', function(e) {\n\t\t\tif (!validateContactForm(form)) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif (ajax) {\n\t\t\t\te.preventDefault();\n\t\t\t\tajaxPost(form);\n\t\t\t}\n\t\t});\n\t};\n\n\tvar validateContactForm = function(form) {\n\t\t$('#submitSuccess, #submitError').fadeOut(150);\n\t\tvar valid = true;\n\t\t$('input[type=text], input[type=email], input[type=tel], textarea', form).each(function() {\n\t\t\tvar field = $(this)[0];\n\t\t\tif (typeof field.willValidate !== 'undefined') {\n\t\t\t\tfield.checkValidity();\n\t\t\t} else {\n\t\t\t\tfield.validity = field.validity || {};\n\t\t\t\tfield.validity.valid = validate($(this));\n\t\t\t}\n\t\t\t// minlength won't validate empty strings\n\t\t\tvar enoughVal = !field['required'] || field.value.trim().length > 2;\n\t\t\tif (field.validity.valid && enoughVal) {\n\t\t\t\t$(this).removeClass('error').next('.error-msg').fadeOut(150);\n\t\t\t} else {\n\t\t\t\t$(this).addClass('error').next('.error-msg').removeAttr('hidden').fadeIn(150);\n\t\t\t\tvalid = false;\n\t\t\t}\n\t\t});\n\t\tif (!valid) {\n\t\t\tvar errors = $('.error-msg');\n\t\t\tfor (var i = 0; i < errors.length; i++) {\n\t\t\t\tif (errors[i].offsetParent !== null) {\n\t\t\t\t\terrors[i].scrollIntoView(false);\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn valid;\n\t};\n\n\tvar ajaxPost = function(form) {\n\t\t$.ajax({\n\t\t\turl: form.attr('action'),\n\t\t\ttype: 'POST',\n\t\t\tdata: form.serialize(),\n\t\t\theaders: { 'X-Requested-With': 'XMLHttpRequest' },\n\t\t\tsuccess: function(data) {\n\t\t\t\t$(form).fadeOut(150, function() {\n\t\t\t\t\t$('#submitSuccess').fadeIn(250).show(); // HACK: without show it will disapear after fadeIn if there was an error before\n\t\t\t\t\tscrollTo('#footer-head', 250);\n\t\t\t\t});\n\t\t\t},\n\t\t\terror: function(xhr, type) {\n\t\t\t\t$('#submitError').fadeIn(250).removeAttr('hidden');\n\t\t\t\tscrollTo('#footer-head', 250);\n\t\t\t}\n\t\t});\n\t};\n\n\tvar validate = function(field) {\n\t\tvar val = $.trim(field.val());\n\t\treturn (field.attr('required') ? val != '' : true)\n\t\t\t&& (field.attr('minlength') ? val.length >= field.attr('minlength') : true)\n\t\t\t&& (field.attr('maxlength') ? val.length <= field.attr('maxlength') : true)\n\t\t\t&& (field.attr('pattern') ? new RegExp('^(?:' + field.attr('pattern') + ')$').test(val) : true);\n\t};\n\n\tvar registerExternalLinks = function() {\n\t\tvar host = window.location.host;\n\t\t$('a').each(function() {\n\t\t\tvar href = $(this).attr('href');\n\t\t\tif (href.indexOf('http') === 0 && href.indexOf(host) === -1) {\n\t\t\t\t$(this).attr('target', '_blank');\n\t\t\t}\n\t\t});\n\t};\n\n\tvar scrollTo = function(selector, time) {\n\t\ttypeof smoothScroll != 'undefined'\n\t\t\t? smoothScroll.animateScroll(null, selector, { speed: time, easing: 'easeInOutQuad', offset: 60 })\n\t\t\t: $(selector)[0].scrollIntoView();\n\t};\n\n\tvar registerBurgerMenu = function() {\n\t\tvar btn = $('.menu-button');\n\t\tvar menu = btn.next('ul');\n\t\tbtn.add($('a[href$=\"#kontakt\"]', menu)).on('click', function(e) {\n\t\t\t// noop on accidental clicks after turning iPad\n\t\t\tif (btn.css('display') === 'none') {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\te.preventDefault();\n\t\t\tvar nav = btn.parent();\n\t\t\tmenu.animate({\n\t\t\t\ttranslateY: (-menu.offset().top + nav.height() + $('body').scrollTop()) + 'px'\n\t\t\t}, 500, 'ease-out');\n\t\t\tnav.toggleClass('opened');\n\t\t});\n\t};\n\n\tvar updateYear = function() {\n\t\t$('.js_year').text(new Date().getFullYear());\n\t};\n\n\tvar setCookie = function(cname, cvalue, exdays) {\n\t\tvar d = new Date();\n\t\td.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));\n\t\tvar expires = \"expires=\" + d.toUTCString();\n\t\tdocument.cookie = cname + \"=\" + cvalue + \";\" + expires + \";path=/\";\n\t}\n\n\tvar getCookie = function(cname) {\n\t\tvar name = cname + \"=\";\n\t\tvar decodedCookie = decodeURIComponent(document.cookie);\n\t\tvar ca = decodedCookie.split(';');\n\t\tfor (var i = 0; i < ca.length; i++) {\n\t\t\tvar c = ca[i];\n\t\t\twhile (c.charAt(0) == ' ') {\n\t\t\t\tc = c.substring(1);\n\t\t\t}\n\t\t\tif (c.indexOf(name) == 0) {\n\t\t\t\treturn c.substring(name.length, c.length);\n\t\t\t}\n\t\t}\n\t\treturn '';\n\t}\n\n\tvar checkCookie = function(cname) {\n\t\tvar cookie = getCookie(cname);\n\t\tif (cookie != 'true') {\n\t\t\t$('.cookie-warning').removeClass('hideme');\n\t\t}\n\t}\n\n\tvar registerCookieWarningButton = function() {\n\t\t$('#accept-cookies').on('click', function() {\n\t\t\tsetCookie('acceptsCookies', 'true', 90);\n\t\t\t$('.cookie-warning').fadeOut(150);\n\t\t});\n\t}\n\n\tvar fetchRatings = function() {\n\t\t$.getJSON('https://vmothkzl6e.execute-api.eu-central-1.amazonaws.com/prod/ruppertdesign-ratings', function(data) {\n\t\t\tconst list = $('<ul />').append(new Array(++data.rating).join('<li>⭐️</li>'));\n\t\t\tconst votes = $('<span/>').append('(' + data.votes + ') Bewertungen');\n\t\t\t$('.dawanda-rating a').html(list).append(votes);\n\t\t});\n\t};\n\n\t$(document).ready(init);\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });