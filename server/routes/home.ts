import express from "express";
import homeController from "../controllers/homeController";

const homeRoute = express();

homeRoute.get("/homepage", homeController.homePage);

export = homeRoute;
