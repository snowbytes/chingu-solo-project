import { model, Schema } from "mongoose";

export default model(
  "Exercise",
  Schema(
    {
      name: { type: String, required: true },
      reps: { type: Number, required: true },
      // extra load in KGs, not needed for bodyweight
      load: { type: Number },
    },
    { timestamps: true },
  ),
);
