import { env } from "@app/common/config";
import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.json({
    api: "ok",
  });
});

app.listen(env.PORT, () => {
  console.log(`Сервер запущен: http://localhost:${env.PORT}`);
});
