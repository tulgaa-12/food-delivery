export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[172px] bg-[#18181B] flex items-center">
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
      </div>
      <img src="BG.jpg" alt=" visual" className="w-full" />
    </div>
  );
};
