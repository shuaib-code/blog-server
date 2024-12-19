import { TAdmin, AdminModel } from "./admin.interface";
import { Schema, model } from "mongoose";

const adminSchema = new Schema<TAdmin, AdminModel>(
	{
		name: { type: String, required: true },
	},
	{ timestamps: true },
);

const Admin = model("Admin", adminSchema);
export default Admin;
