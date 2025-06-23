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
export const DialogSuccess = () => {
  return (
    <Dialog>
      <DialogContent className="flex flex-col items-center gap-4 w-[664px] h-[439px]">
        <DialogHeader>
          <h3 className="font-semibold text-[24px]">
            Your order has been successfully placed !
          </h3>
        </DialogHeader>
        <img src="illustration.jpg" alt="123" className="w-[156px] h-[265px]" />
        <Button variant="outline" className="w-[188px] text-[14px] font-medium">
          Back to home
        </Button>
      </DialogContent>
    </Dialog>
  );
};
