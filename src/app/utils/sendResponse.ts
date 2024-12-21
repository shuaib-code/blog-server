/* eslint-disable @typescript-eslint/no-explicit-any */
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
	const responsePayload: any = {
		success: true,
		statusCode,
		message,
	};

	// Add `data` field only if it is not null or undefined
	if (data !== null && data !== undefined) {
		responsePayload.data = data;
	}

	res.status(statusCode).json(responsePayload);
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
