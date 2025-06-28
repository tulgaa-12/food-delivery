import { Request, Response } from "express";
import { FoodModel } from "../../model/food.model";
import { CategoryModel } from "../../model/category.model";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, category, ingredients, image } = req.body;
  try {
    const categoryData = await CategoryModel.findOne({
      categoryName: category,
    });

    if (!categoryData) {
      res.status(400).send({ message: "food aldaatai bn" });
      return;
    }

    await FoodModel.create({
      foodName,
      price,
      category: categoryData._id,
      ingredients,
      image,
    });

    res.send({ message: "Successfully add Food" });
  } catch (error) {
    res.status(400).send({ message: "food aldaatai bn" });
  }
};
