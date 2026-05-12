"use client";
import { useEffect, useState } from "react";
import CommonGauge from "../CommonGauge";

const explorerPoints = [
  "Explore the hiring load before alignment breaks.",
  "Easy Explorer reveals where pressure is forming.",
  "Realign early before disruption occurs.",
];

const rangeCards = [
  {
    title: "Misaligned",
    value: "00.00 - 00.83",
    border: "border-[#FFD3CA]",
    titleColor: "text-[#F0431D]",
    valueColor: "text-[#F0431D]",
  },
  {
    title: "Drifting",
    value: "00.00 - 00.00",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
  {
    title: "Aligned",
    value: "00.00 - 00.83",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
];

export default function EasyExplorer() {
  const [fields, setFields] = useState([
    { label: "Active Positions", value: "30" },
    { label: "Joins in Period", value: "5" },
  ]);
  const [gaugeValue, setGaugeValue] = useState(0);

  const [result, setResult] = useState<any>(null);

  // useEffect(() => {
  //   setGaugeValue(result ? Number(result.api) * 100 : 0);
  // }, [result,gaugeValue]);

 const handleChange = (index: number, value: string) => {
  const updated = [...fields];
  updated[index].value = value;
  setFields(updated);
};

  const handleCalculate = () => {
    const D = Number(fields[0].value);
    const S = Number(fields[1].value);

    if (!D) return;

    const apiValue = (D - S) / D;
    const api = Math.max(0, Math.min(1, apiValue));
    const score = api.toFixed(2);

    setGaugeValue(api);

    let rangeState = "";
    if (api <= 0.4) rangeState = "Aligned";
    else if (api <= 0.7) rangeState = "Drifting";
    else rangeState = "Misaligned";

    let message = "";
    let state = "";
    let window = "";

    if (D > S) {
      message =
        "Hiring demand remains unfulfilled. Current velocity is insufficient to maintain alignment.";
      state = api >= 0.7 ? "Severe" : "Emerging";
      window = api >= 0.7 ? "Critical" : "Narrowing";
    } else if (D === S) {
      message =
        "Hiring demand and joins are aligned. Current system is stable.";
      state = "Aligned";
      window = "Stable";
    } else {
      message =
        "Hiring demand has been met. Join volume exceeds current demand—review allocation.";
      state = "Aligned";
      window = "Stable";
    }

    setResult({
      api: score,
      percent: Math.round(api * 100),
      rangeState,
      message,
      state,
      window,
    });
  };

  //  setGaugeValue(result ? Number(result.api) * 100 : 0);
  // const needleRotation = (gaugeValue / 100) * 180 - 90;

  return (
    <div className="mx-auto">
      {/* Header */}
      <h1 className=" text-h2 font-extrabold text-[#1B1C17]">Easy Explorer</h1>
      <p className="mt-2 text-base font-bold text-[#1B1C17]">
        The Hiring Alignment Explorer
      </p>

      {/* Points */}
      <div className="mt-4 space-y-3">
        {explorerPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-base text-[#1B1C17]"
          >
            <img
              src="/icons/tick-gradient-icon.svg"
              alt="tick icon"
              className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
            />
            <span>{point}</span>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="mt-6 flex flex-col-reverse md:flex-row  gap-[1.5vw]">
        {/* Left Card */}
        <div className="md:w-[65%] rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Index
          </h3>

          <CommonGauge value={gaugeValue} mode="decimal" />

          {/* Range Boxes */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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

          {result && (
            <div
              className={`mt-6 rounded-md border p-4 ${
                result.rangeState === "Misaligned"
                  ? "border-[#FFD3CA] bg-[#FFF4F2] text-[#F0431D]"
                  : result.rangeState === "Drifting"
                    ? "border-[#79ace4] bg-[#d6e4f3] text-[#0665DA]"
                    : "border-[#9ADFA9] bg-[#E7FFF3] text-[#2B9B43]"
              }`}
            >
              <p className="text-base font-bold">
                Current load score: {result.api}
              </p>

              <p className="mt-2 text-xl">
                {result.percent}% of hiring demand remains unbalanced by Joins.
              </p>

              <p className="text-xl">{result.message}</p>
            </div>
          )}

          {/* Footer Text */}
          {result && (
            <div className="mt-4 flex gap-6 text-xl">
              <div>
                <span className="font-bold">State:</span>{" "}
                <span className="text-[#2C2C2C]">{result.state}</span>
              </div>

              <div>
                <span className="font-bold">Intervention Window:</span>{" "}
                <span className="text-[#2C2C2C]">{result.window}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Card */}
        <div className="md:w-[35%] rounded-md h-fit border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Calculator
          </h3>

          <div className="mt-6 space-y-4">
            {fields.map((field, index) => (
              <div key={index}>
                <label className="text-[14px] text-[#2C2C2C]">
                  {field.label}
                </label>

                <input
  type="number"
  min={1}
  max={99}
  value={fields[index].value}
  onChange={(e) => handleChange(index, e.target.value)}
  className="mt-1 h-[44px] w-full rounded-[8px] border border-[#EEEEEE] px-5 text-xl outline-none"
/>
</div>
            ))}

            <button
              onClick={handleCalculate}
              className="h-[46px] w-full rounded-[8px] bg-[#0668E1] text-xl font-bold text-white"
            >
              Calculate Alignment Pressure
            </button>

            {/* {result && (
              <div className="mt-4 rounded-[8px] border border-[#D1E4FF] bg-[#EEF6FF] p-4">
                <p className="text-xl font-bold text-[#0668E1]">
                  API = {result.api}
                </p>

                <p className="mt-1 text-[16px] text-[#2C2C2C]">
                  result: {result.api}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
