import { env } from "@app/common/config";
import express from "express";
import { pool } from "./infrastructure/db";

const app = express();

app.get("/health", async (_req, res) => {
  await pool.connect();

  res.json({
    api: "ok",
    database: "ok",
  });
});

app.listen(env.PORT, () => {
  console.log(`Сервер запущен: http://localhost:${env.PORT}`);
});
