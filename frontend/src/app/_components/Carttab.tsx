"use client";
import { Empty } from "./Empty";
import { CartItem } from "./Cartitem";
import { LocationForm } from "./Localform";
import { CartItemType } from "./Types";
import { FormikProps } from "formik";

type Props = {
  items: CartItemType[];
  handleQty: (id: string, type: "inc" | "dec") => void;
  removeItem: (id: string) => void;
  formik: FormikProps<{ location: string }>;
};

export const CartTab = ({ items, handleQty, removeItem, formik }: Props) => {
  return (
    <div className="w-[471px] h-full rounded-[20px] bg-white shadow-lg p-4">
      <div className="w-[439px] flex flex-col gap-5">
        <h4 className="text-[20px] text-[#71717A] font-semibold">My cart</h4>
        {items.length === 0 ? (
          <Empty />
        ) : (
          <>
            {items.map((el, index) => (
              <CartItem
                key={index}
                item={el}
                handleQty={handleQty}
                removeItem={removeItem}
              />
            ))}
            <LocationForm formik={formik} />
          </>
        )}
      </div>
    </div>
  );
};
