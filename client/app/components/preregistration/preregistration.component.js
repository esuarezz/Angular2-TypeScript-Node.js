"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require("../../models/user");
var PreregistrationComponent = (function () {
    function PreregistrationComponent(userService) {
        this.userService = userService;
        this.navigated = false;
        this.active = true;
        this.submitted = false;
        this.user = new user_1.User();
    }
    PreregistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.active = false;
        this.userService
            .save(this.user)
            .then(function (user) {
            _this.user = user;
            //TODO: change this to play with the html and 2 differents div, after that we could include an email
            //but not in this method
            //  this.goHome();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PreregistrationComponent.prototype.goHome = function () {
        window.history.go("");
    };
    PreregistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'preregistration',
            templateUrl: 'preregistration.component.html',
            styleUrls: ['preregistration.component.css']
        })
    ], PreregistrationComponent);
    return PreregistrationComponent;
}());
exports.PreregistrationComponent = PreregistrationComponent;
//# sourceMappingURL=preregistration.component.js.map