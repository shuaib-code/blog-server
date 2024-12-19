import { NextFunction, Request } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateInput = (Schema: AnyZodObject) =>
	catchAsync(async (req: Request, _, next: NextFunction) => {
		await Schema.parseAsync({
			body: req.body,
			cookies: req.cookies,
		});
		next();
	});

export default validateInput;
