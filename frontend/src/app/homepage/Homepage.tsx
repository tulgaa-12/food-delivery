import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { MenuContainer } from "./_components/Menucontainer";
import { Key } from "lucide-react";

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

const sampleFoods: Record<string, FoodProps[]> = {
  Appetizers: [
    {
      foodName: "Bruschetta",
      image: "/images/bruschetta.jpg",
      ingredients: "Tomato, basil, garlic, bread",
      price: 5.99,
      _id: "1",
    },
    {
      foodName: "Deviled Eggs",
      image: "/images/deviled-eggs.jpg",
      ingredients: "Eggs, mayo, mustard",
      price: 4.99,
      _id: "2",
    },
    {
      foodName: "Caprese Skewers",
      image: "/images/caprese.jpg",
      ingredients: "Tomato, mozzarella, basil",
      price: 6.99,
      _id: "3",
    },
    {
      foodName: "Shrimp Tempura",
      image: "/images/shrimp-tempura.jpg",
      ingredients: "Shrimp, batter, sauce",
      price: 8.99,
      _id: "4",
    },
    {
      foodName: "Prosciutto Grissini",
      image: "/images/prosciutto.jpg",
      ingredients: "Breadsticks, prosciutto",
      price: 7.5,
      _id: "5",
    },
    {
      foodName: "Mini Toast",
      image: "/images/toast.jpg",
      ingredients: "Bread, cheese, herbs",
      price: 4.75,
      _id: "6",
    },
  ],
};
export const Homepage = () => {
  return (
    <div className=" bg-[#404040] flex flex-col">
      <Header />
      <MenuContainer foods={sampleFoods} />
      <Footer />
    </div>
  );
};
