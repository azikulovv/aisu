import type { UserDto } from "../api/types";
import type { User } from "./types";

export const mapUser = (dto: UserDto): User => {
  return {
    id: dto.id,
    email: dto.email,
    firstName: dto.first_name,
    lastName: dto.last_name,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
};
