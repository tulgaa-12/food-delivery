"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
export const MenuContainer = () => {
  const [foods, setFoods] = useState<Record<string, FoodProps[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get("http://localhost:8000/getFood");
        console.log("Өгөгдөл:", res.data.foods);
        setFoods(res.data.foods);
        setLoading(false);
      } catch (error) {
        console.error("Алдаа:", error);
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const keys = Object.keys(foods);

  if (loading) return <p className="text-white">Уншиж байна...</p>;

  return (
    <div className="w-full h-full pt-[200px] ">
      {keys.map((el) => (
        <div className="flex flex-col  justify-center item-center gap-[88px]">
          <h2 className=" text-[white] font-semibold text-[30px] ml-35">
            {el}
          </h2>
          <div key={el} className="flex  flex-wrap gap-6 w-full justify-center">
            {foods[el].slice(0, 6).map((food, index) => (
              <motion.div
                key={food._id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                }}>
                <div
                  key={food._id}
                  className="flex flex-col justify-center items-center gap-5 w-[397px] h-[342px] shadow-lg rounded-[20px] bg-[#FFFFFF] p-5">
                  <img
                    src={food.image}
                    alt={food.foodName}
                    className="w-[365px] h-[210px] rounded-xl object-cover pt-[10px]"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                      <h3 className=" text-[#EF4444] font-semibold text-[24px]">
                        {food.foodName}
                      </h3>
                      <p className="text-[#09090B] text-[18px] font-semibold pt-[5px]">
                        ${food.price}
                      </p>
                    </div>
                    <div className="pb-[20px]">
                      <p className="text-[#09090B] text-[14px] font-normal">
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
