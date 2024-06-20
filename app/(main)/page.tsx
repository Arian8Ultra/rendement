import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rendement Group consulting",
  // description: "...",
};
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between scroll-snap-type-y smooth-scroll'>
      <header className='w-full scroll-snap-align-start'>
        <div className='flex flex-col items-center justify-center w-full relative h-[90dvh] md:h-[100dvh]'>
          <Image
            src={"/img/_e23d4acd-97ba-4d56-a7f6-ede4eeab7219.jpeg"}
            alt='Picture of the author'
            width={2000}
            height={2000}
            quality={100}
            className='w-full h-full object-cover object-bottom aspect-video fixed top-0 left-0 -z-10'
            placeholder='blur'
            blurDataURL=' '
          />

          <div className='absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-70 z-10 p-20 backdrop-blur-lg'>
            <h2 className='text-pretty md:text-5xl font-bold text-white md:w-1/2 text-center md:text-center mx-auto'style={{
              lineHeight: '1.5'
            }}>
            Delivering Creative, Sustainable-Solutions in A Challenging World Is What We Think Every Day
            </h2>
          </div>
        </div>
      </header>

      <section className='bg-white w-full scroll-snap-align-start'>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-2xl md:text-5xl font-bold text-orange-500 p-5'>
            About Us
          </h1>
          <div className='flex md:flex-row flex-col w-full mb-20 items-center'>
            <Image
              src={"/img/_824aa92c-a072-4d67-a7d3-c874d794474f.jpeg"}
              alt='Picture of the author'
              width={2000}
              height={2000}
              quality={100}
              className='md:w-1/4 w-full h-full object-cover object-bottom md:aspect-square'
              placeholder='blur'
              blurDataURL=' '
            />

            {/* add line height */}
            <div className='text md:w-1/2 p-10 text-lg md:text-[32px] h-full text-gray-500 leading-loose'>
              Rendement Group consulting was founded in 2023 after years of collaboration of its
              members with consultancy and construction firms of high caliber in
              different countries. Our team is comprised of passionate
              professionals with vast experience in a range of fields.
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white w-full scroll-snap-align-start mt-10'>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-2xl md:text-5xl font-bold text-blue-500 p-5'>
            Target Market
          </h1>
          <div className='flex flex-col md:flex-row-reverse w-full mb-20 items-center'>
            <Image
              src={"/img/_af3d7b94-8ef6-49f7-a7a7-8feca8634039.jpeg"}
              alt='Picture of the author'
              width={2000}
              height={2000}
              quality={100}
              className='md:w-1/4 w-full h-full object-cover object-bottom md:aspect-square'
              placeholder='blur'
              blurDataURL=' '
            />

            {/* add line height */}
            <div className='text md:w-1/2 p-10 text-lg md:text-[32px] h-full text-gray-500 leading-loose'>
              Our target market includes architects, building developers
              Builders, construction companies, and government agencies involved
              in commercial, residential, and industrial construction projects.
              We also cater to facility managers of large institutions and
              corporations seeking to upgrade or maintain their electrical
              infrastructure with the latest technology to improve
              sustainability and efficiency. Our services are tailored for those
              who value high-quality, integrated electrical solutions that
              enhance building performance and compliance with environmental
              standards.
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white w-full scroll-snap-align-start mt-10'>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-2xl md:text-5xl font-bold text-green-500 p-5'>
            Goals
          </h1>
          <div className='flex flex-col md:flex-row-reverse w-full mb-20 items-center'>
            <Image
              src={"/img/_e69e5015-5db1-43f7-be36-e75b35669bc5.jpeg"}
              alt='Picture of the author'
              width={2000}
              height={2000}
              quality={100}
              className='md:w-1/4 w-full h-full object-cover object-bottom md:aspect-square'
              placeholder='blur'
              blurDataURL=' '
            />

            <ul className='text md:w-1/2 p-10 text-lg md:text-[32px] h-full text-gray-500 leading-loose list-disc'>
              <li className='my-5'>
                Increasing Revenue by 15% by the End of 2024.
              </li>
              <li className='my-5'>
                Reducing Operating Expenses by 10% within 12 Months.
              </li>
              <li className='my-5'>
                Achieving a client satisfaction rate of 90% by the next 9
                months.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className='flex flex-col items-center justify-center w-full p-10 bg-slate-700'>
        <h1 className='text-[50px] font-bold text-white'>RENDEMENT GROUP</h1>
      </footer>
    </main>
  );
}
