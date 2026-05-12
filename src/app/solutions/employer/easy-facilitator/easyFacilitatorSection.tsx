const facilitatorCards = [
  {
    title: "DOC Vault",
    img: "/solutions/doc-vault.svg",
    fileCount: "12 Files",
    points: [
      "Instant delivery removes friction",
      "Structured communication clarifies.",
      "Timely access reduces uncertainty",
    ],
  },
  {
    title: "Pix Vault",
    img: "/solutions/pix-vault.svg",
    fileCount: "26 Files",
    points: [
      "Visual storytelling builds connection",
      "Authentic culture signals belonging",
      "Early familiarity reduces hesitation",
    ],
  },
  {
    title: "Vid Vault",
    img: "/solutions/vid-vault.svg",
    fileCount: "5 Files",
    points: [
      "Leadership presence builds trust",
      "Immersive storytelling engages",
      "Humanized communication connects",
    ],
  },
];

export default function EasyFacilitatorSection() {
  return (
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Facilitator
      </h1>

      <p className="mt-2 text-base font-bold text-[#1B1C17]">
        Post-Offer Engagement System
      </p>

      <div className="mt-6 grid grid-cols-1 gap-[2%] md:grid-cols-3">
        {facilitatorCards.map((card, index) => (
          <div
            key={index}
            className="flex h-[406px]- w-full flex-col gap-6 rounded-md border border-[#D3E6FF] bg-white p-[4%] shadow-[0px_4px_40px_5px_#0668E11A]"
          >
            <div className=" w-full rounded-sm bg-[#F9F9F9] p-[3%]">
              <img src={`${card.img}`} alt={`${card.title}`} className="" />
            </div>

            <div className="space-y-[2%] text-xl text-[#2C2C2C]">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-center gap-[3%]">
                  <img
                    src={"/icons/tick-gradient-icon.svg"}
                    alt="tick icon"
                    className="size-iconsize-sm"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
