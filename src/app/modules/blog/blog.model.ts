import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
	{
		title: {
			type: String,
			required: [true, "Title is required"],
			trim: true,
		},
		content: {
			type: String,
			required: [true, "Content is required"],
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: [true, "Author is required"],
		},
		isPublished: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true },
);

const Blog = model("Blog", blogSchema);
export default Blog;
