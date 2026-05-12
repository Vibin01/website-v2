export default function UnifiedOutcomeBanner() {
  return (
    <section className="relative w-full overflow-hidden py-[20%] sm:py-[5%] bg-[#0668E1]">
      
     <div className="absolute top-0 left-0 w-full h-[10vh] bg-white 
        [clip-path:ellipse(60%_100%_at_50%_0%)]" />
        <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-white
        [clip-path:ellipse(60%_100%_at_50%_100%)]" />
      <div className="relative z-10 flex flex-col sm:flex-row py-[5%]   items-center justify-between md:px-[12%]">
        {/* Left Content */}
        <div className="text-white">
          <p className="text-base font-bold ">
            Across hiring, every actor seeks the
          </p>

          <h2 className="my-[1%] text-h2 font-extrabold text-center sm:text-left">
            same outcome.
          </h2>
        </div>

        {/* Right Image */}
        <div className="h-auto w-[50%] sm:w-[30%] overflow-hidden ">
          <img
            src="/home/hiring-team.svg" 
            alt="Team illustration"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}