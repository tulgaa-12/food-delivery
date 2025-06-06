import express, { Request, Response } from "express";
import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import cors from "cors"
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
  email: { type: String, require: true },
  password: { type: String, require: true },

  createdAt: { type: Date, default: Date.now, immutable: true },
  updateAt: { type: Date, default: Date.now },
});

const UserModel = model("Users", Users);

const app = express();
app.use(cors())
app.use(express.json());

databaseconnect();

app.get("/",async (req:Request,res:Response) => {
  res.send({message: "hello"})
})

app.post('/signup', async (req:Request,res:Response) => {
  const {email,password} = req.body

  const isEmailExisted = await UserModel.findOne({email})

  if(!isEmailExisted) {
    const hashePassword = await bcrypt.hashSync(password,10)
    await UserModel.create({email,password})
    res.send({message: "Successfully reqistered"})
  }

  res.status(400).send({message: "User already existed"})
})

app.post("/login", async (req:Request, res:Response) => {
  const {email, password} = req.body
  const isEmailExisted = await UserModel.findOne({email})

  if(!isEmailExisted){
    res.status(400).send({message:"User doesn't existed"})
    return
  }else{
    const hashePassword = await bcrypt.compareSync(
      password, isEmailExisted.password!
    )  
  if(hashePassword){
    res.send({message: "Succesfully logged in"})
    return
  }else{
    res.send({message:"Wrong password , try again", token:"123"})
    return
  }
  }
})

app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});
