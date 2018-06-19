(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm5 lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    height: 160px;\n    overflow: hidden;\n    font-family: 'Lato', sans-serif;\n    font-size: 35px;\n    line-height: 40px;\n    color: #ecf0f1;\n  }\n  .content__container {\n    font-weight: 600;\n    overflow: hidden;\n    height: 40px;\n    padding: 0 40px;\n  }\n  .content__container:before {\n    content: '[';\n    left: 0;\n  }\n  .content__container:after {\n    content: ']';\n    position: absolute;\n    right: 0;\n  }\n  .content__container:after, .content__container:before {\n    position: absolute;\n    top: 0;\n    color: #16a085;\n    font-size: 42px;\n    line-height: 40px;\n    -webkit-animation-name: opacity;\n    -webkit-animation-duration: 2s;\n    -webkit-animation-iteration-count: infinite;\n    animation-name: opacity;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n  }\n  .content__container__text {\n    display: inline;\n    float: left;\n    margin: 0;\n  }\n  .content__container__list {\n    margin-top: 0;\n    padding-left: 110px;\n    text-align: left;\n    list-style: none;\n    -webkit-animation-name: change;\n    -webkit-animation-duration: 10s;\n    -webkit-animation-iteration-count: infinite;\n    animation-name: change;\n    animation-duration: 10s;\n    animation-iteration-count: infinite;\n  }\n  .content__container__list__item {\n    line-height: 40px;\n    margin: 0;\n  }\n  @-webkit-keyframes opacity {\n    0%, 100% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n  @-webkit-keyframes change {\n    0%, 12.66%, 100% {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n    16.66%, 29.32% {\n      -webkit-transform: translate3d(0, -25%, 0);\n              transform: translate3d(0, -25%, 0);\n    }\n    33.32%,45.98% {\n      -webkit-transform: translate3d(0, -50%, 0);\n              transform: translate3d(0, -50%, 0);\n    }\n    49.98%,62.64% {\n      -webkit-transform: translate3d(0, -75%, 0);\n              transform: translate3d(0, -75%, 0);\n    }\n    66.64%,79.3% {\n      -webkit-transform: translate3d(0, -50%, 0);\n              transform: translate3d(0, -50%, 0);\n    }\n    83.3%,95.96% {\n      -webkit-transform: translate3d(0, -25%, 0);\n              transform: translate3d(0, -25%, 0);\n    }\n  }\n  @keyframes opacity {\n    0%, 100% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n  @keyframes change {\n    0%, 12.66%, 100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n      }\n      16.66%, 29.32% {\n        -webkit-transform: translate3d(0, -25%, 0);\n                transform: translate3d(0, -25%, 0);\n      }\n      33.32%,45.98% {\n        -webkit-transform: translate3d(0, -50%, 0);\n                transform: translate3d(0, -50%, 0);\n      }\n      49.98%,62.64% {\n        -webkit-transform: translate3d(0, -75%, 0);\n                transform: translate3d(0, -75%, 0);\n      }\n      66.64%,79.3% {\n        -webkit-transform: translate3d(0, -50%, 0);\n                transform: translate3d(0, -50%, 0);\n      }\n      83.3%,95.96% {\n        -webkit-transform: translate3d(0, -25%, 0);\n                transform: translate3d(0, -25%, 0);\n      }\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"content\">\n  <div class=\"content__container\">\n    <p class=\"content__container__text\">\n      Hi I am\n    </p>\n\n    <ul class=\"content__container__list\">\n      <li class=\"content__container__list__item\" *ngFor=\"let contentItem of contentList\">\n        {{contentItem}}</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.contentList = [
            'Chiranjeev Gupta',
            'a Web Developer',
            'a FOSS Advocate',
            'a ML Enthusiast'
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cran-cg/projects/cran-cg.github.io/my-homepage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map