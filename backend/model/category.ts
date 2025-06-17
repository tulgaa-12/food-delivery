import { model, Schema } from "mongoose";

export type CategoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<CategoryType>({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
});

export const CategoryModel = model<CategoryType>("Categorys", CategorySchema);
