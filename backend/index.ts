import express, { Request, Response } from "express";
import { Schema, model } from "mongoose";
import mongoose from "mongoose";

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
app.use(express.json());

databaseconnect();

app.get("/add", async (req: Request, res: Response) => {
  const user = await UserModel.find();
  res.send(Users);
});

app.post("/adduser", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await UserModel.create({ email: email, password: password });
  res.send(result);
});

app.put("/addput", async (req:Request, res:Response) => {
  const {email,password, next } = req.body
  const user = await UserModel.findOneAndUpdate(
    {email } ,
    {email:next.email, password:next.password},
    {new:true}
  )
  res.send(user)
})

app.delete("/minus", async (req:Request,res:Response) => {
  const min = await UserModel.findOneAndDelete(
    {email: "second@gmail.com"},
  
    
  )
  res.send(min)
})

app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});
