import { useContext } from "react";
import { ExercisesContext } from "../contexts/ExercisesContext";

export function useExercisesContext() {
  const context = useContext(ExercisesContext);

  if (!context) {
    {
      throw new Error(
        "useExercisesContext cannot be used outside its ExercisesContextProvider",
      );
    }
  }

  return context;
}
