import { Request, Response } from "express";
import { CategoryModel } from "../../model/category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const newCategory = await CategoryModel.create({ categoryName });
    res
      .status(200)
      .send({ message: "Successfuly creaty category", category: newCategory });
  } catch (err) {
    res.send({ message: "not a found" });
  }
};
