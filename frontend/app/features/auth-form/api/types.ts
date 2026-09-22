import type { UserDto } from "~/entities/user/api/types";
import type { User } from "~/entities/user/model/types";

export interface SigninPayload {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string;
  user: User;
}

export interface SigninResponseDto {
  access_token: string;
  user: UserDto;
}
