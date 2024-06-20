import { Metadata } from "next";
import Image from "next/image";
import React from "react";


export const metadata: Metadata = {
  title: "Our Team",
  // description: "...",
};
const TeamPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center gap-5 scroll-snap-type-y smooth-scroll'>
      <header className='w-full scroll-snap-align-start'>
        <div className='flex flex-col items-center justify-center w-full relative h-[50dvh]'>
          <Image
            src={"/img/_decbeb1b-b988-4f7f-a31f-a8d23d6a36f1.jpg"}
            alt='Picture of the author'
            width={2000}
            height={2000}
            quality={100}
            className='w-full h-[50dvh] object-cover object-top absolute top-0 left-0 -z-10'
            placeholder='blur'
            blurDataURL=' '
          />

          <div
            className='absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-70 z-10 p-20 backdrop-blur-md'
            style={{}}
          >
            <h1 className='text-[50px] text-white w-full my-10 text-center '>
              Our Team
            </h1>
            <h2 className='text-lg md:text-5xl text-white w-full md:w-2/3 text-center md:text-start '>
              Rendement Group consulting was founded in 2023 after years of collaboration of its
              members with consultancy and construction firms of high calibre in
              different countries.
              <br />
              With a total of over 50 years of experience, Our team is comprised
              of passionate professionals with vast experience in a range of
              fields.
            </h2>
          </div>
        </div>
      </header>

      <section className='flex flex-col items-center justify-center w-full scroll-snap-align-start my-10'>
        <div className='grid justify-center grid-cols-1 md:grid-cols-4 gap-2 w-[90%] items-center'>
          <Image
            src={"/img/profile1.png"}
            alt='Picture of the author'
            width={2000}
            height={2000}
            quality={100}
            className='md:w-full w-1/4 place-self-center aspect-square rounded-full object-cover'
            placeholder='blur'
            blurDataURL=' '
          />

          <div className='col-span-3 flex flex-col justify-evenly gap-2 '>
            <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-3xl text-black font-bold'>Farhad Azizian</h1>
              <h2 className='text-2xl text-black'>CEO & Founder</h2>
            </div>
            <p
              className='text-lg md:text-2xl text-black md:w-[60%] mx-auto text-justify'
              style={{
                lineHeight: "2",
              }}
            >
              With more than 20 years of experience in the consultancy and
              construction sector and leading the design and delivery of various
              types of projects, Farhad is an expert and trust advisor in the
              mission-critical industry a founder of the Rendement Group consulting, he is
              determined to establish a strong team to deliver sustainable and
              energy-efficient solutions to overcome environmental challenges.
              Farhad is a chartered engineer (MIEAust, CPEng, NER, RPEQ), a
              member of the IEEE NSW division, Uptime Institute Accredited Tier
              Designer (ATD), and NABERS energy accredited assessor.
            </p>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center w-full scroll-snap-align-start my-10'>
        <div className='grid justify-center grid-cols-1 md:grid-cols-4 gap-2 w-[90%] items-center'>
          <Image
            src={"/img/profile2.png"}
            alt='Picture of the author'
            width={2000}
            height={2000}
            quality={100}
            className='md:w-full w-1/4 place-self-center aspect-square rounded-full object-cover md:hidden block'
            placeholder='blur'
            blurDataURL=' '
          />

          <div className='col-span-3 flex flex-col justify-evenly gap-2 '>
            <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-3xl text-black font-bold'>Kevin Garjan</h1>
              <h2 className='text-2xl text-black'>
                Senior Electrical Designand Project engineer
              </h2>
            </div>
            <p
              className='text-lg md:text-2xl text-black md:w-[60%] mx-auto text-justify'
              style={{
                lineHeight: "2",
              }}
            >
              A dedicated power electrical system engineer with over 10 years of
              hands-on experience in the construction electrical building
              industry providing components of electrical building services
              design, documentation, and construction supervision to a wide
              range of mega projects including Commercial, Educational,
              Residential, Medical, Office, and Urban developments, Kevin has
              successfully controlled the project work, quality of deliverables,
              and stakeholder engagements for different types of projects from
              infrastructure to complex buildings.
              <br />
              As an MEP technical manager–coordinated, Kevin has been involved
              in various projects for checking the electrical and mechanical
              systems clash of construction projects worth over $50 million
              which was successfully concluded.
            </p>
          </div>
          <Image
            src={"/img/profile2.png"}
            alt='Picture of the author'
            width={2000}
            height={2000}
            quality={100}
            className='md:w-full w-1/4 place-self-center aspect-square rounded-full object-cover md:block hidden'
            placeholder='blur'
            blurDataURL=' '
          />
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
