import { model, Schema } from "mongoose";

export type Food = {
  _id: Schema.Types.ObjectId;
  foodName: string;
  image: string;
  price: number;
  ingredients: string;
  category: Schema.Types.ObjectId;
  createdAt: Date;
  updateAt: Date;
};

const FoodSchema = new Schema<Food>({
  foodName: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },

  ingredients: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true, ref: "Categories" },

  createdAt: { type: Date, default: Date.now, immutable: true },
  updateAt: { type: Date, default: Date.now },
});

FoodSchema.index({ foodName: 1 }, { unique: true });
export const FoodModel = model<Food>("Foods", FoodSchema);
