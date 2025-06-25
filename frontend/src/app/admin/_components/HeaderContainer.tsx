"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ChangeStateDialog } from "./ChangeStateDialog";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const HeaderContainer = () => {
  return (
    <div className="w-full pr-20">
      <div className="flex  items-center p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild></DropdownMenuTrigger>
          <Avatar className="ml-auto">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem className="capitalize"></DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="flex flex-row justify-center items-center gap-5 h-[76px]">
              <TableHead>
                <div className=" flex flex-col items-center ">
                  <TableHead className="text-[20px] font-bold">
                    Orders
                  </TableHead>
                  <TableHead className="text-[#71717A] text-[12px] font-medium ">
                    items
                  </TableHead>
                </div>
              </TableHead>
              <Input
                type="date"
                className="w-[300px] h-[36px] rounded-full ml-280"
              />
              <ChangeStateDialog />
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex flex-row justify-between">
                  <div className="w-[56px] h-[52px] flex justify-center items-center">
                    <Checkbox className="" />
                  </div>
                  <div className="w-[48px] h-[52px] flex  items-center">
                    <p>№</p>
                  </div>
                  <div className="flex items-center  2xl:w-[213px] ">
                    <p className="text-[#71717A]">Customer</p>
                  </div>
                  <div className="flex items-center  2xl:w-[213px] ">
                    <p className="text-[#71717A]">Food</p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]">Date</p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]">Total</p>
                  </div>
                  <div className="flex items-center 2xl:w-[213px] ">
                    <p className="text-[#71717A]">Delivery Address</p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]">Delivery state</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="h-24 text-center">
                <div className="flex flex-row justify-between">
                  <div className="w-[56px] h-[52px] flex justify-center items-center">
                    <Checkbox className="" />
                  </div>
                  <div className="w-[48px] h-[52px] flex  items-center">
                    <p></p>
                  </div>
                  <div className="flex items-center w-[213px] ">
                    <p className="text-[#71717A]"></p>
                  </div>
                  <div className="flex items-center w-[213px] ">
                    <p className="text-[#71717A]"></p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]"></p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]"></p>
                  </div>
                  <div className="flex items-center w-[213px] ">
                    <p className="text-[#71717A]"></p>
                  </div>
                  <div className="w-[160px] flex items-center">
                    <p className="text-[#71717A]"></p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm"></div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
