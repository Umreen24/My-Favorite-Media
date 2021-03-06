import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Movie from "../models/movie";

const createMovie = (req: Request, res: Response, next: NextFunction) => {
  let { title, releaseYear, image, extraInformation } = req.body;

  const movie = new Movie({
    _id: new mongoose.Types.ObjectId(),
    title,
    releaseYear,
    image,
    extraInformation,
  });

  return movie
    .save()
    .then((result) => {
      res.status(201).json({
        movie: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getMovies = (req: Request, res: Response, next: NextFunction) => {
  Movie.find()
    .exec()
    .then((results) => {
      return res.status(200).json({ movies: results, count: results.length });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message, error });
    });
};

export default { createMovie, getMovies };
