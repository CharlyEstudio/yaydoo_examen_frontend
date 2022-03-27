import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { PrimengModule } from "../../primeng/primeng.module";

// Modules
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedsModule } from "../../shareds/shareds.module";

// Components
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedsModule,
    PrimengModule,
  ]
})
export class DashboardModule { }
