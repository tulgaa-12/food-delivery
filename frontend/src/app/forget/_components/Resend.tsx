import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
type all = {
  nextStep: () => void;
};

const validtionschema = Yup.object({
  otp: Yup.string().required(" заавал шаардлагатай"),
});
export const Resend = ({ nextStep }: all) => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validtionschema,
    onSubmit: async (values) => {
      console.log("sending", values.otp);

      try {
        const response = await axios.post("http://localhost:8000/checkOtp", {
          otp: values.otp,
        });

        console.log("responess ", response);
        nextStep();
      } catch (error) {
        console.log(error, "error");
      }
    },
  });

  const emailInputprops = {
    id: "Otp",
    name: "Otp",
    value: formik.values.otp,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };
  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className=" basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">
            Please verify Your Email
          </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            We just sent an email to Click the link in the email to verify your
            account.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-1 justify-center w-[350px]   items-center">
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button className="bg-[gray]" type="submit">
              Resend email
            </Button>
          </div>
        </form>

        <div className="flex flex-row justify-center gap-2">
          <p className="text-[16px] text-[#71717A] font-normal">
            Don’t have an account?
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
