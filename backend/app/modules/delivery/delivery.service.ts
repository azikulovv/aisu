import type { Delivery } from "./delivery.interface";
import type { DeliveryRepository } from "./delivery.repository";

export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async getAllByUserId(userId: string): Promise<Delivery[]> {
    return this.deliveryRepository.findAll(userId);
  }
}
