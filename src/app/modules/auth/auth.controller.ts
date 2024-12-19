import { StatusCodes } from "http-status-codes";
import { env } from "../../config/env";
import catchAsync from "../../utils/catchAsync";
import { createResponse } from "../../utils/sendResponse";
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

	create: catchAsync(async (req, res) => {
		const { auth: authData } = req.body;
		const result = await AuthServices.create(authData);
		createResponse(res, "Auth created.", result, StatusCodes.CREATED);
	}),

	getSingle: catchAsync(async (req, res) => {
		const { id } = req.params;
		const result = await AuthServices.getById(id);
		createResponse(res, "Auth found.", result);
	}),

	update: catchAsync(async (req, res) => {
		const { auth } = req.body;
		const result = await AuthServices.update(req.params.id, auth);
		createResponse(res, "Auth updated.", result);
	}),
};
