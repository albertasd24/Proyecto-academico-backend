import { Router } from "express";
import { avatar, createUser, login } from "../controller/userController.js";
import { validateLogin } from "../middleware/validateLogin.js";
import { uploadPhoto } from "../middleware/uploadPhoto.js";

const router = Router();

router.get("/avatar/:name", avatar);
router.post("/login", validateLogin, login);
router.post("/create", uploadPhoto, createUser);

export default router;