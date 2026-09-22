import { mapUser } from "~/entities/user/model/mapper";
import { api } from "~/shared/api/client";
import type { SigninPayload, SigninResponse, SigninResponseDto } from "./types";

export const signin = async (data: SigninPayload): Promise<SigninResponse> => {
  const response = await api.post<SigninResponseDto>("/auth/signin", data);

  return {
    accessToken: response.data.access_token,
    user: mapUser(response.data.user),
  };
};
