export default function ExerciseDetails({ exercise }) {
  return (
    <div className="exercise">
      <h3>{exercise.name}</h3>
      <p>Reps: {exercise.reps}</p>
      {exercise.load && <p>Load: {exercise.load}KG</p>}
      <p>Created: {new Date(exercise.createdAt).toLocaleString()}</p>
    </div>
  );
}
