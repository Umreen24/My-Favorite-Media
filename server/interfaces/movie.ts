import { Document } from "mongoose";

export default interface IMovie extends Document {
  title: string;
  releaseYear: number;
  image: string;
  extraInformation: string;
}
