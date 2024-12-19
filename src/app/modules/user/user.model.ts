import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { env } from "../../config/env";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
				},
				message: "Please provide a valid email address",
			},
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password should be at least 6 characters long"],
			select: 0,
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

// encrypt password with hasing
userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, Number(env.BCRYPT_SALT));

	next();
});

// remove the password from response
userSchema.post("save", function (doc, next) {
	doc.password = "";
	next();
});

// get user by email
userSchema.statics.findByEmail = async (email: string) => {
	return await User.findOne({ email }).select("+password");
};

// get user by ID
userSchema.statics.findByID = async (id: string) => {
	return await User.findOne({ _id: id }).select("+password");
};

const User = model<IUser, UserModel>("User", userSchema);

export default User;
