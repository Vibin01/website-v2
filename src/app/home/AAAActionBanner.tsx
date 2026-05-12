export default function ActionStepsCard() {
  const steps = [
    { icon: "/home/icons/aspire.svg", label: "Aspire" },
    { icon: "/home/icons/align.svg", label: "Align" },
    { icon: "/home/icons/achieve.svg", label: "Achieve" },
  ];

  return (
    <div className="w-full rounded-md border border-[#DEEDFF] p-md bg-white shadow-[0px_0px_40px_5px_#0668E11A]">
      <div className="grid grid-cols-[1.3fr_1fr_1.1fr_0.7fr] items-center">
        <div className="flex items-end gap-xs">
          <div className="relative h--[clamp(80px,calc(130/_var(--width)_*_100vw),250px)]">
            <img  src="/home/icons/a-action.svg" alt="A Action" className=" h-full w-full object-contain" />
          </div>

          <p className=" text-h5 font-bold">
            in Action
          </p>
        </div>

        {steps.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center border-l border-[#D6E8FF]"
          >
            <div className="w-full flex flex-col pl-md">
            <div className="flex size-iconsize-xl  items-center justify-center rounded-sm border border-[#D6E8FF] bg-white text-[#0668E1] shadow-[0px_2px_8px_rgba(6,104,225,0.12)]">
              <img src={item.icon} alt={item.label} className="size-iconsize-md p-[2%]" />
            </div>

            <p className="mt-xs text-h5 font-bold">
              {item.label}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}