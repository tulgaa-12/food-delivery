import { Dishes } from "./_components/Dishes";
import { HeaderContainer } from "./_components/HeaderContainer";
import { MenuContainer } from "./_components/MenuContainer";

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

const Home = () => {
  return (
    <div className="flex flex-row bg-[#F4F4F5]">
      <Dishes />
    </div>
  );
};

export default Home;
