"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
export const Dishes = () => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const uploadImage = async () => {
    if (!file) {
      return null;
    }

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", "fooddelivery");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dk7udsfgs/image/upload `,
        {
          method: "POST",
          body: formdata,
        }
      );
      const result = await response.json();

      console.log(result.secure_url);
    } catch (error: unknown) {
      return { error: "failed to upload image" };
    }
  };
  const fileHanlder = (event: any) => {
    setFile(event.target.files[0]);

    const usrl = URL.createObjectURL(event?.target.files[0]);

    setUrl(url);
  };

  return (
    <div className="w-full h-full ">
      <div className=" w-[472px] h-[596px] rounded-sm shadow-xl flex justify-center flex-col gap-10">
        <div className="flex flex-row justify-between w-[424px] items-cent">
          <p className="text-[18px] text-[#09090B] font-semibold">
            Dishes info
          </p>
          <Button className="w-[36px] h-[36px] rounded-full bg-[#F4F4F5] text-[#09090B]">
            x
          </Button>
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <p className="text-[12px] text-[#71717A] font-normal">Dish name</p>
          <Input
            className="w-[288px] h-[36px] text-[#09090B] text-[14px]"
            placeholder=""
          />
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <p className="text-[12px] text-[#71717A] font-normal">
            Dish category
          </p>
          <Select>
            <SelectTrigger className="w-[288px]">
              <SelectValue placeholder="Appetizer" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Appetizer</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <p className="text-[12px] text-[#71717A] font-normal">Ingredients</p>
          <Textarea placeholder="" className="w-[288px] h-[80px] " />
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <p className=" text-[12px] text-[#71717A] font-normal">Price</p>
          <Input
            className="w-[288px] h-[36px] text-[#09090B] text-[14px]"
            type="number"
          />
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <p className="  text-[12px] text-[#71717A] font-normal">Image</p>
          <Input
            type="file"
            onChange={fileHanlder}
            className="w-[288px] h-[116px]"
          />
        </div>
        <div className="w-[424px] flex flex-row justify-between">
          <Button
            variant="outline"
            className="w-[48px] h-[40px] border border-[#EF444480]"
          ></Button>
          <Button onClick={uploadImage} className="w-[126px] h-[40px]">
            Save changes
          </Button>
        </div>

        <img src={url} alt=" 212412" className="w-[300px] h-[300px]" />
      </div>
    </div>
  );
};
