import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Movie from "../models/movie";

const createMovie = (req: Request, res: Response, next: NextFunction) => {
  let { title, releaseYear, image, extraInformation } = req.body;
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
