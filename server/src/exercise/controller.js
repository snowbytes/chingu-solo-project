import Exercise from "./model.js";

/**
 * attempts to create an exercise and responds with either the created object or an error
 * @param {import("express").Request} req an express request object
 * @param {import("express").Response} res an express response object
 */
export async function createExercise(req, res) {
  const { name, reps, load } = req.body;

  try {
    await Exercise.create({ name, reps, load });
    res.status(201).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
