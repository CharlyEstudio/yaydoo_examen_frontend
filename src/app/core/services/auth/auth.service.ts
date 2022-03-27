import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import { Router } from "@angular/router";

// Models
import { CredentialsModel } from "./models/credentials.model";
import { UserModel } from "./models/user.model";

// Services
import { ApiService } from "../../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: UserModel = new UserModel();
  token: string = '';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly apiService: ApiService,
  ) {
    this.getLocalStorage();
  }

  getLocalStorage(): void {
    if (localStorage.getItem('user')) {
      const u = localStorage.getItem('user');
      this.user = u !== null ? JSON.parse(u) : new UserModel();
      const t = localStorage.getItem('token');
      this.token = t !== null ? t : '';
    }
  }

  signIn(credentials: CredentialsModel): Observable<any> {
    return this.http.post(
      this.apiService.postLogin(),
      credentials
    )
      .pipe(
        map((resp: any) => {
          if(resp.user) {
            console.log(resp.user);
            localStorage.setItem('user', JSON.stringify(resp.user));
            localStorage.setItem('token', resp.accessToken);
            this.router.navigate(['/home']);
          }

          return resp;
        })
      );
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  isAuthenticate(): boolean {
    return this.token !== '';
  }
}
