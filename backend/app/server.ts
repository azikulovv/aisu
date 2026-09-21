import { env } from "@app/common/config";
import { pool } from "@app/infrastructure/db";
import express from "express";
import { authRouter } from "./modules/auth/auth.router";
import { storeRouter } from "./modules/store/store.router";

const app = express();

app.get("/health", async (_req, res) => {
  await pool.connect();

  res.json({
    api: "ok",
    database: "ok",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/stores", storeRouter);

app.listen(env.PORT, () => {
  console.log(`Сервер запущен: http://localhost:${env.PORT}`);
});
