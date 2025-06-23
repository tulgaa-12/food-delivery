"use client";

import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { jwtDecode } from "jwt-decode";
interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export const Signout = () => {
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        if (decoded.email) {
          setEmail(decoded.email);
        }
        if (decoded.exp && Date.now() >= decoded.exp * 1000) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }
      } catch (error) {
        console.error("Token decode error", error);
      }
    }
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  const nodeRef = useRef<HTMLDivElement>(null!);
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-[188px] h-[104px] shadow-lg bg-[#FFFFFF] rounded-xl flex flex-col justify-center items-center cursor-move"
      >
        <div className="text-sm font-medium text-gray-700"> {email}</div>
        <Button onClick={handleSignout} className="bg-[#F4F4F5] text-[black]">
          Sign Out
        </Button>
      </div>
    </Draggable>
  );
};
