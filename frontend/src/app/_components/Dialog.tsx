import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

export const DialogConatiner = ({
  foodName,
  image,
  ingredients,
  price,
  _id,
}: FoodProps) => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild className="relative">
            <Button
              variant="outline"
              className="bg-[white] text-[20px] text-[#EF4444] rounded-full w-[44px] h-[44px] absolute  right-10 bottom-35 2xl:bottom-50 z-index  ">
              +
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full h-[412px] flex flex-row rounded-[20px] gap-5 ">
            <DialogTitle>
              <VisuallyHidden>Password Reset</VisuallyHidden>
            </DialogTitle>
            <DialogHeader className="">
              <div className="w-[377px] h-[364px] relative">
                <Image
                  src={image}
                  alt={foodName}
                  fill
                  className="object-cover rounded-lg relative"
                />
              </div>
            </DialogHeader>

            <DialogFooter className="flex flex-col">
              <DialogClose asChild></DialogClose>
              <div className="flex flex-col gap-27">
                <div className=" flex flex-col gap-1 pt-[25px]">
                  <h3 className="text-[#EF4444] font-semibold text-[24px] 2xl:text-[30px]">
                    {foodName}
                  </h3>
                  <p className="text-[#09090B] text-[14px] font-normal 2xl:text-[16px]">
                    {ingredients}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p className="font-normal text-[16px] text-[#09090B]">
                        Total price
                      </p>
                      <p className="font-semibold text-[24px] text-[#09090B]">
                        ${price}
                      </p>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                      <Button
                        variant="outline"
                        type="submit"
                        className="rounded-full  bg-[#FFFFFF] hover:opacity-none w-[44px] h-[44px]">
                        -
                      </Button>
                      <p className="text-[18px] font-semibold">1</p>
                      <Button
                        variant="outline"
                        className="rounded-full  bg-[#FFFFFF] hover:opacity-none w-[44px] h-[44px]">
                        +
                      </Button>
                    </div>
                  </div>
                  <Button className="w-[377px] h-[44px] rounded-full text-[14px] font-semibold">
                    Add to cart
                  </Button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
