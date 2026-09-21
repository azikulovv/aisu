import type { Pool } from "pg";
import type { ICreateStoreDto, IStore } from "./store.interface";

export class StoreRepository {
  constructor(private readonly db: Pool) {}

  async findAll(): Promise<IStore[]> {
    const response = await this.db.query<IStore>(`
      SELECT id, name, location, updated_at, created_at
      FROM stores;
    `);

    return response.rows;
  }

  async findById(targetStoreId: string): Promise<IStore | null> {
    const response = await this.db.query<IStore>(
      `
      SELECT id, name, location, updated_at, created_at
      FROM stores
      WHERE id = $1
      LIMIT 1;
    `,
      [targetStoreId],
    );

    return response.rows[0] ?? null;
  }

  async create({ name, location }: ICreateStoreDto): Promise<IStore> {
    const response = await this.db.query<IStore>(
      `INSERT INTO stores (
        name, location
      )
      VALUES (
        $1, $2
      )
      RETURNING
        id, name, location, updated_at, created_at;
    `,
      [name, location],
    );

    return response.rows[0];
  }
}
