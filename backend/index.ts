import express, { Request, Response, text } from "express";
import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
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
const Users = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

  createdAt: { type: Date, default: Date.now, immutable: true },
  updateAt: { type: Date, default: Date.now },
});

const UserModel = model("Users", Users);

const app = express();
app.use(cors());
app.use(express.json());

databaseconnect();

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "hello" });
});

app.post("/check-email", async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Email is required" });
  }

  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(400).json({ message: "User already existed" });
  }

  res.status(200).json({ message: "Email OK" });
});

app.post("/signup", async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error("Signup Error: ", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const isEmailExisted = await UserModel.findOne({ email });

  if (!isEmailExisted) {
    res.status(401).send({ message: "User doesn't existed" });
    return;
  } else {
    const hashePassword = await bcrypt.compare(
      password,
      isEmailExisted.password!
    );

    const TokenPassword = "foodDelivery";

    if (hashePassword) {
      const token = jwt.sign({ userId: isEmailExisted._id }, TokenPassword, {
        expiresIn: 300,
      });

      res.send({ message: "Succesfully logged in", token });
      return;
    } else {
      res.status(401).send({ message: "Wrong password, try again" });
      return;
    }
  }
});

app.post("/verify", async (req: Request, res: Response) => {
  const { token } = req.body;

  const TokenPassword = "foodDelivery";

  try {
    const isValid = jwt.verify(token, TokenPassword);

    if (isValid) {
      const destruck = jwt.decode(token);

      res.send({ destruck });
      return;
    } else {
      res.status(401).send({ message: "token is not valid " });
      return;
    }
  } catch (error) {
    res.status(401).send({ message: "token is not valid " });
    return;
  }
});

app.post("/email", async (req: Request, res: Response) => {
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
    to: "e7016307@gmail.com",
    subject: "Hello",
    html: "<div style=`color:red`> Hello from tesying env </div> ",
  };

  await transport.sendMail(options);

  res.send("success");
});

app.post("/reset", async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) res.status(400).send({ message: "Email is required" });

  const user = await UserModel.findOne({ email });
  if (!user) res.status(404).send({ message: "User not found" });
});

app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});
