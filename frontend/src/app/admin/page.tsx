import { Dishes } from "./_components/Dishes";
import { HeaderContainer } from "./_components/HeaderContainer";
import { MenuContainer } from "./_components/MenuContainer";

const MenuHome = () => {
  return (
    <div className="flex flex-row bg-[#F4F4F5]">
      <Dishes />
    </div>
  );
};

export default MenuHome;
