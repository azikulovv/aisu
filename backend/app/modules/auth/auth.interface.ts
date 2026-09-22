import type { ICreateUserDto } from "../users/users.interface";

export interface SignInDto {
  email: string;
  password: string;
}

export type SignUpDto = ICreateUserDto;
