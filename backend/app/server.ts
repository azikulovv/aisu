import { errorHandler } from "@app/common/middleware/error-handler";
import { corsOptions } from "@app/common/utils/cors";
import { env } from "@app/config";
import { pool } from "@app/infrastructure/db";
import { authRouter } from "@app/modules/auth/auth.router";
import { storeRouter } from "@app/modules/store/store.router";

import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

app.get("/health", async (_req, res) => {
  await pool.connect();

  res.json({
    api: "ok",
    database: "ok",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/stores", storeRouter);

app.use((_req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Маршрут не найден",
    },
  });
});

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Сервер запущен: http://localhost:${env.PORT}`);
});
