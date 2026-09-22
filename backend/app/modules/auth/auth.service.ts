import { hashPassword } from "@app/common/utils/password";
import type { ICreateUserDto } from "../users/users.interface";
import type { UsersRepository } from "../users/users.repository";

export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signup(dto: ICreateUserDto) {
    const passwordHash = await hashPassword(dto.password);

    const user = await this.usersRepository.create({
      ...dto,
      password: passwordHash,
    });

    return { access_token: "", user };
  }
}
