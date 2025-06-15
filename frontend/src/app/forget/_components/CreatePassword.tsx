"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const validationSchema = Yup.object({
  password: Yup.string()
    .required("baihgui bn")
    .test(
      "password",
      "Password must be 8–32 characters with letters and numbers",
      (value) => /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(value || "")
    ),
  confirmpassword: Yup.string()
    .required("Confirm password shardlagatai")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
export const CreatePassword = () => {
  const [container, setContainer] = useState({
    password: "",
    confirmpassword: "",
  });
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setContainer((prev) => ({
          ...prev,
          password: values.password,
          confirm: values.confirmpassword,
        }));
        const response = await axios.post("http://localhost:8000/password", {
          password: values.password,
          // email: container.confirmpassword,
          token: token,
        });

        console.log("end bn ", response);
        router.push("/");
      } catch (error) {
        console.log("errr", error);
      }
    },
  });

  const isButtonDisabled =
    !formik.values.password ||
    !formik.values.confirmpassword ||
    !!formik.errors.password ||
    !!formik.errors.confirmpassword;
  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className=" basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">Create new password </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Set a new password with a combination of letters and numbers for
            better security.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Input
                placeholder="Password"
                className="h-[36px]"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="password"
                name="password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-[#EF4444] text-sm">
                  {formik.errors.password}
                </div>
              )}
              <Input
                placeholder="Confirm"
                className="h-[36px]"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="confirmpassword"
                name="confirmpassword"
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <div className="text-[#EF4444] text-sm">
                    {formik.errors.confirmpassword}
                  </div>
                )}
            </div>
            <Link href={"/login"}>
              <Button
                className="bg-[gray]"
                type="submit"
                disabled={isButtonDisabled}>
                Create password
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div className=" basis-[60%] mt-[140px] mb-[120px]  h-full">
        <img src="/5.jpg" className="rounded-lg object-cover h-full w-full" />
      </div>
    </div>
  );
};
