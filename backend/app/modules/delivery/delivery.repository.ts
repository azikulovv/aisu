import type { Pool } from "pg";
import type { Delivery, ICreateDeliveryDto } from "./delivery.interface";

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

  async create({
    user_id,
    store_id,
    product_name,
    is_paid,
  }: ICreateDeliveryDto): Promise<Delivery | null> {
    const response = await this.db.query<Delivery>(
      `
      INSERT INTO deliveries (user_id, store_id, product_name, is_paid)
      SELECT $1, $2, $3, $4
      WHERE EXISTS (
        SELECT 1 FROM stores
        WHERE id = $2 AND user_id = $1
      )
      RETURNING id, user_id, store_id, product_name, is_paid, created_at, updated_at;
    `,
      [user_id, store_id, product_name, is_paid],
    );

    return response.rows[0] ?? null;
  }
}
