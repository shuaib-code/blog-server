import express from "express";
import validateInput from "../../middlewares/validateInput";
import { AuthController } from "./auth.controller";
import { authSchema } from "./auth.schema";

const router = express.Router();

router.post(
	"/register",
	validateInput(authSchema.register),
	AuthController.register,
);
router.post("/login", validateInput(authSchema.login), AuthController.login);

export const AuthRoutes = router;
