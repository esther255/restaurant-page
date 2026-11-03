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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --primary: #df7200;\r\n    --primary-light: #f5a342;\r\n    --background: #fff0df;\r\n    --text: #292523;\r\n    --muted: #716a65;\r\n    --white: #ffffff;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fff;\r\n    color: var(--text);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\nbutton {\r\n    font: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-page {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    min-height: 100svh;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background:\r\n        radial-gradient(circle at 85% 15%,\r\n            #ffdfbd 0,\r\n            transparent 35%),\r\n        linear-gradient(110deg,\r\n            #fff5e9,\r\n            #ffebd7);\r\n    border: 1px solid #f4c69e;\r\n    border-radius: 18px;\r\n    padding: 0 clamp(20px, 4.2vw, 65px);\r\n}\r\n\r\n\r\n.navbar {\r\n    min-height: 75px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--primary);\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n    line-height: 1;\r\n}\r\n\r\n.logo-icon {\r\n    font-size: 24px;\r\n}\r\n\r\n.logo small {\r\n    font-size: 10px;\r\n}\r\n\r\n.nav-links {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: clamp(20px, 3.5vw, 48px);\r\n}\r\n\r\n.nav-links a {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.nav-links a:hover {\r\n    color: var(--primary);\r\n}\r\n\r\n.cart-button {\r\n    position: relative;\r\n    width: 43px;\r\n    height: 43px;\r\n    border: 1px solid var(--primary);\r\n    background: transparent;\r\n    border-radius: 12px;\r\n    font-size: 19px;\r\n}\r\n\r\n.cart-count {\r\n    position: absolute;\r\n    top: -7px;\r\n    right: -5px;\r\n    width: 17px;\r\n    height: 17px;\r\n    background: var(--text);\r\n    color: white;\r\n    font-size: 9px;\r\n    border-radius: 50%;\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n\r\n.hero {\r\n    min-height: calc(100vh - 76px);\r\n    min-height: calc(100svh - 76px);\r\n    display: grid;\r\n    grid-template-columns: 1.15fr 1fr;\r\n    align-items: center;\r\n    gap: 35px;\r\n    position: relative;\r\n    padding-bottom: 55px;\r\n}\r\n\r\n.hero-content {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-content h1 {\r\n    font-size: clamp(30px, 4.1vw, 54px);\r\n    line-height: 1.22;\r\n    font-weight: 800;\r\n    letter-spacing: -1.8px;\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.hero-description {\r\n    max-width: 440px;\r\n    color: var(--muted);\r\n    font-size: clamp(12px, 1.1vw, 14px);\r\n    line-height: 1.8;\r\n    margin-bottom: 27px;\r\n}\r\n\r\n\r\n\r\n.hero-buttons {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 13px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.btn {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 45px;\r\n    padding: 0 22px;\r\n    border-radius: 12px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    transition: 0.3s ease;\r\n}\r\n\r\n.btn-primary {\r\n    background: var(--primary);\r\n    color: white;\r\n    border: 1px solid var(--primary);\r\n}\r\n\r\n.btn-primary:hover {\r\n    background: #b95d00;\r\n    transform: translateY(-3px);\r\n}\r\n\r\n.btn-outline {\r\n    border: 1px solid var(--primary);\r\n    color: var(--primary);\r\n    background: transparent;\r\n}\r\n\r\n.btn-outline:hover {\r\n    background: var(--primary);\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.social-contact {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    margin-top: clamp(55px, 12vh, 110px);\r\n}\r\n\r\n.social-icons {\r\n    display: flex;\r\n    gap: 8px;\r\n}\r\n\r\n.social-icons a {\r\n    width: 20px;\r\n    height: 20px;\r\n    display: grid;\r\n    place-items: center;\r\n    background: #f8c18e;\r\n    color: #a95000;\r\n    border-radius: 50%;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n}\r\n\r\n.social-icons a:hover {\r\n    background: var(--primary);\r\n    color: white;\r\n    transform: translateY(-3px);\r\n}\r\n\r\n.contact-divider {\r\n    height: 24px;\r\n    width: 1px;\r\n    background: var(--primary);\r\n}\r\n\r\n.phone-number {\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n\r\n.hero-visual {\r\n    min-height: 430px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.food-circle {\r\n    width: clamp(250px, 35vw, 390px);\r\n    aspect-ratio: 1;\r\n    position: relative;\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n.circle-border {\r\n    position: absolute;\r\n    inset: 0;\r\n    border: 1px solid var(--primary-light);\r\n    border-radius: 50%;\r\n    animation: rotate-circle 25s linear infinite;\r\n}\r\n\r\n@keyframes rotate-circle {\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.food-image {\r\n    width: 88%;\r\n    height: 88%;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n    border: 5px solid rgba(255, 255, 255, 0.8);\r\n    box-shadow: 0 8px 30px rgba(111, 67, 25, 0.12);\r\n    z-index: 1;\r\n}\r\n\r\n.circle-dot {\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: var(--primary);\r\n}\r\n\r\n.dot-top {\r\n    top: -5px;\r\n    left: 50%;\r\n}\r\n\r\n.dot-bottom {\r\n    bottom: -5px;\r\n    left: 50%;\r\n}\r\n\r\n.dot-left {\r\n    left: -5px;\r\n    top: 50%;\r\n}\r\n\r\n.dot-right {\r\n    right: -5px;\r\n    top: 50%;\r\n}\r\n\r\n\r\n.food-categories {\r\n    position: absolute;\r\n    right: -10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    z-index: 3;\r\n}\r\n\r\n.category {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 7px 12px;\r\n    border: 1px solid #e9a45c;\r\n    color: var(--primary);\r\n    background: rgba(255, 241, 224, 0.85);\r\n    border-radius: 30px;\r\n    font-size: 11px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.category span {\r\n    font-size: 14px;\r\n}\r\n\r\n.category:hover,\r\n.category.active {\r\n    background: #ffd5a9;\r\n    transform: translateX(-5px);\r\n}\r\n\r\n\r\n\r\n.delivery-card {\r\n    position: absolute;\r\n    left: -8%;\r\n    bottom: 8%;\r\n    z-index: 4;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px 14px;\r\n    min-width: 168px;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.delivery-icon {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    background: #65ae85;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.delivery-card h4 {\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n}\r\n\r\n.delivery-card p {\r\n    font-size: 9px;\r\n    color: var(--muted);\r\n    margin-top: 3px;\r\n}\r\n\r\n\r\n\r\n.decoration {\r\n    position: absolute;\r\n    color: #e8b88c;\r\n    opacity: 0.45;\r\n    font-size: 45px;\r\n    pointer-events: none;\r\n}\r\n\r\n.decoration-one {\r\n    top: -100px;\r\n    left: 20px;\r\n    transform: rotate(-30deg);\r\n}\r\n\r\n.decoration-two {\r\n    top: 120px;\r\n    right: 20px;\r\n    transform: rotate(40deg);\r\n}\r\n\r\n.decoration-three {\r\n    bottom: 28%;\r\n    left: 10%;\r\n    font-size: 55px;\r\n    transform: rotate(20deg);\r\n}\r\n\r\n.decoration-four {\r\n    bottom: 15%;\r\n    right: 10%;\r\n    font-size: 60px;\r\n}\r\n\r\n\r\n@media (max-width: 900px) {\r\n\r\n    .home-page {\r\n        padding: 0 30px;\r\n    }\r\n\r\n    .hero {\r\n        grid-template-columns: 1fr 1fr;\r\n        gap: 15px;\r\n    }\r\n\r\n    .hero-content h1 {\r\n        font-size: clamp(28px, 4.5vw, 42px);\r\n    }\r\n\r\n    .food-circle {\r\n        width: clamp(230px, 36vw, 320px);\r\n    }\r\n\r\n    .food-categories {\r\n        right: -15px;\r\n    }\r\n\r\n    .delivery-card {\r\n        left: -5%;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 650px) {\r\n\r\n    .home-page {\r\n        padding: 0 20px;\r\n        border-radius: 12px;\r\n    }\r\n\r\n    .navbar {\r\n        min-height: 70px;\r\n    }\r\n\r\n    .nav-links {\r\n        position: absolute;\r\n        top: 65px;\r\n        left: 0;\r\n        right: 0;\r\n        background: #fff8ef;\r\n        border: 1px solid #f1c79f;\r\n        border-radius: 12px;\r\n        padding: 15px;\r\n        justify-content: center;\r\n        flex-wrap: wrap;\r\n        gap: 15px 22px;\r\n    }\r\n\r\n    .nav-links a {\r\n        font-size: 11px;\r\n    }\r\n\r\n    .hero {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n        padding-top: 85px;\r\n        gap: 30px;\r\n    }\r\n\r\n    .hero-content h1 {\r\n        font-size: clamp(30px, 8vw, 42px);\r\n        letter-spacing: -1px;\r\n    }\r\n\r\n    .hero-description {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .social-contact {\r\n        margin-top: 35px;\r\n    }\r\n\r\n    .hero-visual {\r\n        min-height: 350px;\r\n        margin: 0 auto;\r\n        width: 100%;\r\n    }\r\n\r\n    /* .food-circle {\r\n        width: min(75vw, 310px);\r\n    } */\r\n\r\n    .food-categories {\r\n        right: 0;\r\n        gap: 8px;\r\n    }\r\n\r\n    .category {\r\n        font-size: 10px;\r\n        padding: 6px 9px;\r\n    }\r\n\r\n    .delivery-card {\r\n        left: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    .decoration {\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 380px) {\r\n\r\n    .home-page {\r\n        padding: 0 14px;\r\n    }\r\n\r\n    .nav-links {\r\n        gap: 12px;\r\n    }\r\n\r\n    .nav-links a {\r\n        font-size: 10px;\r\n    }\r\n\r\n    .hero-buttons {\r\n        gap: 8px;\r\n    }\r\n\r\n    .btn {\r\n        padding: 0 14px;\r\n        font-size: 11px;\r\n    }\r\n\r\n    .food-circle {\r\n        width: 230px;\r\n    }\r\n\r\n    .category {\r\n        padding: 5px 7px;\r\n        font-size: 9px;\r\n    }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n\nconst content = document.querySelector(\"#content\")\n\ncontent.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\r\n    const home = document.createElement(\"main\");\r\n\r\n    home.classList.add(\"home-page\");\r\n\r\n    home.innerHTML = `\r\n        \r\n        <header class=\"navbar\">\r\n\r\n            <a href=\"#\" class=\"logo\">\r\n                <span class=\"logo-icon\">🍴</span>\r\n                <span>\r\n                    Shekinah\r\n                    <small>Dining</small>\r\n                </span>\r\n            </a>\r\n\r\n            <nav class=\"nav-links\">\r\n                <a href=\"#about\">About Us</a>\r\n                <a href=\"#menu\">Menu</a>\r\n                <a href=\"#reviews\">Reviews</a>\r\n                <a href=\"#contacts\">Contacts</a>\r\n                <a href=\"#shop\">Shop</a>\r\n            </nav>\r\n\r\n            <button class=\"cart-button\" aria-label=\"Shopping cart\">\r\n                🛒\r\n                <span class=\"cart-count\">02</span>\r\n            </button>\r\n\r\n        </header>\r\n\r\n\r\n        \r\n        <section class=\"hero\">\r\n\r\n            \r\n            <div class=\"hero-content\">\r\n\r\n                <div class=\"decoration decoration-one\">♧</div>\r\n\r\n                <h1>\r\n                    Taste the Tradition,<br>\r\n                    Served Fresh Daily\r\n                </h1>\r\n\r\n                <p class=\"hero-description\">\r\n                    Where authentic taste meets modern dining —\r\n                    experience freshness, tradition, and a touch\r\n                    of luxury in every meal.\r\n                </p>\r\n\r\n                <div class=\"hero-buttons\">\r\n\r\n                    <a href=\"#menu\" class=\"btn btn-primary\">\r\n                        Order Now\r\n                    </a>\r\n\r\n                    <a href=\"#menu\" class=\"btn btn-outline\">\r\n                        Book A Menu\r\n                    </a>\r\n\r\n                </div>\r\n\r\n                <div class=\"decoration decoration-two\">♧</div>\r\n\r\n                \r\n                <div class=\"social-contact\" id=\"contacts\">\r\n\r\n                    <div class=\"social-icons\">\r\n                        <a href=\"#\" aria-label=\"Twitter\">♥</a>\r\n                        <a href=\"#\" aria-label=\"Facebook\">f</a>\r\n                        <a href=\"#\" aria-label=\"TikTok\">♪</a>\r\n                        <a href=\"#\" aria-label=\"Instagram\">◎</a>\r\n                    </div>\r\n\r\n                    <span class=\"contact-divider\"></span>\r\n\r\n                    <a href=\"tel:+250790079144\" class=\"phone-number\">\r\n                        +250790079144\r\n                    </a>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            \r\n            <div class=\"hero-visual\">\r\n\r\n                <div class=\"food-circle\">\r\n\r\n                    <div class=\"circle-border\">\r\n                        <span class=\"circle-dot dot-top\"></span>\r\n                        <span class=\"circle-dot dot-bottom\"></span>\r\n                        <span class=\"circle-dot dot-left\"></span>\r\n                        <span class=\"circle-dot dot-right\"></span>\r\n                    </div>\r\n\r\n                    <img\r\n                        class=\"food-image\"\r\n                        src=\"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&auto=format&fit=crop&q=85\"\r\n                        alt=\"Freshly prepared salmon meal\"\r\n                    >\r\n\r\n                </div>\r\n\r\n\r\n        \r\n                <div class=\"food-categories\">\r\n\r\n                    <a href=\"#menu\" class=\"category active\">\r\n                        <span>♧</span> Dishes\r\n                    </a>\r\n\r\n                    <a href=\"#menu\" class=\"category\">\r\n                        <span>🍰</span> Dessert\r\n                    </a>\r\n\r\n                    <a href=\"#menu\" class=\"category\">\r\n                        <span>🥤</span> Drinks\r\n                    </a>\r\n\r\n                    <a href=\"#menu\" class=\"category\">\r\n                        <span>♨</span> Platter\r\n                    </a>\r\n\r\n                </div>\r\n\r\n\r\n                \r\n                <div class=\"delivery-card\">\r\n\r\n                    <div class=\"delivery-icon\">\r\n                        📍\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4>Fast Delivery</h4>\r\n                        <p>Free of cost any delivery</p>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"decoration decoration-three\">♧</div>\r\n            <div class=\"decoration decoration-four\">◉</div>\r\n\r\n        </section>\r\n\r\n    `;\r\n\r\n    return home;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;