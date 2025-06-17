import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { createCategory } from "../controller/category/create-category";

export const CategoryRouter = Router();

CategoryRouter.post("/addCategory", TokenChecker, createCategory);
