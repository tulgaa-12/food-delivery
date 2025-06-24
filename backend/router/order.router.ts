import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { createOrder } from "../controller/order/createorder";
import { getOrderByUserid } from "../controller/order/get-orders-by-userid";

export const OrderRouter = Router();

OrderRouter.post("/createOrder", TokenChecker, createOrder);
OrderRouter.get("/getOrders", TokenChecker, getOrderByUserid);
