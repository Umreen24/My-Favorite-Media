/** Import packages & files **/
import http from "http";
import bodyParser from "body-parser";
import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import logging from "./config/logging";
import config from "./config/config";
import book from "./routes/book";
import home from "./routes/home";
import music from "./routes/music";
import movie from "./routes/movie";
import tvshow from "./routes/tvshow";

/** Define namespace **/
const NAMESPACE = "Server";

/** Define variables **/
const router: Application = express();
const PORT = process.env.port;

/** Connect to database **/
mongoose
  .connect(config.mongo.url)
  .then((result) => {
    logging.info(NAMESPACE, "Connected to Media database!");
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

/** Middleware **/
router.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
});

/** Parse request **/
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Api rules **/
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }

  next();
});

/** Routes */
router.use("/home", home);
router.use("/book", book);
router.use("/music", music);
router.use("/movie", movie);
router.use("/tvshow", tvshow);

/** Error Handling */
router.use((req, res, next) => {
  const error = new Error("Not Found");

  return res.status(404).json({
    message: error.message,
  });
});

/** Create server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  )
);
