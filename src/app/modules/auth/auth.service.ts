import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { flattenObject } from "../../utils/fattenObject";
import User from "../user/user.model";
import { IJWTPayload, ILoginUser, TAuth } from "./auth.interface";
import Auth from "./auth.model";
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
		console.log(token);
		return token;
	},

	create: async (auth: TAuth) => await Auth.create(auth),
	getById: async (id: string) => await Auth.findOne({ id }),
	delete: async (id: string) => await Auth.deleteOne({ id }),
	update: async (id: string, updatedAuth: Partial<TAuth>) => {
		const updatedData = flattenObject(updatedAuth);
		return await Auth.findByIdAndUpdate(id, updatedData, {
			new: true,
			runValidators: true,
		});
	},
};

export default AuthServices;
