webpackJsonp([2,6],{

/***/ 1072:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(468);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserSocketService = (function () {
    function UserSocketService(cookieService, userService, socketService) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.socketService = socketService;
        this.authStatusSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
        this.registerListeners();
    }
    /**
     * Register listeners
     */
    UserSocketService.prototype.registerListeners = function () {
        var self = this;
        this.socketService.on('registration_failed', function (attributes) {
            self.authStatusSubject.next({
                'error': 'Під час реєстрації сталася помилка'
            });
            console.log(attributes['error']);
        });
        this.socketService.on('registration_success', function (attributes) {
            self.cookieService.put('token', attributes['token']);
            var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](), attributes['user']);
            self.userService.getUser().next(user);
            self.authStatusSubject.next({
                'success': 'Користувач успішно зареєстрований'
            });
        });
        this.socketService.on('login_failed', function (attributes) {
            self.authStatusSubject.next(attributes);
        });
        this.socketService.on('login_success', function (attributes) {
            self.cookieService.put('token', attributes['token']);
            var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](), attributes['user']);
            self.userService.getUser().next(user);
            self.authStatusSubject.next({
                'success': 'Користувач успішно авторизований'
            });
        });
        this.socketService.on('failed', function (attributes) {
            self.userService.getUser().next(null);
        });
        this.socketService.on('success', function (attributes) {
            var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](), attributes['user']);
            self.userService.getUser().next(user);
        });
    };
    /**
     * Login user
     * @param attributes
     * @returns {Subject<Object>}
     */
    UserSocketService.prototype.login = function (attributes) {
        this.socketService.emit("login", attributes);
        return this.authStatusSubject;
    };
    /**
     * Register new user
     * @param attributes
     * @returns {Subject<Object>}
     */
    UserSocketService.prototype.registration = function (attributes) {
        this.socketService.emit("registration", attributes);
        return this.authStatusSubject;
    };
    /**
     * Get current user
     * @returns {BehaviorSubject<User>}
     */
    UserSocketService.prototype.getCurrentUser = function () {
        this.socketService.emit("current_user");
        return this.userService.getUser();
    };
    UserSocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === 'function' && _c) || Object])
    ], UserSocketService);
    return UserSocketService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/user_socket.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(cookieService) {
        this.cookieService = cookieService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        console.log('in user');
    }
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.logout = function () {
        this.cookieService.remove('token');
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/user.service.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_server__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(cookieService) {
        this.cookieService = cookieService;
        this.namespace = '';
        this.token = '';
        this.protocol = __WEBPACK_IMPORTED_MODULE_1__config_server__["a" /* server */].protocol;
        this.hostname = __WEBPACK_IMPORTED_MODULE_1__config_server__["a" /* server */].hostname;
        this.port = __WEBPACK_IMPORTED_MODULE_1__config_server__["a" /* server */].port;
        if (cookieService.get('token')) {
            this.token = cookieService.get('token');
        }
        this.connect();
    }
    SocketService.prototype.connect = function () {
        var host = this.protocol + '//' + this.hostname + ':' + this.port;
        // if (this.namespace) {
        //   host += this.namespace;
        // }
        var parameters = {};
        if (this.token) {
            parameters = {
                query: {
                    token: this.token
                }
            };
        }
        this.socket = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__["connect"](host, parameters);
    };
    SocketService.prototype.on = function (name, callable) {
        this.socket.on(name, callable);
    };
    SocketService.prototype.emit = function (name, attributes) {
        if (attributes === void 0) { attributes = {}; }
        console.log(this.socket);
        this.socket.emit(name, attributes);
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object])
    ], SocketService);
    return SocketService;
    var _a;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/socket.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/user.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomService = (function () {
    function RoomService() {
        this.room = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.currentRoom = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    RoomService.prototype.getRoom = function () {
        return this.room;
    };
    RoomService.prototype.getCurrentRoom = function () {
        return this.currentRoom;
    };
    RoomService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], RoomService);
    return RoomService;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/room.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, userSocketService, router) {
        this.fb = fb;
        this.userSocketService = userSocketService;
        this.router = router;
        this.createForm();
        console.log(2);
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var self = this;
        this.userSocketService.login({
            'user': this.loginForm.value
        }).subscribe(function (attributes) {
            self.errorMessage = '';
            self.successMessage = '';
            if ('error' in attributes) {
                self.errorMessage = attributes['error'];
            }
            if ('success' in attributes) {
                self.successMessage = attributes['success'];
                setTimeout(function () {
                    self.router.navigate(['/']);
                }, 2000);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(779),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/login.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(fb, userSocketService) {
        this.fb = fb;
        this.userSocketService = userSocketService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */]();
        this.createForm();
    }
    RegistrationComponent.prototype.createForm = function () {
        this.registrationForm = this.fb.group({
            first_name: [this.user.first_name, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                ]],
            last_name: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            username: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ]]
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var self = this;
        if (!this.registrationForm.valid) {
            return false;
        }
        this.userSocketService.registration({
            'user': this.registrationForm.value
        }).subscribe(function (attributes) {
            self.errorMessage = '';
            self.successMessage = '';
            if ('error' in attributes) {
                self.errorMessage = attributes['error'];
            }
            if ('success' in attributes) {
                self.successMessage = attributes['success'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'registration-page',
            template: __webpack_require__(780),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */]) === 'function' && _b) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/registration.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(userSocketService) {
        this.userSocketService = userSocketService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.userSocketService
            .getCurrentUser()
            .subscribe(function (value) {
            console.log(value);
        }, function (error) {
            console.log(error);
        });
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'index-page',
            template: __webpack_require__(781)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__["a" /* UserSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__["a" /* UserSocketService */]) === 'function' && _a) || Object])
    ], IndexComponent);
    return IndexComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/index.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-layout',
            template: __webpack_require__(784)
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/chat.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-layout',
            template: __webpack_require__(785)
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/main.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		1076,
		1
	],
	"app/chat/chat.module": [
		1077,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 467;


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(592);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/main.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
    }
    return Room;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/room.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_room__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomSocketService = (function () {
    function RoomSocketService(socketService, roomService) {
        this.socketService = socketService;
        this.roomService = roomService;
        this.registerListeners();
    }
    RoomSocketService.prototype.registerListeners = function () {
        var self = this;
        this.socketService.on('successful_selected_room', function (attributes) {
            var room = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_room__["a" /* Room */](), attributes['room']);
            console.log(attributes);
            self.roomService.getRoom().next(room);
        });
        this.socketService.on('receive_messages', function (attributes) {
            var room = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_room__["a" /* Room */](), attributes['room']);
            var last_room = self.roomService.getCurrentRoom().getValue();
            if (room.id == last_room) {
                self.roomService.getRoom().next(room);
            }
        });
    };
    RoomSocketService.prototype.selectRoom = function (room_id) {
        this.socketService.emit('select_room', {
            id: room_id
        });
    };
    RoomSocketService.prototype.sendMessage = function (message) {
        this.socketService.emit('send_message_to_room', message);
    };
    RoomSocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */]) === 'function' && _b) || Object])
    ], RoomSocketService);
    return RoomSocketService;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/room_socket.service.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(778),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/app.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_navigation_navigation_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_footer_footer_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index_index_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_login_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_registration_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_layouts_main_main_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_layouts_chat_chat_component__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_11__auth_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__auth_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_layouts_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_layouts_chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["MaterializeModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__["CookieService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/app.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_login_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_registration_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layouts_chat_chat_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_layouts_main_main_component__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__shared_layouts_main_main_component__["a" /* MainComponent */], children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__auth_login_component__["a" /* LoginComponent */] },
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_2__auth_registration_component__["a" /* RegistrationComponent */] },
            { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
        ] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_3__shared_layouts_chat_chat_component__["a" /* ChatComponent */], loadChildren: 'app/chat/chat.module#ChatModule' }
];
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/app.routes.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-footer',
            template: __webpack_require__(782),
            styles: [
                'footer.component.scss'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/footer.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(userSocketService, userService) {
        this.userSocketService = userSocketService;
        this.userService = userService;
        this.isAuthorized = false;
        this.user = null;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var self = this;
        this.userSocketService
            .getCurrentUser()
            .subscribe(function (user) {
            if (!user) {
                self.isAuthorized = false;
                return false;
            }
            self.isAuthorized = true;
            self.user = user;
            console.log(user);
        }, function (error) {
            console.log(error);
        });
    };
    NavigationComponent.prototype.onLogout = function () {
        this.userService.logout();
        this.userService.getUser().next(null);
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-navigation',
            template: __webpack_require__(783),
            styles: [
                'navigation.component.scss'
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__["a" /* UserSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__["a" /* UserSocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/navigation.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_socket_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_room_socket_service__ = __webpack_require__(475);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_socket_service__["a" /* UserSocketService */],
                __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_4__services_room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_5__services_room_socket_service__["a" /* RoomSocketService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/shared.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return server; });
var server = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: '5000',
    namespaces: {
        auth: '/auth',
        chat: ''
    }
};
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/server.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/environment.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/var/www/cdu-webchat/frontend/src/polyfills.js.map

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(84)();
// imports


// module
exports.push([module.i, ".authorization-page button:hover {\n  background-color: #ff6d00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(84)();
// imports


// module
exports.push([module.i, ".r-page {\n  margin-top: 25px; }\n  .r-page button:hover {\n    background-color: #ff6d00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(84)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"authorization-page\">\n  <h1>Авторизація</h1>\n\n  <div class=\"row\">\n    <div class=\"error-message\" *ngIf=\"errorMessage !== ''\">\n      {{ errorMessage }}\n    </div>\n    <div class=\"success-message\" *ngIf=\"successMessage !== ''\">\n      {{ successMessage }}\n    </div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"col s12 row\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"email\" type=\"email\" formControlName=\"email\">\n          <label for=\"email\">Email</label>\n\n          <div *ngIf=\"!loginForm.controls.email.valid && loginForm.controls.email.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"loginForm.controls.email.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n\n            <p *ngIf=\"loginForm.controls.email.errors.pattern\">\n              Email має не вірний формат\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input id=\"password\" type=\"password\" formControlName=\"password\">\n          <label for=\"password\">Пароль</label>\n\n\n          <div *ngIf=\"!loginForm.controls.password.valid && loginForm.controls.password.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"loginForm.controls.password.errors.required\">\n            Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"!loginForm.valid\">Вхід</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"r-page\">\n  <h1>Форма реєстрації</h1>\n  <div *ngIf=\"successMessage\">\n    {{ successMessage }}\n  </div>\n  <div *ngIf=\"errorMessage\">\n    {{ errorMessage }}\n  </div>\n  <div class=\"row\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\" class=\"col s12 row\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"first_name\" formControlName=\"first_name\" type=\"text\" class=\"validate\">\n          <label for=\"first_name\">Ім’я</label>\n\n          <div *ngIf=\"!registrationForm.controls.first_name.valid && registrationForm.controls.first_name.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.first_name.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"last_name\" formControlName=\"last_name\">\n          <label for=\"last_name\">Прізвище</label>\n\n          <div *ngIf=\"!registrationForm.controls.last_name.valid && registrationForm.controls.last_name.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.last_name.errors.required\">\n              Це поле обов’язково до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"username\" formControlName=\"username\">\n          <label for=\"username\">Нікнейм:</label>\n\n          <div *ngIf=\"!registrationForm.controls.username.valid && registrationForm.controls.username.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.username.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"email\" formControlName=\"email\">\n          <label for=\"email\">Email</label>\n\n          <div *ngIf=\"!registrationForm.controls.email.valid && registrationForm.controls.email.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.email.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n\n            <p *ngIf=\"registrationForm.controls.email.errors.pattern\">\n              Email має не вірний формат\n            </p>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input id=\"password\" type=\"password\" formControlName=\"password\">\n          <label for=\"password\">Пароль</label>\n\n          <div *ngIf=\"!registrationForm.controls.password.valid && registrationForm.controls.password.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.password.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button type=\"submit\" [disabled]=\"!registrationForm.valid\" class=\"waves-effect waves-light btn\">Зареєструватись</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Головна сторінка</h1>\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer light-blue darken-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Footer Content</h5>\n        <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n      </div>\n      <!--<div class=\"col l4 offset-l2 s12\">-->\n      <!--<h5 class=\"white-text\">Links</h5>-->\n      <!--<ul>-->\n      <!--</ul>-->\n      <!--</div>-->\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      © 2017\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"light-blue darken-3\">\n    <div class=\"container nav-wrapper\">\n      <a routerLink=\"\" routerLinkActive=\"active\" class=\"brand-logo left\">Головна</a>\n      <ul id=\"nav-mobile-not-auth\" class=\"right hide-on-med-and-down\" *ngIf=\"!isAuthorized\">\n        <li>\n          <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">Авторизація</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/registration']\" routerLinkActive=\"active\">Реєстрація</a>\n        </li>\n      </ul>\n      <ul id=\"nav-mobile-auth\" class=\"right hide-on-med-and-down\" *ngIf=\"isAuthorized\">\n        <li>\n          <a>Профайл</a>\n        </li>\n        <li *ngIf=\"!user.last_selected_room\" >\n          <a [routerLink]=\"['/chat']\" routerLinkActive=\"active\">Чат</a>\n        </li>\n        <li *ngIf=\"user.last_selected_room\" >\n          <a [routerLink]=\"['/chat', user.last_selected_room]\" routerLinkActive=\"active\">Чат</a>\n        </li>\n        <li (click)=\"onLogout()\">\n          <a>Вихід</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<main-navigation></main-navigation>\n<main>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<main-footer></main-footer>\n"

/***/ })

},[1074]);
//# sourceMappingURL=main.bundle.js.map