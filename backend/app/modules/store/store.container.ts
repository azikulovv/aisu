import { pool } from "@app/infrastructure/db";
import { StoreController } from "./store.controller";
import { StoreRepository } from "./store.repository";
import { StoreService } from "./store.service";

const repository = new StoreRepository(pool);
const service = new StoreService(repository);
export const controller = new StoreController(service);
