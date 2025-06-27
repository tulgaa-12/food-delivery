"use client";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Realcreatecategory } from "./Realcreatecategory";

type CategoryType = {
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export const CreateCategory = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [toglee, setToglee] = useState<"darsan" | "daraagui">("darsan");
  useEffect(() => {
    const categoryfind = async () => {
      const token = window?.localStorage?.getItem("token");

      try {
        const res: any = await axios.get("http://localhost:8000/getCategory", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategory(res.data.category);
        console.log(res.data, "asd");
      } catch (error) {
        console.log(error, "errrrr");
      }
    };
    categoryfind();
  }, []);

  return (
    <div className="h-[236px] w-full flex flex-col gap-5">
      <Avatar className="ml-auto">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="h-[176px]  w-full flex flex-col shadow-2xl rounded-xl">
        <h4 className="text-[20px] font-semibold p-5">Dishes category</h4>
        <div className="h-[84px] flex justify-center gap-5 pr-10 pl-5 ">
          {category.map((el, index) => {
            return (
              <div>
                <Button
                  key={index}
                  variant="outline"
                  className="  h-[36px] rounded-full flex gap-2 "
                >
                  {el.categoryName}

                  <Badge className="rounded-full">
                    {el.categoryName.length}
                  </Badge>
                </Button>
              </div>
            );
          })}
          <Realcreatecategory />
        </div>
      </div>
    </div>
  );
};
