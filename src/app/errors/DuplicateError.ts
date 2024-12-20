/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorResponse } from "../interface/error.interface";

const DuplicateError = (err: any): TErrorResponse => {
	const extractedMessage = err.message.match(/"([^"]*)"/)?.[1];

	return {
		status: 400,
		message: "Invalid ID",
		details: [{ path: "", message: `${extractedMessage} already exists` }],
	};
};

export default DuplicateError;
