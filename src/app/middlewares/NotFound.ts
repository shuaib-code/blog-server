import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	console.error(`[404 Error] ${req.method} ${req.originalUrl}`); // Log the 404 error for debugging
	return res.status(StatusCodes.NOT_FOUND).json({
		success: false,
		message: "API Endpoint Not Found !!",
		error: "",
	});
};

export default notFound;
