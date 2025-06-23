import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const DialogSuccess = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center gap-4 w-[664px] h-[439px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-[24px] text-center">
            Your order has been successfully placed!
          </DialogTitle>
        </DialogHeader>

        <img
          src="/illustration.jpg"
          alt="Order Success"
          className="w-[156px] h-[265px]"
        />

        <Button
          variant="outline"
          className="w-[188px] text-[14px] font-medium"
          onClick={() => {
            onOpenChange(false);
            router.push("/");
          }}>
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};
