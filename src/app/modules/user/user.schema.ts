import { z } from "zod";

const register = z.object({
	body: z.object({
		name: z
			.string()
			.min(1, { message: "Name is required" })
			.max(255, { message: "Name should not exceed 255 characters" }),

		email: z
			.string()
			.email({ message: "Please provide a valid email address" })
			.min(1, { message: "Email is required" }),

		password: z
			.string()
			.min(6, { message: "Password should be at least 6 characters long" })
			.max(255, { message: "Password should not exceed 255 characters" }),
	}),
});
const update = register.optional();

export const userSchema = { register, update };
