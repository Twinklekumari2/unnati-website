import React, { useState } from "react";
import Unnati from "./../../assets/Unnati.png";

const NavUnn = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-black/90 flex justify-between sm:justify-around items-center p-3 w-full gap-2 sm:gap-10 relative">
      <div className="flex items-center ">
        <div>
          <img
            src={Unnati}
            alt="Unnati logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 mr-3"
          />
        </div>
        <div className="text-white flex flex-col justify-center">
          <h1 className="tracking-widest font-extrabold text-[11px] sm:text-[12px] md:text-[15px] md:text-sm oswald-font xl:text-[18px]">
            UNNATI SOCIETY
          </h1>
          <p className="text-[7px] sm:text-[8px] md:text-[9px] xl:text-[10.5px] w-full text-gray-400 font-bold tracking-wide oswald-font-2">
            AN INSTITUTE OUTREACH ACTIVITY
          </p>
        </div>
      </div>

      <div className="hidden text-gray-100 sm:flex gap-2 sm:gap-3 font-semibold">
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]">HOME</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]">ABOUT</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]">MEDIA</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]">PROGRAMS</h3>
        <h3 className="bg-blue-400 px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] oswald-font-3">JOIN US</h3>
      </div>

      <div className="flex sm:hidden">
        <p
          className="text-white text-lg font-bold cursor-pointer"
          onClick={() => setShow(prev => !prev)}
        >
          ☰
        </p>
      </div>

      {show && (
        <div className="flex flex-col text-black gap-2 font-bold absolute right-3 top-15 bg-white p-3 shadow-lg sm:hidden">
          <h3 className="cursor-pointer text-[11px]">HOME</h3>
          <h3 className="cursor-pointer text-[11px]">ABOUT</h3>
          <h3 className="cursor-pointer text-[11px]">MEDIA</h3>
          <h3 className="cursor-pointer text-[11px]">PROGRAMS</h3>
          <h3 className="bg-blue-400 px-2 py-1 cursor-pointer text-[11px]">JOIN US</h3>
        </div>
      )}
    </nav>
  );
};

export default NavUnn;
