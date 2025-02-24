import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ExercisesContextProvider } from "./contexts/ExercisesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExercisesContextProvider>
      <App />
    </ExercisesContextProvider>
  </StrictMode>,
);
