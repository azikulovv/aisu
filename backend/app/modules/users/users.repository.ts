import type { Pool } from "pg";
import type { ICreateUserDto, IPublicUser, IUser } from "./users.interface";

export class UsersRepository {
  constructor(private readonly db: Pool) {}

  async findByEmail(email: string): Promise<IUser | null> {
    const response = await this.db.query<IUser>(
      `SELECT id, email, first_name, last_name, password, created_at, updated_at
      FROM users
      WHERE email = $1
      LIMIT 1;
    `,
      [email],
    );

    return response.rows[0] ?? null;
  }

  async create(dto: ICreateUserDto): Promise<IPublicUser> {
    const response = await this.db.query<IPublicUser>(
      `INSERT INTO users (
        email, first_name, last_name, password
      )
      VALUES (
        $1, $2, $3, $4
      )
      RETURNING
        id, email, first_name, last_name, created_at, updated_at;
    `,
      [dto.email, dto.first_name, dto.last_name, dto.password],
    );

    return response.rows[0];
  }
}
