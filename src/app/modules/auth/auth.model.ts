import { TAuth, AuthModel } from "./auth.interface";
import { Schema, model } from "mongoose";

const authSchema = new Schema<TAuth, AuthModel>(
	{
		name: { type: String, required: true },
	},
	{ timestamps: true },
);

const Auth = model("Auth", authSchema);
export default Auth;
