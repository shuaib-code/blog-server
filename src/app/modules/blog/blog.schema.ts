import { z } from "zod";

const create = z.object({
	body: z.object({
		title: z
			.string()
			.min(1, { message: "Title is required" })
			.max(255, { message: "Title should not exceed 255 characters" }),
		content: z.string().min(1, { message: "Content is required" }),
	}),
});

const update = z.object({
	body: z.object({
		title: z
			.string()
			.min(1, { message: "Title is required" })
			.max(255, { message: "Title should not exceed 255 characters" })
			.optional(),
		content: z.string().min(1, { message: "Content is required" }).optional(),
	}),
});

export const blogSchema = { create, update };
