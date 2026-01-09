import React from "react";
import play from './../../../assets/play.png'
import herosection from './../../../assets/herosection.jpeg'

const HeroSection = () => {
  return (
    <section className="bg-black text-white flex justify-start pt-10 pb-30 px-62 sm:py-30 sm:pb-51 items-center min-h-[50vh]">
      <div className="flex flex-col justify-start gap-4">
        <div className="oswald-font text-5xl tracking-wide">
          <h1>EMPOWERING</h1>
          <h1>DREAMS</h1>
        </div>
        <div>
          <p className="great-vibes-regular text-blue-400 text-xl tracking-wide">Revolutionizing Present, Transforming Future</p>
        </div>
        <div className="max-w-xl">
          <p className="border-4 inter-font border-l-blue-400 border-r-0 border-t-0 border-b-0 pl-4">
            We bridge the digital divide by providing underprivileged students
            with essential technology education and basic knowledge, equipping
            them for the digital age.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white text-black font-extrabold oswald-font-3 px-5 py-2">READ MORE</div>
          <div className="oswald-font-3 border font-bold border-white px-5 py-2 flex gap-2"><span className="bg-white rounded-full"><img src={play} alt="" /></span>WATCH VIDEO</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
