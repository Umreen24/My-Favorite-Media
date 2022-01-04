import mongoose, { Schema } from "mongoose";
import IMovie from "../interfaces/movie";

const MovieSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    image: { type: String },
    extraInformation: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMovie>("Movie", MovieSchema);
