import { pool } from "@app/infrastructure/db";
import { UsersRepository } from "../users/users.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const usersRepository = new UsersRepository(pool);
const service = new AuthService(usersRepository);
export const controller = new AuthController(service);
