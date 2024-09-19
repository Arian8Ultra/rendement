import UserContactUsForm from "@/components/UserContactUsForm/UserContactUsForm";
import { Metadata } from "next";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import prisma from "@/prisma/prisma";

export const metadata: Metadata = {
  title: "Contact Us",
  // description: "...",
};
export default async function ContactUsPage() {
  const handleAddMail = async ({
    body,
    subject,
    userEmail,
    userPhone,
  }: {
    body: string;
    subject: string;
    userEmail: string;
    userPhone: string;
  }) => {
    "use server";
    prisma.mail
      .create({
        data: {
          body: body,
          subject: subject,
          userEmail: userEmail,
          userPhone: userPhone,
        },
      })
      .then(() => {
        alert("Your message has been sent successfully!");
      });
  };

  return (
    <div className='flex flex-col gap-6 w-full relative'>
      <Image
        src={"/img/stacked-waves-haikei.svg"}
        alt='Picture of the author'
        width={2000}
        height={2000}
        quality={100}
        className='w-full h-full object-cover object-bottom aspect-video fixed top-0 left-0 -z-10'
        placeholder='blur'
        blurDataURL=' '
      />
      <h1 className='text-5xl text-white text-center bg-black/60 p-10'>
        Contact Us
      </h1>
      {/* a description to show how to send messages and more */}
      <h4 className='text-white text-center p-10 text-xl md:w-1/2 mx-auto'>
        Thank you for your interest in our engineering and construction
        services! Whether you have questions, need assistance, or want to
        discuss a project, we’re here to help. Feel free to reach out using the
        form below, or connect with us through the provided contact details. Our
        team of experts is ready to collaborate with you to bring your vision to
        life.
      </h4>
      <p className='text-white text-center p-10'>
        We are here to help you with your questions and concerns. Please fill
        out the form below and we will get back to you as soon as possible.
      </p>

      <UserContactUsForm handleSubmit={handleAddMail} />

      {/* for more contact */}
      <div className='flex flex-col items-center justify-center text-white p-10'>
        <h2 className='text-3xl'>Contact Information</h2>
        <p className='text-lg flex gap-2 items-center'>
          <MdEmail />
          Email:
          <a href='mailto:Info.rendement@gmail.com'>Info.rendement@gmail.com</a>
        </p>
        <p className='text-lg flex gap-2 items-center'>
          <BiPhoneCall />
          Phone:
          <a href='tel:+493938549'>+493938549</a>
        </p>
        <p className='text-lg flex gap-2 items-center flex-wrap'>
          <CiLocationOn />
          Address:
          <a
            href='https://www.google.com.au/maps/place/1+Edgecliff+Rd,+Umina+Beach+NSW+2257,+Australia/@-33.5348832,151.3055744,17z/data=!3m1!4b1!4m6!3m5!1s0x6b0d4cdcb52c8a21:0xf728b87210d8198!8m2!3d-33.5348832!4d151.3081493!16s%2Fg%2F11c14zsnj9?entry=ttu'
            className='text-base'
          >
            Unit 1 6Edgcliff RD, Umina Beach, NSW 2257
          </a>
        </p>
      </div>
    </div>
  );
}
