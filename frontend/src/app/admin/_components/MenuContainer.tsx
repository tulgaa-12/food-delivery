import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

export const MenuButton = () => {
  return (
    <div className="w-[205px] h-[1025px] flex-col items-center gap-10 bg-[white]">
      <div className="w-[205px] flex flex-col items-center gap-7 mt-10">
        <div className="w-[146px] h-[44px] flex flex-row gap-[10px]   ">
          <img src="togoo.jpg" alt="signup visual" className="" />
          <div className="flex flex-col">
            <div className=" flex flex-row">
              <p className="text-[black] text-[20px] font-semibold"> Nom</p>
              <p className="text-[black]  text-[20px] font-semibold">Nom</p>
            </div>
            <p className="text-[#71717A] font-normal text-[12px]">
              Swift delivery
            </p>
          </div>
        </div>
        <div className="w-[165px] flex flex-col gap-6">
          <Button className="w-[165px] h-[40px] rounded-full">
            <img src="Vector.jpg" alt="123" />
            Food menu
          </Button>

          <Button variant="link" className="w-[165px]">
            <Truck />
            Orders
          </Button>
        </div>
      </div>
    </div>
  );
};
