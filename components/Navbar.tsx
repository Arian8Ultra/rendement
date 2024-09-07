"use client";
import { Category } from "@prisma/client";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidPhoneCall, BiWrench } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { Logo } from "./svg";
import { useMediaQuery } from "@mui/material";

interface Props {
  Categories: Category[];
}
const Navbar = ({ Categories }: Props) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const path = usePathname();

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
    if (window.scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isMd = useMediaQuery("(min-width:768px)");
  return (
    <nav
      id="navbar"
      className={`sticky ${
        isScrolled && isMd
          ? "w-fit top-2 mx-auto rounded-2xl p-3"
          : "top-0 left-0 right-0 w-full p-3 mx-0"
      } z-50 duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-70 "
          : path === "/"
          ? " bg-black/80 "
          : "bg-black"
      }`}
      style={{
        // change the blur bt scrill height
        backdropFilter: `blur(${scrollHeight / 20}px)`,
      }}
    >
      <div className="flex items-center justify-between w-full h-full z-20 gap-10">
        <div className="flex gap-2 items-center">
          <Logo className="w-[250px] h-[60px] fill-white" />
        </div>
        <div className="flex items-center justify-between md:text-xl *:duration-300 *:whitespace-nowrap">
          <NavLinks title="Home" icon={<GoHomeFill />} href="/" />
          <NavLinks title="Our Team" icon={<RiTeamFill />} href="/team" />
          <NavLinks
            title="Our Expertise"
            icon={<BiWrench />}
            href="/expertise"
          />
          <NavLinks title="Our Projects" icon={<BiWrench />} href="/projects" />
          {Categories.map((category: Category) => (
            <NavLinks
              key={category.id}
              title={category.name}
              icon={<BiWrench />}
              href={`/category/${category.enName}/${category.id}`}
            />
          ))}
          <NavLinks
            title="Contact Us"
            icon={<BiSolidPhoneCall />}
            href="/contact"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
