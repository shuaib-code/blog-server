import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import User from "../user/user.model";
import { IJWTPayload, ILoginUser } from "./auth.interface";
import { tokenUtils, verifyPassword } from "./auth.utils";

const AuthServices = {
	login: async (payload: ILoginUser) => {
		const { email, password } = payload;

		// check if user exist
		const user = await User.findByEmail(email);

		if (!user) throw new AppError(StatusCodes.NOT_FOUND, "User doesn't exist");
		if (user.isBlocked)
			throw new AppError(StatusCodes.FORBIDDEN, "User was blocked !");

		// verify user password
		const isValid = await verifyPassword(password, user.password);
		if (!isValid)
			throw new AppError(StatusCodes.FORBIDDEN, "Password doesn't match.");

		const JWTPayload: IJWTPayload = {
			id: user._id,
			role: user.role,
		};
		const token = tokenUtils.create(JWTPayload);
		return token;
	},
};

export default AuthServices;
