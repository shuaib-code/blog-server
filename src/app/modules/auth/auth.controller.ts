import { StatusCodes } from "http-status-codes";
import { env } from "../../config/env";
import { createResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import UserServices from "../user/user.service";
import AuthServices from "./auth.service";

export const AuthController = {
	register: catchAsync(async (req, res) => {
		const result = await UserServices.create(req.body);
		createResponse(
			res,
			"User registered successfully",
			result,
			StatusCodes.CREATED,
		);
	}),

	login: catchAsync(async (req, res) => {
		const token = await AuthServices.login(req.body);

		res.cookie("token", token, {
			httpOnly: true,
			secure: env.NODE_ENV === "production",
		});

		// Send the token in the Authorization header (Bearer token)
		res.setHeader("Authorization", `Bearer ${token}`);

		createResponse(res, "Login successful", { token });
	}),
};
