import { Response } from "express";

type TResponse<T> = {
	statusCode: number;
	message: string;
	data?: T | T[] | null;
};

// Centralized response handler function
const sendResponse = <T>(
	res: Response,
	{ statusCode, message, data = null }: TResponse<T>,
) => {
	res.status(statusCode).json({
		success: true,
		statusCode,
		message,
		data,
	});
};

// Helper function to create a standardized response
const createResponse = <T>(
	res: Response,
	message: string,
	data?: T | T[] | null,
	statusCode: number = 200, // Default to 200 if no status code is provided
) => {
	sendResponse(res, { statusCode, message, data });
};

export { createResponse, sendResponse };
