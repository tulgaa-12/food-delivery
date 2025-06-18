import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";

export const getCategory = async (req:Request,res:Response) => {
    try{
        const allCategory = await UserModel.find()
        res.send({ category: allCategory})
    }catch(error){
        res.status(400).send("aldaa garsan")
    }
}