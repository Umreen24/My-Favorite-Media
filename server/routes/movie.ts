import express from "express";
import movieController from "../controllers/movieController";

const router = express.Router();

router.post("/create", movieController.createMovie);
router.get("/getall", movieController.getMovies);

export = router;
