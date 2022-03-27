import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Models
import { UserModel } from "../../core/services/auth/models/user.model";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() user: UserModel = new UserModel();
  @Input() selectedUsers: UserModel[] = [];
  @Output() eventDeleteSelectedUsers: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() eventSubmittedAndUserDialog: EventEmitter<any> = new EventEmitter<any>();
  delete: string = 'Delete';

  constructor() { }

  ngOnInit(): void {}

  openNew(): void {
    this.user = {};
    this.eventSubmittedAndUserDialog.emit({submitted: false, userDialog: true});
  }

  deleteSelectedProducts(): void {
    this.eventDeleteSelectedUsers.emit(true);
  }
}
