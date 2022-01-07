import express from "express";
import musicController from "../controllers/musicController";

const router = express.Router();

router.post("/create", musicController.createMusic);
router.get("/getall", musicController.getMusic);

export = router;
