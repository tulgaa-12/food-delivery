import axios from "axios";
import { MenuContainer } from "./_components/Menucontainer";
import { Signout } from "./_components/Signout";
import { Header } from "./_components/Header";
const Home = async () => {
  const { data } = await axios.get("http://localhost:8000/getFood");
  return (
    <div className="bg-[#404040]">
      <Signout />
      <MenuContainer foods={data.foods} />
    </div>
  );
};

export default Home;
