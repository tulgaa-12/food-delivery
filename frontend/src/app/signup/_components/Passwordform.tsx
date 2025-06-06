"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("https://localhost:8000/signup", {
          password: values.password,
        });
        if (response.data.message === "User already existed") {
          alert("asd");
        }
        router.push("/");
      } catch (errors) {
        console.log(errors, "error");
      }
    },
  });
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
