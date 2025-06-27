import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import Link from "next/link";

export const MenuButton = () => {
  return (
    <div className="w-[205px] h-full flex-col items-center gap-10 bg-[white]">
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
          <Link href={"/admin"}>
            <Button className="w-[165px] h-[40px] rounded-full">
              <img src="Vector.jpg" alt="123" />
              Food menu
            </Button>
          </Link>
          <Link href={"/admin/menu"}>
            <Button variant="link" className="w-[165px]">
              <Truck />
              Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
