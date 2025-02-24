import { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm.jsx";
import { useExercisesContext } from "../hooks/useExercisesContext.js";
import exerciseService from "../services/exercise.js";

export default function Home() {
  const { exercises, dispatch } = useExercisesContext();

  useEffect(() => {
    exerciseService.getAll().then((data) => {
      dispatch({ type: "SET_EXERCISES", payload: data });
    });
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <div className="exercises">
        {exercises.map((exercise) => (
          <ExerciseDetails key={exercise._id} exercise={exercise} />
        ))}
      </div>

      <ExerciseForm createExercise={exerciseService.create} />
    </div>
  );
}

function ExerciseDetails({ exercise }) {
  return (
    <div className="exercise">
      <h3>{exercise.name}</h3>
      <p>Reps: {exercise.reps}</p>
      {exercise.load && <p>Load: {exercise.load}KG</p>}
      <p>Created: {new Date(exercise.createdAt).toLocaleString()}</p>
    </div>
  );
}
