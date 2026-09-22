import { ICreateUserDto } from "../users/users.interface";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto extends ICreateUserDto {}
