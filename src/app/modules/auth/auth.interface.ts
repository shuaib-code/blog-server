import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Model } from "mongoose";

export interface TAuth {
	name: string;
}

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
export interface AuthModel extends Model<TAuth> {}
