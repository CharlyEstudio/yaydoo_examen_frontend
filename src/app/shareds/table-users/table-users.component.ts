import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Models
import { UserModel } from "../../core/services/auth/models/user.model";

// Services
import { UserService } from "../../core/services/user/user.service";

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {
  @Input() users: UserModel[] = [];
  @Output() eventSelectedUsers: EventEmitter<UserModel[]> = new EventEmitter<UserModel[]>();
  @Output() eventEditUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  @Output() eventDeleteUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  selectedUsers: any[] = [];

  constructor(
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {}

  changeSelectedUsers() {
    this.eventSelectedUsers.emit(this.selectedUsers);
  }

  editUser(user: UserModel): void {
    this.eventEditUser.emit(user);
  }

  deleteUser(user: UserModel): void {
    this.eventDeleteUser.emit(user);
  }

  calculateAge(user: UserModel): number {
    return this.userService.calculateAge(user);
  }
}
