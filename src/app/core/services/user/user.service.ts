import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

// Models
import { UserModel } from "../auth/models/user.model";

// Services
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string = '';
  headers: any;

  constructor(
    private readonly http: HttpClient,
    private readonly apiService: ApiService,
    private readonly authService: AuthService,
  ) {
    this.token = this.authService.token;
    this.headers = {
      'Authorization': `Bearer ${this.token}`
    };
  }

  postCreateUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(
      this.apiService.postCreateUser(),
      user,
      {
        headers: this.headers
      }
    )
      .pipe(
        map((user) => {
          return user;
        }),
      );
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
      this.apiService.getAllUsers(),
      {
        headers: this.headers
      }
    ).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  deleteUser(id: number): Observable<boolean> {
    return this.http.delete<any>(
      this.apiService.deleteUser(id),
      {
        headers: this.headers
      }
    )
      .pipe(
        map((resp) => {
          console.log(resp);
          return true;
        })
      )
  }

  calculateAge(user: UserModel): number {
    const fecha = user.person?.birthDay;
    const hoy = new Date();
    const cumpleanos = new Date(fecha!);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }
}
