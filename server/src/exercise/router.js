import { Router } from "express";
import {
  createExercise,
  deleteExercise,
  getAllExercises,
  getExercise,
  updateExercise,
} from "./controller.js";

const router = Router();

router.post("/", createExercise);
router.get("/", getAllExercises);
router.get("/:id", getExercise);
router.patch("/:id", updateExercise);
router.delete("/:id", deleteExercise);

export default router;
