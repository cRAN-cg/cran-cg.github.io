(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wedding-wedding-module"],{

/***/ "./src/app/wedding/ceremony/ceremony.component.css":
/*!*********************************************************!*\
  !*** ./src/app/wedding/ceremony/ceremony.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ceremony-content {\n  padding: 20px;\n}\n\n.ceremony-content h2 {\n  text-align: center;\n  font-size: 2.5em;\n  margin-bottom: 40px;\n  color: #333;\n}\n\n.event-details {\n  display: flex;\n  justify-content: space-around;\n  gap: 30px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n\n.detail-card {\n  flex: 1;\n  min-width: 200px;\n  text-align: center;\n  padding: 30px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.detail-card:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  box-shadow: 0 5px 20px rgba(0,0,0,0.15);\n}\n\n.detail-card i {\n  font-size: 2.5em;\n  color: #667eea;\n  margin-bottom: 15px;\n}\n\n.detail-card h3 {\n  font-size: 1.3em;\n  margin: 15px 0 10px 0;\n  color: #333;\n}\n\n.detail-card p {\n  color: #666;\n  font-size: 1.1em;\n}\n\n.description {\n  text-align: center;\n  font-size: 1.2em;\n  color: #555;\n  line-height: 1.8;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .event-details {\n    flex-direction: column;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wedding/ceremony/ceremony.component.html":
/*!**********************************************************!*\
  !*** ./src/app/wedding/ceremony/ceremony.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ceremony-content\">\n  <h2>Wedding Ceremony</h2>\n  <div class=\"event-details\">\n    <div class=\"detail-card\">\n      <i class=\"fa fa-calendar\"></i>\n      <h3>Date</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"detail-card\">\n      <i class=\"fa fa-clock\"></i>\n      <h3>Time</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"detail-card\">\n      <i class=\"fa fa-map-marker\"></i>\n      <h3>Location</h3>\n      <p>To be announced</p>\n    </div>\n  </div>\n  <div class=\"description\">\n    <p>Join us as we exchange our vows and begin our journey together.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wedding/ceremony/ceremony.component.ts":
/*!********************************************************!*\
  !*** ./src/app/wedding/ceremony/ceremony.component.ts ***!
  \********************************************************/
/*! exports provided: CeremonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeremonyComponent", function() { return CeremonyComponent; });
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

var CeremonyComponent = /** @class */ (function () {
    function CeremonyComponent() {
    }
    CeremonyComponent.prototype.ngOnInit = function () {
    };
    CeremonyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ceremony',
            template: __webpack_require__(/*! ./ceremony.component.html */ "./src/app/wedding/ceremony/ceremony.component.html"),
            styles: [__webpack_require__(/*! ./ceremony.component.css */ "./src/app/wedding/ceremony/ceremony.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CeremonyComponent);
    return CeremonyComponent;
}());



/***/ }),

/***/ "./src/app/wedding/gallery/gallery.component.css":
/*!*******************************************************!*\
  !*** ./src/app/wedding/gallery/gallery.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-content {\n  padding: 20px;\n}\n\n.gallery-content h2 {\n  text-align: center;\n  font-size: 2.5em;\n  margin-bottom: 40px;\n  color: #333;\n}\n\n.gallery-grid {\n  display: -ms-grid;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px 0;\n}\n\n.gallery-placeholder {\n  aspect-ratio: 4/3;\n  background: #f8f9fa;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2px dashed #ddd;\n  transition: all 0.3s ease;\n}\n\n.gallery-placeholder:hover {\n  background: #e9ecef;\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n\n.gallery-placeholder i {\n  font-size: 3em;\n  color: #ccc;\n  margin-bottom: 10px;\n}\n\n.gallery-placeholder p {\n  color: #999;\n  font-size: 1.1em;\n}\n\n@media (max-width: 768px) {\n  .gallery-grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wedding/gallery/gallery.component.html":
/*!********************************************************!*\
  !*** ./src/app/wedding/gallery/gallery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-content\">\n  <h2>Photo Gallery</h2>\n  <div class=\"gallery-grid\">\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n    <div class=\"gallery-placeholder\">\n      <i class=\"fa fa-image\"></i>\n      <p>Photos coming soon</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wedding/gallery/gallery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wedding/gallery/gallery.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/wedding/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/wedding/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/wedding/reception/reception.component.css":
/*!***********************************************************!*\
  !*** ./src/app/wedding/reception/reception.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reception-content {\n  padding: 20px;\n}\n\n.reception-content h2 {\n  text-align: center;\n  font-size: 2.5em;\n  margin-bottom: 40px;\n  color: #333;\n}\n\n.event-details {\n  display: flex;\n  justify-content: space-around;\n  gap: 30px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n\n.detail-card {\n  flex: 1;\n  min-width: 200px;\n  text-align: center;\n  padding: 30px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.detail-card:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  box-shadow: 0 5px 20px rgba(0,0,0,0.15);\n}\n\n.detail-card i {\n  font-size: 2.5em;\n  color: #764ba2;\n  margin-bottom: 15px;\n}\n\n.detail-card h3 {\n  font-size: 1.3em;\n  margin: 15px 0 10px 0;\n  color: #333;\n}\n\n.detail-card p {\n  color: #666;\n  font-size: 1.1em;\n}\n\n.description {\n  text-align: center;\n  font-size: 1.2em;\n  color: #555;\n  line-height: 1.8;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .event-details {\n    flex-direction: column;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wedding/reception/reception.component.html":
/*!************************************************************!*\
  !*** ./src/app/wedding/reception/reception.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reception-content\">\n  <h2>Wedding Reception</h2>\n  <div class=\"event-details\">\n    <div class=\"detail-card\">\n      <i class=\"fa fa-calendar\"></i>\n      <h3>Date</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"detail-card\">\n      <i class=\"fa fa-clock\"></i>\n      <h3>Time</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"detail-card\">\n      <i class=\"fa fa-map-marker\"></i>\n      <h3>Location</h3>\n      <p>To be announced</p>\n    </div>\n  </div>\n  <div class=\"description\">\n    <p>Celebrate with us at the reception with dinner, dancing, and fun!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wedding/reception/reception.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/wedding/reception/reception.component.ts ***!
  \**********************************************************/
/*! exports provided: ReceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionComponent", function() { return ReceptionComponent; });
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

var ReceptionComponent = /** @class */ (function () {
    function ReceptionComponent() {
    }
    ReceptionComponent.prototype.ngOnInit = function () {
    };
    ReceptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reception',
            template: __webpack_require__(/*! ./reception.component.html */ "./src/app/wedding/reception/reception.component.html"),
            styles: [__webpack_require__(/*! ./reception.component.css */ "./src/app/wedding/reception/reception.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReceptionComponent);
    return ReceptionComponent;
}());



/***/ }),

/***/ "./src/app/wedding/venue/venue.component.css":
/*!***************************************************!*\
  !*** ./src/app/wedding/venue/venue.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".venue-content {\n  padding: 20px;\n}\n\n.venue-content h2 {\n  text-align: center;\n  font-size: 2.5em;\n  margin-bottom: 40px;\n  color: #333;\n}\n\n.venue-info {\n  display: flex;\n  justify-content: space-around;\n  gap: 30px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n\n.info-section {\n  flex: 1;\n  min-width: 250px;\n  text-align: center;\n  padding: 30px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\n.info-section i {\n  font-size: 2.5em;\n  color: #667eea;\n  margin-bottom: 15px;\n}\n\n.info-section h3 {\n  font-size: 1.3em;\n  margin: 15px 0 10px 0;\n  color: #333;\n}\n\n.info-section p {\n  color: #666;\n  font-size: 1.1em;\n}\n\n.map-placeholder {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 100px;\n  text-align: center;\n  color: #999;\n  font-size: 1.2em;\n  border: 2px dashed #ddd;\n}\n\n@media (max-width: 768px) {\n  .venue-info {\n    flex-direction: column;\n  }\n\n  .map-placeholder {\n    padding: 50px 20px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wedding/venue/venue.component.html":
/*!****************************************************!*\
  !*** ./src/app/wedding/venue/venue.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"venue-content\">\n  <h2>Venue Details</h2>\n  <div class=\"venue-info\">\n    <div class=\"info-section\">\n      <i class=\"fa fa-building\"></i>\n      <h3>Venue Name</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"info-section\">\n      <i class=\"fa fa-map-marker-alt\"></i>\n      <h3>Address</h3>\n      <p>To be announced</p>\n    </div>\n    <div class=\"info-section\">\n      <i class=\"fa fa-phone\"></i>\n      <h3>Contact</h3>\n      <p>To be announced</p>\n    </div>\n  </div>\n  <div class=\"map-placeholder\">\n    <p>Map will be displayed here</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wedding/venue/venue.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wedding/venue/venue.component.ts ***!
  \**************************************************/
/*! exports provided: VenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueComponent", function() { return VenueComponent; });
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

var VenueComponent = /** @class */ (function () {
    function VenueComponent() {
    }
    VenueComponent.prototype.ngOnInit = function () {
    };
    VenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-venue',
            template: __webpack_require__(/*! ./venue.component.html */ "./src/app/wedding/venue/venue.component.html"),
            styles: [__webpack_require__(/*! ./venue.component.css */ "./src/app/wedding/venue/venue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VenueComponent);
    return VenueComponent;
}());



/***/ }),

/***/ "./src/app/wedding/wedding-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/wedding/wedding-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WeddingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingRoutingModule", function() { return WeddingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wedding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wedding.component */ "./src/app/wedding/wedding.component.ts");
/* harmony import */ var _ceremony_ceremony_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ceremony/ceremony.component */ "./src/app/wedding/ceremony/ceremony.component.ts");
/* harmony import */ var _reception_reception_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reception/reception.component */ "./src/app/wedding/reception/reception.component.ts");
/* harmony import */ var _venue_venue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./venue/venue.component */ "./src/app/wedding/venue/venue.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/wedding/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _wedding_component__WEBPACK_IMPORTED_MODULE_2__["WeddingComponent"],
        children: [
            {
                path: '',
                redirectTo: 'ceremony',
                pathMatch: 'full'
            },
            {
                path: 'ceremony',
                component: _ceremony_ceremony_component__WEBPACK_IMPORTED_MODULE_3__["CeremonyComponent"]
            },
            {
                path: 'reception',
                component: _reception_reception_component__WEBPACK_IMPORTED_MODULE_4__["ReceptionComponent"]
            },
            {
                path: 'venue',
                component: _venue_venue_component__WEBPACK_IMPORTED_MODULE_5__["VenueComponent"]
            },
            {
                path: 'gallery',
                component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]
            }
        ]
    }
];
var WeddingRoutingModule = /** @class */ (function () {
    function WeddingRoutingModule() {
    }
    WeddingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WeddingRoutingModule);
    return WeddingRoutingModule;
}());



