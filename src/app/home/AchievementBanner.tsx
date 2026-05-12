export default function AchievementBanner() {
  return (
    <section className="w-full bg-[#E6F0FC] py-[5%]">
      <div className="mx-auto flex items-center justify-center gap-[3%]">
        {/* Icon */}
        <div className="flex size-[8vw] items-center justify-center">
         <img src="/home/icons/aspiration-achievement-icon.svg" alt="Achievement Icon" className="size-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h2 className="text-base sm:text-h2 font-extrabold text-[#0668E1]">
            Aspiration becomes achievement
          </h2>
          <p className="mt-[1%] text-xl sm:text-base font-bold text-[#1B1C17]">
            when alignment becomes a system.
          </p>
        </div>
      </div>
    </section>
  );
}