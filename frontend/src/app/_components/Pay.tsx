"use client";
import { Button } from "@/components/ui/button";

interface PaymentSummaryProps {
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

export const PaymentSummary = ({
  total,
  itemCount,
  onCheckout,
}: PaymentSummaryProps) => {
  return (
    <div className="w-[471px] h-full shadow-lg bg-white rounded-[20px] flex flex-col justify-center p-7 gap-3">
      <h4 className="text-[20px] font-semibold text-[#71717A] w-[439px]">
        Payment info
      </h4>
      <div className="flex flex-col gap-3">
        <div className="w-[439px] flex flex-row justify-between pr-7">
          <p className="font-normal text-[16px] text-[#71717A]">Items</p>
          <p>{itemCount}</p>
        </div>
        <div className="w-[439px] flex flex-row justify-between pr-7">
          <p className="font-normal text-[16px] text-[#71717A]">Shipping</p>
          <p>Free</p>
        </div>
      </div>
      <div className="w-[439px] flex flex-col pr-7 gap-2">
        <div className="border border-[#09090B80]-1px"></div>
        <div className="flex flex-row justify-between">
          <p className="font-normal text-[16px] text-[#71717A]">Total</p>
          <p>{total}</p>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={onCheckout}
        className="bg-[#EF4444] text-white text-[14px] font-semibold h-[44px] rounded-full">
        Checkout
      </Button>
    </div>
  );
};
