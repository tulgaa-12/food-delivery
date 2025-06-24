import { Request, Response } from "express";
import { FoodOrderModel } from "../../model/order";

export const createOrder = async (req: Request, res: Response) => {
  const { user, totalPrice, foodOrderItems, address } = req.body;
  const { userId } = res.locals;

  try {
    await FoodOrderModel.create({
      user: userId,
      totalPrice,
      foodOrderItems,
      address,
    });
    res.status(200).send({ message: "Success created order" });
    return;
  } catch (err) {
    res.status(400).send({ message: "Order aldaa garlaa" });
  }
};
