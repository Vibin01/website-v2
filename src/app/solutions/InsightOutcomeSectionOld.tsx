import React from "react";

export type InsightBullet = {
  text: string;
};

export type InsightCallout = {
  badge: string;
  text: string;
};

export type InsightOutcomeData = {
  mainCard: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    paragraphs: string[];
    listTitle: string;
    bullets: string[];
    footerParagraphs: string[];
  };
  outcomeCard: {
    title: string;
    bullets: string[];
    footerParagraphs: string[];
  };
  behavioralCard: {
    title: string;
    paragraphs: string[];
    description?: string[];
    highlightTitle: string;
    callout: InsightCallout;
  };
};

type InsightOutcomeSectionProps = {
  data: InsightOutcomeData;
};

function BlueCheckIcon() {
  return (
    <span className="mt-[0.5%] flex size-6 items-center justify-center rounded-full bg-[#0668E1] text-sm text-white sm:size-[1.5vw] sm:text-xl">
      ✓
    </span>
  );
}

function OrangeAlertIcon() {
  return (
    <span className="mt-[0.2%] flex size-6 items-center justify-center rounded-full border border-[#FF6B3D] text-sm font-bold text-[#FF6B3D] sm:text-base">
      i
    </span>
  );
}

export default function InsightOutcomeSection({
  data,
}: InsightOutcomeSectionProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-[2vw] ">
        {/* Main Card */}
        <div className="flex flex-col lg:flex-row items-start w-full gap-[3%] rounded-md border border-[#D3E6FF] bg-white p-[4%] shadow-[0px_4px_20px_5px_#0668E11A]">
          <div className="lg:w-[40%] w-full">
            <img
              src={data.mainCard.image.src}
              alt={data.mainCard.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-h3 font-bold">{data.mainCard.title}</h2>

            <div className="mt-4 space-y-[2%] text-xl font-medium">
              {data.mainCard.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-6 text-base font-bold">
              {data.mainCard.listTitle}
            </h3>

            <div className="mt-4 space-y-[3%]">
              {data.mainCard.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                                    <img src="/icons/tick-gradient-icon.svg" alt="tick icon" className="size-iconsize-sm" />
                  <p className="text-xl font-medium">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-[2%] text-xl font-medium">
              {data.mainCard.footerParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3%]">
          {/* Outcome Card */}
          <div className="rounded-md border border-[#D3E6FF] bg-white p-[4%] shadow-[0px_4px_20px_5px_#0668E11A]">
            <h3 className="mb-[4%] text-h3 font-bold">
              {data.outcomeCard.title}
            </h3>

            <div className="space-y-[4%] text-xl font-medium">
              {data.outcomeCard.bullets.map((bullet, index) => {
               const isLast = index === data.outcomeCard.bullets.length - 1;
               return (
                <div key={index} className="flex flex-col space-y-[3%] ">
                  <div className="flex items-start gap-[2%] w-full">
                  <img src="/icons/tick-gradient-icon.svg" alt="tick icon" className="size-iconsize-sm" />
                  <p>{bullet}</p>
                  
                  </div>
                  
                  {!isLast && <img src="/icons/arrow-step-blue-icon.svg" alt="icon arrow" className="size-iconsize-sm"/>}
                </div>
)})}
              <div className="mt-[2%] space-y-[3%] text-xl font-medium">
                {data.outcomeCard.footerParagraphs.map((para, index) => (
                  <p>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Behavioral Card */}
          <div className="rounded-md border border-[#D3E6FF] bg-white p-[4%] shadow-[0px_4px_20px_5px_#0668E11A]">
            <h3 className="mb-[4%] text-h3 font-bold">
              {data.behavioralCard.title}
            </h3>

            <div className="space-y-[3%] text-xl font-medium">
              {data.behavioralCard.paragraphs.map((paragraph, index) => {
                const isFirst = index === 0;

                return isFirst ? (
                  <p key={index}>{paragraph}</p>
                ) : (
                  <div key={index} className="flex items-start gap-[2%]">
                    <img src="/icons/info-red-icon.svg" alt="info icon" className="size-iconsize-sm"/>
                    <p>{paragraph}</p>
                  </div>
                );
              })}
            </div>

            {data.behavioralCard?.description && (
              <div className="space-y-[3%] mt-[2%] text-xl font-medium">
                {data.behavioralCard.description.map((description, index) => (
                  <div key={index} className="">
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-4 font-bold">
              {data.behavioralCard.highlightTitle}
            </p>

            <div className="mt-4 flex items-start gap-[2%] rounded-[12px] border border-[#0668E1] bg-[#E6F0FC] p-[3%]">
                <img src="/icons/ec-connect-icon.svg" alt="ec connect icon" className="size-iconsize-xl"/>

              <p className="text-xl font-medium text-[#0668E1]">
                {data.behavioralCard.callout.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
