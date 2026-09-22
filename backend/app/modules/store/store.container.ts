import { pool } from "@app/infrastructure/db";
import { DeliveryRepository } from "../delivery/delivery.repository";
import { StoreController } from "./store.controller";
import { StoreRepository } from "./store.repository";
import { StoreService } from "./store.service";

const repository = new StoreRepository(pool);
const deliveriesRepository = new DeliveryRepository(pool);
const service = new StoreService(repository, deliveriesRepository);
export const controller = new StoreController(service);
