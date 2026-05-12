const discoverItems = [
  "Hidden friction in your hiring system",
  "Where hiring momentum begins to slow",
  "How alignment can be restored",
];


function DiscoverList({ items }: { items: string[] }) {
  return (
    <div className="mt-[2%] space-y-[1%]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-[2%]">
          <img src="/icons/tick-gradient-icon.svg" alt="tick icon" className="size-iconsize-sm" />
          <p className="text-base">{item}</p>
        </div>
      ))}
    </div>
  );
}

function InputField({
  label,
  required = false,
  type = "text",
}: {
  label: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xl">
        {label} {required && <span className="text-[#EC3A3A]">*</span>}
      </label>
      <input
        type={type}
        className="mt-[1%] h-[7vh] w-full rounded-[8px] bg-[#F4F4F4] px-5 outline-none"
      />
    </div>
  );
}

function AlignmentFormCard() {
  return (
    <div className="mt-[2%] flex flex-col justify-between rounded-md border border-[#DDECFF] bg-white p-6 shadow-[0px_4px_35px_4px_#0668E11A]">
      <div className="space-y-[2%]">
        <h2 className="text-h6 font-bold">
          Unlock Alignment with Connect EC
        </h2>

        <p className="text-xl text-[#2C2C2C] mb-[6%]">Achieve Seamless Yield</p>

        <InputField label="Your Official E Mail" required />
        <InputField label="Your Phone No" required />
      </div>

      <button className="mt-[8%] flex h-[8vh] items-center justify-center rounded-[12px] bg-[#0668E1]">
        <span className="text-xl font-bold text-white">
          Unlock Alignment
        </span>
      </button>
    </div>
  );
}

export default function HiringAlignmentSection() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        {/* Left Content */}
        <div className="sm:w-[55%]">
          <h1 className="text-h2 font-extrabold text-[#0668E1]">
            Check Your Hiring Alignment
          </h1>

          <p className="mt-[1%] text-h6 font-bold">
            Every hiring system contains hidden seams where alignment weakens.
          </p>

          <p className="mt-[2%] text-base font-medium">
            Discover:
          </p>

          <DiscoverList items={discoverItems} />
        </div>

        {/* Right Form */}
        <AlignmentFormCard />
      </div>
    </div>
  );
}