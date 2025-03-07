import Exercise from "./model.js";
import { Types } from "mongoose";

/**
 * attempts to create an exercise and responds with either the created object or an error
 * @param {import("express").Request} req an express request object
 * @param {import("express").Response} res an express response object
 */
export async function createExercise(req, res) {
  const { name, reps, load } = req.body;

  try {
    const exercise = await Exercise.create({ name, reps, load });
    res.status(200).json(exercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

/**
 * gets all exercises and sends them in a response
 * @param {import("express").Request} _ an express request object
 * @param {import("express").Response} res an express response object
 */
export async function getAllExercises(_, res) {
  const exercises = await Exercise.find({}).sort({ createdAt: -1 });
  res.status(200).json(exercises);
}

/**
 * attempts to get an exercise and sends it back or an error.
 * @param {import("express").Request} req an express request object
 * @param {import("express").Response} res an express response object
 */
export async function getExercise(req, res) {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "invalid id - Must be a valid ObjectId" });
  }

  const exercise = await Exercise.findById(id);

  if (!exercise) {
    return res
      .status(404)
      .json({ error: "the specified id doesn't match any exercise" });
  }

  res.status(200).json(exercise);
}

/**
 * attempts to update an exercise. sends back an error on failure.
 * @param {import("express").Request} req an express request object
 * @param {import("express").Response} res an express response object
 */
export async function updateExercise(req, res) {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "invalid id - Must be a valid ObjectId" });
  }

  try {
    const exercise = await Exercise.findOneAndUpdate(
      { _id: id },
      { ...req.body },
    );

    if (!exercise) {
      return res
        .status(404)
        .json({ error: "the specified id doesn't match any exercise" });
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

/**
 * attempts to delete an exercise. sends back an error on failure.
 * @param {import("express").Request} req an express request object
 * @param {import("express").Response} res an express response object
 */
export async function deleteExercise(req, res) {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "invalid id - Must be a valid ObjectId" });
  }

  const exercise = await Exercise.findOneAndDelete({ _id: id });

  if (!exercise) {
    return res
      .status(404)
      .json({ error: "the specified id doesn't match any exercise" });
  }

  res.status(200).json(exercise);
}
