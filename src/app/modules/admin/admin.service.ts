import Blog from "../blog/blog.model";
import User from "../user/user.model";

const AdminServices = {
	delete: async (_id: string) => await Blog.deleteOne({ _id }),

	update: async (id: string) => {
		return await User.findByIdAndUpdate(
			id,
			{ isBlocked: true },
			{
				new: true,
				runValidators: true,
			},
		);
	},
};

export default AdminServices;
