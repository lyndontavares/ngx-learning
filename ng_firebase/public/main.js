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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fire.user | async as user; else showLogin\">\r\n  <h1>Hello {{ user.displayName }}!</h1>\r\n  <button (click)=\"logout()\">Logout</button>\r\n</div>\r\n<ng-template #showLogin>\r\n  <p>Please login.</p>\r\n  <button (click)=\"login()\">Login with Google</button>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n <ul>\r\n  <li *ngFor=\"let i of menu2 \">\r\n     {{i.email}}\r\n     <ng-container *ngFor=\"let p of i.cardapio\"> {{ p.nome }} <br>  </ng-container>\r\n  </li>\r\n</ul>\r\n\r\n"

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
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(db, fire) {
        var _this = this;
        this.db = db;
        this.fire = fire;
        db.list('menu')
            .valueChanges()
            .subscribe(function (data) {
            _this.menu2 = data;
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.login = function () {
        this.fire.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.fire.auth.signOut();
    };
    AppComponent.prototype.addItem = function (item) {
        this.iMenu.add(item);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());

/*
https://jsoneditoronline.org/

{
   "menu" : [
   { "email":"demo1@gmail.com",
   "password":"010203",
   "firstName":"demo",
   "lastName":"demo",
   "phone":"+55-45-9998200413",
   "estabelecimento":
     {
     "nome":"BigBurger lanches",
     "endereco":"Rua Osvaldo Goch,1190",
     "cidade":"Foz Iguaçu",
     "pais":"Brazil"
     },
   "horario":{
     "seg-sex":{"ini":9,"fim":22},
     "sab-dom":{"ini":9,"fim":22}
   } ,
   "mapa": {"lat": -32.364, "lng": 153.207},
   "cardapio" :
   [
     {"nome":"BigBurger","texto":"Super Hambuger de carne com quiejo e salada.","preco":20, "ativo":true, "fotos":["foto"]} ,
     {"nome":"Coca 500ml","texto":"coca-cola 500ml","preco":10,"ativo":true, "fotos":["foto"]}
   ]
   } ,
   { "email":"demo2@gmail.com",
   "password":"010203",
   "firstName":"demo",
   "lastName":"demo",
   "phone":"+55-45-9998200413",
   "estabelecimento":
     {
     "nome":"BigBurger lanches",
     "endereco":"Rua Osvaldo Goch,1190",
     "cidade":"Foz Iguaçu",
     "pais":"Brazil"
     },
   "horario":{
     "seg-sex":{"ini":9,"fim":22},
     "sab-dom":{"ini":9,"fim":22}
   } ,
   "mapa": {"lat": -32.364, "lng": 153.207},
   "cardapio" :
   [
     {"nome":"BigBurger","texto":"Super Hambuger de carne com quiejo e salada.","preco":20, "ativo":true, "fotos":["foto"]} ,
     {"nome":"Coca 500ml","texto":"coca-cola 500ml","preco":10,"ativo":true, "fotos":["foto"]}
   ]
   } ]
}
*/
//  this.fire.auth.signInWithEmailAndPassword('integraldominio@gmail.com', '010203')
//  .then(user => {
//    this.fire.authState.subscribe( _auth => {
//      if (_auth) {
//        console.log('>>>logou');
//      }
//  });
// });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _cadastro_pessoa_cadastro_pessoa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-pessoa/cadastro-pessoa.component */ "./src/app/cadastro-pessoa/cadastro-pessoa.component.ts");
/* harmony import */ var angularfire2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/index */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
                _cadastro_pessoa_cadastro_pessoa_component__WEBPACK_IMPORTED_MODULE_5__["CadastroPessoaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                angularfire2_index__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig)
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cadastro-pessoa/cadastro-pessoa.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cadastro-pessoa/cadastro-pessoa.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro-pessoa/cadastro-pessoa.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cadastro-pessoa/cadastro-pessoa.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cadastro-pessoa works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/cadastro-pessoa/cadastro-pessoa.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cadastro-pessoa/cadastro-pessoa.component.ts ***!
  \**************************************************************/
/*! exports provided: CadastroPessoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPessoaComponent", function() { return CadastroPessoaComponent; });
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

var CadastroPessoaComponent = /** @class */ (function () {
    function CadastroPessoaComponent() {
    }
    CadastroPessoaComponent.prototype.ngOnInit = function () {
    };
    CadastroPessoaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-pessoa',
            template: __webpack_require__(/*! ./cadastro-pessoa.component.html */ "./src/app/cadastro-pessoa/cadastro-pessoa.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-pessoa.component.css */ "./src/app/cadastro-pessoa/cadastro-pessoa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadastroPessoaComponent);
    return CadastroPessoaComponent;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBEswXIczagD7JnFmtCpmFP8BTH_Q5_VsI',
        authDomain: 'menufacil-00001.firebaseapp.com',
        databaseURL: 'https://menufacil-00001.firebaseio.com',
        projectId: 'menufacil-00001',
        storageBucket: 'menufacil-00001.appspot.com',
        messagingSenderId: '168806655361'
    }
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

module.exports = __webpack_require__(/*! C:\Users\LYNDON-PC\Documents\ng-estudos\ng_firebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map