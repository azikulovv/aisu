import type { Pool } from "pg";
import { Delivery } from "./delivery.interface";

export class DeliveryRepository {
  constructor(private readonly db: Pool) {}

  async findAllByStoreId(id: string): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT id, store_id, product_name, is_paid, created_at, updated_at
      FROM deliveries
      WHERE store_id = $1
      ORDER BY created_at DESC;
    `,
      [id],
    );

    return response.rows ?? [];
  }

  async findAll(id: string): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT id, user_id, product_name, is_paid, created_at, updated_at
      FROM deliveries
      WHERE user_id = $1
      ORDER BY created_at DESC;
    `,
      [id],
    );

    return response.rows ?? [];
  }
}
