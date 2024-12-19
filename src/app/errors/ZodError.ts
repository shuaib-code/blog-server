import { ZodError, ZodIssue } from "zod";
import { TErrorResponse } from "../interface/error.interface";

const zodError = (err: ZodError): TErrorResponse => ({
	status: 400,
	message: "Validation Error",
	details: err.issues.map(({ path, message }: ZodIssue) => ({
		path: path[path.length - 1],
		message,
	})),
});

export default zodError;
