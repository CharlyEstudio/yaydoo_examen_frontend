import { Injectable } from '@angular/core';

// Environments
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri: string = environment.backend;

  postLogin(): string {
    return `${this.uri}/auth/login`;
  }

  postCreateUser(): string {
    return `${this.uri}/users`;
  }

  postUpdateUser(id: number): string {
    return `${this.uri}/users/${id}`;
  }

  getAllUsers(): string {
    return `${this.uri}/users`;
  }

  deleteUser(id: number) {
    return `${this.uri}/users/${id}`;
  }
}
