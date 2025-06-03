"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const validtionschema = Yup.object({
  email: Yup.string()
    .email()
    .required("email shardlagatai")
    .test("email", (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i;
      return emailRegex.test(value);
    }),
});
type all = {
  nextStep: () => void;
  backStep: () => void;
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  container: object;
};
export const Emailform = ({ nextStep, backStep }: all) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validtionschema,
    onSubmit: (values) => {
      console.log("form submit", values);
    },
  });

  const emailInputprops = {
    name: "email",
    value: formik.values.email,
    onChange: formik.handleChange,
  };

  const isButtonDisbled = !formik.errors.email;

  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className="w-[416px] h-[288px] flex flex-col gap-10">
        <Button className="w-[36px] bg-[white] text-[#18181B]">
          <ChevronLeft />
        </Button>
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">Create your account</h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <form onSubmit={nextStep}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <Input
                placeholder="Enter your email address"
                className="h-[36px]"
                {...emailInputprops}
              />
              <div className="text-[#EF4444]">
                {formik.touched && formik.errors.email}
              </div>
            </div>
            <Button
              className="bg-[gray]"
              disabled={!isButtonDisbled}
              type="submit"
            >
              Let's Go
            </Button>
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
