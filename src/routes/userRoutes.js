import { Router } from "express";
import { login } from "../controller/userController.js";

const router = Router();

router.post("/login", login)

export default router;