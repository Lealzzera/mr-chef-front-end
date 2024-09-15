import { z } from "zod";

const envsBodySchema = z.object({
  AUTH_SECRET: z.string(),
  MR_CHEFE_URL: z.string(),
  JWT_ACCES_TOKEN_SECRET: z.string(),
  JWT_REFRESH_TOKEN_SECRET: z.string(),
});

const _env = envsBodySchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables.", _env.error.format());
  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
