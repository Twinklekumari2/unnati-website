import React from "react";
import Unnati from "./../../assets/Unnati.png";
import IIITBh from "./../../assets/IIITBh.png";
import locationTag from "./../../assets/placeholder.png";

const Navbar = () => {
  return (
    <nav className="flex bg-blue-400 justify-center sm:justify-around items-center p-3">
      <div className="flex gap-2">
        <div className="flex">
          <img
            src={Unnati}
            alt="Unnati logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15"
          />
          <div className="h-8 sm:h-10 md:h-15 mx-2 border-r-2 border-white"></div>
          <img
            src={IIITBh}
            alt="IIITBh logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15"
          />
        </div>
        <div
          className="text-[7px] tracking-wide sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[12px] gap-0 flex flex-col justify-center font-semibold"
        >
          <h1>भारतीय सूचना प्रौद्योगिकी संस्थान भागलपुर</h1>
          <h1 className="oswald-font-2">
            Indian Institute of Information Technology Bhagalpur
          </h1>
          <h1 className="oswald-font-2">
            An Institute of National Importance established by MoE, Govt. of
            India
          </h1>
        </div>
      </div>
      <div className="hidden sm:flex font-semibold items-center text-[6px] sm:text-[8px] md:text-[10px] xl:text-[11px]">
        <div className=" text-right mr-3 ">
          <h1 className="oswald-font-2">
            Indian Institute of Information Technology Bhagalpur
          </h1>
          <h1 className="oswald-font-2">Bhagalpur, Bihar‑813210, India</h1>
        </div>
        <div>
          <img
            src={locationTag}
            alt="location"
            className="h-5 w-5 sm:h-8 sm:w-8"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
