import { Dishes } from "./_components/Dishes";
import { HeaderConatiner } from "./_components/HeaderContainer";
import { MenuContainer } from "./_components/MenuContainer";

const MenuHome = () => {
  return (
    <div className="flex flex-row bg-[#F4F4F5] gap-10">
      <MenuContainer />
      <HeaderConatiner />
    </div>
  );
};

export default MenuHome;
