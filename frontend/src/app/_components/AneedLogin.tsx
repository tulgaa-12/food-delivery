"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AneedLogin = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-[429px] h-[184px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-row justify-around pl-5 ">
            <h3 className="text-[24px] font-semibold">
              You need to log in first
            </h3>
            <AlertDialogCancel
              onClick={() => onOpenChange(false)}
              className="rounded-full w-[40px] h-[40px]">
              <X />
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              onOpenChange(false);
              router.push("/login");
            }}
            className="w-[182px] h-[40px]">
            Log in
          </AlertDialogAction>
          <AlertDialogCancel
            onClick={() => {
              onOpenChange(false);
              router.push("/signup");
            }}
            className="w-[182px] h-[40px]">
            Sign up
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
