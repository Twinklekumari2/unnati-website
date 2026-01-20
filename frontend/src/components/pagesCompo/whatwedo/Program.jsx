import React from "react";

const Program = () => {
  return (
    <section className="bg-black text-white flex w-screen justify-center items-center px-10 py-30 md:py-45">
      <div className="w-3/4 flex justify-between items-center">
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <h1 className="oswald-font-3 text-5xl">OUR</h1>
            <h1 className="oswald-font-3 text-5xl">PROGRAMS</h1>
          </div>
          <div className="w-20 h-0.5 bg-blue-400"></div>
          <div>
            <p className="text-gray-100 inter-font-2">
              "Empowering young minds with the skills of tomorrow." DigiXplore
              is designed to empower students with essential digital literacy
              skills through engaging workshops.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-center">
            <div className="flex flex-col">
                <div className="h-1/2 w-full p-10"></div>
                <div className="border-0 rounded-full p-10 bg-blue-400 aspect-square flex justify-center items-center oswald-font-3">Netritva</div>
            </div>
            <div className="h-full border-0 rounded-full p-15 bg-white text-black aspect-square flex justify-center items-center oswald-font-3 text-2xl">DigiXplore</div>
            <div>
                <div className="border-0 rounded-full p-10 bg-blue-400 aspect-square flex justify-center items-center oswald-font-3">Akshar</div>
                <div className="h-1/2 p-10"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
