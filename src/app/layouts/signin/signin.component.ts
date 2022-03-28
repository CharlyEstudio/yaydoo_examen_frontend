import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

// Services
import {AuthService} from "../../core/services/auth/auth.service";
import {CredentialsModel} from "../../core/services/auth/models/credentials.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  display: boolean = false;
  loading: boolean = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {}

  signIn(): void {
    if (!this.form.valid) {
      this.display = !this.form.valid;
      return;
    }

    this.loading = true;

    const credentials: CredentialsModel = {
      username: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.signIn(credentials).subscribe(resp => {
      this.loading = false;
    });
  }
}
