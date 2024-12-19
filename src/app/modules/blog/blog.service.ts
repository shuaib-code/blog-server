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
		const blogQuery = new QueryBuilder(Blog.find(), query);

		const data = await blogQuery
			.search(blogSearchFields)
			.filter()
			.paginate()
			.sort()
			.select()
			.build();

		const meta = await blogQuery.countTotal();
		return { data, meta };
	},

	getById: async (id: string) => await Blog.findOne({ id }),

	delete: async (id: string) => await Blog.deleteOne({ id }),

	update: async (id: string, updatedBlog: Partial<IBlog>) => {
		const updatedData = flattenObject(updatedBlog);
		return await Blog.findByIdAndUpdate(id, updatedData, {
			new: true,
			runValidators: true,
		});
	},
};

export default BlogServices;
