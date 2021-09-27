"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_menu-tab_js"],{

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle.textContent = 'Menu';\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle);\n\nconst menu = [\n    {\n        name: 'Giraffe Lollipop', \n        category: 'candy',\n        price: '$2.75',\n    },\n    {\n        name: 'Animal Print Cupcake', \n        category: 'baked goods',\n        price: '$3.75',\n        notes: 'choice of Zebra, Leopard, Snakeskin',\n    },\n    {\n        name: 'Meerkat Cake Pop',\n        category: 'bakery',\n        price: '$4.50',\n    },\n    {\n        name: 'Mouse Turds',\n        category: 'candy',\n        price: '$5.00',\n        notes: 'chocolate covered cherries',\n    },\n    {\n        name: 'Water Buffalo Horn',\n        category: 'bakery',\n        price: '5.25',\n        notes: 'chocolate croissant',\n    },\n    {\n        name: 'Hippo Sundae',\n        category: 'ice cream',\n        price: '$14.75',\n        notes: 'chocolate ice cream, chocolate shell, chocolate horn (cone), lazing in the chocolate mud (whipped cream)',\n    },\n    {\n        name: 'Flamingo Ice',\n        category: 'ice cream',\n        price: '$3.50',\n        notes: 'watermelon cream ice pop',\n    },\n\n]\n\nconst menuList = document.createElement('ul');\nmenuList.textContent = menu;\nmenuList.id = 'menu-list';\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.intro.textContent = '';\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.intro.appendChild(menuList);\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-tab.js?");

/***/ })

}]);