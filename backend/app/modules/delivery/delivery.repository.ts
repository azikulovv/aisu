import type { Pool } from "pg";
import type { Delivery, ICreateDeliveryDto } from "./delivery.interface";

const deliveryFields = (alias: string) => `
  ${alias}.id, ${alias}.user_id, ${alias}.store_id, s.name AS store_name,
  ${alias}.product_name, ${alias}.quantity, ${alias}.is_paid,
  ${alias}.created_at, ${alias}.updated_at
`;

export class DeliveryRepository {
  constructor(private readonly db: Pool) {}

  async findAllByStoreIdAndUserId(
    storeId: string,
    userId: string,
  ): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT ${deliveryFields("d")}
      FROM deliveries d
      JOIN stores s ON s.id = d.store_id
      WHERE d.store_id = $1 AND d.user_id = $2
      ORDER BY d.created_at DESC;
    `,
      [storeId, userId],
    );

    return response.rows ?? [];
  }

  async findAllByUserId(userId: string): Promise<Delivery[]> {
    const response = await this.db.query<Delivery>(
      `
      SELECT ${deliveryFields("d")}
      FROM deliveries d
      JOIN stores s ON s.id = d.store_id
      WHERE d.user_id = $1
      ORDER BY d.created_at DESC;
    `,
      [userId],
    );

    return response.rows ?? [];
  }

  async findByIdAndUserId(
    deliveryId: string,
    userId: string,
  ): Promise<Delivery | null> {
    const response = await this.db.query<Delivery>(
      `
      SELECT ${deliveryFields("d")}
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
      SELECT ${deliveryFields("i")}
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
      SELECT ${deliveryFields("u")}
      FROM updated u
      JOIN stores s ON s.id = u.store_id;
    `,
      [deliveryId, userId, isPaid],
    );

    return response.rows[0] ?? null;
  }
}
