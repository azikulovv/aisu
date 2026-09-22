import type { Pool } from "pg";
import type { ICreateUserDto, IPublicUser } from "./users.interface";

export class UsersRepository {
  constructor(private readonly db: Pool) {}

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