/***/ }),

/***/ "./src/app/wedding/wedding.component.css":
/*!***********************************************!*\
  !*** ./src/app/wedding/wedding.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wedding-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.wedding-header {\n  text-align: center;\n  padding: 60px 20px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n  margin-bottom: 40px;\n}\n\n.wedding-header h1 {\n  font-size: 3em;\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  letter-spacing: 2px;\n}\n\n.wedding-header .subtitle {\n  font-size: 1.5em;\n  margin: 10px 0;\n  font-style: italic;\n}\n\n.wedding-header .date {\n  font-size: 1.2em;\n  margin-top: 20px;\n  opacity: 0.9;\n}\n\n.event-navigation {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n\n.event-navigation a {\n  padding: 12px 30px;\n  background-color: #f8f9fa;\n  color: #333;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n\n.event-navigation a:hover {\n  background-color: #667eea;\n  color: white;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\n\n.event-navigation a.active {\n  background-color: #764ba2;\n  color: white;\n}\n\n.event-content {\n  min-height: 400px;\n  padding: 20px;\n}\n\n@media (max-width: 768px) {\n  .wedding-header h1 {\n    font-size: 2em;\n  }\n\n  .event-navigation {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .event-navigation a {\n    width: 80%;\n    text-align: center;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wedding/wedding.component.html":
/*!************************************************!*\
  !*** ./src/app/wedding/wedding.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wedding-container\">\n  <header class=\"wedding-header\">\n    <h1>Sakshi weds Chiranjeev</h1>\n    <p class=\"subtitle\">Together Forever</p>\n    <p class=\"date\">Save the Date</p>\n  </header>\n\n  <nav class=\"event-navigation\">\n    <a routerLink=\"ceremony\" routerLinkActive=\"active\">Ceremony</a>\n    <a routerLink=\"reception\" routerLinkActive=\"active\">Reception</a>\n    <a routerLink=\"venue\" routerLinkActive=\"active\">Venue</a>\n    <a routerLink=\"gallery\" routerLinkActive=\"active\">Gallery</a>\n  </nav>\n\n  <div class=\"event-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wedding/wedding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wedding/wedding.component.ts ***!
  \**********************************************/
