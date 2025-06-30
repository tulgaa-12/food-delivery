"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CreateFood } from "./CreateFood";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, X, Image } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
export type Food = {
  _id: string;
  foodName: string;
  image: string;
  price: number;
  ingredients: string;
};

type PropsType = {
  foods: Record<string, Food[]>;
};

export const Food = ({ foods }: PropsType) => {
  const keys = Object.keys(foods);
  const [food, setFood] = useState<Record<string, Food[]>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [toglee, setToglee] = useState<"darsan" | "daraagui">("darsan");

  const foodfind = async () => {
    const token = window?.localStorage?.getItem("token");

    try {
      const res: any = await axios.get(
        "https://food-delivery-1-6g0i.onrender.com/getFood",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFood(res.data.foods);
      console.log(res.data, "asd");
    } catch (error) {
      console.log(error, "errrrr");
    }
  };

  useEffect(() => {
    foodfind();
  }, []);

  const handleRemove = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col gap-10">
      {keys.map((el, index) => (
        <div
          key={index}
          className="w-full flex flex-col shadow-xl rounded-xl bg-[white] ">
          <h4 className="text-[20px] font-semibold p-5">
            {el} ({food[el]?.length})
          </h4>

          <div className=" flex flex-wrap wrap gap-5 p-5 ">
            <CreateFood categoryName={el} onFoodAdded={foodfind} />
            {food[el]?.map((el, index) => (
              <div
                key={index}
                className="w-[270px] h-[241px] rounded-lg flex flex-col justify-center items-center gap-3 shadow-xl border border-[#E4E4E7]   ">
                <div className="w-[238px] h-[129px] relative">
                  <img
                    src={el.image}
                    className="w-full h-full object-cover rounded-xl "
                  />
                </div>
                <div className="flex flex-row justify-between w-[238px]">
                  <p className="text-[#EF4444] text-[14px] font-medium">
                    {el.foodName}
                  </p>
                  <p className="text-xs font-normal">{el.price}</p>
                </div>
                <p className="text-xs font-normal text-center">
                  {el.ingredients}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

//  <Dialog>
//                     <form>
//                       <DialogTrigger asChild>
//                         <Button
//                           variant="outline"
//                           className="w-[44px] h-[44px] rounded-full text-[#EF4444] absolute  bottom-2 right-2 z-10 ">
//                           <Pencil />
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="w-[460px] flex flex-col gap-10">
//                         <DialogHeader className="flex flex-col gap-5">
//                           <DialogTitle>Add new Dish to Appetizers</DialogTitle>
//                           <DialogDescription></DialogDescription>
//                           <div className="flex flex-row justify-between">
//                             <div className="flex flex-col gap-[8px]">
//                               <p className="font-medium text-[14px] text-[#09090B]">
//                                 Food name
//                               </p>
//                               <Input
//                                 id="foodName"
//                                 name="foodName"
//                                 // onChange={formik.handleChange}
//                                 // value={formik.values.foodName}
//                                 className="w-[194px] text-[#09090B]"
//                                 placeholder="Type food name"
//                               />
//                             </div>
//                             <div className="flex flex-col gap-[8px]">
//                               <p className="font-medium text-[14px] text-[#09090B]">
//                                 Food price
//                               </p>
//                               <Input
//                                 id="price"
//                                 name="price"
//                                 type="number"
//                                 // onChange={formik.handleChange}
//                                 // value={formik.values.price}
//                                 className="w-[194px] text-[#09090B]"
//                                 placeholder="Enter price..."
//                               />
//                             </div>
//                           </div>
//                         </DialogHeader>
//                         <div className="grid gap-4">
//                           <div className="grid gap-3">
//                             <Label htmlFor="name-1">Ingredients</Label>
//                             <Textarea
//                               id="ingredients"
//                               name="ingredients"
//                               // onChange={formik.handleChange}
//                               // value={formik.values.ingredients}
//                               className="h-[90px]"
//                               placeholder="List ingredients..."
//                             />
//                           </div>
//                           <div className="grid gap-3">
//                             {/* <Label htmlFor="username-1">Food image</Label>
//               <Input id="username-1" type="file" className="h-[138px]" /> */}
//                             <div className="w-full h-[138px]">
//                               <input
//                                 id="image"
//                                 type="file"
//                                 accept="image/*"
//                                 className="hidden"
//                                 onChange={(e) => {
//                                   const file = e.target.files?.[0];
//                                   if (file) {
//                                     setSelectedImage(file);
//                                   }
//                                 }}
//                               />

//                               {selectedImage ? (
//                                 <div className="relative h-[138px] w-full">
//                                   <img
//                                     src={URL.createObjectURL(selectedImage)}
//                                     alt="Preview"
//                                     className="h-full w-full object-cover rounded-xl"
//                                   />
//                                   <Button
//                                     variant="outline"
//                                     type="button"
//                                     onClick={() => handleRemove()}
//                                     className="absolute top-2 right-2 bg-white rounded-full p-3 shadow  w-[36px]">
//                                     <X />
//                                   </Button>
//                                 </div>
//                               ) : (
//                                 <Label
//                                   htmlFor="image"
//                                   className="flex flex-col items-center justify-center h-[138px] border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:border-blue-400 transition duration-300 bg-[#2563EB0D]">
//                                   <span className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center">
//                                     <Image className="text-gray-700" />
//                                   </span>
//                                   <span className="text-[14px] font-medium text-[#18181B] mt-2">
//                                     Choose a file or drag & drop it here
//                                   </span>
//                                 </Label>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <DialogFooter>
//                           <DialogClose>
//                             <Button type="button">Add Dish</Button>
//                           </DialogClose>
//                         </DialogFooter>
//                       </DialogContent>
//                     </form>
//                   </Dialog>
