"use client";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiArrowBack, BiMenu } from "react-icons/bi";
import { TbBurger } from "react-icons/tb";

const AdminSideBar = () => {
  const path = usePathname();
  const [open, setOpen] = React.useState(false);
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className={`flex flex-col gap-3 p-3 h-screen bg-white z-50 ${
        open ? "" : ""
      } w-fit overflow-hidden duration-300 md:justify-normal md:items-stretch min-w-fit`}
    >
      {!isMd ? (
        <button
          onClick={() => setOpen(!open)}
          className={`${open ? "bg-transparent text-black" : "bg-black  text-white"} p-2 rounded-xl w-fit duration-300 ease-in-out`}
        >
          {open ? <BiArrowBack className="text-2xl" /> : <BiMenu className="text-2xl" />}
          {/* <BiMenu className="text-2xl" /> */}
        </button>
      ) : (
        ""
      )}

      {!isMd && open ? (
        <div className={`flex flex-col gap-3 p-3 ${open ? "scale-100" : "scale-0"} origin-left transform duration-300 ease-in-out`}>
          <h1 className="text-2xl text-black text-center">Admin</h1>
          {/* a divider */}
          <div className="h-[1px] bg-black/20"></div>
          <Link
            href="/admin/mail"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/mail" ? "bg-black/40 text-white" : "text-black"
            }`}
          >
            Mails
          </Link>
          <Link
            href="/admin/categories"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/categories"
                ? "bg-black/40 text-white"
                : "text-black"
            }`}
          >
            Categories
          </Link>
          <Link
            href="/admin/gallery"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/gallery"
                ? "bg-black/40 text-white"
                : "text-black"
            }`}
          >
            Gallery
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
      ) : (
        ""
      )}

      {isMd ? (
        <>
          <h1 className="text-2xl text-black text-center">Admin</h1>
          {/* a divider */}
          <div className="h-[1px] bg-black/20"></div>
          <Link
            href="/admin/mail"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/mail" ? "bg-black/40 text-white" : "text-black"
            }`}
          >
            Mails
          </Link>
          <Link
            href="/admin/categories"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/categories"
                ? "bg-black/40 text-white"
                : "text-black"
            }`}
          >
            Categories
          </Link>
          <Link
            href="/admin/gallery"
            className={`p-3 px-8 rounded-xl hover:outline hover:outline-gray-400 outline-1 ${
              path === "/admin/gallery"
                ? "bg-black/40 text-white"
                : "text-black"
            }`}
          >
            Gallery
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminSideBar;
