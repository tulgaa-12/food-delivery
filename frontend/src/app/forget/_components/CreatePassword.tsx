"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .test(
      "password",
      "Password must be 8–32 characters with letters and numbers",
      (value) => /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(value || "")
    ),
  confirmpassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export const CreatePassword = () => {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.put("http://localhost:8000/updatePassword", {
          password: values.password,
          email: email,
        });
        router.push("/login");
      } catch (error) {
        console.log("err", error);
      }
    },
  });

  const isButtonDisabled =
    !formik.values.password ||
    !formik.values.confirmpassword ||
    !!formik.errors.password ||
    !!formik.errors.confirmpassword;

  return (
    <div className="flex flex-row items-center justify-center gap-20">
      <div className="basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col">
          <h3 className="text-[24px] font-semibold">Create new password</h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Set a new password with a combination of letters and numbers for
            better security.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-[36px] pr-10"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="password"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[10px] text-gray-500"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="text-[#EF4444] text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5 relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="h-[36px] pr-10"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="confirmpassword"
                name="confirmpassword"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[10px] text-gray-500"
                tabIndex={-1}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }>
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <div className="text-[#EF4444] text-sm">
                    {formik.errors.confirmpassword}
                  </div>
                )}
            </div>

            <Button
              type="submit"
              className="bg-[gray] w-[370px]"
              disabled={isButtonDisabled}>
              Create password
            </Button>
          </div>
        </form>
      </div>

      <div className="basis-[60%] mt-[140px] mb-[120px] h-full">
        <img src="/5.jpg" className="rounded-lg object-cover h-full w-full" />
      </div>
    </div>
  );
};
