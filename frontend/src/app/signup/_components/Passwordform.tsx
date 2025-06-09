"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Password shardlaga")
    .test(
      "password",
      "Password must be 8–32 characters with letters and numbers",
      (value) => /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(value || "")
    ),
  confirmPassword: Yup.string()
    .required("Confirm password shardlagatai")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

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

export const Passwordform = ({
  backStep,
  container,
  setContainer,
}: AllProps) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("sending", values.password);

      try {
        setContainer((prev) => ({
          ...prev,
          password: values.password,
          confirm: values.confirmPassword,
        }));

        const response = await axios.post("http://localhost:8000/signup", {
          password: values.password,
          email: container.email,
        });

        console.log(response, "end bainshuu dee");
        console.log("received email from container:", container.email);
        router.push("/");
      } catch (error: any) {
        if (error.response?.data?.message === "User already existed") {
          formik.setErrors({ password: "User already exists" });
        } else {
          console.log("Signup error:", error);
        }
      }
    },
  });

  useEffect(() => {
    console.log("container.email:", container.email);
  }, [container.email]);

  const isButtonDisabled =
    !formik.values.password ||
    !formik.values.confirmPassword ||
    !!formik.errors.password ||
    !!formik.errors.confirmPassword;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center gap-30 ">
      <div className="basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <Button
          className="w-[36px] bg-white text-[#18181B] outline-none focus:ring-2 focus:ring-pink-500"
          onClick={backStep}
          type="button"
        >
          <ChevronLeft />
        </Button>

        <div className="flex flex-col">
          <h3 className="text-[24px] font-semibold">
            Create a strong password
          </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Create a strong password with letters, numbers.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="h-[36px]"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-[#EF4444] text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}

            <div className="flex items-center gap-2">
              <Checkbox
                id="showPassword"
                checked={showPassword}
                onCheckedChange={() => setShowPassword(!showPassword)}
              />
              <Label htmlFor="showPassword" className="text-sm">
                Show password
              </Label>
            </div>

            <Button
              className="bg-gray-500 text-white"
              type="submit"
              disabled={isButtonDisabled}
            >
              Let's Go
            </Button>
          </div>

          <div className="flex flex-row justify-center gap-2">
            <p className="text-[16px] text-[#71717A] font-normal">
              Already have an account?
            </p>
            <Link href={"/login"}>
              <p className="text-[16px] text-[#2563EB] cursor-pointer">
                Log in
              </p>
            </Link>
          </div>
        </form>
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
