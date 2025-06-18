import { model, Schema } from "mongoose"

export type Food = {
    _id:Schema.Types.ObjectId
    foodName:string,
    image:string,
    price:number,
    ingredients:string,
    category:Schema.Types.ObjectId,
    createdAt:Date,
    updateAt:Date
}

const FoodSchema = new Schema<Food>({
    foodName:{type: String, required: true},
    image:{type:String,required:true},
      price: { type: Number, required: true },
     
      ingredients: { type: String,required:true },
      category: { type: String,required:true },


      createdAt: { type: Date, default: Date.now, immutable: true },
      updateAt: { type: Date, default: Date.now },
    

      
})


FoodSchema.index({foodName:1,price:1,image:1, ingredients:1,category:1}, {unique:true})
export const foodModel = model<Food>("Foods",FoodSchema)