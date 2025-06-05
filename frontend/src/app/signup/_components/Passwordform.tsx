"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
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
};

export const Passwordform = ({ backStep }: AllProps) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submit", values);
    },
  });
  const isButtonDisabled =
    !formik.values.password ||
    !formik.values.confirmPassword ||
    !!formik.errors.password ||
    !!formik.errors.confirmPassword;

  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row items-center justify-center  ">
      <div className="  flex-1/5 w-[416px] flex flex-col gap-10 2xl:ml-[300px] ">
        <Button
          className="w-[36px] bg-white text-[#18181B] outline-none focus:ring-2 focus:ring-pink-500"
          onClick={backStep}
        >
          <ChevronLeft />
        </Button>

        <div className="flex flex-col w-[416px]">
          <h3 className="text-[24px] font-semibold">
            Create a strong password
          </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Create a strong password with letters, numbers.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5 w-[416px]">
            <Input
              type="password"
              name="password"
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
              type="password"
              name="confirmPassword"
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

            <div className="flex flex-row gap-3  ">
              <Label htmlFor="password" className="mt-2">
                <Checkbox />
                Show password
              </Label>
            </div>
            <Button
              className="bg-[gray]"
              type="submit"
              disabled={isButtonDisabled}
            >
              Let's Go
            </Button>
          </div>
        </form>

        <div className="flex flex-row justify-center gap-2 w-[416px]">
          <p className="text-[16px] text-[#71717A] font-normal">
            Already have an account?
          </p>
          <p className="text-[16px] text-[#2563EB] cursor-pointer">Log in</p>
        </div>
      </div>
      <div className="flex-2/5 w-full mt-[10px] h-full mt-[180px] mb-[100px] mr-[10px]  ">
        <img
          src="/5.jpg"
          alt="signup visual"
          className="  rounded-lg object-cover h-full  "
        />
      </div>
    </div>
  );
};
