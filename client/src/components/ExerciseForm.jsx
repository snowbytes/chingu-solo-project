import { useState } from "react";

export default function ExerciseForm({ createExercise }) {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exercise = { name, reps };
    if (load) {
      exercise.load = load;
    }

    const response = await createExercise(exercise)

    if (!response.ok) {
      const data = await response.json()
      return setError(data.error)
    } 
    setName("");
    setReps("");
    setLoad("");
    setError(null)
  };

  return (
    <div className="form-container">
      <h3>Create a new exercise</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />

        <label htmlFor="reps">Number of reps:</label>
        <input
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          type="number"
          value={reps}
        />

        <label htmlFor="load">Load in kg (if any):</label>
        <input
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          type="number"
          value={load}
        />

        <button>Save</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
