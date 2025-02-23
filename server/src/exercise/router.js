import { Router } from "express";
import { createExercise } from "./controller.js";

const router = Router();

router.post("/", createExercise);

export default router;
