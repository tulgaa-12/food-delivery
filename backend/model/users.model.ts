import { Schema, model } from "mongoose";

enum UserRoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  _id: String;
  email: String;
  password: String;

  phonenumber?: String;
  address?: String;
  role?: UserRoleEnum;
  isVerified?: Boolean;

  createdAt: Date;
  updatedAt: Date;
};

const Users = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phonenumber: { type: String, required: false },
  address: { type: String, required: false },
  role: { type: String, enum: ["ADMIN", "USER"], required: false },
  isVerified: { type: Boolean, required: false },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
});

Users.index({email:1}, {unique:true})

export const UserModel = model<User>("Users", Users);
