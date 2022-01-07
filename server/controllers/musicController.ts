import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Music from "../models/music";

const createMusic = (req: Request, res: Response, next: NextFunction) => {
  let { artist, album, song, releaseYear, image, extraInformation } = req.body;

  const music = new Music({
    _id: new mongoose.Types.ObjectId(),
    artist,
    album,
    song,
    releaseYear,
    image,
    extraInformation,
  });

  return music
    .save()
    .then((result) => {
      res.status(200).json({
        music: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getMusic = (req: Request, res: Response, next: NextFunction) => {
  Music.find()
    .exec()
    .then((results) => {
      return res.status(200).json({ music: results, count: results.length });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message, error });
    });
};

export default { createMusic, getMusic };
