"use client";

import { useState } from "react";
import CommonGauge from "../CommonGauge";

const explorerPoints = [
  "Hiring outcomes reflects alignment.",
  "Declines patterns reveal where alignment weakens across interviews and offers.",
  "Easy Navigator measures these signals early.",
];

const rangeCards = [
  {
    title: "Misalignment ",
    value: "0 - 70",
    border: "border-[#FFD3CA]",
    titleColor: "text-[#F0431D]",
    valueColor: "text-[#F0431D]",
  },
  {
    title: "Alignment Drift",
    value: "70 - 85",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
  {
    title: "Aligned",
    value: "85 - 100",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
];

export default function EasyNavigatorSection() {
  const [fields, setFields] = useState({
    interviewDeclines: "",
    totalInterviews: "",
    offerDeclines: "",
    totalOffers: "",
  });

  const [result, setResult] = useState<null | {
    interviewScore: number;
    offerScore: number;
    overallScore: number;
    state: string;
    message: string;
  }>(null);

  const handleChange = (key: keyof typeof fields, value: string) => {
    if (!/^\d*$/.test(value)) return;
    if (value.length > 2) return;

    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getState = (score: number) => {
    if (score >= 85) return "Aligned";
    if (score >= 70) return "Alignment Drift";
    return "Misalignment Emerging";
  };
// ID interviewDecline
// TI TotalInterview
// OD OffferDecline
// TO TotalOffers
  const handleCalculate = () => {
    const ID = Number(fields.interviewDeclines);
    const TI = Number(fields.totalInterviews);
    const OD = Number(fields.offerDeclines);
    const TO = Number(fields.totalOffers);

   if (TI < 10) {
    alert("Minimum 10 interviews required");
    return;
  }

  if (TO < 5) {
    alert("Minimum 5 offers required");
    return;
  }

  // existing validation
  if (ID < 0 || OD < 0) {
    alert("Declines must be ≥ 0");
    return;
  }

  if (ID > TI || OD > TO) {
    alert("Declines cannot exceed totals");
    return;
  }

  if (TI === 0 && TO === 0) {
    alert("At least one of Interview or Offer must be > 0");
    return;
  }

    //IDR InterviewDeclineRate
    // ODR OfferDeclineRate
let IDR=0
let ODR=0

if(TI>0){
  IDR =ID / TI
}

if(TO> 0){
  ODR =OD/TO
}


    let WM = 0;

    if (TI >0 && TO > 0) {
      WM =IDR * 0.6 + ODR * 0.4;
    } else if (TI >0) {
      WM= IDR;
    } else {
      WM =ODR;
    }

    WM = Math.max(0, Math.min(WM, 1));

    const overallScore = Math.round((1 - WM) * 100);
    const interviewScore = TI > 0 ? Math.round((1 - IDR) * 100) : 100;
    const offerScore = TO > 0 ? Math.round((1 - ODR) * 100) : 100;

    const state = getState(overallScore);

    let message = "";

    if (TI < 10 || TO < 5) {
      message = "Low sample size. For reliability, use at least 10 interviews and 5 offers.";
    } else if (state === "Aligned") {
      message = "Hiring alignment is stable. Decline pressure is low.";
    } else if (state === "Alignment Drift") {
      message = "Alignment drift is visible. Interview or offer decline patterns need attention.";
    } else {
      message = "Misalignment is emerging. Decline signals show hiring pressure.";
    }

    setResult({
      interviewScore,
      offerScore,
      overallScore,
      state,
      message,
    });
  };

  const gaugeScore = result?.overallScore ?? 0;
  const needleRotation = (gaugeScore / 100) * 180 - 90;

  const alignmentScores = [
    
    {
      title: "Interview Alignment Score",
      value: result?.interviewScore ?? 0,
      subtitle: result ? getState(result.interviewScore) : "Not Calculated",
    },
    {
      title: "Offer Alignment Score",
      value: result?.offerScore ?? 0,
      subtitle: result ? getState(result.offerScore) : "Not Calculated",
    },
  ];

  const getScoreStyle = (state: string) => {
  if (state === "Aligned") {
    return {
      box: "border-[#9ADFA9] bg-[#E7FFF3]",
      text: "text-[#2B9B43]",
    };
  }

  if (state === "Alignment Drift") {
    return {
      box: "border-[#B2D0F6] bg-[#EEF6FF]",
      text: "text-[#0668E1]",
    };
  }

  return {
    box: "border-[#FFD3CA] bg-[#FFF4F2]",
    text: "text-[#F0431D]",
  };
};

  return ( 
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Navigator
      </h1>

      <p className="mt-2 text-base font-bold text-[#1B1C17]">
        The Hiring Alignment Navigator
      </p>

      <div className="mt-4 space-y-3">
        {explorerPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-base text-[#1B1C17]"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0668E1] text-sm text-white">
              ✓
            </div>
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col-reverse md:flex-row gap-[1.5vw]">
        <div className="md:w-[65%] rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Index
          </h3>

          <CommonGauge value={gaugeScore} mode="score" />

          <div className="mt-6 grid grid-cols-3 gap-4">
            {rangeCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-md border p-4 ${card.border}`}
              >
                <p className={`text-xl font-bold ${card.titleColor}`}>
                  {card.title}
                </p>
                <p className={`text-xl font-bold ${card.valueColor}`}>
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[1vw] grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
           {alignmentScores.map((item, index) => {
  const style = getScoreStyle(item.subtitle);

  return (
    <div
      key={index}
      className={`w-full rounded-md border px-5 py-4 ${style.box}`}
    >
      <p className={`text-base font-bold ${style.text}`}>
        {item.title}: <span>{item.value}</span>
      </p>

      <p className={`mt-2 text-xl font-medium ${style.text}`}>
        {item.subtitle}
      </p>
    </div>
  );
})}
          </div>

          {result && (() => {
  const style = getScoreStyle(result.state);

  return (
    <div
      className={`mt-6 rounded-md border p-4 ${style.box}`}
    >
      <p className={`text-base font-bold ${style.text}`}>
        Overall Alignment Score: {result.overallScore}
      </p>

      <p className={`mt-2 text-xl ${style.text}`}>
        {result.state}
      </p>
    </div>
  );
})()}
        </div>

        <div className="md:w-[35%] rounded-md border border-[#CFE1FF] bg-[#FDFDFD] px-6 py-7 shadow-[0px_4px_40px_5px_#0668E11A]">
          <h3 className="text-base font-bold leading-[28px] text-[#2C2C2C]">
            Alignment Signal Calculator
          </h3>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-xl font-bold leading-[26px] text-[#2C2C2C]">
                Interview Stage
              </h4>

              <div className="mt-3 space-y-3">
                <input
  type="number"
  min={0}
  value={fields.interviewDeclines}
  onChange={(e) =>
    handleChange("interviewDeclines", e.target.value)
  }
  onKeyDown={(e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
  }
  placeholder="Interview Declines"
  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
/>

<input
  type="number"
  min={0}
  value={fields.totalInterviews}
  onChange={(e) =>
    handleChange("totalInterviews", e.target.value)
  }
  onKeyDown={(e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
  }
  placeholder="Total Interview Conducted"
  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
/>
               
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold leading-[26px] text-[#2C2C2C]">
                Offer Stage
              </h4>

              <div className="mt-3 space-y-3">
                
                <input
  type="number"
  min={0}
  value={fields.offerDeclines}
  onChange={(e) =>
    handleChange("offerDeclines", e.target.value)
  }
  onKeyDown={(e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
  }
  placeholder="Offer Declines"
  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
/>    <input
  type="number"
  min={0}
  value={fields.totalOffers}
  onChange={(e) =>
    handleChange("totalOffers", e.target.value)
  }
  onKeyDown={(e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
  }
  placeholder="Total Offers Released"
  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
/>

             
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="mt-2 h-[48px] w-full rounded-sm bg-[#0668E1] text-[16px] font-extrabold text-white"
            >
              Check Alignment
            </button>
          </div>
        </div>
     

 </div>
    </div>
  );
}