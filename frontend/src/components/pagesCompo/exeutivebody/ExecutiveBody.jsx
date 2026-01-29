import React from "react";
import IIITBH from './../../../assets/IIITBh.png'

const ExecutiveBody = () => {
  return (
    <section className="py-6 bg-white/30">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="oswald-font-3 text-4xl mb-4 tracking-wide">
            EXECUTIVE BODY 25-26
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
              <div>
                <img src={IIITBH} alt="president" />
              </div>
              <div>
                <h1 className="oswald-font-3">PRESIDENT</h1>
                <h1 className="stick-no-bills text-xl tracking-wider">Dheeraj Yadav</h1>
                <h1 className="inter-font-2 text-blue-700">dheeraj.230101050@iiitbh.ac.in</h1>
                <h1 className="inter-font-3">+91 7248145325</h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
              <div>
                <img src={IIITBH} alt="vice-president" />
              </div>
              <div>
                <h1 className="oswald-font-3">VICE-PRESIDENT</h1>
                <h1 className="stick-no-bills text-xl tracking-wider">Divyanshu Pal</h1>
                <h1 className="inter-font-2 text-blue-700">
                  divyanshu.230101051@iiitbh.ac.in
                </h1>
                <h1 className="inter-font-3">+91 6387811397</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
              <div>
                <img src={IIITBH} alt="secretary" />
              </div>
              <div>
                <h1 className="oswald-font-3">SECRETARY</h1>
                <h1 className="stick-no-bills text-xl tracking-wider">Ayush Thakur</h1>
                <h1 className="inter-font-2 text-blue-700">ayush.240102123@iiitbh.ac.in</h1>
                <h1 className="inter-font-3">+91 9310122191</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl oswald-font-2 mb-3 tracking-wider">JOINT-SECRETARY</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 items-center text-center ">
              <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg">
                <div>
                  <img src={IIITBH} alt="js-pr" />
                </div>
                <div>
                  <h1 className="oswald-font-3">PUBLIC RELATION</h1>
                  <h1 className="stick-no-bills text-xl tracking-wider">Jayanshu Bhardwaj</h1>
                  <h1 className="inter-font-2 text-blue-700">
                    jayanshu.240101181@iitbh.ac.in
                  </h1>
                  <h1 className="inter-font-3">+91 9142553746</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-lg border-t-0">
                <div>
                  <img src={IIITBH} alt="js-tech" />
                </div>
                <div>
                  <h1 className="oswald-font-3">TECHNICAL</h1>
                  <h1 className="stick-no-bills text-xl tracking-wider">Twinkle Kumari</h1>
                  <h1 className="inter-font-2 text-blue-700">
                    twinkle.240101143@iiitbh.ac.in
                  </h1>
                  <h1 className="inter-font-3">+91 9045196907</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 border rounded-2xl p-4 shadow-xl">
                <div>
                  <img src={IIITBH} alt="js-program" />
                </div>
                <div>
                  <h1 className="oswald-font-3">PROGRAMS</h1>
                  <h1 className="stick-no-bills text-xl tracking-wider">Ayush Yadav</h1>
                  <h1 className="inter-font-2 text-blue-700">ayush.240102215@iiitbh.ac.in</h1>
                  <h1 className="inter-font-3 ">+91 9792305514</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBody;
