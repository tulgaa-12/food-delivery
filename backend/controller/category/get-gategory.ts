import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import { CategoryModel } from "../../model/category.model";

export const getCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await CategoryModel.find();
    res.send({ category: allCategory });
  } catch (error) {
    res.status(400).send("aldaa garsan");
  }
};
