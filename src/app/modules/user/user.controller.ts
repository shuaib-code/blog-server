import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { createResponse } from "../../utils/sendResponse";
import UserServices from "./user.service";

export const UserController = {
	create: catchAsync(async (req, res) => {
		const { user: userData } = req.body;
		const result = await UserServices.create(userData);
		createResponse(res, "User created.", result, StatusCodes.CREATED);
	}),
};
