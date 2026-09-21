import type { Pool } from "pg";
import type { IStore } from "./store.interface";

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
}
