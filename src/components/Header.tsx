"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import SolutionsDropdown from "./SolutionsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Employers", link: "/employers" },
  { name: "Candidates", link: "/candidates" },
  { name: "Recruiters", link: "/recruiters" },
  { name: "Pricing", link: "/pricing" },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);

const resourcesTimer = useRef<NodeJS.Timeout | null>(null);

const handleResourcesEnter = () => {
  if (resourcesTimer.current) {
    clearTimeout(resourcesTimer.current);
  }

  setShowResources(true);
};

const handleResourcesLeave = () => {
  resourcesTimer.current = setTimeout(() => {
    setShowResources(false);
  }, 1000);
};
const closeTimer = useRef<NodeJS.Timeout | null>(null);

const handleMouseEnter = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
  }
  setShowSolutions(true);
};

const handleMouseLeave = () => {
  closeTimer.current = setTimeout(() => {
    setShowSolutions(false);
  }, 1000); 
};


  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <div className={`${isMenuOpen ? "hidden" : ""} no-print h-[60px] lg:h-[100px] max-h-[100px]`} />

      <div
        className={`${isMenuOpen ? "h-0" : "h-[60px]"} fixed left-0 top-0 z-50 flex w-full max-h-[100px] bg-cover bg-no-repeat transition-transform duration-300 lg:h-[100px] ${
          show ? "translate-y-0 bg-white" : "-translate-y-full"
        }`}
      >
        <nav className="relative z-[9999] flex w-full items-center justify-between border-b border-[#D1E5FF] bg-[#FFFFFF33] px-3 py-6 md:border-[#E5E5E5] md:bg-[#FFFFFF66] md:py-4 lg:px-4 lg:text-[14px] xl:px-6 xl:text-[18px] 2xl:px-8 2xl:text-[24px]">
          <div className="flex items-center lg:w-1/5">
            <Link href="https://connectec.app/">
              <Image
                src="/Connect_EC_Logo.svg"
                alt="Logo"
                width={280}
                height={100}
                className="h-auto w-[65%] cursor-pointer object-contain md:w-full xl:min-w-[200px] 2xl:min-w-[280px]"
              />
            </Link>
          </div>

          {!pathname.includes("login") &&
            !pathname.includes("register") &&
            !pathname.includes("reset-password") &&
            !pathname.includes("forgot-password") &&
            !pathname.includes("account-verify") && (
              <>
                <ul className="hidden  w-4/5 items-center justify-center text-[#1B1C17] lg:flex lg:gap-[15px] xl:gap-[2.5%]">
                  {navItems.map((item) => {
                    const isActive =
                      item.name === "Home"
                        ? pathname === "/" || pathname.startsWith("/home")
                        : pathname.startsWith(item.link);

                    return (
                      <li
                        key={item.name}
                        className={`cursor-pointer ${
                          isActive ? "font-semibold text-[#0668E1]" : "font-medium"
                        } flex flex-col items-center justify-center`}
                        onClick={() => router.push(item.link)}
                      >
                        {item.name}
                        {isActive ? (
                          <div className="mt-1 rounded-[4px] bg-[#0668E1] lg:h-[4px] lg:w-[40px] 2xl:h-[6px]" />
                        ) : (
                          <div className="mt-1 w-[85%] lg:h-[4px] 2xl:h-[6px]" />
                        )}
                      </li>
                    );
                  })}
                  <li
  className="flex cursor-pointer flex-col items-center justify-center font-medium text-[#1B1C17]"
  onMouseEnter={handleResourcesEnter}
  onMouseLeave={handleResourcesLeave}
>
  <div className="flex items-center gap-2">
    <span className={showResources ? "font-semibold text-[#0668E1]" : ""}>
      Resources
    </span>

    <FaChevronDown
      className={`transition-transform duration-200 ${
        showResources ? "rotate-180 text-[#0668E1]" : ""
      }`}
    />
  </div>

  <div className="mt-1 h-[4px] w-[85%]" />

  {showResources && (
    <ResourcesDropdown
      onClose={() => setShowResources(false)}
    />
  )}
</li>

                  {/* Solutions */}
                  <li
                    className=" flex cursor-pointer flex-col items-center justify-center font-medium text-[#1B1C17]"
                    onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center gap-2">
                      <span className={showSolutions ? "font-semibold text-[#0668E1]" : ""}>
                        Solutions
                      </span>
                      <FaChevronDown
                        className={`transition-transform duration-200 ${
                          showSolutions ? "rotate-180 text-[#0668E1]" : ""
                        }`}
                      />
                    </div>

                    <div className="mt-1 h-[4px] w-[85%]" />

                    {showSolutions && <SolutionsDropdown  onClose={() => setShowSolutions(false)} />}
                  </li>
                </ul>

                <div className="flex w-[30%] gap-lg items-center justify-end lg:justify-center">
                  <button className="w-[110px] h-[44px] border border-[#0668E1] text-[#0668E1] rounded-sm">Login</button>
                  <button className="w-[110px] h-[44px] bg-[#0668E1] rounded-sm text-white">Register</button>
                  <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
              </>
            )}
        </nav>
      </div>
    </>
  );
};