import mongoose, { Schema } from "mongoose";
import ITvShow from "../interfaces/tvshow";

const TvSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    releaseYear: { type: String, required: true },
    image: { type: String },
    extraInformation: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITvShow>("TV", TvSchema);
