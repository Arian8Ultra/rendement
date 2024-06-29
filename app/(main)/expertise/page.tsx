import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "Expertise",
  // description: "...",
};
export default async function ExpertisePage() {
  return (
    <main className='min-h-screen bg-background-600'>
      <div
        className='flex flex-col gap-5 md:px-20 py-5 min-h-screen'
        style={{
          background: "url('/img/layered-waves-haikei (1).svg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "screen",
          backgroundClip: "border-box",
        }}
      >
        <Accordion className='bg-opacity-70 bg-white rounded-xl'>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className='p-6'
          >
            <h2 className='text text-3xl font-bold'>VISION</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className='grid md:grid-cols-2'>
              <div className='flex flex-col justify-evenly gap-3 p-8 *:text-xl text-pretty'>
                <p className='first-letter:ms-3'>
                  We put public interests, environmental sustainability, and
                  client satisfaction first and foremost in every step of design
                  and construction
                </p>
                <p className='first-letter:ms-3'>
                  In doing so, we strive to utilize the latest technology
                  available in the field.
                </p>
                <p className='first-letter:ms-3'>
                  At Rendement Group consulting, we make the world smarter, more
                  connected and more sustainable.
                </p>
                <h3 className='font-bold text-2xl first-letter:text-5xl first-letter:ms-3'>
                  Daily challenges to realize creative solutions.
                </h3>
                <p className='first-letter:ms-3'>
                  It calls on us to join forces, putting our knowledge and
                  imagination together to reinvent the way we solve problems and
                  shape the next generation of innovative solutions.
                </p>
                <h3 className='font-bold text-2xl first-letter:text-5xl first-letter:ms-3'>
                  Reinventing tomorrow is our promise and an invitation to raise
                  the bar in everything we do.
                </h3>
                <p className='first-letter:ms-3'>
                  From the brilliant solutions we create with our clients, to
                  the open and inclusive culture we create for our people. From
                  the positive difference we make in our communities, to the
                  added value we deliver to our shareholders.
                </p>
              </div>
              <Image
                src={"/img/_824aa92c-a072-4d67-a7d3-c874d794474f.jpeg"}
                alt='Picture of the author'
                width={2000}
                height={2000}
                quality={100}
                className='w-full h-full object-cover object-bottom aspect-video rounded-xl'
                placeholder='blur'
                blurDataURL=' '
              />
            </div>
          </AccordionDetails>
        </Accordion>


        
        <Accordion className='bg-opacity-70 bg-white rounded-xl'>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className='p-6'
          >
            <h2 className='text text-3xl font-bold'>MISSION</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className='grid md:grid-cols-2'>
              <div className='flex flex-col justify-evenly gap-1 p-8 *:text-xl text-pretty'>
                <p className='first-letter:ms-3'>
                  Helping our clients build better communities by providing
                  multi-discipline infrastructure solutions with excellent,
                  quality, and value services. We will achieve this by
                  developing our talent, expertise, and service range;
                  practicing corporate social responsibility; operating safely;
                  and committing to our employees.
                </p>

                <h3 className='font-bold text-2xl first-letter:text-5xl first-letter:ms-3'>
                  Company Values
                </h3>
                <h4 className='font-semibold text-xl first-letter:text-3xl first-letter:ms-3'>
                  Reputable
                </h4>
                <p className='first-letter:ms-3'>
                  We fulfill our obligations under any circumstances, whether
                  it’s a promise to our staff or an obligation to a client.
                  Building and reinforcing trust is always at the forefront of
                  our minds.
                </p>
                <h4 className='font-semibold text-xl first-letter:text-3xl first-letter:ms-3'>
                  Welcoming
                </h4>
                <p className='first-letter:ms-3'>
                  We continue to build an environment of trust, respect, and
                  belonging that enables team members to feel safe to be
                  themselves. 
                </p>
                <h4 className='font-semibold text-xl first-letter:text-3xl first-letter:ms-3'>
                  Collaborative
                </h4>
                <p className='first-letter:ms-3'>
                  Diverse perspectives and respect are the keys to
                  problem-solving and collaboration. We value all walks of life
                  and strive to provide an equal playing field for everyone.
                </p>
                <h4 className='font-semibold text-xl first-letter:text-3xl first-letter:ms-3'>
                  Creative
                </h4>
                <p className='first-letter:ms-3'>
                  We are curious learners and purpose-driven, and together we
                  foster a safe space for idea sharing. These ideas come to life
                  in the infrastructure we use every day. Inspiration is all
                  around us.
                </p>
              </div>
              <Image
                src={"/img/_decbeb1b-b988-4f7f-a31f-a8d23d6a36f1.jpg"}
                alt='Picture of the author'
                width={2000}
                height={2000}
                quality={100}
                className='w-full h-full object-cover aspect-video rounded-xl object-top'
                placeholder='blur'
                blurDataURL=' '
              />
            </div>
          </AccordionDetails>
        </Accordion>



        <Accordion className='bg-opacity-70 bg-white rounded-xl'>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className='p-6 bg-transparent'
          >
            <h2 className='text text-3xl font-bold'>OUR SERVICES</h2>
          </AccordionSummary>
          <AccordionDetails className='bg-transparent'>
            <div className='grid md:grid-cols-2'>
              <div className='flex flex-col justify-evenly gap-1 p-8 *:text-xl text-pretty'>
                <p className='first-letter:ms-3'>
                  At Rendement Group, we offer a wide range of services,
                  including planning, engineering, design and consultancy, and
                  project management services. We work collaboratively with
                  owners and developers to understand their project goals and
                  create sustainable solutions to meet them.
                </p>
                <p className='first-letter:ms-3'>
                  Most projects require a range of expertise and technology, and
                  as a multi-discipline consulting engineering firm, Rendement
                  can provide a wide variety of engineering and design services.
                  Our proficiency and experience in consulting, and engineering,
                  provide our clients with innovative and diversified solutions
                  in MEP fields. We have broad expertise in the building
                  mechanical and electrical fields, including:
                </p>
                <ul className='list-disc'>
                  <li className='font-bold text-2xl  first-letter:ms-3'>
                    BIM and construction documentation
                  </li>
                  <li className='font-bold text-2xl  first-letter:ms-3'>
                    Electrical & design coordination
                  </li>
                  <li className='font-bold text-2xl  first-letter:ms-3'>
                    MEP virtual construction services (Revit modeling)
                  </li>
                  <li className='font-bold text-2xl l first-letter:ms-3'>
                    MEP equipment estimation via REVIT
                  </li>
                  <li className='font-bold text-2xl  first-letter:ms-3'>
                    Supervise the electrical installation and commissioning
                  </li>
                  <li className='font-bold text-2xl  first-letter:ms-3'>
                    As built drawing
                  </li>
                  {/* new lsit item for additinal details */}
                  



                  






                </ul>
              </div>
              <Image
                src={"/img/_e23d4acd-97ba-4d56-a7f6-ede4eeab7219.jpeg"}
                alt='Picture of the author'
                width={2000}
                height={2000}
                quality={100}
                className='w-full h-full object-cover aspect-video rounded-xl object-bottom'
                placeholder='blur'
                blurDataURL=' '
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
}
