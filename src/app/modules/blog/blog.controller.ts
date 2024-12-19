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

	getSingle: catchAsync(async (req, res) => {
		const { id } = req.params;
		const result = await BlogServices.getById(id);
		createResponse(res, "Blog found.", result);
	}),

	update: catchAsync(async (req, res) => {
		const { blog } = req.body;
		const result = await BlogServices.update(req.params.id, blog);
		createResponse(res, "Blog updated.", result);
	}),
};
