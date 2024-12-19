import mongoose from "mongoose";
import { TErrorResponse } from "../interface/error.interface";

const CastError = (err: mongoose.Error.CastError): TErrorResponse => ({
	status: 400,
	message: "Invalid ID",
	details: [{ path: err.path, message: err.message }],
});

export default CastError;
