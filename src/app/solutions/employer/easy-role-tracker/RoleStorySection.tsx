const roleStories = [
  {
    title: "Active Role",
    points: [
      "Momentum is strong and visible",
      "Signals confirm steady forward progress",
      "Hiring flows without friction buildup, seamlessly executed",
    ],
  },
  {
    title: "Stalled role",
    points: [
      "Momentum slows, signals start weakening",
      "Delays quietly build across stages",
      "Progress needs timely intervention now",
    ],
  },
  {
    title: "Critical Role",
    points: [
      "Momentum breaks, risk becomes visible",
      "Signals demand immediate corrective action",
      "Hiring outcome is now at risk",
    ],
  },
];

export default function RoleStorySection() {
  return (
    <div className="w-full ">
      <div className="mx-auto">
        
        {/* Title */}
        <h2 className="text-center text-h2 font-extrabold text-[#1B1C17]">
          Every Role tells a story.
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-[1.5vw] md:grid-cols-3">
          {roleStories.map((role, index) => (
            <div
              key={index}
              className="rounded-md bg-[#E6F0FC] p-[5%] relative"
            >
              {/* Left blue border */}
              <div className="absolute left-0 top-0 h-full w-[6px] rounded-l-md bg-[#0668E1]" />

              {/* Title */}
              <h3 className="text-base font-bold text-[#0668E1]">
                {role.title}
              </h3>

              {/* Divider */}
              <div className="mt-2 h-[1px] w-full bg-[#BFD4F3]" />

              {/* Points */}
              <ul className="list-disc list-outside pl-5 mt-4 space-y-3 text-xl font-medium text-[#2C2C2C]">
  {role.points.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center">
          <p className="text-base font-medium text-[#2C2C2C]">
            Easy Role Tracker transforms role activity into
            <span className="font-bold"> visible momentum signals.</span>
          </p>

          {/* Arrow */}
          <div className="mt-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F0FC]">
              <img
        src="/icons/arrow-step-blue-icon.svg"
        alt="arrow icon"
        className="size-iconsize-sm p-[0.1%]"
      />
            </div>
          </div>

          <p className="mt-4 text-base font-medium text-[#2C2C2C]">
            Hiring Moves from unclear queues to
            <span className="font-bold"> proactive acceleration.</span>
          </p>
        </div>
      </div>
    </div>
  );
}