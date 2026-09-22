import type { UserDto } from "~/entities/user/api/types";
import type { User } from "~/entities/user/model/types";

export interface SigninPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface AuthResponseDto {
  access_token: string;
  user: UserDto;
}

export type SigninResponse = AuthResponse;
export type SigninResponseDto = AuthResponseDto;

export interface SignupPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type SignupResponse = AuthResponse;
export type SignupResponseDto = AuthResponseDto;
