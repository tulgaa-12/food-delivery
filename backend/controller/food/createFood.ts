import { Request, Response } from "express"
import { UserModel } from "../../model/users.model"

export const createFood =  async (req:Request,res:Response) => {

    try{
        const {foodName, price, category, ingredients,image } = req.body
        await UserModel.create({foodName, price, category, ingredients,image })

        res.send({message:"Successfully add Food"})
    }catch(error){
        res.status(400).send({message:""})
    }
}