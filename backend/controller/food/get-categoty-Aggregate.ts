import { Request, Response } from "express";
import { FoodModel } from "../../model/food.model";

export const getFood = async (_req: Request, res: Response) => {
  try {
    const result = await FoodModel.aggregate([
      {
        $lookup: {
          from: "Categories",

          localField: "category",

          foreignField: "_id",

          as: "categoryInfo",
        },
      },

      {
        $unwind: "$categoryInfo",
      },

      {
        $group: {
          _id: "$categoryInfo.categoryName",

          foods: {
            $push: {
              _id: "$_id",

              foodName: "$foodName",

              image: "$image",

              price: "$price",

              ingredients: "$ingredients",
            },
          },
        },
      },
    ]);

    const groupedByCategory = result.reduce((acc, item) => {
      acc[item._id] = item.foods;

      return acc;
    }, {});

    res.send({ foods: groupedByCategory });
  } catch (error) {
    res.status(500).send({ message: "Failed to get grouped foods" });
  }
};
