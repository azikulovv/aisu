import { mapUser } from "~/entities/user/model/mapper";
import { api } from "~/shared/api/client";
import type {
  SignupPayload,
  SignupResponse,
  SignupResponseDto,
} from "./types";

export const signup = async (
  data: SignupPayload,
): Promise<SignupResponse> => {
  const response = await api.post<SignupResponseDto>("/auth/signup", {
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    password: data.password,
  });

  return {
    accessToken: response.data.access_token,
    user: mapUser(response.data.user),
  };
};
