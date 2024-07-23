import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
} from "../../controllers/v1/userController";
import { authMiddleware } from "middleware/authMiddleware";

const router = Router();

router.get("/", authMiddleware, getUser);
router.post("/create", authMiddleware, createUser);
router.patch("/update", authMiddleware, updateUser);

export default router;
