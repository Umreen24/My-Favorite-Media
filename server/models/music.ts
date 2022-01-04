import mongoose, { Schema } from "mongoose";
import IMusic from "../interfaces/music";

const MusicSchema: Schema = new Schema(
  {
    artist: { type: String, required: true },
    album: { type: String, required: true },
    song: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    image: { type: String },
    extraInformation: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMusic>("Music", MusicSchema);
