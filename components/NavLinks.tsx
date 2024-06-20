"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  title: string;
  icon: React.ReactNode;
  href: string;
}
const NavLinks = ({ title, icon, href }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`p-2 md:p-5 hover:scale-105 hover:text-white flex gap-2 items-center duration-300 w-fit hover:animate-pulse ${
        path === href ? "text-white scale-110" : "text-gray-400"
      }`}
    >
      {path === href ?  icon  : null}
      {title}
    </Link>
  );
};

export default NavLinks;
