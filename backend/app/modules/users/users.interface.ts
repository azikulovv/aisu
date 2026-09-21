export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export type IPublicUser = Omit<IUser, "password">;

export type ICreateUserDto = Omit<IUser, "id" | "created_at" | "updated_at">;
