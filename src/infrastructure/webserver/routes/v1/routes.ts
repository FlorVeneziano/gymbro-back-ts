import { Router } from "express";
import userRouter from "./userRoutes";
import { authMiddleware } from "middleware/authMiddleware";
import { userMiddleware } from "middleware/userMiddleware";
import routineRoutes from "./routineRoutes";
import exerciseRoutes from "./exerciseRoutes";

const router = Router();

router.use("/exercises", exerciseRoutes);
router.use("/users", userRouter);
router.use("/routines", [authMiddleware, userMiddleware], routineRoutes);

export default router;
