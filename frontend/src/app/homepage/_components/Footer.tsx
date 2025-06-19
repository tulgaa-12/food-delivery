import { Button } from "@/components/ui/button";
import { Limelight } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export const Footer = () => {
  const titles = [
    "Fresh fast delivered",
    "Fresh fast delivered",
    "Fresh fast delivered",
    "Fresh fast delivered",
    "Fresh fast delivered",
  ];
  return (
    <div className="w-full h-[755px] bg-[#18181B] flex justify-center flex-col gap-10 ">
      <div className="w-full h-[92px] bg-[#EF4444] flex flex-row gap-10 justify-center items-center">
        {titles.map((title, index) => (
          <motion.h2
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="font-semibold text-[30px] text-[#FAFAFA]">
            {title}
          </motion.h2>
        ))}
      </div>
      <div className="h-[228px] w-full flex flex-row gap-50 ">
        <div className="w-[146px] h-[44px] flex flex-row gap-[10px] ml-[100px]  ">
          <img src="togoo.jpg" alt="signup visual" className="" />
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
        <div className="flex flex-col items-center ">
          <p className="text-[#71717A] text-[16px] font-normal">NOMNOM</p>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Home
          </Button>
          <Link href={"/admin"}>
            <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
              Contacts us
            </Button>
          </Link>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Delivery zone
          </Button>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-[#71717A] text-[16px] font-normal">MENU</p>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Appetizers
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Salads
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Pizzas
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Main dishes
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Desserts
          </Button>
        </div>
        <div className="flex flex-col items-center ">
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Side dish
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Brunch
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Beverages
          </Button>
          <Button variant="link" className="text-[#FAFAFA] text-[16px] ">
            Fish & Sea foods
          </Button>
        </div>
      </div>
      <div className="flex  flex-col justify-center 2xl:ml-[500px]">
        <div className="  w-[1265px] h-[1px] bg-[#71717A] ml-[50px]"></div>
        <div className="w-full h-[84px] flex flex-row items-center gap-10  ml-[50px]">
          <p className="text-[14px] text-[#71717A] font-normal">
            Copy right 2024 Nomnom LLC
          </p>
          <p className="text-[14px] text-[#71717A] font-normal">
            Privacy policy
          </p>
          <p className="text-[14px] text-[#71717A] font-normal">
            Terms and conditoin
          </p>

          <p className="text-[14px] text-[#71717A] font-normal">
            Cookie policy
          </p>
        </div>
      </div>
    </div>
  );
};
