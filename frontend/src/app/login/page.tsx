"use client";

import { Login } from "./_components/Login";
import { useState } from "react";
const Home = () => {
  const [container, setContainer] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
