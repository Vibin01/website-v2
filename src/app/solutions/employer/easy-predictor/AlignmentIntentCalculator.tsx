"use client";

type ActiveTab = "interview" | "offer";

type Props = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;

  inputCount: number;
  setInputCount: (val: number) => void;

  setAppliedCount: (val: number) => void;
  setCalculatedValue: (value: number | null) => void; 
};

export default function AlignmentIntentCalculator({
  activeTab,
  setActiveTab,
  inputCount,
  setInputCount,
  setAppliedCount,
  setCalculatedValue,
}: Props) {
  const handleCalculate = () => {
    const formula = activeTab === "interview" ? 9.6 : 1.6;

    const total = Number((inputCount * formula).toFixed(1));

    setAppliedCount(inputCount); // ✅ store used count
    setCalculatedValue(total);   // ✅ update result
  };
const handleTabChange = (tab: ActiveTab) => {
  setActiveTab(tab);

  setCalculatedValue(null);
};

  return (
    <div className="flex md:w-[35%] h-fit flex-col gap-6 rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">
      <p className="text-base font-bold text-[#2C2C2C]">
        Alignment Intent Calculator
      </p>

      <div className="flex gap-2 rounded-[8px] border border-[#EEEEEE] p-1">
        <button
          onClick={() => handleTabChange("interview")}
          className={`flex h-[40px] w-full items-center justify-center rounded-[8px] font-bold ${
            activeTab === "interview"
              ? "bg-[#0668E1] text-white"
              : "text-[#2C2C2C]"
          }`}
        >
          Interview
        </button>

        <button
          onClick={() => handleTabChange("offer")}
          className={`flex h-[40px] w-full items-center justify-center rounded-[8px] font-bold ${
            activeTab === "offer"
              ? "bg-[#0668E1] text-white"
              : "text-[#2C2C2C]"
          }`}
        >
          Offer
        </button>
      </div>

      <p className="text-xl font-medium text-[#2C2C2C]">
        Enter hiring parameters to estimate when alignment signals emerge
      </p>

      <div className="flex flex-col gap-3 text-xl font-medium text-[#2C2C2C]">
        {activeTab === "interview" ? (
          <>
            <p>Interview Initiated: Mon 10:00 AM</p>
            <p>Interview Scheduled: Tue 10:00 AM</p>
          </>
        ) : (
          <>
            <p>Offer Released: Mon 10:00 AM</p>
            <p>Date of Joining: Fri 10:00 AM</p>
          </>
        )}
      </div>

      <div>
        <p className="mb-2 text-lg font-medium text-[#2C2C2C]">
          Adjust count to see total intervention impact
        </p>

        <input
          type="number"
          min="1"
           value={inputCount}
        onChange={(e) => setInputCount(Number(e.target.value))}
          placeholder={
            activeTab === "interview"
              ? "No of Schedules: 1"
              : "No of Offers: 1"
          }
          className="h-[52px] w-full rounded-[8px] border border-[#D3E6FF] px-5 text-xl outline-none"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="flex h-[56px] items-center justify-center rounded-[8px] bg-[#0668E1] text-xl font-bold text-white"
      >
        Calculate
      </button>
    </div>
  );
}