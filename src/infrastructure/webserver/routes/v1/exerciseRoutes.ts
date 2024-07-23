import { Router } from "express";
import {
  createExercise,
  getExercise,
  getExercises,
  deleteExercise,
  updateExercise,
} from "../../controllers/v1/exerciseController";

const router = Router();

router.get("/", getExercises);
router.get("/:exerciseId", getExercise);
router.post("/create", createExercise);
router.delete("/:exerciseId", deleteExercise);
router.put("/:exerciseId", updateExercise);

export default router;
