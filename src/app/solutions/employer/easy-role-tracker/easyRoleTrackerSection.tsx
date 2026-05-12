const roleTrackerData = [
  {
    title: "Unblock Inactive Positions",
    subtitle: "Instantly uncover roles stuck due to:",
    points: ["Scheduling delays", "Offer hold-ups", "Pipeline inactivity"],
    footer: "Enable focused interventions before roles age out.",
  },
  {
    title: "Accelerate Hiring Velocity",
    subtitle: "Monitor recruitment funnels in real time:",
    points: ["Interviews", "Shortlists", "Offers"],
    footer: "Identify slowdowns and optimize funnel movement.",
  },
  {
    title: "Prioritize Strategically",
    subtitle: "Flag roles with:",
    points: [
      "Extended open days",
      "Missed touchpoints",
      "Scheduling inactivity",
    ],
    footer: "Ensure critical roles receive immediate attention.",
  },
  {
    title: "Enable Real-Time Interventions",
    subtitle: "Chat instantly with recruiters:",
    points: [
      "Connect directly on stalled roles",
      "Cut down follow-up loops",
      "Resolve issues in real time",
    ],
    footer: "Escalate from silent delay to instant solution.",
  },
];

function Card({ item }: { item: (typeof roleTrackerData)[0] }) {
  return (
    <div className="rounded-md border border-[#D3E6FF] bg-[#F9FBFF] p-[4%] shadow-[0px_4px_40px_5px_#0668E11A]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#E6F0FC]">
          <div className="h-4 w-1 rounded bg-[#0668E1]" />
        </div>
        <h3 className="text-base font-bold text-[#2C2C2C]">{item.title}</h3>
      </div>

      {/* Subtitle */}
      <p className="mt-4 text-xl font-semibold text-[#2C2C2C]">
        {item.subtitle}
      </p>

      {/* Points */}
      <div className="mt-4 space-y-2 text-xl font-medium text-[#2C2C2C]">
        {item.points.map((point, index) => (
          <div key={index} className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-[1.5vw]">
              <img
                src="/icons/tick-gradient-icon.svg"
                alt="tick icon"
                className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
              />
              <span>{point}</span>
            </div>
             {index !== item.points.length - 1 && (
      <img
        src="/icons/arrow-step-blue-icon.svg"
        alt="arrow icon"
        className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
      />
    )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-4 text-xl font-medium text-[#2C2C2C]">{item.footer}</p>
    </div>
  );
}

export default function EasyRoleTrackerSection() {
  return (
    <div className="mx-auto">
      {/* Title */}
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Role Tracker
      </h1>
      <p className="mt-2 text-base font-bold text-[#2C2C2C]">
        Role level Insights
      </p>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
        {roleTrackerData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
