import express from "express";
const app = express();

app.use((req, _, next) => {
  console.log(`${req.method} initiated on ${req.path}`);
  next();
});

app.get("/v1/api", (_, res) => {
  res.json({ data: "welcome to v1 of the project's API" });
});

export default app;
