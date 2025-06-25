import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const isEmailExisted = await UserModel.findOne({ email });

  if (!isEmailExisted) {
    res.status(401).send({ message: "Email or password not matching" });
    return;
  }

  const hashePassword = await bcrypt.compare(
    password,
    isEmailExisted.password as string
  );

  if (hashePassword) {
    const TokenPassword = "foodDelivery";
    const token = jwt.sign(
      {
        userId: isEmailExisted._id,
        isAdmin: isEmailExisted.role === "ADMIN" ? true : false,
      },
      TokenPassword,
      {
        expiresIn: 3000,
      }
    );

    res.send({ message: "Succesfully logged in", token });
    return;
  } else {
    res.status(401).send({ message: "Wrong password, try again" });
    return;
  }
};
