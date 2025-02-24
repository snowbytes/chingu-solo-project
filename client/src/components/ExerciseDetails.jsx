import { useExercisesContext } from "../hooks/useExercisesContext";

export default function ExerciseDetails({ exercise, deleteExercise }) {
  const { dispatch } = useExercisesContext();

  async function handleClick() {
    const response = await deleteExercise(exercise._id);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EXERCISE", payload: data });
    }
  }

  return (
    <div className="exercise">
      <h3>{exercise.name}</h3>
      <p>Reps: {exercise.reps}</p>
      {exercise.load && <p>Load: {exercise.load}KG</p>}
      <p>Created: {new Date(exercise.createdAt).toLocaleString()}</p>
      <span onClick={handleClick} className="material-symbols-outlined">delete</span>
    </div>
  );
}
