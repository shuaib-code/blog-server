import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";

const router = Router();

const moduleRoutes = [
	{
		path: "/blogs",
		route: BlogRoutes,
	},
	{
		path: "/auth",
		route: AuthRoutes,
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
