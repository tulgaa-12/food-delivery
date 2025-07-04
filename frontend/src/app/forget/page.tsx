"use client";

import { useState } from "react";
import { Forgotpassword } from "./_components/Forgetpassword";
import { Resend } from "./_components/Resend";
import { CreatePassword } from "./_components/CreatePassword";

const ForgetHome = () => {
  const components = [Forgotpassword, Resend, CreatePassword];
  const [step, setStep] = useState(0);
  const Stepper = components[step];
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");

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
  return (
    <div className="ml-[50px] 2xl:flex 2xl:justify-center">
      <Stepper
        nextStep={nextStep}
        container={container}
        setContainer={setContainer}
      />
    </div>
  );
};

export default ForgetHome;
