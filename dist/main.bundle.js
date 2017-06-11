webpackJsonp([2,6],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = (function () {
    function AdminService() {
        this.groups = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.users = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.events = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.group = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    AdminService.prototype.getGroup = function () {
        return this.group;
    };
    AdminService.prototype.getGroups = function () {
        return this.groups;
    };
    AdminService.prototype.getUser = function () {
        return this.user;
    };
    AdminService.prototype.getUsers = function () {
        return this.users;
    };
    AdminService.prototype.getEvents = function () {
        return this.events;
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AdminService);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/admin.service.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group() {
    }
    return Group;
}());

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/group.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
    }
    return Room;
}());

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/room.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(59);
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
        this.rooms = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    RoomService.prototype.getRoom = function () {
        return this.room;
    };
    RoomService.prototype.getCurrentRoom = function () {
        return this.currentRoom;
    };
    RoomService.prototype.getRooms = function () {
        return this.rooms;
    };
    return RoomService;
}());
RoomService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RoomService);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/room.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(44);
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
        this.loginAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loginErrorAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createForm();
        console.log(2);
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
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
                self.loginErrorAction.emit('toast');
            }
            if ('success' in attributes) {
                self.successMessage = attributes['success'];
                self.loginAction.emit('toast');
                setTimeout(function () {
                    self.router.navigate(['/']);
                }, 500);
            }
        }, function (error) {
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-page',
        template: __webpack_require__(586),
        styles: [__webpack_require__(548)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/login.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(77);
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
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                ]],
            last_name: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            username: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
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
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'registration-page',
        template: __webpack_require__(587),
        styles: [__webpack_require__(549)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_socket_service__["a" /* UserSocketService */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/registration.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_event__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEventComponent = (function () {
    function CreateEventComponent(eventSocketService, router) {
        this.eventSocketService = eventSocketService;
        this.router = router;
        this.event = new __WEBPACK_IMPORTED_MODULE_2__shared_models_event__["a" /* Event */]();
        this.createEventActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent.prototype.onCreateEvent = function (event) {
        var groupIds = [];
        for (var _i = 0, _a = event['groups']; _i < _a.length; _i++) {
            var group = _a[_i];
            groupIds.push(group['id']);
        }
        event['groups'] = groupIds;
        this.eventSocketService.createEvent(event);
        this.createEventActions.emit('toast');
        this.router.navigate(['/events']);
    };
    return CreateEventComponent;
}());
CreateEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-event',
        template: __webpack_require__(588),
        styles: [__webpack_require__(550)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__["a" /* EventSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__["a" /* EventSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CreateEventComponent);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/create-event.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_event__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_event_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEventComponent = (function () {
    function EditEventComponent(eventSocketService, eventService, route, router) {
        this.eventSocketService = eventSocketService;
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.event = new __WEBPACK_IMPORTED_MODULE_2__shared_models_event__["a" /* Event */]();
        this.editEventActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.eventSocketService.getEvent(+params['id']);
        });
        this.eventService.getEvent().subscribe(function (event) {
            if (!event) {
                return false;
            }
            _this.event = event;
        });
    };
    EditEventComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditEventComponent.prototype.onEditEvent = function (event) {
        var groupIds = [];
        for (var _i = 0, _a = event['groups']; _i < _a.length; _i++) {
            var group = _a[_i];
            groupIds.push(group['id']);
        }
        event['id'] = this.event.id;
        event['groups'] = groupIds;
        this.eventSocketService.editEvent(event);
        this.editEventActions.emit('toast');
        this.router.navigate(['/events']);
    };
    return EditEventComponent;
}());
EditEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-event',
        template: __webpack_require__(589),
        styles: [__webpack_require__(551)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__["a" /* EventSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_event_socket_service__["a" /* EventSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_event_service__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EditEventComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/edit-event.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_event_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_event_socket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsListComponent = (function () {
    function EventsListComponent(userService, eventService, eventSocketService) {
        this.userService = userService;
        this.eventService = eventService;
        this.eventSocketService = eventSocketService;
        this.eventSocketService.getEvents();
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (events) {
            if (!events) {
                return false;
            }
            console.log(events);
            _this.events = events;
            _this.filteredEvents = events;
        });
        this.userService.getUser().subscribe(function (user) {
            if (!user) {
                return false;
            }
            _this.user = user;
        });
    };
    EventsListComponent.prototype.onFilterConsultation = function (value) {
        if (!this.events) {
            return false;
        }
        this.filteredEvents = this.events.filter(function (consultation) {
            return consultation['name'].indexOf(value) !== -1;
        });
    };
    EventsListComponent.prototype.onDelete = function () {
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-list',
        template: __webpack_require__(591),
        styles: [__webpack_require__(553)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_event_service__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_event_socket_service__["a" /* EventSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_event_socket_service__["a" /* EventSocketService */]) === "function" && _c || Object])
], EventsListComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/events-list.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__ = __webpack_require__(47);
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
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'index-page',
        template: __webpack_require__(592)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_socket_service__["a" /* UserSocketService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/index.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(formBuilder, userService, userSocketService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.userSocketService = userSocketService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */]();
        this.profileActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            first_name: [],
            last_name: [],
            email: [],
            username: [],
            password: []
        });
        this.userService.getUser().subscribe(function (user) {
            if (!user) {
                return false;
            }
            _this.user = user;
        });
    };
    SettingsComponent.prototype.updateUserData = function () {
        var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](), this.form.value);
        this.userSocketService.updateUserProfile(user);
        this.profileActions.emit('toast');
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(593),
        styles: [__webpack_require__(554)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__["a" /* UserSocketService */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/settings.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-layout',
        template: __webpack_require__(596),
        styles: ["\n      .main-container {\n        min-height: 500px;\n      }\n  "]
    })
], AdminComponent);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/admin.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-layout',
        template: __webpack_require__(597)
    })
], ChatComponent);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/chat.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-layout',
        template: __webpack_require__(598),
        styles: [
            ".main-container { min-height: 500px }"
        ]
    })
], MainComponent);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/main.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.userService.checkAuthToken()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/auth-guard.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		882,
		1
	],
	"app/chat/chat.module": [
		883,
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
webpackAsyncContext.id = 357;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(372);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_event__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_group__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminSocketService = (function () {
    function AdminSocketService(socketService, adminService) {
        this.socketService = socketService;
        this.adminService = adminService;
        this.registerListeners();
    }
    AdminSocketService.prototype.registerListeners = function () {
        var _this = this;
        this.socketService.on('admin_receive_users', function (attributes) {
            if (!attributes['users']) {
                return false;
            }
            var users = [];
            for (var _i = 0, _a = attributes['users']; _i < _a.length; _i++) {
                var user = _a[_i];
                users.push(Object.assign({}, user, new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]()));
            }
            _this.adminService.getUsers().next(users);
        });
        this.socketService.on('admin_receive_groups', function (attributes) {
            if (!attributes['groups']) {
                return false;
            }
            console.log(attributes['groups']);
            var groups = [];
            for (var _i = 0, _a = attributes['groups']; _i < _a.length; _i++) {
                var group = _a[_i];
                groups.push(Object.assign({}, group, new __WEBPACK_IMPORTED_MODULE_5__models_group__["a" /* Group */]()));
            }
            console.log(groups);
            _this.adminService.getGroups().next(groups);
        });
        this.socketService.on('admin_receive_user', function (attributes) {
            if (!attributes['user']) {
                return false;
            }
            var user = Object.assign({}, attributes['user'], new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]());
            _this.adminService.getUser().next(user);
        });
        this.socketService.on('admin_receive_group', function (attributes) {
            if (!attributes['group']) {
                return false;
            }
            var group = Object.assign({}, attributes['group'], new __WEBPACK_IMPORTED_MODULE_5__models_group__["a" /* Group */]());
            _this.adminService.getGroup().next(group);
        });
        this.socketService.on('admin_receive_events', function (attributes) {
            console.log(attributes['events']);
            if (!attributes['events']) {
                return false;
            }
            var events = [];
            for (var _i = 0, _a = attributes['events']; _i < _a.length; _i++) {
                var event = _a[_i];
                events.push(Object.assign({}, event, new __WEBPACK_IMPORTED_MODULE_4__models_event__["a" /* Event */]()));
            }
            _this.adminService.getEvents().next(events);
        });
    };
    AdminSocketService.prototype.getUsers = function () {
        this.socketService.emit('admin_get_users');
    };
    AdminSocketService.prototype.createUser = function (user) {
        this.socketService.emit('admin_create_user', {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
            group: (user.group) ? user.group.id : null
        });
    };
    AdminSocketService.prototype.editUser = function (user) {
        this.socketService.emit('admin_edit_user', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
            group: (user.group) ? user.group.id : null
        });
    };
    AdminSocketService.prototype.getUser = function (id) {
        this.socketService.emit('admin_get_user', {
            id: id
        });
    };
    AdminSocketService.prototype.deleteUser = function (id) {
        this.socketService.emit('admin_delete_user', {
            id: id
        });
    };
    AdminSocketService.prototype.getGroups = function () {
        this.socketService.emit('admin_get_groups');
    };
    AdminSocketService.prototype.createGroup = function (group) {
        this.socketService.emit('admin_create_group', {
            name: group.name
        });
    };
    AdminSocketService.prototype.editGroup = function (group) {
        this.socketService.emit('admin_edit_group', {
            id: group.id,
            name: group.name
        });
    };
    AdminSocketService.prototype.getGroup = function (id) {
        this.socketService.emit('admin_get_group', {
            id: id
        });
    };
    AdminSocketService.prototype.deleteGroup = function (group) {
        this.socketService.emit('admin_delete_group', {
            id: group.id
        });
    };
    AdminSocketService.prototype.getEvents = function () {
        this.socketService.emit('admin_get_events');
    };
    return AdminSocketService;
}());
AdminSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], AdminSocketService);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/admin-socket.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_room__ = __webpack_require__(138);
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
            console.log(attributes['room']);
            var room = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_room__["a" /* Room */](), attributes['room']);
            self.roomService.getRoom().next(room);
        });
        this.socketService.on('receive_messages', function (attributes) {
            console.log(attributes['room']);
            var room = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_room__["a" /* Room */](), attributes['room']);
            console.log(room);
            var last_room = self.roomService.getCurrentRoom().getValue();
            if (room.id == last_room) {
                self.roomService.getRoom().next(room);
            }
        });
        this.socketService.on('receive_rooms', function (attributes) {
            var rooms = [];
            for (var _i = 0, _a = attributes['rooms']; _i < _a.length; _i++) {
                var room = _a[_i];
                rooms.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_room__["a" /* Room */](), room));
            }
            self.roomService.getRooms().next(rooms);
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
    /**
     * @deprecated
     */
    RoomSocketService.prototype.getRooms = function () {
        this.socketService.emit('get_rooms');
    };
    RoomSocketService.prototype.joinToRoom = function (room_id) {
        this.socketService.emit('join_to_room', {
            id: room_id
        });
    };
    RoomSocketService.prototype.createRoom = function (name) {
        this.socketService.emit('create_room', {
            room: {
                name: name
            }
        });
    };
    RoomSocketService.prototype.inviteGroups = function (room_id, groups) {
        this.socketService.emit('invite_groups', {
            room_id: room_id,
            groups: groups
        });
    };
    return RoomSocketService;
}());
RoomSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */]) === "function" && _b || Object])
], RoomSocketService);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/room_socket.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_room_socket_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_socket_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_event_socket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_event_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navigation_navigation_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_socket_service__["a" /* UserSocketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_5__services_room_socket_service__["a" /* RoomSocketService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_socket_service__["a" /* AdminSocketService */],
            __WEBPACK_IMPORTED_MODULE_9__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_8__services_event_socket_service__["a" /* EventSocketService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuardService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/shared.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(585),
        styles: [__webpack_require__(555)]
    })
], AppComponent);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/app.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_login_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_registration_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_layouts_main_main_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_layouts_chat_chat_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_layouts_admin_admin_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__events_events_list_events_list_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__events_create_event_create_event_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_edit_event_edit_event_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__events_event_form_event_form_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_pick_datetime__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_settings_settings_component__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_layouts_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_layouts_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_layouts_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_16__events_events_list_events_list_component__["a" /* EventsListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__events_create_event_create_event_component__["a" /* CreateEventComponent */],
            __WEBPACK_IMPORTED_MODULE_18__events_edit_event_edit_event_component__["a" /* EditEventComponent */],
            __WEBPACK_IMPORTED_MODULE_19__events_event_form_event_form_component__["a" /* EventFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__profile_settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["MaterializeModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_20_ng_pick_datetime__["DateTimePickerModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__["CookieService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_login_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_registration_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layouts_chat_chat_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_layouts_main_main_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_layouts_admin_admin_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_list_events_list_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_create_event_create_event_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_edit_event_edit_event_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_settings_settings_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__shared_layouts_main_main_component__["a" /* MainComponent */], children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },
            { path: 'profile', canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], children: [
                    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__profile_settings_settings_component__["a" /* SettingsComponent */] }
                ] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__auth_login_component__["a" /* LoginComponent */] },
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_2__auth_registration_component__["a" /* RegistrationComponent */] },
            { path: 'events', canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_6__events_events_list_events_list_component__["a" /* EventsListComponent */]
                    },
                    {
                        path: 'create',
                        component: __WEBPACK_IMPORTED_MODULE_7__events_create_event_create_event_component__["a" /* CreateEventComponent */]
                    },
                    {
                        path: ':id/edit',
                        component: __WEBPACK_IMPORTED_MODULE_8__events_edit_event_edit_event_component__["a" /* EditEventComponent */]
                    }
                ] }
        ] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__shared_layouts_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_3__shared_layouts_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], loadChildren: 'app/chat/chat.module#ChatModule' }
];
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/app.routes.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_event__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventFormComponent = (function () {
    function EventFormComponent(formBuilder, userService, userSocketService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.userSocketService = userSocketService;
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        userSocketService.getGroups();
    }
    EventFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: [],
            start_at: [],
            groups: []
        });
        this.userService.getGroups().subscribe(function (groups) {
            if (!groups) {
                return false;
            }
            _this.allGroups = groups;
        });
    };
    EventFormComponent.prototype.ngOnChanges = function (changes) {
        this.getSelectedGroups();
    };
    EventFormComponent.prototype.getSelectedGroups = function () {
        if (!this.allGroups || !this.event || !this.event.room.groups) {
            return false;
        }
        this.selectedGroups = [];
        for (var _i = 0, _a = this.allGroups; _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, _c = this.event.room.groups; _b < _c.length; _b++) {
                var eventGroup = _c[_b];
                if (group.id === eventGroup.id) {
                    this.selectedGroups.push(group);
                }
            }
        }
    };
    EventFormComponent.prototype.onSubmitForm = function () {
        this.onSubmit.emit(this.form.value);
    };
    return EventFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_event__["a" /* Event */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_event__["a" /* Event */]) === "function" && _a || Object)
], EventFormComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EventFormComponent.prototype, "onSubmit", void 0);
EventFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event-form',
        template: __webpack_require__(590),
        styles: [__webpack_require__(552)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_socket_service__["a" /* UserSocketService */]) === "function" && _d || Object])
], EventFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/event-form.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-footer',
        template: __webpack_require__(594),
        styles: [
            'footer.component.scss'
        ]
    })
], FooterComponent);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/footer.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(44);
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
    function NavigationComponent(userSocketService, userService, router) {
        this.userSocketService = userSocketService;
        this.userService = userService;
        this.router = router;
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
        window.location.reload();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-navigation',
        template: __webpack_require__(595),
        styles: [
            './navigation.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__["a" /* UserSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_socket_service__["a" /* UserSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/navigation.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return server; });
var server = {
    protocol: 'http:',
    hostname: '0.0.0.0',
    port: '5000',
    namespaces: {
        auth: '/auth',
        chat: ''
    }
};
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/server.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/environment.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/polyfills.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(80);
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
        this.users = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.joinedToRoom = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.groups = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.rooms = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.isLogged = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    UserService.prototype.checkAuthToken = function () {
        return this.cookieService.get('token');
    };
    /**
     * @deprecated
     * @returns {Subject<boolean>}
     */
    UserService.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.logout = function () {
        this.cookieService.remove('token');
    };
    UserService.prototype.joinToRoom = function (selectedRoom) {
        var self = this;
        this.user.subscribe(function (user) {
            if (!user) {
                return false;
            }
            var isJoinedToRoom = false;
            if (user.role === 'student') {
                isJoinedToRoom = user.group.rooms.filter(function (room) {
                    return room.id === selectedRoom.id;
                }).length > 0;
            }
            else {
                isJoinedToRoom = selectedRoom.teacher.id === user.id;
            }
            console.log(isJoinedToRoom);
            self.joinedToRoom.next(isJoinedToRoom);
        });
    };
    UserService.prototype.isJoinedToRoom = function () {
        return this.joinedToRoom;
    };
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getGroups = function () {
        return this.groups;
    };
    UserService.prototype.getUserRooms = function () {
        return this.rooms;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/user.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_group__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_room__ = __webpack_require__(138);
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
            self.userService.isLoggedIn().next(true);
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
            self.userService.isLoggedIn().next(true);
            self.authStatusSubject.next({
                'success': 'Користувач успішно авторизований'
            });
        });
        this.socketService.on('failed', function (attributes) {
            self.userService.getUser().next(null);
        });
        this.socketService.on('success', function (attributes) {
            console.log(attributes['user']);
            var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](), attributes['user']);
            self.userService.isLoggedIn().next(true);
            self.userService.getUser().next(user);
        });
        this.socketService.on('receive_users', function (attributes) {
            var users = [];
            for (var _i = 0, _a = attributes['users']; _i < _a.length; _i++) {
                var user = _a[_i];
                users.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](), user));
            }
            self.userService.getUsers().next(users);
        });
        this.socketService.on('receive_groups', function (attributes) {
            var groups = [];
            for (var _i = 0, _a = attributes['groups']; _i < _a.length; _i++) {
                var group = _a[_i];
                groups.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_6__models_group__["a" /* Group */](), group));
            }
            console.log(groups);
            self.userService.getGroups().next(groups);
        });
        this.socketService.on('receive_user_rooms', function (attributes) {
            var rooms = [];
            console.log(attributes['rooms']);
            for (var _i = 0, _a = attributes['rooms']; _i < _a.length; _i++) {
                var room = _a[_i];
                rooms.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_7__models_room__["a" /* Room */](), room));
            }
            console.log(rooms);
            self.userService.getUserRooms().next(rooms);
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
        this.socketService.emit('current_user');
        return this.userService.getUser();
    };
    UserSocketService.prototype.getUsers = function () {
        this.socketService.emit('get_users');
    };
    UserSocketService.prototype.getGroups = function () {
        this.socketService.emit('get_groups');
    };
    UserSocketService.prototype.getUserRooms = function () {
        this.socketService.emit('get_user_rooms');
    };
    UserSocketService.prototype.updateUserProfile = function (user) {
        this.socketService.emit('update_profile', {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            password: user.password
        });
    };
    return UserSocketService;
}());
UserSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], UserSocketService);

