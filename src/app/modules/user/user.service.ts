import { flattenObject } from "../../utils/fattenObject";
import { IUser } from "./user.interface";
import User from "./user.model";

const UserServices = {
	create: async (user: IUser) => {
		const { _id, email, name } = await User.create(user);
		return { _id, email, name };
	},

	getAll: async (query: Record<string, unknown>) => User.find(),

	getById: async (id: string) => await User.findOne({ id }),

	delete: async (id: string) => await User.deleteOne({ id }),

	update: async (id: string, updatedUser: Partial<IUser>) => {
		const updatedData = flattenObject(updatedUser);
		return await User.findByIdAndUpdate(id, updatedData, {
			new: true,
			runValidators: true,
		});
	},
};

export default UserServices;
