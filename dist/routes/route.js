import { Router } from "express";
const router = Router();
import { login } from "../controllers/AuthController.js";
// Auth Routes
router.post("/auth/login", login);
export default router;
