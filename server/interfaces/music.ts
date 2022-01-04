import { Document } from "mongoose";

export default interface IMusic extends Document {
  artist: string;
  album: string;
  song: string;
  releaseYear: number;
  image: string;
  extraInformation: string;
}
