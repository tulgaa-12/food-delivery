"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

type CategoryType = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export const CreateCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8000/getCategory", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(res.data.category);
    } catch (err) {
      console.error("Fetch алдаа:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8000/addCategory",
        { categoryName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategories((prev) => [...prev, res.data.category]);
      setCategoryName("");
      setDialogOpen(false);
    } catch (err) {
      console.error("Нэмэх үед алдаа:", err);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <Avatar className="ml-auto">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col shadow-2xl rounded-xl">
        <h4 className="text-[20px] font-semibold p-5">Dishes category</h4>

        <div className="flex flex-wrap gap-5 px-5 pb-5">
          <Button variant="outline" className="h-[36px] rounded-full">
            All Dishes
          </Button>

          {categories.map((el) => (
            <Dialog key={el._id}>
              <form>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-[36px] rounded-full flex gap-2"
                  >
                    {el.categoryName}
                    <Badge className="rounded-full">
                      {el.categoryName.length}
                    </Badge>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add new category</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Category name</Label>
                      <Input
                        id="name-1"
                        name="name"
                        placeholder="Type category name..."
                      />
                    </div>
                    <div className="grid gap-3"></div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Add category</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          ))}

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="rounded-full h-[36px] w-[36px] bg-[#EF4444] text-white"
              >
                <Plus />
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new category</DialogTitle>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <Label htmlFor="categoryName">Category name</Label>
                <Input
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Type category name..."
                />
              </div>

              <DialogFooter>
                <Button onClick={handleAddCategory}>Add category</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
