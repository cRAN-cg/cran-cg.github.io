(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./wedding/wedding.module": [
		"./src/app/wedding/wedding.module.ts",
		"wedding-wedding-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'wedding',
        loadChildren: './wedding/wedding.module#WeddingModule'
    },
    {
        path: '404',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .content {\n    display: flex;\n    font-family: 'Lato', sans-serif;\n    font-size: 35px;\n    line-height: 45px;\n    color: #ecf0f1;\n    flex-direction: column;\n  }\n  .content__wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 85%;\n  }\n  .content__container {\n    font-weight: 600;\n    overflow: hidden;\n    height: 45px;\n    padding: 0 40px;\n    display: flex;\n  }\n  .content__container::before {\n    content: '<';\n    left: 0;\n  }\n  .content__container::after {\n    content: ' />';\n    white-space: pre;\n  }\n  .content__container:after, .content__container:before {\n    color: #16a085;\n    font-size: 42px;\n    line-height: 45px;\n    -webkit-animation-name: opacity;\n            animation-name: opacity;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n  .content__container__text {\n\n  }\n  .content__container__list {\n    all: unset;\n    list-style: none;\n    text-align: left;\n    height: 180px;\n    margin-left: 8px;\n    -webkit-animation-name: change;\n            animation-name: change;\n    -webkit-animation-duration: 24s;\n            animation-duration: 24s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n  .content__container__list__item {\n    line-height: 45px;\n    margin: 0;\n  }\n  .social-links {\n    display: flex;\n    flex-direction: row;\n    margin-top: 15%;\n    justify-content: space-evenly\n  }\n  .footer {\n    position: absolute;\n    top: calc(60% + 160px);\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    font-family: 'Lato', sans-serif;\n  }\n  a:link {\n    color: black;\n}\n  a:hover {\n  color: white;\n}\n  a:visited {\n  color: black;\n}\n  a:visited:hover {\n  color: grey;\n}\n  @-webkit-keyframes opacity {\n\n    12.5%, 25%, 75%, 87.5%, 37.5%, 62.5%, 50% {\n      opacity: 0;\n    }\n}\n  @keyframes opacity {\n\n    12.5%, 25%, 75%, 87.5%, 37.5%, 62.5%, 50% {\n      opacity: 0;\n    }\n}\n  @-webkit-keyframes change {\n\n    12.5%, 87.5% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0)\n    }\n    25%, 75% {\n      -webkit-transform: translateY(-25%);\n              transform: translateY(-25%);\n    }\n    37.5%, 62.5% {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n    }\n    50% {\n      -webkit-transform: translateY(-75%);\n              transform: translateY(-75%);\n    }\n\n  }\n  @keyframes change {\n\n    12.5%, 87.5% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0)\n    }\n    25%, 75% {\n      -webkit-transform: translateY(-25%);\n              transform: translateY(-25%);\n    }\n    37.5%, 62.5% {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n    }\n    50% {\n      -webkit-transform: translateY(-75%);\n              transform: translateY(-75%);\n    }\n\n  }\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"content__wrapper\">\n  <div class=\"content\">\n    <div class=\"content__container\">\n      <span class=\"content__container__text\">\n        Hi I am\n      </span>\n\n      <ul class=\"content__container__list\">\n        <li class=\"content__container__list__item\" *ngFor=\"let contentItem of contentList\">\n          {{contentItem}}</li>\n        </ul>\n  </div>\n  <div class=\"social-links\">\n    <a href=\"mailto:guptachiranjeev.13@gmail.com\" title=\"guptachiranjeev.13@gmail.com\" target=\"_blank\">\n      <i class=\"fas fa-envelope\"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/in/chiranjeev-gupta/\" title=\"linkedin.com/in/chiranjeev-gupta\" target=\"_blank\">\n      <i class=\"fab fa-linkedin-in\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/cran.cg/\" title=\"facebook.com/cran.cg\" target=\"_blank\">\n      <i class=\"fab fa-facebook\"></i>\n    </a>\n    <a href=\"https://www.twitter.com/cran_cg/\" title=\"twitter.com/cran_cg\" target=\"_blank\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n    <a href=\"https://www.github.com/cran-cg/\" title=\"github.com/cran-cg\" target=\"_blank\">\n      <i class=\"fab fa-github\"></i>\n    </a>\n  </div>\n</div>\n<div class=\"footer\">\n    <p>Made with <i class=\"fas fa-heart red\"></i> + <i class=\"fab fa-angular\"></i> in India</p>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.contentList = ['Chiranjeev Gupta.', 'a Full Stack Developer.', 'an Explorer.', 'a Foodie.'];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: "\n    <div class=\"not-found-container\">\n      <h1>404</h1>\n      <h2>Page Not Found</h2>\n      <p>Oops! The page you are looking for doesn't exist.</p>\n      <button (click)=\"goHome()\">Go Back Home</button>\n    </div>\n  ",
            styles: ["\n    .not-found-container {\n      text-align: center;\n      padding: 50px 20px;\n      font-family: 'Lato', sans-serif;\n    }\n    h1 {\n      font-size: 72px;\n      color: #e74c3c;\n      margin: 0;\n    }\n    h2 {\n      color: #2c3e50;\n      margin: 20px 0;\n    }\n    button {\n      background-color: #3498db;\n      color: white;\n      border: none;\n      padding: 10px 20px;\n      border-radius: 4px;\n      cursor: pointer;\n      font-size: 16px;\n      transition: background-color 0.3s;\n    }\n    button:hover {\n      background-color: #2980b9;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
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

module.exports = __webpack_require__(/*! /home/user/cran-cg.github.io/my-homepage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map