import { Button } from "@/components/ui/button";

export const Orderitems = () => {
  return (
    <div className="w-[471px] h-[832px] flex flex-col items-center shadow-lg p-4 gap-4 ">
      <h4 className="text-[20px] text-[#71717A] font-semibold">
        Order history
      </h4>
      <div className="w-[439px] h-full ">
        <div className="flex flex-row  justify-center">
          <div className="flex flex-row gap-2 text-[16px] font-bold">
            <p>24</p>
            <p>id</p>
          </div>
          <Button
            variant="outline"
            className="w-[48px] h-[16px] font-semibold border-[#EF4444] rounded-full"
          >
            Pending
          </Button>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
