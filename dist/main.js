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

/***/ "./src sync recursive \\w+\\.(vue)$":
/*!******************************!*\
  !*** ./src sync \w+\.(vue)$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./components/catalog/catalog.vue\": \"./src/components/catalog/catalog.vue\",\n\t\"./components/catalog/catalogCard.vue\": \"./src/components/catalog/catalogCard.vue\",\n\t\"./components/current/current.vue\": \"./src/components/current/current.vue\",\n\t\"./components/footer.vue\": \"./src/components/footer.vue\",\n\t\"./components/header.vue\": \"./src/components/header.vue\",\n\t\"./components/main/canvas.vue\": \"./src/components/main/canvas.vue\",\n\t\"./components/main/indexCard.vue\": \"./src/components/main/indexCard.vue\",\n\t\"./components/main/mainGreetings.vue\": \"./src/components/main/mainGreetings.vue\",\n\t\"./components/main/modalForm.vue\": \"./src/components/main/modalForm.vue\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\w+\\\\.(vue)$\";\n\n//# sourceURL=webpack:///./src_sync_\\w+\\.(vue)$?");

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\n\n//# sourceURL=webpack:///./src/assets/css/main.css?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import \\\"utils/libs\\\";\\n| @import \\\"utils/vars\\\";\\n| @import \\\"utils/mixins\\\";\");\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/components/catalog/catalog.vue":
/*!********************************************!*\
  !*** ./src/components/catalog/catalog.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <section class=\\\"container\\\">\\n|     <div class=\\\"row bg-white row d-flex justify-content-between p-3\\\">\");\n\n//# sourceURL=webpack:///./src/components/catalog/catalog.vue?");

/***/ }),

/***/ "./src/components/catalog/catalogCard.vue":
/*!************************************************!*\
  !*** ./src/components/catalog/catalogCard.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|     <div class=\\\"col-3 p-3\\\">\\n|       <div class=\\\"card shadow-sm\\\">\");\n\n//# sourceURL=webpack:///./src/components/catalog/catalogCard.vue?");

/***/ }),

/***/ "./src/components/current/current.vue":
/*!********************************************!*\
  !*** ./src/components/current/current.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <section id=\\\"app\\\" class=\\\"container w-100\\\">\\n|     <article class=\\\"row\\\">\");\n\n//# sourceURL=webpack:///./src/components/current/current.vue?");

/***/ }),

/***/ "./src/components/footer.vue":
/*!***********************************!*\
  !*** ./src/components/footer.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <footer class=\\\"page-footer stylish-color-dark pt-4\\\">\\n|     <!-- Footer Links -->\");\n\n//# sourceURL=webpack:///./src/components/footer.vue?");

/***/ }),

/***/ "./src/components/header.vue":
/*!***********************************!*\
  !*** ./src/components/header.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <header>\\n|     <div class=\\\"container\\\">\");\n\n//# sourceURL=webpack:///./src/components/header.vue?");

/***/ }),

/***/ "./src/components/main/canvas.vue":
/*!****************************************!*\
  !*** ./src/components/main/canvas.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <canvas class=\\\"section\\\">Pleas update or change your browser</canvas>\\n| </template>\");\n\n//# sourceURL=webpack:///./src/components/main/canvas.vue?");

/***/ }),

/***/ "./src/components/main/indexCard.vue":
/*!*******************************************!*\
  !*** ./src/components/main/indexCard.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <div class=\\\"card mb-4 text-left\\\">\\n|     <div class=\\\"card-body p-5\\\">\");\n\n//# sourceURL=webpack:///./src/components/main/indexCard.vue?");

/***/ }),

/***/ "./src/components/main/mainGreetings.vue":
/*!***********************************************!*\
  !*** ./src/components/main/mainGreetings.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <section class=\\\"container-fluid text-center\\\">\\n|     <div class=\\\"row justify-content-center\\\">\");\n\n//# sourceURL=webpack:///./src/components/main/mainGreetings.vue?");

/***/ }),

/***/ "./src/components/main/modalForm.vue":
/*!*******************************************!*\
  !*** ./src/components/main/modalForm.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <template>\\n|   <!--User block-->\\n|   <div>\");\n\n//# sourceURL=webpack:///./src/components/main/modalForm.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/main.css */ \"./src/assets/css/main.css\");\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'popper.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap/dist/css/bootstrap.min.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ */ \"./src/js/index.js\");\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js___WEBPACK_IMPORTED_MODULE_3__);\n// CSS\r\n\r\n\r\n// SCSS\r\n\r\n\r\n// Bootstrap JS\r\n\r\n\r\n\r\n\r\n//  Bootstrap CSS\r\n\r\n\r\n// JS\r\n\r\n\r\n// Vue.js\r\nwindow.Vue = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\r\nconst prefix = \"v-\";\r\nconst components = __webpack_require__(\"./src sync recursive \\\\w+\\\\.(vue)$\");\r\ncomponents.keys().forEach(filename => {\r\n  const config = components(filename);\r\n  const name = filename.split(\"/\").pop().replace(/\\.\\w+$/, \"\").replace(/([a-z])([A-Z])/g, \"$1-$2\").toLowerCase();\r\n  Vue.component(prefix + name, config.default || config);\r\n  console.log(filename, \"mapped by\", prefix + name);\r\n});\r\n\r\nconst app = new Vue({\r\n  el: '#app',\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });