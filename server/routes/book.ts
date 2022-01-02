import express from "express";
import bookController from "../controllers/bookController";

const router = express.Router();

router.post("/create", bookController.createBook);
router.get("/getall", bookController.getAllBooks);

export = router;
