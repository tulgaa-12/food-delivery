"use client";

import axios from "axios";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { MenuContainer } from "./_components/Menucontainer";
import { useState, useEffect } from "react";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type GroupedFoods = Record<string, FoodProps[]>;

export const Homepage = () => {
  return (
    <div className=" bg-[#404040] flex flex-col justify-center ">
      <Header />
      <MenuContainer />
      <Footer />
    </div>
  );
};

// const [foods, setFoods] = useState<GroupedFoods>({});
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchFoods = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getFood");

//       console.log("Өгөгдөл ирлээ:", res.data.foods);
//       setFoods(res.data.foods);
//       setLoading(false);
//     } catch (err) {
//       console.error("Fetch алдаа гарлаа:", err);
//       setLoading(false);
//     }
//   };

//   fetchFoods();
// }, []);
// if (loading)
//   return (
//     <div
//       className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white flex justify-center items-center"
//       role="status">
//       <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//         Loading...
//       </span>
//     </div>
//   );
