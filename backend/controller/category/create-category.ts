import { Request, Response } from "express";
import { CategoryModel } from "../../model/category";

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  await CategoryModel.create({ categoryName });
  res.send({ message: "Successfuly creaty category" });
};
