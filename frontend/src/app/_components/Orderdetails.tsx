"use client";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Orderitems } from "./OrderItems";

type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type UnitDataType = {
  foodName: string;
  image: string;
  price: number;
  ingredients: string;
  _id: string;
  qty: number;
};
type CartItemType = FoodProps & { qty: number };
export const Orderdetails = () => {
  const [item, setItems] = useState<CartItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"Cart" | "order">("Cart");
  useEffect(() => {
    if (open && typeof window !== "undefined") {
      const localCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setItems(localCart);
    }
  }, [open]);

  const handleQty = (id: string, type: "inc" | "dec") => {
    const updated = item.map((items) => {
      if (items._id === id) {
        const newQty =
          type === "inc" ? items.qty + 1 : Math.max(1, items.qty - 1);
        return { ...items, qty: newQty };
      }
      return items;
    });
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = item.filter((item) => item._id !== id);
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const total = item.reduce((acc, item) => acc + item.price * item.qty, 0);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const toggleRed = () => {
    setOpen;
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-full ">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[535px] bg-[#18181B33] overflow-x-auto">
        <SheetHeader>
          <SheetDescription>
            <div className="w-[471px] h-[36px] ">
              <div className="flex flex-row gap-3 ">
                <p>
                  <ShoppingCart className="text-[20px]" />
                </p>
                <h4 className="font-semibold text-[20px]">Order detail</h4>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className=" flex flex-col items-center gap-5">
          <div className="w-[471px] h-[44px] bg-[#FFFFFF] rounded-full flex shadow-lg flex flex-row justify-center items-center gap-[10px]">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("Cart")}
              className={`w-[227px] rounded-full flex justify-center transition-colors text-[18px] font-normal ${
                activeTab === "Cart"
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black"
              }`}
            >
              Cart
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("order")}
              className={`w-[227px] rounded-full flex justify-center transition-colors text-[18px] font-normal ${
                activeTab === "order"
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black"
              }`}
            >
              Order
            </Button>
          </div>
          <div className="w-[471px] h-full rounded-[20px] bg-[white] shadow-lg p-4">
            <div className="w-[439px] flex flex-col gap-5">
              <h4 className="text-[20px] text-[#71717A] font-semibold">
                My cart
              </h4>
              {item.map((el, index) => {
                return (
                  <div key={index} className="flex flex-row gap-5">
                    <img
                      src={el.image}
                      className="w-[124px] h-[120px] rounded-xl object-cover"
                    />
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-row w-[305px] justify-between">
                        <div>
                          <p className="text-[#EF4444] font-bold text-[16px]">
                            {el.foodName}
                          </p>
                          <p className="text-[12px] text-[#09090B] font-normal ">
                            {el.ingredients}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="rounded-full w-[36px] h-[36px] text-[#EF4444] border-[#EF4444]"
                          onClick={() => removeItem(el._id)}
                        >
                          <X />
                        </Button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                          <Button
                            variant="link"
                            onClick={() => handleQty(el._id, "dec")}
                          >
                            <Minus />
                          </Button>
                          <p>{el.qty}</p>
                          <Button
                            variant="link"
                            onClick={() => handleQty(el._id, "inc")}
                          >
                            <Plus />
                          </Button>
                        </div>
                        <p className="font-bold">{el.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-col">
                <h4 className="text-[20px] text-[#71717A] font-semibold">
                  Delivery location
                </h4>
                <Textarea
                  placeholder="Please share your complete address"
                  className="h-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className="flex flex justify-center items-center">
          <SheetClose asChild>
            <div className="w-[471px] h-full shadow-lg bg-[white] rounded-[20px] flex flex-col justify-center p-7 gap-3">
              <h4 className="text-[20px] font-semibold text-[#71717A] w-[439px]">
                Payment info
              </h4>
              <div className="flex flex-col gap-3">
                <div className="w-[439px] flex flex-row justify-between pr-7">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Items
                  </p>
                  <p>25</p>
                </div>
                <div className="w-[439px] flex flex-row justify-between pr-7">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Shipping
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="w-[439px] flex flex-col pr-7 gap-2">
                <div className="border border-[#09090B80]-1px"></div>
                <div className="flex flex-row justify-between ">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Total
                  </p>
                  <p>{total}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="bg-[#EF4444] text-[white] text-[14px] font-semibold h-[44px] rounded-full"
              >
                Checkout
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
