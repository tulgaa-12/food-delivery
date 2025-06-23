export const Empty = () => {
  return (
    <div className="w-[439px] h-[182px] rounded-xl bg-[#F4F4F5] flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img src="togoongar.jpg" className="w-[61px] h-[50px]" />
        <p className="text-[16px] font-bold">Your cart is empthy </p>
        <p className="text-[#71717A] font-normal text-[12px]">
          Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
          cravings!
        </p>
      </div>
    </div>
  );
};
