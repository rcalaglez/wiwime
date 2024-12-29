import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDataSource {
  abstract register(loginUserDto: LoginUserDto): Promise<UserEntity>;
  abstract login(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
