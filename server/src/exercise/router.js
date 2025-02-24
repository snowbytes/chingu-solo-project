import { Router } from "express";
import { createExercise, getAllExercises, getExercise } from "./controller.js";

const router = Router();

router.post("/", createExercise);
router.get("/", getAllExercises);
router.get("/:id", getExercise);

export default router;
