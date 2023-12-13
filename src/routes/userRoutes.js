import { Router } from "express";
import { createUser, login } from "../controller/userController.js";
import { validateLogin } from "../middleware/validateLogin.js";

const router = Router();

router.post("/login", validateLogin, login);
router.post("/create", uploadPhoto,createUser);

export default router;