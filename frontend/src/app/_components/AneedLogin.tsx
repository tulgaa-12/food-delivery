import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

export const AneedLogin = () => {
  return (
    <div>
      <Dialog>
        <DialogContent className="w-[429px] h-[184px] ">
          <DialogHeader>You need to log in first</DialogHeader>
          <Button className="w-[182px] h-[40px]">Log in</Button>
          <Button variant="outline" className="w-[182px] h-[40px]">
            Sign Up
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
