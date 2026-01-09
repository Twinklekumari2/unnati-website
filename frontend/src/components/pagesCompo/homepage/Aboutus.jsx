import React from "react";
import vision from "./../../../assets/vision2.jpg";

const Aboutus = () => {
  return (
    <section className="bg-white text-black py-10 px-10 md:py-40 md:px-10">
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div>
            <p className="w-fit inter-font text-gray-900 border-4 border-t-black pt-15 border-b-0 border-l-0 border-r-0">ABOUT US</p>
          </div>
          <div>
            <h1 className="oswald-font text-4xl">WE PROVIDE QUALITY</h1>
            <h1 className="oswald-font text-blue-400 text-4xl">EDUCATION FOR ALL</h1>
          </div>
          <div>
            <p className="inter-font w-3/4">
              Our mission is to provide free, quality education for
              underprivileged students, emphasizing holistic development. Our
              curriculum spans academics, life skills, and practical knowledge.
            </p>
          </div>
          <div>
            <p className="inter-font w-3/4">
              We are helping students to tackle the hindrances faced by them
              which obstructs them to get up to their potential.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center w-1/2 sm:w-1/3 xl:w-1/5 oswald-font-3 bg-yellow-400 px-4 py-2">LEARN MORE</div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-1/2 mt-4 ">
          <img src={vision} alt="vision" className="object-cover h-96 border-none rounded-4xl "/>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
