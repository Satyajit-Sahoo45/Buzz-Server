import { Router } from "express";
const router = Router();
import { login } from "../controllers/AuthController.js";
import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/ChatGroupController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

// Auth Routes
router.post("/auth/login", login);

// Chat Group Routes
router.get("/chat-group", authMiddleware, index);
router.get("/chat-group/:id", show);
router.post("/chat-group", authMiddleware, store);
router.put("/chat-group/:id", authMiddleware, update);
router.delete("/chat-group/:id", authMiddleware, destroy);

export default router;
