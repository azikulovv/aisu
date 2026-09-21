import "dotenv/config";
import process from "process";
import * as v from "valibot";

type EnvData = v.InferOutput<typeof envSchema>;

const envSchema = v.object({
  PORT: v.pipe(
    v.string(),
    v.minLength(1, "Переменная PORT обязательна"),
    v.transform(Number),
    v.number("Переменная PORT должна быть числом"),
    v.minValue(1, "PORT должен быть больше 0"),
  ),

  POSTGRES_DB: v.pipe(
    v.string(),
    v.minLength(1, "Переменная POSTGRES_DB обязательна"),
  ),

  POSTGRES_USER: v.pipe(
    v.string(),
    v.minLength(1, "Переменная POSTGRES_USER обязательна"),
  ),

  POSTGRES_PASSWORD: v.pipe(
    v.string(),
    v.minLength(1, "Переменная POSTGRES_PASSWORD обязательна"),
  ),

  POSTGRES_PORT: v.pipe(
    v.string(),
    v.minLength(1, "Переменная POSTGRES_PORT обязательна"),
    v.transform(Number),
    v.number("Переменная POSTGRES_PORT должна быть числом"),
    v.minValue(1, "POSTGRES_PORT должен быть больше 0"),
  ),
});

const safeEnv = v.safeParse(envSchema, process.env);

safeEnv.issues?.forEach((issue) => {
  throw Error(issue.message);
});

export const env = safeEnv.output as EnvData;
