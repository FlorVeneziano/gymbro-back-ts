import { Router } from "express";
import {
  getRoutine,
  createRoutine,
  getRoutines,
} from "../../controllers/v1/routineController";

const router = Router();

router.get("/", getRoutines);
router.get("/:routineId", getRoutine);
router.post("/create", createRoutine);

export default router;
