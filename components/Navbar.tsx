"use client";
import React from "react";
import { BiSolidPhoneCall, BiWrench } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { RiTeamFill, RiInformationFill } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { TbTriangleFilled } from "react-icons/tb";
import Image from "next/image";
import { Logo } from "./svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
  return (
    <nav
      id='navbar'
      className={`sticky top-0 left-0 right-0 w-full p-6 z-50 duration-300 ${
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
      <div className='flex flex-col md:flex-row items-center justify-between w-full h-full z-20'>
        <div className='flex gap-2 items-center'>
          <Logo className='w-[300px] h-[70px] fill-white' />
          {/* <TbTriangleFilled className='text-white text-lg md:text-[50px]' />
          <h1 className=' text-lg md:text-[50px] font-bold text-white'>
            RENDEMENT GROUP
          </h1> */}
        </div>
        {/* if a link is hoverd scale it to 150 */}
        <nav className='flex items-center justify-between md:text-xl *:duration-300 *:whitespace-nowrap'>
          <NavLinks title='Home' icon={<GoHomeFill />} href='/' />
          <NavLinks title='Our Team' icon={<RiTeamFill />} href='/team' />
          <NavLinks
            title='Our Expertise'
            icon={<BiWrench />}
            href='/expertise'
          />
          <NavLinks
            title='Our Projects'
            icon={<BiWrench />}
            href='/projects'
          />
          {/* <NavLinks
            title='About Us'
            icon={<RiInformationFill />}
            href='/about'
          /> */}
          <NavLinks
            title='Contact Us'
            icon={<BiSolidPhoneCall />}
            href='/contact'
          />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
