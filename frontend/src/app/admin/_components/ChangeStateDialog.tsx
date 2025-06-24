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
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const ChangeStateDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-[213px] h-[36px] rounded-full">
          Change delivery state
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[364px] h-[200px]">
        <AlertDialogHeader className="flex flex-col gap-5 ">
          <div className="flex flex-row  justify-between ">
            <AlertDialogTitle>Change delivery state</AlertDialogTitle>
            <AlertDialogCancel className="rounded-full w-[36px]">
              <X />
            </AlertDialogCancel>
          </div>
          <div className="flex  flex-row gap-[16px] ">
            <Button
              variant="outline"
              className="w-[94px] h-[32px] rounded-full"
            >
              Delivered
            </Button>
            <Button
              variant="outline"
              className="w-[94px] h-[32px] rounded-full"
            >
              Pending
            </Button>
            <Button
              variant="outline"
              className="w-[94px] h-[32px] rounded-full"
            >
              Cancelled
            </Button>
          </div>
          <AlertDialogDescription className="flex flex-row"></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-[316px] rounded-full">
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
