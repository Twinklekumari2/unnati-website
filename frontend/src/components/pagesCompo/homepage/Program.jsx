import React from "react";
import { cloudinaryImage } from "../../../utils/cloudinary";

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
        <div className="flex flex-col md:flex-row gap-5">
          <div className="h-72 w-60 relative overflow-hidden">
            <img
              src={cloudinaryImage(
                "WhatsApp_Image_2026-02-03_at_1.43.14_PM_rnt51c",
              )}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-3 left-1/5 text-white flex justify-center items-center flex-col">
              <h1 className="oswald-font-3 bg-amber-100 text-black px-4 py-1">
                DigiXplore
              </h1>
              <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
          <div className="h-72 w-60 relative overflow-hidden">
            <img
              src={cloudinaryImage(
                "WhatsApp_Image_2026-02-03_at_1.39.40_PM_4_ex22tr",
              )}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-3 left-1/5 flex justify-center items-center flex-col text-white">
              <h1 className="oswald-font-3 bg-amber-100 text-black px-4 py-1">Netritva</h1>
              <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
          <div className="h-72 w-60 relative overflow-hidden">
            <img
              src={cloudinaryImage(
                "WhatsApp_Image_2026-02-03_at_1.39.39_PM_1_kmyefy",
              )}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-3 left-1/5 text-white flex justify-center items-center flex-col">
              <h1 className="oswald-font-3 bg-amber-100 text-black px-4 py-1">
                Akshar
              </h1>
              <div className="inter-font-2 px-4 py-1">EXPLORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
