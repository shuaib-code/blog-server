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

	// getAll: catchAsync(async (req, res) => {
	//   const result = await UserServices.getAll(req.query);
	//   createResponse(res, 'Users retrieved.', result);
	// }),

	// getSingle: catchAsync(async (req, res) => {
	//   const { id } = req.params;
	//   const result = await UserServices.getById(id);
	//   createResponse(res, 'User found.', result);
	// }),

	// update: catchAsync(async (req, res) => {
	//   const { user } = req.body;
	//   const result = await UserServices.update(req.params.id, user);
	//   createResponse(res, 'User updated.', result);
	// }),
};