/*! exports provided: WeddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingComponent", function() { return WeddingComponent; });
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

var WeddingComponent = /** @class */ (function () {
    function WeddingComponent() {
    }
    WeddingComponent.prototype.ngOnInit = function () {
    };
    WeddingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wedding',
            template: __webpack_require__(/*! ./wedding.component.html */ "./src/app/wedding/wedding.component.html"),
            styles: [__webpack_require__(/*! ./wedding.component.css */ "./src/app/wedding/wedding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeddingComponent);
    return WeddingComponent;
}());



/***/ }),

/***/ "./src/app/wedding/wedding.module.ts":
/*!*******************************************!*\
  !*** ./src/app/wedding/wedding.module.ts ***!
  \*******************************************/
/*! exports provided: WeddingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingModule", function() { return WeddingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wedding_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wedding-routing.module */ "./src/app/wedding/wedding-routing.module.ts");
/* harmony import */ var _wedding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wedding.component */ "./src/app/wedding/wedding.component.ts");
/* harmony import */ var _ceremony_ceremony_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ceremony/ceremony.component */ "./src/app/wedding/ceremony/ceremony.component.ts");
/* harmony import */ var _reception_reception_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reception/reception.component */ "./src/app/wedding/reception/reception.component.ts");
/* harmony import */ var _venue_venue_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./venue/venue.component */ "./src/app/wedding/venue/venue.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/wedding/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WeddingModule = /** @class */ (function () {
    function WeddingModule() {
    }
    WeddingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _wedding_component__WEBPACK_IMPORTED_MODULE_3__["WeddingComponent"],
                _ceremony_ceremony_component__WEBPACK_IMPORTED_MODULE_4__["CeremonyComponent"],
                _reception_reception_component__WEBPACK_IMPORTED_MODULE_5__["ReceptionComponent"],
                _venue_venue_component__WEBPACK_IMPORTED_MODULE_6__["VenueComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _wedding_routing_module__WEBPACK_IMPORTED_MODULE_2__["WeddingRoutingModule"]
            ]
        })
    ], WeddingModule);
    return WeddingModule;
}());



/***/ })

}]);
//# sourceMappingURL=wedding-wedding-module.js.map