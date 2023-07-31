import { Router } from "express";
import * as  userController from "../controllers/user.controller";

const router = Router();

router
    .route("/")
    .post(userController.createUser)
    .get(userController.getUsers);

router
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

export default router;