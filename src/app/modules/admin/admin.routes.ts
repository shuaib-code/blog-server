import express from "express";
import auth from "../../middlewares/auth";
import { userRole } from "../user/user.constant";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.delete("/blogs/:id", auth(userRole.admin), AdminController.delete);
router.patch(
	"/users/:userId/block",
	auth(userRole.admin),
	AdminController.block,
);

export const AdminRoutes = router;
