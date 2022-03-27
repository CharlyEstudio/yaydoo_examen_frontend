import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    MenuModule,
    MegaMenuModule,
    CalendarModule,
  ],
  exports: [
    InputTextModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    MenuModule,
    MegaMenuModule,
    CalendarModule,
  ],
})
export class PrimengModule { }
