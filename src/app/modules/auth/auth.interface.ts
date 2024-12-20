import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface ILoginUser {
	email: string;
	password: string;
}

export interface IJWTPayload {
	id: string;
	role: string;
}

export interface AuthRequest extends Partial<Request> {
	user?: JwtPayload | IJWTPayload;
}
