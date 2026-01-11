import React from "react";

const Program = () => {
  return (
    <section className="flex justify-center items-center w-screen py-30 px-10">
      <div className="flex flex-col gap-4 w-3/4">
        <div className="w-20 h-1 bg-blue-400"></div>
        <div>
          <h1 className="oswald-font-3 text-4xl">
            WE ARE CREATING A PLACE WHERE
          </h1>
          <h1 className="oswald-font-3 text-4xl mb-5">STUDENTS CAN THRIVE</h1>
        </div>
        <div className="flex gap-5">
          <div className="h-72 w-60 border-2 border-amber-300 relative">
            <div>
              <img src="" alt="" />
            </div>
            <div className="absolute bottom-3 left-1/5">
              <h1 className="oswald-font-3">DigiXplore</h1>
              <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
          <div className="h-72 w-60 border-2 border-amber-300 relative">
            <div>
              <img src="" alt="" />
            </div>
            <div className="absolute bottom-3 left-1/5">
                <h1 className="oswald-font-3">Netritva</h1>
            <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
          <div className="h-72 w-60 border-2 border-amber-300 relative">
            <div>
              <img src="" alt="" />
            </div>
            <div className="absolute bottom-3 left-1/5">
                <h1 className="oswald-font-3">Public Awareness</h1>
            <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
