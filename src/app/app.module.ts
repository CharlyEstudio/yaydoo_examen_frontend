import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedsModule } from "./shareds/shareds.module";
import { PrimengModule } from "./primeng/primeng.module";

// Components
import { AppComponent } from './app.component';
import { SigninComponent } from "./layouts/signin/signin.component";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
