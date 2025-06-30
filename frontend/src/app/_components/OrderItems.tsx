"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Soup } from "lucide-react";
import { useState, useEffect } from "react";

type Order = {
  _id: string;
  totalPrice: number;
  createdAt: string;
  address: string;
  status: "Pending" | "Delivered";
  foodOrderItems: {
    food: {
      name: string;
    };
    quantity: number;
  }[];
};

export const Orderitems = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      console.log("Token:", token);
      try {
        const res = await axios.get(
          "https://food-delivery-1-6g0i.onrender.com/getOrders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data.message);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <div className="w-[471px] h-full flex flex-col gap- bg-white shadow-lg p-4 rounded-xl gap-5">
        <h4 className="text-[20px] font-semibold">Order history</h4>
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
          className="w-full flex flex-col gap-3 border-b border-[#E4E4E7] pb-4"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-[16px] font-bold">
              <p>${el.totalPrice}</p>
              <p>{el._id.slice(0, 5)}</p>
            </div>
            <Button
              variant="outline"
              className={`w-[85px] h-[28px] text-sm font-semibold rounded-full ${
                el.status === "Pending"
                  ? "border-[#10B981] text-[#EF4444]"
                  : "border-[#EF4444] "
              }`}
            >
              {el.status}
            </Button>
          </div>

          <div className="flex flex-col gap-2 text-[14px]">
            {el.foodOrderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Soup className="w-4 h-4 text-gray-500" />
                  <span>{item.food.name}</span>
                </div>
                <span className="text-gray-600">x{item.quantity}</span>
              </div>
            ))}
            <p> {new Date(el.createdAt).toLocaleString()}</p>
            <p className="text-[#71717A] truncate"> {el.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
