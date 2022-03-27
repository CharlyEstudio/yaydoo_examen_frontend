import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { LoginGuard } from "./core/guards/login/login.guard";

// Components
import { SigninComponent } from "./layouts/signin/signin.component";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
