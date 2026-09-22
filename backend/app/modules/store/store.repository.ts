import type { Pool } from "pg";
import type {
  ICreateStoreDto,
  IStore,
  IStoreSummary,
} from "./store.interface";

export class StoreRepository {
  constructor(private readonly db: Pool) {}

  async findAllByUserId(userId: string): Promise<IStoreSummary[]> {
    const response = await this.db.query<IStoreSummary>(
      `SELECT s.id, s.name, s.location, s.updated_at, s.created_at,
             COUNT(d.id)::int AS deliveries_count,
             COALESCE(SUM(d.quantity), 0)::int AS products_count
      FROM stores s
      LEFT JOIN deliveries d
        ON d.store_id = s.id AND d.user_id = s.user_id
      WHERE s.user_id = $1
      GROUP BY s.id, s.name, s.location, s.updated_at, s.created_at
      ORDER BY s.created_at DESC;
    `,
      [userId],
    );

    return response.rows;
  }

  async findByIdAndUserId(
    targetStoreId: string,
    userId: string,
  ): Promise<IStoreSummary | null> {
    const response = await this.db.query<IStoreSummary>(
      `
      SELECT s.id, s.name, s.location, s.updated_at, s.created_at,
             COUNT(d.id)::int AS deliveries_count,
             COALESCE(SUM(d.quantity), 0)::int AS products_count
      FROM stores s
      LEFT JOIN deliveries d
        ON d.store_id = s.id AND d.user_id = s.user_id
      WHERE s.id = $1 AND s.user_id = $2
      GROUP BY s.id, s.name, s.location, s.updated_at, s.created_at
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
        id, name, location, updated_at, created_at;
    `,
      [user_id, name, location],
    );

    return response.rows[0];
  }
}
