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

const validtionschema = Yup.object({
  otp: Yup.string().required("OTP код шаардлагатай"),
});
export const Resend = ({ nextStep, container, setContainer }: all) => {
  const formik = useFormik({
    initialValues: {
      otp: "",
      email: container.email,
    },
    validationSchema: validtionschema,
    onSubmit: async (values) => {
      console.log("sending", values.otp);

      try {
        const response = await axios.post(
          "https://food-delivery-1-6g0i.onrender.com/checkOtp",
          {
            code: values.otp,
          }
        );
        setContainer((prev) => ({ ...prev, email: values.email }));
        console.log("responess ", response);
        nextStep();
      } catch (error) {
        console.log(error, "error");
      }
    },
  });

  const isButtonDisabled =
    !formik.values.otp || !!formik.errors.otp || !formik.touched.otp;

  // const emailInputprops = {
  //   id: "otp",
  //   name: "otp",
  //   value: formik.values.otp,
  //   onChange: formik.handleChange,
  //   onBlur: formik.handleBlur,
  // };
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
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={formik.values.otp}
                onChange={(value) => formik.setFieldValue("otp", value)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {formik.touched.otp && formik.errors.otp && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.otp}
                </div>
              )}
            </div>
            <Button className="bg-[gray]" type="submit">
              Resend email
            </Button>
          </div>
        </form>
      </div>
      <div className=" basis-[60%] mt-[140px] mb-[120px]  h-full">
        <img src="/5.jpg" className="rounded-lg object-cover h-full w-full" />
      </div>
    </div>
  );
};
