"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, Type } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Emailform } from "./signup/_components/Emailform";
import { Passwordform } from "./signup/_components/Passwordform";
import { useState } from "react";

// const validtionschema = Yup.object({
//   email: Yup.string()
//     .required()
//     .test(
//       "email",
//       "Invalid email. Use a format like example@email.com",
//       (value) => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i;
//         return emailRegex.test(value);
//       }
//     ),
// });

const Home = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //     },
  //     validationSchema: validtionschema,
  //     onSubmit: (values) => {
  //       console.log("form submit", values);
  //     },
  //   });

  //   const emailInputprops = {
  //     name: "email",
  //     value: formik.values.email,
  //     onChange: formik.handleChange,
  //   };

  //   const isButtonDisbled = !formik.errors.email;

  const components = [Emailform, Passwordform];
  const [step, setStep] = useState(0);
  const Stepper = components[step];
  const [input, setInput] = useState("");
  const [container, Setcontainer] = useState({
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

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <Stepper
        nextStep={nextStep}
        backStep={backstep}
        inputHandler={inputHandler}
        container={container}
      />
    </div>
  );
};

export default Home;
