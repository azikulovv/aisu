import { env } from "@app/common/config";
import { Pool } from "pg";

export const pool = new Pool({
  database: env.POSTGRES_NAME,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
});
