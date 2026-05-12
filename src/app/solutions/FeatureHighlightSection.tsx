import React from "react";
import { FaArrowRight } from "react-icons/fa6";
type FeatureHighlightPoint = {
  title: string;
  description: string;
};

type StructuredItem = {
  title: string;
  values: string[];
};

type StructuredData = {
  items: StructuredItem[];
};

type FeatureHighlightData = {
  title: string;
  intro: string[];
  sectionTitle: string;
  points: FeatureHighlightPoint[];
  sectionTitle2?: string;
  points2?: FeatureHighlightPoint[];
  outro: string[];
  image: {
    src: string;
    alt: string;
  };
  flowSteps: string[]; // 👈 added
  structuredData?: StructuredData; // 👈 added
};

type FeatureHighlightSectionProps = {
  data: FeatureHighlightData;
};

export default function FeatureHighlightSection({
  data,
}: FeatureHighlightSectionProps) {
  return (
    <section className=" px-4 py-8 sm:px-10 sm:py-12">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="w-full space-y-6 lg:w-[55%]">
          <div>
            <h1 className="text-h2 font-extrabold">{data.title}</h1>

            {/* <h2 className="text-h6 font-bold">{data.subtitle}</h2> */}
          </div>
          {/* Intro */}
          <div className="space-y-[2%] text-base font-medium">
            {data.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {data.structuredData && (
            <div className="space-y-4 text-base font-medium">
              {data.structuredData.items.map((item, i) => (
                <div key={i}>
                  <p className="font-bold">{item.title}</p>

                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {item.values.map((value, index) => (
                      <React.Fragment key={index}>
                        <span>{value}</span>
                        {index !== item.values.length - 1 && <span>→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section Title */}
          <div className="space-y-sm">
            {data.sectionTitle && (
              <p className="text-base font-bold">{data.sectionTitle}</p>
            )}
            {data.points.map((point, index) => {
              // const isLast = index === data.points.length - 1;

              return (
                <div key={index} className="flex items-start gap-[3%]">
                  <div className="flex flex-col w-[30px] ">
                    <img
                      src="/icons/tick-gradient-icon.svg"
                      alt="icons tick"
                      className="size-iconsize-sm p-[1%]"
                    />
                  </div>
                  {/* {!isLast && (
                      <div className="h-full w-[2px] bg-[#D8E9FF]"></div>
                    )} */}

                  <div>
                    <h3 className="text-base font-bold text-[#0668E1]">
                      {point.title}
                    </h3>
                    <p className="text-xl font-medium">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

           {/* Section Title */}
          <div className="mt-md space-y-sm">
            {data.sectionTitle2 && (
              <p className="text-base font-bold">{data.sectionTitle2}</p>
            )}
            {data.points2?.map((point, index) => {
              // const isLast = index === data.points.length - 1;

              return (
                <div key={index} className="flex items-start gap-[3%]">
                  <div className="flex flex-col w-[30px] ">
                    <img
                      src="/icons/tick-gradient-icon.svg"
                      alt="icons tick"
                      className="mt-[3px] sm:mt-0 size-iconsize-sm"
                    />
                  </div>
                  {/* {!isLast && (
                      <div className="h-full w-[2px] bg-[#D8E9FF]"></div>
                    )} */}

                  <div>
                    <h3 className="text-base font-bold text-[#0668E1]">
                      {point.title}
                    </h3>
                    <p className="text-xl font-medium">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outro */}
          <div className="space-y-2 text-base font-medium">
            {data.outro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex w-full items-center justify-between gap-sm">
            {data.flowSteps.map((step, index) => {
              const words = step.split(" ");

              return (
                <div
                  key={step}
                  className="flex flex-col md:flex-row items-center gap-sm"
                >
                  <p className="text-xl font-bold  text-[#1B1C17] hidden md:block">
                    {words.map((word, i) => (
                      <span key={i}>
                        {word}

                        {/* First word line break */}
                        {i === 0 && <br />}

                        {/* Space between 2nd and 3rd word */}
                        {i > 0 && i !== words.length - 1 && " "}
                      </span>
                    ))}
                  </p>
                  <p className="text-xl font-bold  text-[#1B1C17] md:hidden">
                    {step}
                  </p>
                  {index !== data.flowSteps.length - 1 && (
                    <FaArrowRight className="text-base font-normal text-[#1B1C17]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="h-full w-full sm:max-w-[70%] rounded-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
