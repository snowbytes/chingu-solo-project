import { useEffect, useState } from "react";
import exerciseService from "../services/exercise.js";

export default function Home() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    exerciseService.getAll().then((data) => {
      setExercises(data);
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
