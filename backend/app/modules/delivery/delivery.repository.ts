import type { Pool } from "pg";
import type { Delivery, ICreateDeliveryDto } from "./delivery.interface";

export class DeliveryRepository {
  constructor(private readonly db: Pool) {}

  async findAllByStoreIdAndUserId(
    storeId: string,
    userId: string,
  ): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT d.id, d.user_id, d.store_id, s.name AS store_name,
             d.product_name, d.quantity, d.is_paid, d.created_at, d.updated_at
      FROM deliveries d
      JOIN stores s ON s.id = d.store_id
      WHERE d.store_id = $1 AND d.user_id = $2
      ORDER BY d.created_at DESC;
    `,
      [storeId, userId],
    );

    return response.rows ?? [];
  }

  async findAll(id: string): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT d.id, d.user_id, d.store_id, s.name AS store_name,
             d.product_name, d.quantity, d.is_paid, d.created_at, d.updated_at
      FROM deliveries d
      JOIN stores s ON s.id = d.store_id
      WHERE d.user_id = $1
      ORDER BY d.created_at DESC;
    `,
      [id],
    );

    return response.rows ?? [];
  }

  async findByIdAndUserId(
    deliveryId: string,
    userId: string,
  ): Promise<Delivery | null> {
    const response = await this.db.query<Delivery>(
      `
      SELECT d.id, d.user_id, d.store_id, s.name AS store_name,
             d.product_name, d.quantity, d.is_paid, d.created_at, d.updated_at
      FROM deliveries d
      JOIN stores s ON s.id = d.store_id
      WHERE d.id = $1 AND d.user_id = $2
      LIMIT 1;
    `,
      [deliveryId, userId],
    );

    return response.rows[0] ?? null;
  }

  async create({
    user_id,
    store_id,
    product_name,
    quantity,
    is_paid,
  }: ICreateDeliveryDto): Promise<Delivery | null> {
    const response = await this.db.query<Delivery>(
      `
      WITH inserted AS (
        INSERT INTO deliveries (
          user_id, store_id, product_name, quantity, is_paid
        )
        SELECT $1, $2, $3, $4, $5
        WHERE EXISTS (
          SELECT 1 FROM stores
          WHERE id = $2 AND user_id = $1
        )
        RETURNING id, user_id, store_id, product_name, quantity,
                  is_paid, created_at, updated_at
      )
      SELECT i.id, i.user_id, i.store_id, s.name AS store_name,
             i.product_name, i.quantity, i.is_paid,
             i.created_at, i.updated_at
      FROM inserted i
      JOIN stores s ON s.id = i.store_id;
    `,
      [user_id, store_id, product_name, quantity, is_paid],
    );

    return response.rows[0] ?? null;
  }

  async updatePayment(
    deliveryId: string,
    userId: string,
    isPaid: boolean,
  ): Promise<Delivery | null> {
    const response = await this.db.query<Delivery>(
      `
      WITH updated AS (
        UPDATE deliveries
        SET is_paid = $3, updated_at = NOW()
        WHERE id = $1 AND user_id = $2
        RETURNING id, user_id, store_id, product_name, quantity,
                  is_paid, created_at, updated_at
      )
      SELECT u.id, u.user_id, u.store_id, s.name AS store_name,
             u.product_name, u.quantity, u.is_paid,
             u.created_at, u.updated_at
      FROM updated u
      JOIN stores s ON s.id = u.store_id;
    `,
      [deliveryId, userId, isPaid],
    );

    return response.rows[0] ?? null;
  }
}
