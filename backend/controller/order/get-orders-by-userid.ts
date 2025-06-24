import { Request, Response } from "express";
import { FoodOrderModel } from "../../model/order";
import { model } from "mongoose";

export const getOrderByUserid = async (_req: Request, res: Response) => {
  const { userId } = res.locals;

  try {
    const allOrdersByUserId = await FoodOrderModel.find({
      user: userId,
    }).populate({
      path: "foodOrderItems",
      populate: {
        path: "foods",
        model: "Foods",
      },
    });
    res.status(200).send({ message: allOrdersByUserId });
  } catch (err) {
    res.status(400).send({ message: "Cannot get Orders" });
  }
};
