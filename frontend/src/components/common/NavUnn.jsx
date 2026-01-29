import React, { useState, useEffect, useRef } from "react";
import Unnati from "./../../assets/Unnati.png";
import { gsap } from "gsap";
import './../../styles/navunn.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const NavUnn = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const header2Ref = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: () => `top+=${window.innerHeight * 0.1} top`,
      onUpdate: (self) => {
        if (self.progress > 0) {
          header2Ref.current?.classList.add("fixed-header");
        } else {
          header2Ref.current?.classList.remove("fixed-header");
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleClick = () => {
    navigate("/about-us")
    console.log("navbar")
  }

  return (
    <header 
      ref={header2Ref} 
      className="bg-black/90 flex justify-between sm:justify-around items-center p-3 w-full gap-2 sm:gap-10 transition-colors"
    >
      <div className="flex items-center ">
        <div className="img-cont relative w-10 h-10 sm:w-10 sm:h-10 md:w-14 md:h-14 mr-3">
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
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]" onClick={() => navigate("/")}>HOME</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]" onClick={() => navigate("/about-us")}>ABOUT</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]" onClick={() => navigate("/media")}>MEDIA</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]" onClick={() => navigate("/programs")}>PROGRAMS</h3>
        <h3 className="px-1 sm:px-3 py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px]" onClick={() => navigate("/")}>OUTREACH</h3>
        <h3 className="bg-blue-400 px-3 join-us py-1 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] oswald-font-3">JOIN US</h3>
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
          <h3 className="cursor-pointer text-[11px]" onClick={() => navigate("/about-us")}>ABOUT</h3>
          <h3 className="cursor-pointer text-[11px]">MEDIA</h3>
          <h3 className="cursor-pointer text-[11px]">PROGRAMS</h3>
          <h3 className="bg-blue-400 px-2 py-1 cursor-pointer text-[11px] text-white">JOIN US</h3>
        </div>
      )}
    </header>
  );
};

export default NavUnn;