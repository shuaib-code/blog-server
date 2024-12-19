import { Model } from "mongoose";
import { userRole } from "./user.constant";

export type role = "admin" | "user";

export interface IUser {
	name: string;
	email: string;
	password: string;
	role: role;
	isBlocked: boolean;
}

export interface IUserWith_id extends IUser {
	_id: string;
}

export interface UserModel extends Model<IUser> {
	findByEmail(email: string): Promise<IUserWith_id>;
	findByID(email: string): Promise<IUserWith_id>;
}

export type TUserRole = keyof typeof userRole;
