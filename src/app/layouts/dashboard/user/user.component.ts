import { Component, OnInit } from '@angular/core';

// PrimeNG
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

// Models
import { UserModel } from "../../../core/services/auth/models/user.model";

// Services
import { UserService } from "../../../core/services/user/user.service";
import {PersonModel} from "../../../core/services/auth/models/person.model";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UserComponent implements OnInit {
  users: UserModel[] = [];
  user: UserModel = new UserModel();
  selectedUsers: UserModel[] = [];
  submitted: boolean = false;
  userDialog: boolean = false;
  editUserConfirm: boolean = false;
  statuses: any[] = [];

  constructor(
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly userService: UserService,
  ) {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users.map(u => {
        const split = u.person?.birthDay!.toString().split('-');
        u.person!.birthDay = new Date(Number(split![0]), (Number(split![1]) - 1), Number(split![2]));
        return u;
      });
    });
  }

  ngOnInit(): void {}

  deleteSelectedUsers(data: any): void {
    if (data) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected users?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          for (const user of this.selectedUsers) {
            this.userService.deleteUser(user.idUser!).subscribe((resp) => {
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
            });
          }
          this.users = this.users.filter(val => !this.selectedUsers.includes(val));
          this.selectedUsers = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
        }
      });
    }
  }

  eventSelectedUsers(selectedUsers: UserModel[]): void {
    this.selectedUsers = selectedUsers;
  }

  openNew(data: any): void {
    this.user = new UserModel();
    this.resetSubmittedAndDialog(data);
  }

  resetSubmittedAndDialog(data: any): void {
    const { submitted, userDialog, update } = data;
    this.submitted = submitted;
    this.userDialog = userDialog;
    this.editUserConfirm = update;
    if (update) {
      this.user.person = new PersonModel();
    }
  }

  editUser(user: UserModel): void {
    this.user = {...user};
    this.userDialog = true;
    this.editUserConfirm = true;
  }

  deleteUser(user: UserModel): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUser(user.idUser!).subscribe((resp) => {
          if (resp) {
            this.users = this.users.filter(val => val.idUser !== user.idUser);
            this.user = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
          }
        });
      }
    });
  }

  saveUser(data: any): void {
    const newUser: UserModel = data.user;
    const update: boolean = data.update;
    if (!newUser.name) {
      this.getMessage('warn', `Sin Nombre`, 'Es necesario colocar el nombre del usuario', 3000);
      return;
    }

    if (!newUser.email) {
      this.messageService.add({severity: 'warn', summary: 'Sin Correo', detail: 'Es necesario colocar el correo del usuario', life: 3000});
      return;
    }

    if (!newUser.person?.address) {
      this.messageService.add({severity: 'warn', summary: 'Sin Dirección', detail: 'Es necesario colocar la dirección del usuario', life: 3000});
      return;
    }

    if (!newUser.person?.birthDay) {
      this.messageService.add({severity: 'warn', summary: 'Sin Fecha de Cumpleaños', detail: 'Es necesario colocar la fecha de cumpleaños del usuario', life: 3000});
      return;
    }

    if (!newUser.person?.telephone) {
      this.messageService.add({severity: 'warn', summary: 'Sin Teléfono', detail: 'Es necesario colocar el teléfono del usuario', life: 3000});
      return;
    }

    if (!update) {
      this.userService.postCreateUser(newUser).subscribe((user) => {
        this.getAllUsers();
        this.user = new UserModel();
      });
    } else {
      delete newUser.person.idPerson;
      this.userService.postUpdateUser(newUser).subscribe((userUpdate) => {
        this.user = new UserModel();
        this.getAllUsers();
      });
    }
  }

  getPropertie(objeto: any, propiedad: string): boolean {
    return typeof objeto !== 'undefined' && objeto.hasOwnProperty(propiedad);;
  }

  getMessage(severity: string, summary: string, detail: string, life: number): void {
    this.messageService.add({severity, summary, detail, life});
  }
}
