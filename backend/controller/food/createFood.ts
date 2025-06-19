import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import { FoodModel } from "../../model/food.model";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, category, ingredients, image } = req.body;
  try {
    await FoodModel.create({ foodName, price, category, ingredients, image });

    res.send({ message: "Successfully add Food" });
  } catch (error) {
    res.status(400).send({ message: "" });
  }
};
