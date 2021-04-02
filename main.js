/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateHome() {\n\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const firstTitle = document.createElement('div');\n    firstTitle.classList.add('first-title');\n    firstTitle.textContent = 'BEST IN SZCZECIN';\n\n    const imgHome = document.createElement('img');\n    imgHome.src = 'imgmenu.jpeg';\n    imgHome.classList.add('first-img');\n\n    const bottomTitle = document.createElement('div');\n    bottomTitle.classList.add('bottom-title');\n    bottomTitle.textContent = '24H OPEN FOR YOU';\n\n    home.appendChild(firstTitle);\n    home.appendChild(imgHome);\n    home.appendChild(bottomTitle);\n\n    return home;\n}\n\nfunction loadHome() {\n    const content = document.getElementById('content');\n    content.appendChild(generateHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://szaszlykarnia-merkury/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://szaszlykarnia-merkury/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateMenuLink() {\n\n    const menu = document.createElement('p');\n    menu.classList.add('p-menu');\n    menu.textContent = 'MENU';\n    menu.addEventListener('click', (e) => {\n        alert('menu');\n    });\n\n    return menu;\n}\n\nfunction generateContactsLink() {\n    const contacts = document.createElement('p');\n    contacts.classList.add('p-contacts');\n    contacts.textContent = 'CONTACTS';\n    contacts.addEventListener('click', (e) => {\n        alert('contacts');\n    });\n\n    return contacts;\n}\n\nfunction generateLogo() {\n    const logoImg = document.createElement('img');\n    logoImg.classList.add('logo');\n    logoImg.src = 'szaszlyk-logo.png';\n\n    return logoImg;\n}\n\nfunction generateFooterContent() {\n    const footer = document.getElementById('footer');\n\n    const notOfficial = document.createElement('p');\n    notOfficial.classList.add('not-official');\n    notOfficial.textContent = 'This website is not official!';\n\n    const doneBy = document.createElement('p');\n    doneBy.classList.add('done-by');\n    doneBy.textContent = ' tiagomcsousa ';\n\n    const githubIcon = document.createElement('i');\n    githubIcon.classList.add('fab');\n    githubIcon.classList.add('fa-github');\n\n    footer.appendChild(notOfficial);\n\n    doneBy.appendChild(githubIcon);\n    footer.appendChild(doneBy);\n}\n\nfunction initalizePage() {\n    const header = document.getElementById('header');\n\n\n    header.appendChild(generateMenuLink());\n    header.appendChild(generateLogo());\n    header.appendChild(generateContactsLink());\n\n    generateFooterContent();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initalizePage);\n\n//# sourceURL=webpack://szaszlykarnia-merkury/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;