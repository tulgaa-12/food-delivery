"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
type AllProps = {
  backStep: () => void;
  container: {
    email: string;
    password: string;
    confirm: string;
  };
  setContainer: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirm: string;
    }>
  >;
};
const [showPassword, setShowPassword] = useState(false);
export const Login = ({ backStep }: AllProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-30 ">
      <div className="basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <Button
          className="w-[36px] bg-white text-[#18181B] outline-none focus:ring-2 focus:ring-pink-500"
          onClick={backStep}
          type="button">
          <ChevronLeft />
        </Button>

        <div className="flex flex-col">
          <h3 className="text-[24px] font-semibold">Log in</h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <form>
          <div className="flex flex-col gap-5">
            <Input
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="h-[36px]"
            />

            <Input
              id="Password"
              name="Password"
              type={showPassword ? "text" : "password"}
              placeholder=" Password"
              className="h-[36px]"
            />

            <div className="flex items-center gap-2">
              <Label htmlFor="showPassword" className="text-sm">
                Forgot password ?
              </Label>
            </div>

            <Button className="bg-gray-500 text-white" type="submit">
              Let's Go
            </Button>
          </div>
        </form>

        <div className="flex flex-row justify-center gap-2">
          <p className="text-[16px] text-[#71717A] font-normal">
            Already have an account?
          </p>
          <p className="text-[16px] text-[#2563EB] cursor-pointer">Log in</p>
        </div>
      </div>

      <div className="basis-[60%] mt-[140px] mb-[120px]  h-full">
        <img
          src="/5.jpg"
          alt="signup visual"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
