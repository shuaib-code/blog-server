/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { env } from "../config/env";
import AppError from "../errors/AppError";
import CastError from "../errors/CastError";
import DuplicateError from "../errors/DuplicateError";
import ValidationError from "../errors/ValidationError";
import zodError from "../errors/ZodError";
import { TErrorDetail } from "../interface/error.interface";

const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
	let status = 500;
	let message = "Something went wrong!";
	let details: TErrorDetail[] = [{ path: "", message: "Something went wrong" }];

	if (err instanceof ZodError) {
		({ status, message, details } = zodError(err));
	} else if (err?.name === "ValidationError") {
		({ status, message, details } = ValidationError(err));
	} else if (err?.name === "CastError") {
		({ status, message, details } = CastError(err));
	} else if (err?.code === 11000) {
		({ status, message, details } = DuplicateError(err));
	} else if (err instanceof AppError) {
		status = err.status;
		message = err.message;
		details = [
			{
				path: "",
				message: err.message,
			},
		];
	} else if (err instanceof Error) {
		message = err.message;
		details = [
			{
				path: "",
				message: err.message,
			},
		];
	}

	// Send error response
	res.status(status).json({
		success: false,
		message,
		statusCode: status,
		error: details,
		stack: env.NODE_ENV === "development" ? err.stack : null,
	});
};

export default errorHandler;
