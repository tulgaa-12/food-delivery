import { CreateCategory } from "./CreateCategory";
import { Food } from "./getFoods";
import axios from "axios";
const MeHome = async () => {
  const { data } = await axios.get(
    "https://food-delivery-1-6g0i.onrender.com/getFood"
  );
  return (
    <div className="flex flex-col gap-10 pt-5 pl-10 pr-10 justify-center items-center bg-[#F4F4F5]">
      <CreateCategory />
      <Food foods={data.foods} />
    </div>
  );
};

export default MeHome;
