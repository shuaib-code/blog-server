import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import { createResponse } from "../../utils/sendResponse";
import AdminServices from "./admin.service";

const { INTERNAL_SERVER_ERROR: status } = StatusCodes;

export const AdminController = {
	delete: catchAsync(async (req, res) => {
		const { id } = req.params;
		const result = await AdminServices.delete(id);

		if (!result.deletedCount)
			throw new AppError(status, "Something went worng.");

		createResponse(res, "Blog deleted successfully");
	}),

	block: catchAsync(async (req, res) => {
		const { userId } = req.params;
		const result = await AdminServices.update(userId);

		if (!result) throw new AppError(status, "Something went worng.");

		createResponse(res, "User blocked successfully");
	}),
};
