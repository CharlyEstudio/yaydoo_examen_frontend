import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Modules
import { PrimengModule } from "../primeng/primeng.module";

// Components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TableUsersComponent,
    DialogComponent,
    ConfirmDialogComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ],
  exports: [
    ToolbarComponent,
    TableUsersComponent,
    DialogComponent,
    ConfirmDialogComponent,
    ToastComponent,
  ],
})
export class SharedsModule { }
