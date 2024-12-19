import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { IJWTPayload } from "./auth.interface";

export const hashPassword = (password: string): Promise<string> =>
	bcrypt.hash(password, env.BCRYPT_SALT);

export const verifyPassword = (
	password: string,
	hashedPassword: string,
): Promise<boolean> => bcrypt.compare(password, hashedPassword);

const createJwtToken = (payload: IJWTPayload): string => {
	return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
};

const verifyJwtToken = (token: string): any => {
	return jwt.verify(token, env.JWT_SECRET);
};

// Wrapper functions to handle both create and verify
export const tokenUtils = {
	create: createJwtToken,
	verify: verifyJwtToken,
};
