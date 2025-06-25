import { Router } from "express";
import { TokenChecker } from "../middleware/verify";
import { isAdmin } from "../middleware/authoization";
import { getAllOrders } from "../controller/admin/get-all-orders";
import { updateOrderStatus } from "../controller/admin/update-order-status";

export const AdminRouter = Router();

AdminRouter.get("/Admin/getAllOrder", [TokenChecker, isAdmin], getAllOrders);
AdminRouter.put("/admin/updated", [TokenChecker, isAdmin], updateOrderStatus);
