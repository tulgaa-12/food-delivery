"use client";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItemType } from "./Types";

type CartItemProps = {
  item: CartItemType;
  handleQty: (id: string, type: "inc" | "dec") => void;
  removeItem: (id: string) => void;
};

export const CartItem = ({ item, handleQty, removeItem }: CartItemProps) => {
  return (
    <div className="flex flex-row gap-5">
      <img
        src={item.image}
        className="w-[124px] h-[120px] rounded-xl object-cover"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-row w-[305px] justify-between">
          <div>
            <p className="text-[#EF4444] font-bold text-[16px]">
              {item.foodName}
            </p>
            <p className="text-[12px] text-[#09090B] font-normal">
              {item.ingredients}
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full w-[36px] h-[36px] text-[#EF4444] border-[#EF4444]"
            onClick={() => removeItem(item._id)}>
            <X />
          </Button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Button variant="link" onClick={() => handleQty(item._id, "dec")}>
              <Minus />
            </Button>
            <p>{item.qty}</p>
            <Button variant="link" onClick={() => handleQty(item._id, "inc")}>
              <Plus />
            </Button>
          </div>
          <p className="font-bold">{item.price}</p>
        </div>
      </div>
    </div>
  );
};
