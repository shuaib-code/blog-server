import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { tokenUtils } from "../modules/auth/auth.utils";
import { TUserRole } from "../modules/user/user.interface";
import User from "../modules/user/user.model";
import catchAsync from "../utils/catchAsync";

const { UNAUTHORIZED, NOT_FOUND, FORBIDDEN } = StatusCodes;

const auth = (...requiredRoles: TUserRole[]) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const token =
			req.headers["authorization"]?.split(" ")[1] || req.cookies.token;
		console.log(token);
		// check if the token is missing
		if (!token) throw new AppError(UNAUTHORIZED, "You are not authorized!");

		// decode the token
		const decoded = tokenUtils.verify(token) as JwtPayload;
		const { id, role } = decoded;

		// checking if the user is exist
		const user = await User.findByID(id);

		if (!user) throw new AppError(NOT_FOUND, "User doesn't exist");
		if (user.isBlocked) throw new AppError(FORBIDDEN, "User was blocked !");

		if (requiredRoles && !requiredRoles.includes(role))
			throw new AppError(UNAUTHORIZED, "You are not authorized!");

		req.user = decoded as JwtPayload;
		next();
	});
};

export default auth;
