/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("function createAndAppendChild({ parent, className, tag = 'div' }) {\r\n    let childEl = document.createElement(tag);\r\n    childEl.className = className;\r\n    parent.appendChild(childEl);\r\n    return childEl;\r\n}\r\n\r\nlet mainPage = new MainPage();\r\n\r\nmainPage.navigation.createButton.addEventListener('click', () => {\r\n    mainPage.createNote(mainPage, 'New note', '');\r\n})\r\n\r\nsetInterval(mainPage.updateLS, 10, mainPage)\r\n\r\n\r\n\n\n//# sourceURL=webpack://one-more-todo-notes/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;