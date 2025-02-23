import express from "express";
import exerciseRouter from "./exercise/router.js";

const app = express();

app.use(express.json());
app.use((req, _, next) => {
  console.info(`${req.method} initiated on ${req.path}`);
  next();
});

app.get("/v1/api", (_, res) => {
  res.json({ data: "welcome to v1 of the project's API" });
});

app.use("/v1/api/exercises", exerciseRouter);

export default app;
