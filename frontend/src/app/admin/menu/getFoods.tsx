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

  useEffect(() => {
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
            {el} ({foods[el].length})
          </h4>

          <div className=" flex flex-wrap wrap gap-5 p-5 ">
            <CreateFood categoryName={el} />
            {foods[el].map((el, index) => (
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
