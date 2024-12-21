import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { createResponse } from "../../utils/sendResponse";
import BlogServices from "./blog.service";

export const BlogController = {
	create: catchAsync(async (req, res) => {
		const blog = { ...req.body, author: req.user.id };
		const result = await BlogServices.create(blog);
		createResponse(res, "Blog created.", result, StatusCodes.CREATED);
	}),

	getAll: catchAsync(async (req, res) => {
		const result = await BlogServices.getAll(req.query);
		createResponse(res, "Blogs retrieved.", result);
	}),

	update: catchAsync(async (req, res) => {
		const { id } = req.params;
		const { body, user } = req;
		const result = await BlogServices.update(id, body, user.id);
		createResponse(res, "Blog updated.", result);
	}),

	delete: catchAsync(async (req, res) => {
		const { id } = req.params;
		const { user } = req;
		const result = await BlogServices.delete(id, user.id);
		if (result) createResponse(res, "Blog deleted.");
	}),
};