var _a, _b, _c;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/user_socket.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".authorization-page button:hover {\n  background-color: #ff6d00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".r-page {\n  margin-top: 25px; }\n  .r-page button:hover {\n    background-color: #ff6d00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 202,
	"./ar-dz": 196,
	"./ar-dz.js": 196,
	"./ar-kw": 197,
	"./ar-kw.js": 197,
	"./ar-ly": 198,
	"./ar-ly.js": 198,
	"./ar-ma": 199,
	"./ar-ma.js": 199,
	"./ar-sa": 200,
	"./ar-sa.js": 200,
	"./ar-tn": 201,
	"./ar-tn.js": 201,
	"./ar.js": 202,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bn": 206,
	"./bn.js": 206,
	"./bo": 207,
	"./bo.js": 207,
	"./br": 208,
	"./br.js": 208,
	"./bs": 209,
	"./bs.js": 209,
	"./ca": 210,
	"./ca.js": 210,
	"./cs": 211,
	"./cs.js": 211,
	"./cv": 212,
	"./cv.js": 212,
	"./cy": 213,
	"./cy.js": 213,
	"./da": 214,
	"./da.js": 214,
	"./de": 217,
	"./de-at": 215,
	"./de-at.js": 215,
	"./de-ch": 216,
	"./de-ch.js": 216,
	"./de.js": 217,
	"./dv": 218,
	"./dv.js": 218,
	"./el": 219,
	"./el.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-nz": 224,
	"./en-nz.js": 224,
	"./eo": 225,
	"./eo.js": 225,
	"./es": 227,
	"./es-do": 226,
	"./es-do.js": 226,
	"./es.js": 227,
	"./et": 228,
	"./et.js": 228,
	"./eu": 229,
	"./eu.js": 229,
	"./fa": 230,
	"./fa.js": 230,
	"./fi": 231,
	"./fi.js": 231,
	"./fo": 232,
	"./fo.js": 232,
	"./fr": 235,
	"./fr-ca": 233,
	"./fr-ca.js": 233,
	"./fr-ch": 234,
	"./fr-ch.js": 234,
	"./fr.js": 235,
	"./fy": 236,
	"./fy.js": 236,
	"./gd": 237,
	"./gd.js": 237,
	"./gl": 238,
	"./gl.js": 238,
	"./gom-latn": 239,
	"./gom-latn.js": 239,
	"./he": 240,
	"./he.js": 240,
	"./hi": 241,
	"./hi.js": 241,
	"./hr": 242,
	"./hr.js": 242,
	"./hu": 243,
	"./hu.js": 243,
	"./hy-am": 244,
	"./hy-am.js": 244,
	"./id": 245,
	"./id.js": 245,
	"./is": 246,
	"./is.js": 246,
	"./it": 247,
	"./it.js": 247,
	"./ja": 248,
	"./ja.js": 248,
	"./jv": 249,
	"./jv.js": 249,
	"./ka": 250,
	"./ka.js": 250,
	"./kk": 251,
	"./kk.js": 251,
	"./km": 252,
	"./km.js": 252,
	"./kn": 253,
	"./kn.js": 253,
	"./ko": 254,
	"./ko.js": 254,
	"./ky": 255,
	"./ky.js": 255,
	"./lb": 256,
	"./lb.js": 256,
	"./lo": 257,
	"./lo.js": 257,
	"./lt": 258,
	"./lt.js": 258,
	"./lv": 259,
	"./lv.js": 259,
	"./me": 260,
	"./me.js": 260,
	"./mi": 261,
	"./mi.js": 261,
	"./mk": 262,
	"./mk.js": 262,
	"./ml": 263,
	"./ml.js": 263,
	"./mr": 264,
	"./mr.js": 264,
	"./ms": 266,
	"./ms-my": 265,
	"./ms-my.js": 265,
	"./ms.js": 266,
	"./my": 267,
	"./my.js": 267,
	"./nb": 268,
	"./nb.js": 268,
	"./ne": 269,
	"./ne.js": 269,
	"./nl": 271,
	"./nl-be": 270,
	"./nl-be.js": 270,
	"./nl.js": 271,
	"./nn": 272,
	"./nn.js": 272,
	"./pa-in": 273,
	"./pa-in.js": 273,
	"./pl": 274,
	"./pl.js": 274,
	"./pt": 276,
	"./pt-br": 275,
	"./pt-br.js": 275,
	"./pt.js": 276,
	"./ro": 277,
	"./ro.js": 277,
	"./ru": 278,
	"./ru.js": 278,
	"./sd": 279,
	"./sd.js": 279,
	"./se": 280,
	"./se.js": 280,
	"./si": 281,
	"./si.js": 281,
	"./sk": 282,
	"./sk.js": 282,
	"./sl": 283,
	"./sl.js": 283,
	"./sq": 284,
	"./sq.js": 284,
	"./sr": 286,
	"./sr-cyrl": 285,
	"./sr-cyrl.js": 285,
	"./sr.js": 286,
	"./ss": 287,
	"./ss.js": 287,
	"./sv": 288,
	"./sv.js": 288,
	"./sw": 289,
	"./sw.js": 289,
	"./ta": 290,
	"./ta.js": 290,
	"./te": 291,
	"./te.js": 291,
	"./tet": 292,
	"./tet.js": 292,
	"./th": 293,
	"./th.js": 293,
	"./tl-ph": 294,
	"./tl-ph.js": 294,
	"./tlh": 295,
	"./tlh.js": 295,
	"./tr": 296,
	"./tr.js": 296,
	"./tzl": 297,
	"./tzl.js": 297,
	"./tzm": 299,
	"./tzm-latn": 298,
	"./tzm-latn.js": 298,
	"./tzm.js": 299,
	"./uk": 300,
	"./uk.js": 300,
	"./ur": 301,
	"./ur.js": 301,
	"./uz": 303,
	"./uz-latn": 302,
	"./uz-latn.js": 302,
	"./uz.js": 303,
	"./vi": 304,
	"./vi.js": 304,
	"./x-pseudo": 305,
	"./x-pseudo.js": 305,
	"./yo": 306,
	"./yo.js": 306,
	"./zh-cn": 307,
	"./zh-cn.js": 307,
	"./zh-hk": 308,
	"./zh-hk.js": 308,
	"./zh-tw": 309,
	"./zh-tw.js": 309
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 558;


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<div class=\"authorization-page\">\n  <h1>Авторизація</h1>\n\n  <div class=\"row\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"col s12 row\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"email\" type=\"email\" formControlName=\"email\">\n          <label for=\"email\">Email</label>\n\n          <div *ngIf=\"!loginForm.controls.email.valid && loginForm.controls.email.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"loginForm.controls.email.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n\n            <p *ngIf=\"loginForm.controls.email.errors.pattern\">\n              Email має не вірний формат\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input id=\"password\" type=\"password\" formControlName=\"password\">\n          <label for=\"password\">Пароль</label>\n\n\n          <div *ngIf=\"!loginForm.controls.password.valid && loginForm.controls.password.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"loginForm.controls.password.errors.required\">\n            Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"!loginForm.valid\">Вхід</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div materialize [materializeParams]=\"['Ви успішно авторизовані в системі', 4000]\" [materializeActions]=\"loginAction\"></div>\n<div materialize [materializeParams]=\"['Під час авторизації сталася помилка, можливо ви ввели не вірні дані', 4000]\" [materializeActions]=\"loginErrorAction\"></div>\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<div class=\"r-page\">\n  <h1>Форма реєстрації</h1>\n  <div *ngIf=\"successMessage\">\n    {{ successMessage }}\n  </div>\n  <div *ngIf=\"errorMessage\">\n    {{ errorMessage }}\n  </div>\n  <div class=\"row\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\" class=\"col s12 row\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"first_name\" formControlName=\"first_name\" type=\"text\" class=\"validate\">\n          <label for=\"first_name\">Ім’я</label>\n\n          <div *ngIf=\"!registrationForm.controls.first_name.valid && registrationForm.controls.first_name.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.first_name.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"last_name\" formControlName=\"last_name\">\n          <label for=\"last_name\">Прізвище</label>\n\n          <div *ngIf=\"!registrationForm.controls.last_name.valid && registrationForm.controls.last_name.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.last_name.errors.required\">\n              Це поле обов’язково до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"username\" formControlName=\"username\">\n          <label for=\"username\">Нікнейм:</label>\n\n          <div *ngIf=\"!registrationForm.controls.username.valid && registrationForm.controls.username.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.username.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"email\" formControlName=\"email\">\n          <label for=\"email\">Email</label>\n\n          <div *ngIf=\"!registrationForm.controls.email.valid && registrationForm.controls.email.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.email.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n\n            <p *ngIf=\"registrationForm.controls.email.errors.pattern\">\n              Email має не вірний формат\n            </p>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input id=\"password\" type=\"password\" formControlName=\"password\">\n          <label for=\"password\">Пароль</label>\n\n          <div *ngIf=\"!registrationForm.controls.password.valid && registrationForm.controls.password.dirty\" class=\"alert alert-danger\">\n            <p *ngIf=\"registrationForm.controls.password.errors.required\">\n              Це поле обов’язкове до заповнення\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button type=\"submit\" [disabled]=\"!registrationForm.valid\" class=\"waves-effect waves-light btn\">Зареєструватись</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div class=\"row block-wrapper\">\n  <div class=\"col s12 m12\">\n    <div class=\"card-panel\">\n      <div class=\"main-title\">\n        <h3>Створення нової консультації</h3>\n      </div>\n      <div>\n        <app-event-form [event]=\"event\" (onSubmit)=\"onCreateEvent($event)\"></app-event-form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div materialize [materializeParams]=\"['Консультація успішно створена', 4000]\" [materializeActions]=\"createEventActions\"></div>\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"row block-wrapper\">\n  <div class=\"col s12 m12\">\n    <div class=\"card-panel\">\n      <div class=\"main-title\">\n        <h3>Редагування консультації</h3>\n      </div>\n      <div>\n        <app-event-form [event]=\"event\" (onSubmit)=\"onEditEvent($event)\"></app-event-form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div materialize [materializeParams]=\"['Консультація успішно оновлена', 4000]\" [materializeActions]=\"editEventActions\">\n</div>\n"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form class=\"col s12\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"name\" type=\"text\" class=\"validate\" formControlName=\"name\" [(ngModel)]=\"event.name\">\n        <label for=\"name\" class=\"\">Назва консультації: </label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"start_at\" formControlName=\"start_at\" [ngModel]=\"event.start_at | date: 'short'\" [(dateTimePicker)]=\"event.start_at\"\n               class=\"picker-input\"\n               [mode]=\"'inline'\"\n               readonly />\n      </div>\n    </div>\n    <div class=\"row\">\n      <select materialize=\"material_select\" multiple [materializeSelectOptions]=\"allGroups\" formControlName=\"groups\" [(ngModel)]=\"selectedGroups\">\n        <option value=\"\" disabled selected>Виберіть потрібні групи</option>\n        <option *ngFor=\"let group of allGroups\" [ngValue]=\"group\">{{ group.name }}</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"waves-effect waves-light btn\">Зберегти</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div class=\"row block-wrapper\">\n  <div class=\"col s12 m12\">\n    <div class=\"card-panel\">\n      <div class=\"main-title\">\n        <h3>Список консультацій</h3>\n      </div>\n      <div class=\"search-area\">\n        <form class=\"col s12 search-consultation\" ngNoForm>\n          <div class=\"row search-form\">\n            <div class=\"input-field col s8\">\n              <i class=\"material-icons prefix\">search</i>\n              <input id=\"search\" type=\"text\" (keyup)=\"onFilterConsultation(filterValue)\" [(ngModel)]=\"filterValue\">\n              <label for=\"search\">Пошук</label>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"users-list\">\n        <table class=\"list-of-elements\">\n          <thead>\n          <tr>\n            <th>Назва</th>\n            <th>Дата початку</th>\n            <th>Викладач</th>\n            <th>Посилання до кімнати</th>\n            <th>Управління</th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let consultation of filteredEvents\">\n            <td>{{ consultation.name }}</td>\n            <td>{{ consultation.start_at | date:'medium' }}</td>\n            <td>{{ consultation.teacher?.first_name }} {{ consultation.teacher?.last_name }}</td>\n            <td>\n              <a [routerLink]=\"['/chat', consultation.room.id]\">Перейти до кімнати</a>\n            </td>\n            <td>\n              <i materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Редагувати\" [routerLink]=\"['/events', consultation.id, 'edit']\">edit</i>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"fixed-action-btn\" *ngIf=\"user?.role == 'teacher'\">\n  <a class=\"btn-floating btn-large waves-effect waves-light teal\" routerLink=\"/events/create\">\n    <i class=\"large material-icons\">add</i>\n  </a>\n</div>\n"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3 class=\"center\">Головна сторінка</h3>\n  <div class=\"row\">\n    <div class=\"col m12 l12\">\n      <p>\n        Добрий день, Вітаю Вас на сайті спілкування між студентами та викладачами Черкаського Національного Університету імені Богдана Хмельницького.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col m6 l6 s12\">\n      <p>\n        Якщо Ви викладач, ви маєте наступні можливості можливості:\n      </p>\n      <ul>\n        <li>Створювати навчальні кімнати, та додавати туди студентів</li>\n        <li>Спілкуватися з студентами в чаті</li>\n        <li>Створювати та редагувати консультації, та прив`яхувати їх до студентів</li>\n        <li>Переглядати всі майбутні консультації</li>\n      </ul>\n    </div>\n    <div class=\"col m6 l6 s12\">\n      <p>\n        Якщо Ви студент, ви маєте такі можливості:\n      </p>\n      <ul>\n        <li>Спілкуватися з студентами та викладачами в чаті.</li>\n        <li>Переглядати всі консультації які мають відбутися для вашої групи</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"s-page\">\n  <h3>Налаштування</h3>\n  <div class=\"row\">\n    <form class=\"col s12 row\" [formGroup]=\"form\" (ngSubmit)=\"updateUserData()\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"icon_prefix\" type=\"text\" class=\"validate\" formControlName=\"first_name\" [(ngModel)]=\"user.first_name\">\n          <label for=\"icon_prefix\">Ім’я</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"icon_prefix-last\" type=\"text\" class=\"validate\" formControlName=\"last_name\" [(ngModel)]=\"user.last_name\">\n          <label for=\"icon_prefix\">Прізвище</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"icon_prefix-nik\" type=\"text\" class=\"validate\" formControlName=\"username\" [(ngModel)]=\"user.username\">\n          <label for=\"icon_prefix\">Нікнейм</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"icon_email\" type=\"email\" class=\"validate\" formControlName=\"email\" [(ngModel)]=\"user.email\">\n          <label for=\"icon_email\">Email</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input type=\"password\" id=\"password2\" class=\"validate\" formControlName=\"password\" [(ngModel)]=\"user.password\">\n          <label for=\"password2\">Новий пароль: </label>\n        </div>\n      </div>\n      <div class=\"button-center\">\n        <button type=\"submit\" class=\"waves-effect waves-light btn\" materialize [materializeParams]=\"['Профайл успішно оновлений',4000]\" [materializeActions]=\"profileActions\">Зберегти</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer teal darken-3\">\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      Студентський чат Черкаського Національного Університету імені Богдана Хмельницького © 2017\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"teal darken-3\">\n    <div class=\"container nav-wrapper\">\n      <a routerLink=\"\" routerLinkActive=\"active\" class=\"brand-logo left\">Головна</a>\n      <ul id=\"nav-mobile-not-auth\" class=\"right hide-on-med-and-down\" *ngIf=\"!isAuthorized\">\n        <li>\n          <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">Авторизація</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/registration']\" routerLinkActive=\"active\">Реєстрація</a>\n        </li>\n      </ul>\n      <ul id=\"nav-mobile-auth\" class=\"right hide-on-med-and-down\" *ngIf=\"isAuthorized\">\n        <li>\n          <a href=\"\" routerLink=\"/admin\" *ngIf=\"user?.role == 'admin'\">Адміністративна зона</a>\n        </li>\n        <li>\n          <a routerLink=\"/profile/settings\">Настройки</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/events']\" *ngIf=\"user?.role != 'admin'\">Консультації</a>\n        </li>\n        <li *ngIf=\"!user?.last_selected_room && user?.role != 'admin'\">\n          <a [routerLink]=\"['/chat']\" routerLinkActive=\"active\">Чат</a>\n        </li>\n        <li *ngIf=\"user?.last_selected_room && user?.role != 'admin'\">\n          <a [routerLink]=\"['/chat', user?.last_selected_room]\" routerLinkActive=\"active\">Чат</a>\n        </li>\n        <li (click)=\"onLogout()\">\n          <a>Вихід</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<main-navigation></main-navigation>\n<main class=\"main-container\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<main-footer></main-footer>\n"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<main-navigation></main-navigation>\n<main class=\"main-container\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<main-footer></main-footer>\n"

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/event.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_server__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(3);
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
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/socket.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/user.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventService = (function () {
    function EventService() {
        this.events = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.event = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    EventService.prototype.getEvents = function () {
        return this.events;
    };
    EventService.prototype.getEvent = function () {
        return this.event;
    };
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EventService);

//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/event.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_event__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventSocketService = (function () {
    function EventSocketService(eventService, socketService) {
        this.eventService = eventService;
        this.socketService = socketService;
        this.registerListeners();
    }
    /**
     * Register listeners
     */
    EventSocketService.prototype.registerListeners = function () {
        var _this = this;
        this.socketService.on('receive_events', function (attributes) {
            if (!attributes['events']) {
                return false;
            }
            var events = [];
            for (var _i = 0, _a = attributes['events']; _i < _a.length; _i++) {
                event = _a[_i];
                events.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_event__["a" /* Event */](), event));
            }
            _this.eventService.getEvents().next(events);
        });
        this.socketService.on('receive_event', function (attributes) {
            console.log(attributes);
            if (!attributes['event']) {
                return false;
            }
            var event = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__models_event__["a" /* Event */](), attributes['event']);
            _this.eventService.getEvent().next(event);
        });
    };
    EventSocketService.prototype.getEvents = function () {
        this.socketService.emit('get_events');
    };
    EventSocketService.prototype.getEvent = function (id) {
        this.socketService.emit('get_event', {
            id: id
        });
    };
    EventSocketService.prototype.createEvent = function (event) {
        this.socketService.emit('create_event', {
            name: event['name'],
            start_at: event['start_at'],
            groups: event['groups']
        });
    };
    EventSocketService.prototype.editEvent = function (event) {
        this.socketService.emit('edit_event', {
            id: event['id'],
            name: event['name'],
            start_at: event['start_at'],
            groups: event['groups']
        });
    };
    return EventSocketService;
}());
EventSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], EventSocketService);

var _a, _b;
//# sourceMappingURL=/var/www/cdu-webchat/cdu-webchat-frontend/src/event_socket.service.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ })

},[880]);
//# sourceMappingURL=main.bundle.js.map