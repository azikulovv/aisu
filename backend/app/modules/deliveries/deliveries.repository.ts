import type { Pool } from "pg";
import { Delivery } from "./deliveries.interface";

export class DeliveriesRepository {
  constructor(private readonly db: Pool) {}

  async findAllByStoreId(storeId: string): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT id, store_id, product_name, is_paid, created_at, updated_at
      FROM deliveries
      WHERE store_id = $1
      ORDER BY created_at DESC;
    `,
      [storeId],
    );

    return response.rows ?? [];
  }
}
