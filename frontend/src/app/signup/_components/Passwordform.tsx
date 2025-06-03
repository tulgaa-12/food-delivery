"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";

const validtionschema = Yup.object({
  password: Yup.string()
    .required()
    .test("password", "Those password did’t match, Try again", (value) => {
      const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
      return passwordRegex.test(value);
    }),
});

type all = {
  backStep: () => void;
};
export const Passwordform = ({ backStep }: all) => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validtionschema,
    onSubmit: (values) => {
      console.log("form submit", values);
    },
  });

  const passwordInputprops = {
    name: "password",
    value: formik.values.password,
    onChange: formik.handleChange,
  };

  const isButtonDisbled = !formik.errors.password;
  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className="w-[416px] h-[288px] flex flex-col gap-10">
        <Button
          className="w-[36px] bg-[white] text-[#18181B]"
          onClick={backStep}
        >
          <ChevronLeft />
        </Button>
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">
            Create a strong password
          </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <form onSubmit={() => {}}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Input
                type="password"
                placeholder="Password"
                className="h-[36px]"
                {...passwordInputprops}
              />
              <div className="text-[#EF4444]">
                {formik.touched && formik.errors.password}
              </div>
              <Input
                type="password"
                placeholder="Confirm"
                className="h-[36px]"
                {...passwordInputprops}
              />
            </div>

            <Label htmlFor="password">Show password</Label>
            <Button className="bg-[gray]">Let's Go</Button>
          </div>
        </form>
        <div className="flex flex-row justify-center gap-2">
          <p className="text-[16px] text-[#71717A] font-normal">
            Already have an account?
          </p>
          <p className="text-[16px] text-[#2563EB]">Log in</p>
        </div>
      </div>
      <div className=" mt-[100px]">
        <img src="/5.jpg" className="w-[856px] h-[904px] rounded-lg " />
      </div>
    </div>
  );
};
