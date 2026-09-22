import { conflict, unauthorized } from "@app/common/errors/app-error";
import { createAccessToken } from "@app/common/utils/jose";
import { hashPassword, verifyPassword } from "@app/common/utils/password";
import type { IPublicUser } from "../users/users.interface";
import type { UsersRepository } from "../users/users.repository";
import type { SignInDto, SignUpDto } from "./auth.interface";

export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signin(dto: SignInDto) {
    const user = await this.usersRepository.findByEmail(
      dto.email.trim().toLowerCase(),
    );

    if (!user) {
      throw unauthorized("Неверная почта или пароль");
    }

    const isCorrectPassword = await verifyPassword(user.password, dto.password);

    if (!isCorrectPassword) {
      throw unauthorized("Неверная почта или пароль");
    }

    const accessToken = await createAccessToken(user.id);
    const { password, ...publicUser } = user;

    return { access_token: accessToken, user: publicUser };
  }

  async signup(dto: SignUpDto) {
    const email = dto.email.trim().toLowerCase();
    const existingUser = await this.usersRepository.findByEmail(email);

    if (existingUser) {
      throw conflict("Пользователь с такой почтой уже существует");
    }

    const passwordHash = await hashPassword(dto.password);

    let user: IPublicUser;

    try {
      user = await this.usersRepository.create({
        ...dto,
        email,
        password: passwordHash,
      });
    } catch (error) {
      if (isUniqueViolation(error)) {
        throw conflict("Пользователь с такой почтой уже существует");
      }

      throw error;
    }

    const accessToken = await createAccessToken(user.id);

    return { access_token: accessToken, user };
  }
}

function isUniqueViolation(error: unknown): error is { code: "23505" } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "23505"
  );
}
