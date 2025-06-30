"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useState, useEffect, use } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/_components/UserProvider";

type AllProps = {
  container: {
    email: string;
    password: string;
  };
  setContainer: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
};

const validtionschema = Yup.object({
  email: Yup.string()
    .email("хүчингүй имэйл байна")
    .required("Имэйл заавал шаардлагатай"),
  password: Yup.string().required("Нууц үг заавал шаардлагатай"),
});
export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user, tokenChecker } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validtionschema,
    onSubmit: async (values) => {
      setErrorMessage("");
      console.log("sending", values.password);
      console.log("sending", values.email);

      try {
        const response = await axios.post(
          "https://food-delivery-1-6g0i.onrender.com/login",
          {
            email: values.email,
            password: values.password,
          }
        );

        localStorage.setItem("token", response.data.token);
        const isAdmin = await tokenChecker(response.data.token);
      } catch (error: any) {
        console.log("Signup error:", error);
        setErrorMessage(
          error.response?.data?.message || "Алдаа гарлаа. Дахин оролдоно уу."
        );
      }
    },
  });

  useEffect(() => {
    if (user?.userId) {
      if (user?.isAdmin) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  }, [user, router]);

  return (
    <div className="flex flex-row items-center justify-center gap-30 ">
      <div className="basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col">
          <h3 className="text-[24px] font-semibold">Log in</h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5">
            <Input
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="h-[36px]"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-[#EF4444] text-sm">
                {formik.errors.email}
              </div>
            )}

            <Input
              id="password"
              name="password"
              placeholder=" Password"
              className="h-[36px]"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-[#EF4444] text-sm">
                {formik.errors.password}
              </div>
            )}

            {errorMessage && (
              <div className="text-[#EF4444] text-sm">{errorMessage}</div>
            )}

            <div className="flex items-center gap-2">
              <Link href={"/forget"}>
                <Label htmlFor="showPassword" className="text-sm">
                  Forgot password ?
                </Label>
              </Link>
            </div>

            <Button className="bg-gray-500 text-white" type="submit">
              Let's Go
            </Button>
          </div>
        </form>

        <div className="flex flex-row justify-center gap-2">
          <p className="text-[16px] text-[#71717A] font-normal">
            Don’t have an account?
          </p>
          <Link href={"/signup"}>
            <p className="text-[16px] text-[#2563EB] cursor-pointer">Sign Up</p>
          </Link>
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
