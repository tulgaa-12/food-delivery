"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const validtionschema = Yup.object({
  email: Yup.string()
    .email("email format buruu bn")
    .required("email shardlagatai")
    .test("email", "email format buruu bn", (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value || "");
    }),
});
type all = {
  nextStep: () => void;
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
export const Emailform = ({ nextStep, container, setContainer }: all) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: container.email,
    },
    validationSchema: validtionschema,
    onSubmit: async (values) => {
      console.log("sending", values.email);
      try {
        const response = await axios.post("http://localhost:8000/check-email", {
          email: values.email,
        });
        console.log(response.data.message, "end bn shuu");

        setContainer((prev) => ({ ...prev, email: values.email }));
        nextStep();
      } catch (errors: any) {
        console.log(errors, "error");

        if (errors.response.data.message === "User already existed") {
          formik.setErrors({ email: "This email is already registered" });
        } else {
          formik.setErrors({ email: "Server error or invalid request" });
        }
        return;
      }
    },
  });

  const emailInputprops = {
    name: "email",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };

  const isButtonDisabled =
    !formik.values.email || !!formik.errors.email || !formik.touched.email;

  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className=" basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">Create your account</h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <Input
                placeholder="Enter your email address"
                className="h-[36px]"
                {...emailInputprops}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-[#EF4444]">{formik.errors.email}</div>
              )}
            </div>
            <Button
              className="bg-[gray]"
              disabled={isButtonDisabled}
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
          <Link href={"/login"}>
            <p className="text-[16px] text-[#2563EB]">Log in</p>
          </Link>
        </div>
      </div>
      <div className=" basis-[60%] mt-[140px] mb-[120px]  h-full">
        <img src="/5.jpg" className="rounded-lg object-cover h-full w-full" />
      </div>
    </div>
  );
};
