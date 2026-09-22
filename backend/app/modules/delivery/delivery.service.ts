import type { Delivery, ICreateDeliveryDto } from "./delivery.interface";
import type { DeliveryRepository } from "./delivery.repository";

export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async getAllByUserId(userId: string): Promise<Delivery[]> {
    return this.deliveryRepository.findAllByUserId(userId);
  }

  async getByIdAndUserId(
    deliveryId: string,
    userId: string,
  ): Promise<Delivery | null> {
    return this.deliveryRepository.findByIdAndUserId(deliveryId, userId);
  }

  async updatePayment(
    deliveryId: string,
    userId: string,
    isPaid: boolean,
  ): Promise<Delivery | null> {
    return this.deliveryRepository.updatePayment(deliveryId, userId, isPaid);
  }

  async create(dto: ICreateDeliveryDto): Promise<Delivery | null> {
    return this.deliveryRepository.create(dto);
  }
}
