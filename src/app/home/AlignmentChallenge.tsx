import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

const cardData= [
  {
    title: "Situation",
    description: "Candidates define the Situation.",
  },
  {
    title: "Direction",
    description: "Employers design the Direction.",
  },
  {
    title: "Execution",
    description: "Recruiters drive the Execution.",
  },
];


const AlignmentChallenge = () => {
  return (
    <>
    
    <div className="">

  <h1 className="text-h2 font-extrabold" 
>    The Alignment Challenge
  </h1>

  <p className="text-h6 font-bold mb-lg">
    Seamless Yield depends on alignment across three dimensions of hiring.
  </p>

  <div className=" bg-white border border-[#DEEDFF] rounded-md p-md flex flex-col 
              shadow-[0px_4px_40px_5px_#0668E11A]">

   <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm mb-md ">
      {cardData.map((item, index) => (
        <div
          key={index}
          className=" border border-[#0668E1] rounded-md p-sm flex flex-col"
        >
          <h3 className="text-h6 font-bold text-[#0668E1]">
            {item.title}
          </h3>
          <p className="text-base font-medium">
            {item.description}
          </p>
        </div>
      ))}
    </div>
    <div>
      <p className="text-base font-bold mt-md">
        When they misalign:
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-sm md:gap-lg text-base font-medium">

        <span>Interviews stall.</span>

        <FaArrowRight className="w-fit rotate-90 sm:rotate-none" />

        <span>Feedback slows.</span>

        <FaArrowRight className="w-fit rotate-90 sm:rotate-none"/>

        <span>Offers decline.</span>

      </div>
    </div>

    <div>
      <p className="text-base font-bold mt-md">
        When these dimensions align:
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-sm md:gap-lg text-base font-medium">

        <span>Interviews move forward.</span>

        <FaArrowRight className="w-fit rotate-90 sm:rotate-none"/>

        <span>Feedback flows.</span>

        <FaArrowRight className="w-fit rotate-90 sm:rotate-none"/>

        <span>Offers convert.</span>

      </div>
    </div>

  </div>

  <div className="mt-sm text-base font-medium space-y-sm">
    <p className='text-base font-medium'>Alignment does not happen within actors. It occurs between them.</p>
    <p className='text-base font-medium'>These interaction points are called seams.</p>
  </div>

</div>
    </>
  )
}

export default AlignmentChallenge