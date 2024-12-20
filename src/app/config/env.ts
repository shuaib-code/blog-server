/* eslint-disable no-console */
import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

dotenv.config({ path: path.join(process.cwd(), ".env") });

// Define a schema for environment variables
const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	PORT: z.coerce.number().min(1).max(65535).default(3000),
	DATABASE_URL: z.string().url(),
	JWT_SECRET: z
		.string()
		.min(32, "JWT_SECRET must be at least 32 characters long"),
	BCRYPT_SALT: z.coerce.number().min(1).max(999).default(10),
	JWT_EXPIRATION: z.string().min(1).default("1h"),
});

// Validate the environment variables
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("Environment validation failed:", parsedEnv.error.format());
	process.exit(1);
}

export const env = parsedEnv.data;
