import { Document } from "mongoose";

export default interface ITvShow extends Document {
  title: string;
  releaseYear: string;
  image: string;
  extraInformation: string;
}
