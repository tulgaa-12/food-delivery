import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  ShoppingCart,
  User,
} from "lucide-react";
import { Orderdetails } from "./Orderdetails";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type PropsType = {
  foods: Record<string, FoodProps[]>;
};

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[172px] bg-[#18181B] flex items-center">
        <div className="flex flex-row w-full justify-between">
          <div className="w-[146px] h-[44px] flex flex-row gap-[10px] ml-[100px]  ">
            <img src="togoo.jpg" alt="signup visual" className="w-full" />
            <div className="flex flex-col">
              <div className=" flex flex-row">
                <p className="text-[white] text-[20px] font-semibold"> Nom</p>
                <p className="text-[#EF4444]  text-[20px] font-semibold">Nom</p>
              </div>
              <p className="text-[white] font-normal text-[12px]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mr-[150px]">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[white] w-[251px] h-[36px] rounded-full  "
                >
                  <MapPin className="text-[#EF4444]" />
                  <p className="text-[#EF4444] text-[12px]">
                    Delivery address:
                  </p>
                  <p className="text-[12px] text-[#71717A]">Add Location</p>
                  <ChevronRight />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[502px] h-[288px]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-[24px]">
                    Please write your delivery address!
                  </AlertDialogTitle>

                  <AlertDialogDescription></AlertDialogDescription>
                  <Textarea
                    className="h-[80px]"
                    placeholder="Please share your complete address"
                  />
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Deliver Here</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Orderdetails />
            <Link href={"/login"}>
              <Button
                variant="outline"
                className="bg-[#EF4444] h-[36px] w-[36px] rounded-full"
              >
                <User />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <img src="BG.jpg" alt=" visual" className="w-full" />
    </div>
  );
};
