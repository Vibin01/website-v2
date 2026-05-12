"use client";

import Image from "next/image";

type OutcomeHighlightSectionData = {
  title: string;
  subtitle: string;
  points: string[];
  description: string;
  footerText: string;
  footerHighlight: string;
  footerSuffix: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomTitle?: string;
  bottomHighlight?: string;
};

interface OutcomeHighlightSectionProps {
  data: OutcomeHighlightSectionData;
}

export default function OutcomeHighlightSection({
  data,
}: OutcomeHighlightSectionProps) {
  const {
    title,
    subtitle,
    points,
    description,
    footerText,
    footerHighlight,
    footerSuffix,
    bottomTitle,
    bottomHighlight,
    image,
  } = data;

const showBottomBlock = !!(bottomTitle && bottomHighlight);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid items-center gap-8 sm:grid-cols-[1.25fr_0.75fr]">
        {/* Left Content */}
        <div>
          <h2 className="text-h2 font-extrabold text-[#0668E1]">{title}</h2>

          <p className="mt-[1%] text-h6 font-semibold">{subtitle}</p>

          <div className="mt-[4%] space-y-sm">
            

            <div className="space-y-[1.8%]">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-base font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>

<p className="text-base font-medium mt-sm">
              {description}
            </p>
          <p
            className={`text-base font-medium ${
              showBottomBlock ? "mt-1" : "mt-"
            }`}
          >
            {footerText} <span className={`font-bold ${!showBottomBlock?"text-[#0668E1]":""} `}>{footerHighlight} {" "} </span>{!showBottomBlock && <br /> }
            {footerSuffix}
          </p>

          {showBottomBlock && (
            <h3 className="mt-[1%] text-h3 font-bold">
              {bottomTitle}{" "}
              <span className="text-[#0668E1]">{bottomHighlight}</span>
            </h3>
          )}
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[90%]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}