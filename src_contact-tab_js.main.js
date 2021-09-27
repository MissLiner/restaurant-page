"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_contact-tab_js"],{

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle.textContent = 'Contact Us';\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle);\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.intro.textContent = '';\n\nconst contacts = [\n    {\n        method: 'Ring us:',\n        info: '(800)SweetAB',\n    },\n    {\n        method: 'Write us:',\n        info: 'annabelle@sweetsafari.com',\n    },\n    {\n        method: 'Stop by:',\n        info: '7 East Stephenson Place,\\n New York, NY 81245'\n    }\n]\n\nconst contactInfo = document.createElement('div');\ncontactInfo.id = 'contact-info';\ncontacts.forEach(function(contact) {\n    const method = document.createElement('div');\n    const info = document.createElement('div');\n\n    method.textContent = contact.method;\n    info.textContent = contact.info;\n\n    contactInfo.appendChild(method);\n    contactInfo.appendChild(info);\n\n})\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(contactInfo);\n\n//# sourceURL=webpack://restaurant-page/./src/contact-tab.js?");

/***/ })

}]);