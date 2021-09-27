"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_home-tab_js"],{

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentDiv\": () => (/* binding */ contentDiv),\n/* harmony export */   \"subTitle\": () => (/* binding */ subTitle),\n/* harmony export */   \"intro\": () => (/* binding */ intro)\n/* harmony export */ });\n/* harmony import */ var _annabelle_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annabelle_logo.svg */ \"./src/annabelle_logo.svg\");\n\n\nlet contentDiv = document.getElementById('content');\nlet subTitle = document.createElement('h2');\nlet intro = document.createElement('div');\n\nlet header = document.createElement('div');\nheader.id = 'header';\ncontentDiv.appendChild(header);\n\nlet logo = new Image();\nlogo.src = _annabelle_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\nheader.appendChild(logo);\n\nconst tabNames = [ 'home', 'menu', 'contact' ];\nfor (let i = 0; i < tabNames.length; i++) {\n    let tab = document.createElement('button');\n    tab.id = tabNames[i];\n    tab.classList.add('tab-btn');\n    tab.textContent = tabNames[i];\n    header.appendChild(tab);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/elements.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle.textContent = 'Wild treats for all ages!';\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might discover at Annabelle\\'s. Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\\'s just like a trip to the savannah, only sweeter!';\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__.intro);\n\n//# sourceURL=webpack://restaurant-page/./src/home-tab.js?");

/***/ }),

/***/ "./src/annabelle_logo.svg":
/*!********************************!*\
  !*** ./src/annabelle_logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"889fd51d1cf42372cec9.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/annabelle_logo.svg?");

/***/ })

}]);