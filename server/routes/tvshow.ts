import express from "express";
import tvController from "../controllers/tvshowController";

const router = express.Router();

router.post("/create", tvController.createTV);
router.get("/getall", tvController.getTV);

export = router;
