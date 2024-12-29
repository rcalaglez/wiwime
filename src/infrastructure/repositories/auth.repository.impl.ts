import { AuthDataSource } from "../../domain/datasources/auth.datasource";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { AuthDataSourceImpl } from "../datasources/auth.datasource.impl";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDataSourceImpl) {}
  login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.datasource.login(loginUserDto);
  }

  register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.datasource.register(registerUserDto);
  }
}
