import { Request, response, Response } from "express";
import { UserModel } from "../../model/users.model";
import nodemailer from "nodemailer";
import { OtpModel, Otppopulated } from "../../model/otp.model";
import bcrypt from "bcrypt";

export const SendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;

  const isEmailExisted = await UserModel.findOne({ email });

  if (!isEmailExisted) {
    res.status(401).send(" Wrong Doesn't exist");
  }
  const code = Math.floor(100000 + Math.random() * 90000).toString();
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "jochuekimmich@gmail.com",
      pass: "xcyqnkwxrykxstna",
    },
  });

  const options = {
    from: "jochuekimmich@gmail.com",
    to: req.body.email,
    subject: "Hello",
    html: `<div style="color:red"> ${code} </div> `,
  };

  await OtpModel.create({ code: code, userId: isEmailExisted?._id });

  await transport.sendMail(options);

  res.send("success");
};

export const checkOtp = async (req: Request, res: Response) => {
  const { code } = req.body;

  try {
    const isOtpExisting = await OtpModel.findOne({
      code: code,
    }).populate<Otppopulated>("userId");
    if (!isOtpExisting) {
      res.status(400).send("wrong code");
      return;
    }

    res.status(200).send({ message: "success", isOtpExisting });
  } catch (err) {
    res.status(400).send("Wrong code");
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const isEmailExisted = await UserModel.findOne({ email });

  if (!isEmailExisted) {
    res.status(404).send({ message: "User not found" });
    return;
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);

  await UserModel.findOneAndUpdate({ email }, { password: hashedPassword });

  res.send({ message: "Successfully updated password" });
};
