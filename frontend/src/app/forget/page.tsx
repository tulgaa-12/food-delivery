"use client";

import { useState } from "react";
import { Forgotpassword } from "./_components/Forgetpassword";
import { Resend } from "./_components/Resend";
import { CreatePassword } from "./_components/CreatePassword";

const Home = () => {
  const components = [Forgotpassword, Resend, CreatePassword];
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
  return (
    <div>
      <Stepper nextStep={nextStep} />
    </div>
  );
};

export default Home;
