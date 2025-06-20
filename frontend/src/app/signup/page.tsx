"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, Type } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Emailform } from "./_components/Emailform";
import { Passwordform } from "./_components/Passwordform";

import { useState } from "react";

const SignHome = () => {
  const components = [Emailform, Passwordform];
  const [step, setStep] = useState(0);
  const Stepper = components[step];
  const [input, setInput] = useState("");
  const [container, setContainer] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const backstep = () => {
    setStep((prev) => prev - 1);
  };
  console.log(components, "end abina");
  return (
    <div className="ml-[50px] 2xl:flex 2xl:justify-center ">
      <Stepper
        nextStep={nextStep}
        backStep={backstep}
        container={container}
        setContainer={setContainer}
      />
    </div>
  );
};

export default SignHome;
