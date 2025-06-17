import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import bcrypt from "bcrypt";

export const Hello = async (req: Request, res: Response) => {
  res.send({ message: "hello" });
};

export const Checkemail = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Email is required" });
  }

  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(400).json({ message: "User already existed" });
  }

  res.status(200).json({ message: "Email OK" });
};

export const Signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: "Email and password are required" });
    }

    const isEmailExisted = await UserModel.findOne({ email });

    if (isEmailExisted) {
      res.status(400).send({ message: "User already existed" });
    }

    const hashePassword = await bcrypt.hash(password, 10);
    await UserModel.create({ email, password: hashePassword });
    res.send({ message: "Successfully reqistered" });
    return;
  } catch (error) {
    console.error("Signup Error: ", error);
    // res.status(400).send({ message: "User already existed" });
  }
};
