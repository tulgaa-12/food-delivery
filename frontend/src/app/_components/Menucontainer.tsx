"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DialogConatiner } from "./Dialog";
import { prototype } from "events";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type PropsType = {
  foods: Record<string, FoodProps[]>;
};
export const MenuContainer = ({ foods }: PropsType) => {
  const keys = Object.keys(foods);

  return (
    <div className="w-full h-full pt-[200px] pb-[100px]">
      {keys.map((el) => (
        <div
          key={el}
          className="flex flex-col   justify-center item-center gap-[88px]"
        >
          <h2 className=" text-[white] font-semibold text-[30px] ml-35">
            {el}
          </h2>
          <div className="flex  flex-wrap gap-6 w-full justify-center 2xl:grid 2xl:grid-cols-3 2xl:ml-35">
            {foods[el].slice(0, 6).map((food, index) => (
              <motion.div
                key={food._id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                }}
                className=" 2xl:w-[540px] 2xl:h-[480px]  w-[397px] h-[342px]"
              >
                <div
                  key={food._id}
                  className="flex flex-col justify-center gap-5 w-[397px] h-[342px] shadow-lg rounded-[20px] bg-[#FFFFFF] p-5 
              2xl:w-[540px] 2xl:h-[480px] 2xl:rounded-[30px] 2xl:flex 2xl:gap-2  shadow-2xl"
                >
                  <img
                    src={food.image}
                    alt={food.foodName}
                    className="w-[365px] h-[180px] rounded-xl object-cover 
               2xl:w-[500px] 2xl:h-[300px] 2xl:rounded-2xl  "
                  />
                  <DialogConatiner
                    foodName={food.foodName}
                    image={food.image}
                    ingredients={food.ingredients}
                    price={food.price}
                    _id={food._id}
                  />
                  <div className="flex flex-col gap-4 2xl:gap-2">
                    <div className="flex flex-row justify-between">
                      <h3 className="text-[#EF4444] font-semibold text-[24px] 2xl:text-[30px]">
                        {food.foodName}
                      </h3>
                      <p className="text-[#09090B] text-[18px] font-semibold pt-[5px] 2xl:text-[25px] 2xl:pt-[10px]">
                        ${food.price}
                      </p>
                    </div>
                    <div className=" ">
                      <p className="text-[#09090B] text-[14px] font-normal 2xl:text-[20px]">
                        {food.ingredients}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
