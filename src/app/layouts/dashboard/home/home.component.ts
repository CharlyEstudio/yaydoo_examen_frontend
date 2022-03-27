import { Component, OnInit } from '@angular/core';

// Models
import { UserModel } from "../../../core/services/auth/models/user.model";

// Services
import { AuthService } from "../../../core/services/auth/auth.service";
import {PersonModel} from "../../../core/services/auth/models/person.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: UserModel = new UserModel();
  person: PersonModel = new PersonModel();

  constructor(
    private readonly authService: AuthService,
  ) {
    this.user = this.authService.user;
    this.person = this.user.person!;
  }

  ngOnInit(): void {}
}
