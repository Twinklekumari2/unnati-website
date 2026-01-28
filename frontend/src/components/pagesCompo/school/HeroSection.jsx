import React from "react";
import Akshar from "./../../../assets/aksharImg.png";
import bgImg from "./../../../assets/imageAkshar.png";
import { useNavigate } from "react-router-dom";
import { cloudinaryImage } from "../../../utils/cloudinary";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center min-h-[50vh] h-screen text-white"
      style={{ backgroundImage: `url(${cloudinaryImage("schlvisit_uw7s37")})` }}
    >
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      <div className="z-20 flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          <div className="w-60 h-50 flex justify-center items-center">
            <img src={Akshar} alt="" />
          </div>
          <div className="z-40">
            <h1 className="stick-no-bills-2 text-5xl text-white tracking-wider">
              OUTREACH
            </h1>
            <p className="stick-no-bills tracking-wider w-[90%]">
              Educational Trip - This Educational Visit brought our campus to
              life with eager footsteps and wide-eyed curiosity. Students
              explored, interacted, and discovered new ideas in every corner
              they visited. Their enthusiam reminded us why spaces of learning
              matter, they spark imagination, confidence, and possibility.
            </p>
          </div>
        </div>
        <div className="w-[60%] mr-10 mt-10 grid grid-cols-2 grid-rows-3 gap-5">
          <div
            className="relative h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${bgImg})` }}
            onClick={() => navigate("/media/outreach/")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl"></div>
            <h1 className="z-40 text-white">Kendriya Vidyalaya</h1>
          </div>
          <div
            className="relative h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${cloudinaryImage("mountasisi-5_ssxaxg")})` }}
            onClick={() => navigate("/media/outreach/school-visit/mountAssisi")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl"></div>
            <h1 className="z-40 text-white">Mount Asisi</h1>
          </div>
          <div
            className="relative h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cloudinaryImage("IMG_20251211_124331_qfj72p")})` }}
            onClick={() => navigate("/media/outreach/school-visit/DPS")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl "></div>
            <h1 className="z-40 text-white">Delhi Public School</h1>
          </div>
          <div
            className="relative h-50 w-50 text-xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${cloudinaryImage("schlvisit_asj47s")})` }}
            onClick={() => navigate("/media/outreach/school-visit/uchh-vidyalaya")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl"></div>
            <h1 className="z-40 text-white">Rajkiyakrit Adarsh Uchh Vidyalaya, Nayagaon & Uchh Vidyalaya, Kumaitha</h1>
          </div>
          <div
            className="relative h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${cloudinaryImage("sfs-1_yr8bcn")})` }}
            onClick={() => navigate("/media/outreach/school-visit/SFS")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl"></div>
            <h1 className="z-40 text-white">St. Francis School, Deoghar</h1>
          </div>
          <div
            className="relative h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${bgImg})` }}
            onClick={() => navigate("/media/outreach/")}
          >
            <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl"></div>
            <h1 className="z-40 text-white">Kendriya Vidyalaya</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
