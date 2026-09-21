import "dotenv/config";
import process from "process";
import * as v from "valibot";

type EnvData = v.InferOutput<typeof envSchema>;

const envSchema = v.object({
  PORT: v.pipe(v.string("Переменная PORT должна быть числом!"), v.minLength(1)),
  POSTGRES_NAME: v.pipe(
    v.string("Переменная POSTGRES_NAME должна быть числом!"),
    v.minLength(1),
  ),
  POSTGRES_USER: v.pipe(
    v.string("Переменная POSTGRES_USER должна быть числом!"),
    v.minLength(1),
  ),
  POSTGRES_PASSWORD: v.pipe(
    v.string("Переменная POSTGRES_PASSWORD должна быть числом!"),
    v.minLength(1),
  ),
});

const safeEnv = v.safeParse(envSchema, process.env);

safeEnv.issues?.forEach((issue) => {
  throw Error(issue.message);
});

export const env = safeEnv.output as EnvData;
