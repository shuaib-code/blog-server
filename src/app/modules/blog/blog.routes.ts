import express from "express";
import auth from "../../middlewares/auth";
import validateInput from "../../middlewares/validateInput";
import { userRole } from "../user/user.constant";
import { BlogController } from "./blog.controller";
import { blogSchema } from "./blog.schema";

const router = express.Router();

router.post(
	"/",
	auth(userRole.user),
	validateInput(blogSchema.create),
	BlogController.create,
);

router.get("/", BlogController.getAll);
// router.get("/:id", BlogController.getSingle);
router.delete("/:id", auth(userRole.user), BlogController.delete);
router.patch(
	"/:id",
	auth(userRole.user),
	validateInput(blogSchema.update),
	BlogController.update,
);

export const BlogRoutes = router;
