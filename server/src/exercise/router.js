import { Router } from "express";
import { createExercise, getAllExercises, getExercise, updateExercise } from "./controller.js";

const router = Router();

router.post("/", createExercise);
router.get("/", getAllExercises);
router.get("/:id", getExercise);
router.patch("/:id", updateExercise);

export default router;
