"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var Login = (function () {
    function Login(userService) {
        this.userService = userService;
    }
    Login.prototype.ngOnInit = function () { this.getUsers(); };
    Login.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            console.log(users);
            _this.users = users;
        }, function (error) {
            //   console.log(error);
            // this.errorMessage = <any>error
        });
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './tpl/login-form.html',
        styleUrls: ['./css/login.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.component.js.map