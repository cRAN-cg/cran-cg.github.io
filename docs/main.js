(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .content {\n    display: flex;\n    font-family: 'Lato', sans-serif;\n    font-size: 35px;\n    line-height: 45px;\n    color: #ecf0f1;\n    flex-direction: column;\n  }\n  .content__wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 85%;\n  }\n  .content__container {\n    font-weight: 600;\n    overflow: hidden;\n    height: 45px;\n    padding: 0 40px;\n    display: flex;\n  }\n  .content__container::before {\n    content: '<';\n    left: 0;\n  }\n  .content__container::after {\n    content: ' />';\n    white-space: pre;\n  }\n  .content__container:after, .content__container:before {\n    color: #16a085;\n    font-size: 42px;\n    line-height: 45px;\n    -webkit-animation-name: opacity;\n            animation-name: opacity;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n  .content__container__text {\n   \n  }\n  .content__container__list {\n    all: unset;\n    list-style: none;\n    text-align: left;\n    height: 180px;\n    margin-left: 8px;\n    -webkit-animation-name: change;\n            animation-name: change;\n    -webkit-animation-duration: 24s;\n            animation-duration: 24s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n  .content__container__list__item {\n    line-height: 45px;\n    margin: 0;\n  }\n  .social-links {\n    display: flex;\n    flex-direction: row;\n    margin-top: 15%;\n    justify-content: space-evenly\n  }\n  .footer {\n    position: absolute;\n    top: calc(60% + 160px);\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    font-family: 'Lato', sans-serif;\n  }\n  a:link {\n    color: black;\n}\n  a:hover {\n  color: white;\n}\n  a:visited {\n  color: black;\n}\n  a:visited:hover {\n  color: grey;\n}\n  @-webkit-keyframes opacity {\n\n    12.5%, 25%, 75%, 87.5%, 37.5%, 62.5%, 50% {\n      opacity: 0;\n    }\n}\n  @keyframes opacity {\n\n    12.5%, 25%, 75%, 87.5%, 37.5%, 62.5%, 50% {\n      opacity: 0;\n    }\n}\n  @-webkit-keyframes change {\n\n    12.5%, 87.5% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0)\n    }\n    25%, 75% {\n      -webkit-transform: translateY(-25%);\n              transform: translateY(-25%);\n    }\n    37.5%, 62.5% {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n    }\n    50% {\n      -webkit-transform: translateY(-75%);\n              transform: translateY(-75%);\n    }\n\n  }\n  @keyframes change {\n\n    12.5%, 87.5% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0)\n    }\n    25%, 75% {\n      -webkit-transform: translateY(-25%);\n              transform: translateY(-25%);\n    }\n    37.5%, 62.5% {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n    }\n    50% {\n      -webkit-transform: translateY(-75%);\n              transform: translateY(-75%);\n    }\n\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"content__wrapper\">\n  <div class=\"content\">\n    <div class=\"content__container\">\n      <span class=\"content__container__text\">\n        Hi I am\n      </span>\n\n      <ul class=\"content__container__list\">\n        <li class=\"content__container__list__item\" *ngFor=\"let contentItem of contentList\">\n          {{contentItem}}</li>\n        </ul>\n  </div>\n  <div class=\"social-links\">\n    <a href=\"mailto:guptachiranjeev.13@gmail.com\" title=\"guptachiranjeev.13@gmail.com\" target=\"_blank\">\n      <i class=\"fas fa-envelope\"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/in/chiranjeev-gupta/\" title=\"linkedin.com/in/chiranjeev-gupta\" target=\"_blank\">\n      <i class=\"fab fa-linkedin-in\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/cran.cg/\" title=\"facebook.com/cran.cg\" target=\"_blank\">\n      <i class=\"fab fa-facebook\"></i>\n    </a>\n    <a href=\"https://www.twitter.com/cran_cg/\" title=\"twitter.com/cran_cg\" target=\"_blank\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n    <a href=\"https://www.github.com/cran-cg/\" title=\"github.com/cran-cg\" target=\"_blank\">\n      <i class=\"fab fa-github\"></i>\n    </a>\n  </div>\n</div>\n<div class=\"footer\">\n    <p >Made with <i class=\"fas fa-heart red\"></i> + <i class=\"fab fa-angular\"></i> in India</p>\n</div>\n</div>"

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

module.exports = __webpack_require__(/*! /Users/chiranjeevgupta/Desktop/projects/blog/cran-cg.github.io/my-homepage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map