"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSideBar = () => {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-3 p-3 h-screen bg-white z-50">
      <h1 className="text-2xl text-black text-center">Admin</h1>
      {/* a divider */}
      <div className="h-[1px] bg-black/20"></div>
      <Link
        href="/admin/mail"
        className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
          path === "/admin/mail"? "bg-black/40 text-white" : "text-black"
        }`}
      >
        Mails
      </Link>
      {/* <Link
        href="/admin/image"
        className={` p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
          path === "/admin/image" ? "bg-black/20 text-white" : "text-black"
        }`}
      >
        Images
      </Link> */}
      <Link
        href="/admin/categories"
        className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
          path === "/admin/categories" ? "bg-black/40 text-white" : "text-black"
        }`}
      >
        Categories
      </Link>
      <Link
        href="/admin/blogs"
        className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
          path === "/admin/blogs" ? "bg-black/40 text-white" : "text-black"
        }`}
      >
        Blogs
      </Link>
      <Link
        href="/"
        className={`p-3 px-8 rounded-xl text-red-500  hover:bg-red-500/20`}
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminSideBar;
