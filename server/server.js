import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

// needed to be first
import "./env.js";

import app from "./src/app.js";

// this setup is to allow the server to serve frontend production files
// see package.json's build script
if (process.env.NODE_ENV == "production") {
  const staticDir = fileURLToPath(new URL("../client/dist", import.meta.url));

  app.use(express.static(staticDir));
  app.get("*", (_, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
  });
}

const PORT = process.env.PORT;
if (PORT === undefined) {
  throw new Error(
    "error finding PORT in env vars. setup .env.local following the documentation inside .env",
  );
}

createServer(app).listen(PORT, () => {
  console.info(`server has started listening on port ${PORT}`);
});
