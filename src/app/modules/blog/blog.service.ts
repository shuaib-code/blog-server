import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { flattenObject } from "../../utils/fattenObject";
import QueryBuilder from "../../utils/queryBuilder";
import { blogSearchFields } from "./blog.constant";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const BlogServices = {
	create: async (blog: IBlog) => {
		const { _id } = await Blog.create(blog);
		return await Blog.findById(_id)
			.select("title content author")
			.populate({ path: "author", select: "name email" });
	},

	getAll: async (query: Record<string, unknown>) => {
		const blogQuery = new QueryBuilder(
			Blog.find().select("title content author"),
			query,
		);

		const data = await blogQuery
			.search(blogSearchFields)
			.filter()
			.sort()
			.select()
			.build()
			.populate({ path: "author", select: "name email" });

		return data;
	},

	getById: async (id: string) => await Blog.findOne({ id }),

	delete: async (_id: string, userId: string) => {
		const blog = await Blog.findOne({ _id });

		if (!blog) throw new AppError(404, "Blog not found");
		if (String(blog.author) !== userId)
			throw new AppError(
				StatusCodes.UNAUTHORIZED,
				"You are not authorized to update this blog",
			);

		return await Blog.deleteOne({ _id });
	},

	update: async (id: string, updatedBlog: Partial<IBlog>, userId: string) => {
		const blog = await Blog.findOne({ _id: id });

		if (!blog) throw new AppError(404, "Blog not found");
		if (String(blog.author) !== userId)
			throw new AppError(
				StatusCodes.UNAUTHORIZED,
				"You are not authorized to update this blog",
			);

		const updatedData = flattenObject(updatedBlog);
		return await Blog.findByIdAndUpdate(id, updatedData, {
			new: true,
			runValidators: true,
		})
			.select("title content author")
			.populate({ path: "author", select: "name email" });
	},
};

export default BlogServices;
