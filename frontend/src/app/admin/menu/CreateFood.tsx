"use client ";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Image, Plus, X } from "lucide-react";
import { useState } from "react";
export const CreateFood = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleRemove = () => {
    setSelectedImage(null);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger
          asChild
          className="w-[270px] h-[241px] border-2 border-[#EF4444] border-dashed flex flex-col justify-center items-center gap-4 rounded-xl">
          <div>
            <Button
              variant="outline"
              className="rounded-full h-[36px] w-[36px] bg-[#EF4444] text-[white]">
              <Plus />
            </Button>
            <p className="flex  text-center fornt-medium text-[14px] ">
              Add new Dish to Salads{" "}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[460px] flex flex-col gap-10">
          <DialogHeader className="flex flex-col gap-10">
            <DialogTitle>Add new Dish to Appetizers</DialogTitle>
            <DialogDescription className="flex flex-row justify-between">
              <div className="flex flex-col gap-[8px]">
                <p className="font-medium text-[14px] text-[#09090B]">
                  Food name
                </p>
                <Input
                  className="w-[194px] text-[#09090B]"
                  placeholder="Type food name"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-medium text-[14px] text-[#09090B]">
                  Food price
                </p>
                <Input
                  className="w-[194px] text-[#09090B]"
                  placeholder="Enter price..."
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Ingredients</Label>
              <Textarea
                id="name-1"
                className="h-[90px]"
                placeholder="List ingredients..."
              />
            </div>
            <div className="grid gap-3">
              {/* <Label htmlFor="username-1">Food image</Label>
              <Input id="username-1" type="file" className="h-[138px]" /> */}
              <div className="w-full h-[138px]">
                <Input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setSelectedImage(file);
                    }
                  }}
                />

                {selectedImage ? (
                  <div className="relative h-[138px] w-full">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Preview"
                      className="h-full w-full object-cover rounded-xl"
                    />
                    <Button
                      variant="outline"
                      onClick={handleRemove}
                      type="button"
                      className="absolute top-2 right-2 bg-white rounded-full p-3 shadow  w-[36px]">
                      <X />
                    </Button>
                  </div>
                ) : (
                  <Label
                    htmlFor="fileUpload"
                    className="flex flex-col items-center justify-center h-[138px] border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:border-blue-400 transition duration-300 bg-[#2563EB0D]">
                    <span className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center">
                      <Image className="text-gray-700" />
                    </span>
                    <span className="text-[14px] font-medium text-[#18181B] mt-2">
                      Choose a file or drag & drop it here
                    </span>
                  </Label>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Dish</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
