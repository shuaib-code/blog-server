import { IUser } from "./user.interface";
import User from "./user.model";

const UserServices = {
	create: async (user: IUser) => {
		const { _id, email, name } = await User.create(user);
		return { _id, email, name };
	},
};

export default UserServices;
