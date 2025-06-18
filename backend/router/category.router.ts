import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { createCategory } from "../controller/category/create-category";
import { getCategory } from "../controller/category/get-gategory";

export const CategoryRouter = Router();

CategoryRouter.post("/addCategory", TokenChecker, createCategory);
CategoryRouter.post("/getCategory",TokenChecker,getCategory)