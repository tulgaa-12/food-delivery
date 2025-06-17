import express, { Request, Response, text } from "express";
import { Schema, Types, model } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

import { UserRouter } from "./router/user.router";
import { CategoryRouter } from "./router/category.router";

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
app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});

// enum UserRoleEnum {
//   ADMIN = "ADMIN",
//   USER = "USER",
// }

// const Food = new Schema({
//   foodName: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String },
//   ingredients: { type: String },
//   category: { type: Schema.Types.ObjectId, ref: "FoodCategory" },
//   createdAt: { type: Date, default: Date.now, immutable: true },
//   updatedAt: { type: Date, default: Date.now },
// });

// const FoodCategory = new Schema({
//   categoryName: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now, immutable: true },
//   updatedAt: { type: Date, default: Date.now },
// });

// enum StatusEnum {
//   CANCELED = "CANCELED",
//   DELIVERED = "DELIVERED",
// }

// const FoodorderItemSchema = new Schema(
//   {
//     quantity: { type: Number, required: true },
//     food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
//   },
//   {
//     _id: false,
//   }
// );

// enum FoodOrderStatusEnum {
//   PENDING = "PENDING",
//   CANCELED = "CANCELED",
//   DELIVERED = "DELIVERED",
// }

// const Foodorder = new Schema({
//   user: { type: Schema.ObjectId, require: true, ref: "Users" },
//   totalPrice: { type: Number, require: true },
//   foodOrderItems: {
//     type: [FoodorderItemSchema],
//     required: true,
//   },
//   status: { type: [FoodOrderStatusEnum], required: true },
//   createdAt: { type: Date, default: Date.now, immutable: true },
//   updatedAt: { type: Date, default: Date.now },
// });
