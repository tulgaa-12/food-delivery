"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Soup } from "lucide-react";

type Order = {
  id: string;
  price: number;
  date: string;
  address: string;
  items: {
    name: string;
    qty: number;
  }[];
  status: "Pending" | "Delivered";
};

export const OrderTab = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="w-[439px] h-[182px] rounded-xl bg-[#F4F4F5] flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src="togoongar.jpg" className="w-[61px] h-[50px]" />
          <p className="text-[16px] font-bold">No Orders Yet?</p>
          <p className="text-[#71717A] font-normal text-[12px] text-center">
            🍕 You haven't placed any orders yet. Start exploring our menu and
            satisfy your cravings!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[471px] flex flex-col shadow-lg p-4 gap-4 bg-white rounded-[20px]">
      <h4 className="text-[20px] text-[#71717A] font-semibold">
        Order history
      </h4>
      {orders.map((el, index) => (
        <div
          key={index}
          className="w-full flex flex-col gap-3 border-b border-[#E4E4E7] pb-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-[16px] font-bold">
              <p>${el.price}</p>
              <p>{el.id}</p>
            </div>
            <Button
              variant="outline"
              className={`w-[85px] h-[28px] text-sm font-semibold rounded-full ${
                el.status === "Pending"
                  ? "border-[#EF4444] text-[#EF4444]"
                  : "border-[#10B981] text-[#10B981]"
              }`}>
              {el.status}
            </Button>
          </div>

          <div className="flex flex-col gap-2 text-[14px]">
            {el.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Soup className="w-4 h-4 text-gray-500" />
                  <span>{item.name}</span>
                </div>
                <span className="text-gray-600">x{item.qty}</span>
              </div>
            ))}
            <p>{el.date}</p>
            <p className="text-[#71717A] truncate">{el.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
