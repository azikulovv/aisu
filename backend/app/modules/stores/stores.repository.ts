import type { Pool } from "pg";
import type { ICreateStoreDto, IStore } from "./stores.interface";

export class StoreRepository {
  constructor(private readonly db: Pool) {}

  async findAllByUserId(userId: string): Promise<IStore[]> {
    const response = await this.db.query<IStore>(
      `SELECT id, name, location, updated_at, created_at
      FROM stores
      WHERE user_id = $1
      ORDER BY created_at DESC;
    `,
      [userId],
    );

    return response.rows;
  }

  async findByIdAndUserId(
    targetStoreId: string,
    userId: string,
  ): Promise<IStore | null> {
    const response = await this.db.query<IStore>(
      `
      SELECT id, name, location, updated_at, created_at
      FROM stores
      WHERE id = $1 AND user_id = $2
      LIMIT 1;
    `,
      [targetStoreId, userId],
    );

    return response.rows[0] ?? null;
  }

  async create({ user_id, name, location }: ICreateStoreDto): Promise<IStore> {
    const response = await this.db.query<IStore>(
      `INSERT INTO stores (
        user_id, name, location
      )
      VALUES (
        $1, $2, $3
      )
      RETURNING
        id, user_id, name, location, updated_at, created_at;
    `,
      [user_id, name, location],
    );

    return response.rows[0];
  }
}
