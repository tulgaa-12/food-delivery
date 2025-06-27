"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CreateFood } from "./CreateFood";
type Food = {
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
  const [food, setFood] = useState<Food[]>([]);
  const [toglee, setToglee] = useState<"darsan" | "daraagui">("darsan");

  useEffect(() => {
    const foodfind = async () => {
      const token = window?.localStorage?.getItem("token");

      try {
        const res: any = await axios.get("http://localhost:8000/getFood", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFood(res.data.foods);
        console.log(res.data, "asd");
      } catch (error) {
        console.log(error, "errrrr");
      }
    };
    foodfind();
  }, []);
  return (
    <div className="flex flex-col gap-10">
      {keys.map((el, index) => (
        <div
          key={index}
          className="w-full flex flex-col shadow-xl rounded-xl bg-[white] "
        >
          <h4 className="text-[20px] font-semibold p-5">
            {el} ({foods[el].length})
          </h4>

          <div className=" flex flex-wrap wrap gap-5 p-5 ">
            <CreateFood />
            {foods[el].map((el, index) => (
              <div
                key={index}
                className="w-[270px] h-[241px] rounded-lg flex flex-col justify-center items-center gap-3 shadow-xl border border-[#E4E4E7] "
              >
                <img
                  src={el.image}
                  className="w-[238px] h-[129px] object-cover rounded-xl"
                />
                <div className="flex flex-row justify-between w-[238px]">
                  <p className="text-[#EF4444] text-[14px] font-medium">
                    Brie Crostini Appetizer
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
