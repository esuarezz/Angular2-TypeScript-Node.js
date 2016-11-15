import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import { ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'preregistration',
    templateUrl: 'preregistration.component.html',
    styleUrls: ['preregistration.component.css']

})


export class PreregistrationComponent  {
    user: User;
    error: any;
    navigated = false;
    active = true;
    submitted = false;

    constructor(
        private userService: UserService) {
        this.user = new User();
    }

    onSubmit() {
        this.submitted = true;
        this.active = false;

        this.userService
            .save(this.user)
            .then(user => {
                this.user = user;
                //TODO: change this to play with the html and 2 differents div, after that we could include an email
                //but not in this method
             //  this.goHome();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    goHome() {
        window.history.go("");
    }
}