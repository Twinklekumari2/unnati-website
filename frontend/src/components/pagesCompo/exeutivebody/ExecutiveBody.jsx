import React from "react";
import IIITBH from "./../../../assets/IIITBh.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { cloudinaryImage, cloudinaryImage2 } from "../../../utils/cloudinary";

const ExecutiveBody = () => {
  return (
    <section className="py-6 bg-white/30">
      <div className="flex flex-col justify-center items-center">
        <h1 className="oswald-font-3 text-4xl mb-6 tracking-wide">
          EXECUTIVE BODY
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 text-center">
          {/* President */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
            <img
              src={cloudinaryImage("dheeraj_cuclko")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
            <div>
              <h1 className="oswald-font-3">PRESIDENT</h1>
              <h1 className="stick-no-bills text-xl tracking-wider ">
                Dheeraj Yadav
              </h1>

              {/* Icons */}
              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:dheeraj.230101050@iiitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/dheeraj-yadav-681325218?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Vice President */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
            <img
              src={cloudinaryImage2("divyanshu_pal_wapq8p")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />

            <div>
              <h1 className="oswald-font-3">VICE-PRESIDENT</h1>
              <h1 className="stick-no-bills text-xl tracking-wider">
                Divyanshu Pal
              </h1>

              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:divyanshu.230101051@iiitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Secretary */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
            <img
              src={cloudinaryImage("dheeraj_cuclko")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />

            <div>
              <h1 className="oswald-font-3">SECRETARY</h1>
              <h1 className="stick-no-bills text-xl tracking-wider">
                Ayush Thakur
              </h1>

              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:ayush.240102123@iiitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-kumar-thakur-544886325/" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* JS - PR */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
            <img
              src={cloudinaryImage("jayanshu_gdrakx")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />

            <div>
              <h1 className="oswald-font-3">PUBLIC RELATION</h1>
              <h1 className="stick-no-bills text-xl tracking-wider">
                Jayanshu Bhardwaj
              </h1>

              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:jayanshu.240101181@iitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/jayanshu-bhardwaj-05a791322/" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* JS - TECH */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
            <img
              src={cloudinaryImage("twinkle_akhjbq")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />

            <div>
              <h1 className="oswald-font-3">TECHNICAL</h1>
              <h1 className="stick-no-bills text-xl tracking-wider">
                Twinkle Kumari
              </h1>

              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:twinkle.240101143@iiitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/twinkle-kumari-b09306325/" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* JS - PROGRAM */}
          <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-xl">
            <img
              src={cloudinaryImage2("ayush_yadav_do0eth")}
              alt="president"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />

            <div>
              <h1 className="oswald-font-3">PROGRAMS</h1>
              <h1 className="stick-no-bills text-xl tracking-wider">
                Ayush Yadav
              </h1>

              <div className="flex gap-4 justify-center mt-2 text-xl">
                <a href="mailto:ayush.240102215@iiitbh.ac.in">
                  <MdEmail className="cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-yadav-797085325/" target="_blank">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBody;
