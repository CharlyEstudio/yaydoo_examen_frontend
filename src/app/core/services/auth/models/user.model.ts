import { PersonModel } from "./person.model";

export class UserModel {
  idUser?: number;
  name?: string;
  email?: string;
  password?: string;
  person?: PersonModel;
}
