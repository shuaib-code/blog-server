import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.create);
// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getSingle);
// router.patch('/:id', UserController.update);

export const UserRoutes = router;
