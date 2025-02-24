import { useEffect } from "react";
import ExerciseDetails from "../components/exerciseDetails.jsx";
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
      <ExerciseForm createExercise={exerciseService.create} />
      
      <div className="exercises">
        {exercises.map((exercise) => (
          <ExerciseDetails
            key={exercise._id}
            exercise={exercise}
            deleteExercise={exerciseService.remove}
          />
        ))}
      </div>
    </div>
  );
}
