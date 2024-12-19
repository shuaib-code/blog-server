import mongoose from "mongoose";
import { TErrorDetail, TErrorResponse } from "../interface/error.interface";

const ValidationError = (
	err: mongoose.Error.ValidationError,
): TErrorResponse => {
	const details: TErrorDetail[] = Object.values(err.errors).map(
		(val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
			return {
				path: val?.path,
				message: val?.message,
			};
		},
	);

	return {
		status: 400,
		message: "Validation Error",
		details,
	};
};

export default ValidationError;
