import { Request, Response } from "express";
import { FoodOrderModel } from "../../model/order";

export const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await FoodOrderModel.find({}).populate({
    path: "foodOrderItems",
    populate: {
      path: "foods",
      model: "Foods",
    },
  });

  res.status(200).send({ orders: allOrders });
};
