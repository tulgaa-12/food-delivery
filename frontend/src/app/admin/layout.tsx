import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { MenuButton } from "./_components/MenuContainer";

export const metadata: Metadata = {
  title: "admin",
  description: "admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row bg-[#F4F4F5] gap-5">
      <MenuButton />
      {children}
    </div>
  );
}
