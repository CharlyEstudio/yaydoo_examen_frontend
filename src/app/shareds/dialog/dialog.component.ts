import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatePipe } from "@angular/common";

// Models
import { UserModel } from "../../core/services/auth/models/user.model";
import { PersonModel } from "../../core/services/auth/models/person.model";

// Services
import { UserService } from "../../core/services/user/user.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnChanges {
  @Input() userDialog: boolean = false;
  @Input() submitted: boolean = false;
  @Input() user: UserModel = new UserModel();
  @Input() person: PersonModel = new PersonModel();
  @Output() eventUserDialogAndSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSaveUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  p: PersonModel = new PersonModel();
  age: number = 0;

  constructor(
    private readonly userService: UserService
  ) {
    this.validatePerson();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.validatePerson();
  }

  validatePerson(): void {
    if (this.person) {
      this.p = this.person;
      this.calculateAge();
    }
  }

  hideDialog(): void {
    this.userDialog = false;
    this.submitted = false;
    this.user = new UserModel();
    this.eventUserDialogAndSubmitted.emit({ userDialog: this.userDialog, submitted: this.submitted });
  }

  saveUser(): void {
    this.user.person = this.p;
    const pipe = new DatePipe('en-US');
    const myFormattedDate = pipe.transform(this.user.person.birthDay, 'yyyy-MM-dd');
    this.user.person.birthDay = myFormattedDate!;
    this.eventSaveUser.emit(this.user);
    this.hideDialog();
  }

  calculateAge(): void {
    this.age = this.userService.calculateAge(this.user);
  }
}
