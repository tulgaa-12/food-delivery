import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { createFood } from "../controller/food/createFood";

export const FoodRouter = Router()


FoodRouter.post("/addFood",TokenChecker,createFood)