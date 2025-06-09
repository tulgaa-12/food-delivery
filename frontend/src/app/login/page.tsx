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
      <Login container={container} setContainer={setContainer} />
    </div>
  );
};

export default Home;
