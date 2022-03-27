import { Component, OnInit } from '@angular/core';

// PrimeNG
import { MenuItem, MegaMenuItem } from 'primeng/api';

// Services
import { AuthService } from "../../core/services/auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: MegaMenuItem[] = [];

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/user'
      },
      {
        label: 'SignOut',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.signOut(),
      }
    ];
  }

  signOut(): void {
    this.authService.signOut();
  }
}
