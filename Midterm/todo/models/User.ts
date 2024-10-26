import AbstractDateTime from './AbstractDateTime';

export default class User extends AbstractDateTime {
  public id: number;
  public email: string;
  public name: string;
  public password: string;

  constructor(id: number, email: string, name: string, password: string) {
    super();
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
