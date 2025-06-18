import { Request, Response } from "express";
import { CategoryModel } from "../../model/category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try{

  await CategoryModel.create({ categoryName });
  res.send({ message: "Successfuly creaty category" });
}catch(err){
  res.send({message:"not a found"})
}
}
