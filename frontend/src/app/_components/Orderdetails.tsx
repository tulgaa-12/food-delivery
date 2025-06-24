"use client";
import { Flag, Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Orderitems } from "./OrderItems";
import { Empty } from "./Empty";

import { DialogSuccess } from "./DialogSucces";
import { AneedLogin } from "./AneedLogin";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type CartItemType = FoodProps & { qty: number };

export const Orderdetails = () => {
  const [item, setItems] = useState<CartItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"Cart" | "order">("Cart");
  const [Dialogopen, setDialogopen] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = item.reduce((acc, item) => acc + item.price * item.qty, 0);

  const formik = useFormik({
    initialValues: {
      location: "",
    },
    validationSchema: Yup.object({
      location: Yup.string().trim().required("Location is required"),
    }),
    onSubmit: (values) => {
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

      const token = localStorage.getItem("token");
      if (!token) {
        setDialogopen(true);
        return;
      }

      const newOrder = {
        id: Date.now().toString(),
        price: total,
        date: new Date().toLocaleString(),
        address: values.location,
        items: item.map((i) => ({
          name: i.foodName,
          qty: i.qty,
        })),
        status: "Pending",
      };
      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
      );
      localStorage.removeItem("cartItems");
      setItems([]);

      setActiveTab("order");
      setSuccess(true);
      console.log("Order placed:", newOrder);
    },
  });

  useEffect(() => {
    if (open && typeof window !== "undefined") {
      const localCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const savedLocation = localStorage.getItem("deliveryLocation") || "";
      setItems(localCart);
      formik.setFieldValue("location", savedLocation);
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
    const updated = item.filter((items) => items._id !== id);
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <ShoppingCart />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[535px] bg-[#18181B33] overflow-x-auto">
        <SheetHeader>
          <div className="w-[471px] h-[36px] flex flex-row gap-3">
            <ShoppingCart className="text-[20px]" />
            <h4 className="font-semibold text-[20px]">Order detail</h4>
          </div>
        </SheetHeader>

        <div className="flex flex-col items-center gap-5">
          <div className="w-[471px] h-[44px] bg-white rounded-full flex shadow-lg justify-center items-center gap-[10px]">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("Cart")}
              className={`w-[227px] h-[36px] rounded-full text-[18px] font-normal ${
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
              className={`w-[227px] h-[36px] rounded-full text-[18px] font-normal  ${
                activeTab === "order"
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black"
              }`}
            >
              Order
            </Button>
          </div>

          {activeTab === "Cart" ? (
            <form
              id="form"
              onSubmit={formik.handleSubmit}
              className="w-[471px] h-full rounded-[20px] bg-white shadow-lg p-4"
            >
              <div className="w-[439px] flex flex-col gap-5">
                <h4 className="text-[20px] text-[#71717A] font-semibold">
                  My cart
                </h4>

                {item.length === 0 ? (
                  <Empty />
                ) : (
                  <>
                    {item.map((el, index) => (
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
                              <p className="text-[12px] text-[#09090B] font-normal">
                                {el.ingredients}
                              </p>
                            </div>
                            <Button
                              type="button"
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
                                type="button"
                                variant="link"
                                onClick={() => handleQty(el._id, "dec")}
                              >
                                <Minus />
                              </Button>
                              <p>{el.qty}</p>
                              <Button
                                type="button"
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
                    ))}

                    <div className="flex flex-col">
                      <h4 className="text-[20px] text-[#71717A] font-semibold">
                        Delivery location
                      </h4>
                      <Textarea
                        name="location"
                        placeholder="Please share your complete address"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="h-[80px]"
                      />
                      {formik.touched.location && formik.errors.location && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.location}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </form>
          ) : (
            <Orderitems />
          )}
        </div>

        <SheetFooter className="flex justify-center items-center">
          <SheetClose asChild>
            <div className="w-[471px] h-full shadow-lg bg-white rounded-[20px] flex flex-col justify-center p-7 gap-3">
              <h4 className="text-[20px] font-semibold text-[#71717A] w-[439px]">
                Payment info
              </h4>
              <div className="flex flex-col gap-3">
                <div className="w-[439px] flex flex-row justify-between pr-7">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Items
                  </p>
                  <p>{item.length}</p>
                </div>
                <div className="w-[439px] flex flex-row justify-between pr-7">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Shipping
                  </p>
                  <p>Free</p>
                </div>
              </div>
              <div className="w-[439px] flex flex-col pr-7 gap-2">
                <div className="border border-[#09090B80]-1px"></div>
                <div className="flex flex-row justify-between">
                  <p className="font-normal text-[16px] text-[#71717A]">
                    Total
                  </p>
                  <p>{total}</p>
                </div>
              </div>
              <Button
                type="submit"
                form="form"
                variant="outline"
                onClick={() => formik.handleSubmit()}
                className="bg-[#EF4444] text-white text-[14px] font-semibold h-[44px] rounded-full"
              >
                Checkout
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      <AneedLogin open={Dialogopen} onOpenChange={setDialogopen} />
      <DialogSuccess open={success} onOpenChange={setSuccess} />
    </Sheet>
  );
};
