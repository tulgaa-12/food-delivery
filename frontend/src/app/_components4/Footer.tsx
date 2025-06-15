export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-[#18181B] flex justify-center flex-col itmes-center">
      <div className="w-full h-[92px] bg-[#EF4444] flex flex-row gap-10 justify-center items-center">
        <h2 className="font-semibold text-[30px] text-[#FAFAFA] ">
          Fresh fast delivered
        </h2>
        <h2 className="font-semibold text-[30px] text-[#FAFAFA] ">
          Fresh fast delivered
        </h2>
        <h2 className="font-semibold text-[30px] text-[#FAFAFA] ">
          Fresh fast delivered
        </h2>
        <h2 className="font-semibold text-[30px] text-[#FAFAFA] ">
          Fresh fast delivered
        </h2>
      </div>
      <div className="h-[228px] w-[1264px]">
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
      </div>
      <div className="  w-[1264px] h-[1px] bg-[#71717A] ml-[50px]"></div>
      <div className="w-[1264px] h-[84px] flex flex-row items-center gap-10  ml-[50px]">
        <p className="text-[14px] text-[#71717A] font-normal">
          Copy right 2024 Nomnom LLC
        </p>
        <p className="text-[14px] text-[#71717A] font-normal">Privacy policy</p>
        <p className="text-[14px] text-[#71717A] font-normal">
          Terms and conditoin
        </p>
        <p className="text-[14px] text-[#71717A] font-normal">Cookie policy</p>
      </div>
    </div>
  );
};
