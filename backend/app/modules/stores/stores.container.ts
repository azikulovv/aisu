import { pool } from "@app/infrastructure/db";
import { DeliveriesRepository } from "../deliveries/deliveries.repository";
import { StoreController } from "./stores.controller";
import { StoreRepository } from "./stores.repository";
import { StoreService } from "./stores.service";

const repository = new StoreRepository(pool);
const deliveriesRepository = new DeliveriesRepository(pool);
const service = new StoreService(repository, deliveriesRepository);
export const controller = new StoreController(service);
