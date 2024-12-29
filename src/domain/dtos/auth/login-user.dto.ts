import { Validators } from "../../../config";

export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ["Missing pass", undefined];

    if (!Validators.email.test(email)) return ["Email not valid", undefined];

    if (!password) return ["Missing password"];

    if (password.length < 6) return ["Pass too short"];

    return [undefined, new LoginUserDto(email, password)];
  }
}