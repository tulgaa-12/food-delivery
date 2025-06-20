import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  ShoppingCart,
  User,
} from "lucide-react";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[172px] bg-[#18181B] flex items-center">
        <div className="flex flex-row w-full justify-between">
          <div className="w-[146px] h-[44px] flex flex-row gap-[10px] ml-[100px]  ">
            <img src="togoo.jpg" alt="signup visual" className="w-full" />
            <div className="flex flex-col">
              <div className=" flex flex-row">
                <p className="text-[white] text-[20px] font-semibold"> Nom</p>
                <p className="text-[#EF4444]  text-[20px] font-semibold">Nom</p>
              </div>
              <p className="text-[white] font-normal text-[12px]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mr-[150px]">
            <Button
              variant="outline"
              className="bg-[white] w-[251px] h-[36px] rounded-full  "
            >
              <MapPin className="text-[#EF4444]" />
              <p className="text-[#EF4444] text-[12px]">Delivery address:</p>
              <p className="text-[12px] text-[#71717A]">Add Location</p>
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              className="bg-[white] h-[36px] w-[36px] rounded-full"
            >
              <ShoppingCart />
            </Button>
            <Button
              variant="outline"
              className="bg-[#EF4444] h-[36px] w-[36px] rounded-full"
            >
              <User />
            </Button>
          </div>
        </div>
      </div>
      <img src="BG.jpg" alt=" visual" className="w-full" />
    </div>
  );
};
