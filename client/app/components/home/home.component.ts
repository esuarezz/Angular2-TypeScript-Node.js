
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(
        private router: Router,
        private heroService: UserService) {
    }

    ngOnInit() {
        this.heroService.getUsers()
            .then(users => this.users = users);
    }

}