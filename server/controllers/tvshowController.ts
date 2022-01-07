import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import TvShow from "../models/tvshow";

const createTV = (req: Request, res: Response, next: NextFunction) => {
  let { title, releaseYear, image, extraInformation } = req.body;

  const tv = new TvShow({
    _id: new mongoose.Types.ObjectId(),
    title,
    releaseYear,
    image,
    extraInformation,
  });

  return tv
    .save()
    .then((result) => {
      res.status(201).json({
        tv: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getTV = (req: Request, res: Response, next: NextFunction) => {
  TvShow.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        tvshows: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { createTV, getTV };
