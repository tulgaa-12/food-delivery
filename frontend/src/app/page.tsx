import axios from "axios";
import { MenuContainer } from "./_components/Menucontainer";
import { Signout } from "./_components/Signout";

const Home = async () => {
  const { data } = await axios.get("http://localhost:8000/getFood");
  return (
    <div className="bg-[#404040]">
      <MenuContainer foods={data.foods} />
      <Signout />
    </div>
  );
};

export default Home;
