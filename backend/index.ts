import express, { Request, Response, text } from "express";
import { Schema, Types, model } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

import { UserRouter } from "./router/user.router";
import { CategoryRouter } from "./router/category.router";
import { FoodRouter } from "./router/food-router";
import { OrderRouter } from "./router/order.router";
import { AdminRouter } from "./router/admin.router";

const app = express();
app.use(cors());
app.use(express.json());

const databaseconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://e7016307:EqokLBME8isgHtsS@delivery.8433om6.mongodb.net/fooddelivery"
    );
    console.log("Success");
  } catch (errors) {
    console.log(errors);
  }
};

databaseconnect();

app.use(UserRouter);
app.use(CategoryRouter);
app.use(FoodRouter);
app.use(OrderRouter);
app.use(AdminRouter);

app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});
