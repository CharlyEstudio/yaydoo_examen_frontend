import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Components
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
