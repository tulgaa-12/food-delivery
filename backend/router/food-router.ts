import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { createFood } from "../controller/food/createFood";
import { getFood } from "../controller/food/get-categoty-Aggregate";

export const FoodRouter = Router();

FoodRouter.post("/addFood", TokenChecker, createFood);
FoodRouter.post("/getFood", getFood);
