import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cloudinaryImage } from "../../../utils/cloudinary";
import { useNavigate } from "react-router-dom";


const programs = [
  {
    title: "DigiXplore",
    description:
      "Empowering students with digital literacy, technology awareness, and practical skills for the modern world.",
    mainImage: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.42_PM_1_sgnwyj"
    ),
    image2: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.38_PM_3_thxqic"
    ),
    image3: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.39_PM_5_ney7sn"
    ),
    route:'/programs/digixplore',
  },
  {
    title: "Akshar",
    description:
      "Promoting foundational education and nurturing young minds through engaging learning experiences.",
    mainImage: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.39_PM_5_ney7sn"
    ),
    image2: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.42_PM_1_sgnwyj"
    ),
    image3: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.38_PM_3_thxqic"
    ),
    route:'/programs/akshar',
  },
  {
    title: "Netritva",
    description:
      "Building future leaders through mentorship, confidence-building, teamwork, and leadership development.",
    mainImage: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.38_PM_3_thxqic"
    ),
    image2: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.39_PM_5_ney7sn"
    ),
    image3: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.42_PM_1_sgnwyj"
    ),
    route:'/programs/netritva',
  },
  {
    title: "School Visits",
    description:
      "Bringing learning beyond classrooms through outreach programs that educate, inspire, and empower students.",
    mainImage: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.38_PM_3_thxqic"
    ),
    image2: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.39_PM_5_ney7sn"
    ),
    image3: cloudinaryImage(
      "WhatsApp_Image_2026-02-03_at_1.39.42_PM_1_sgnwyj"
    ),
    route:'/media/outreach/school-visit',
  },
];

export default function ProgramSection() {
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % programs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = programs[active];

  return (
    <section className="bg-linear-to-r from-[#07122e] via-[#0a1740] to-[#07122e] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.5 }}
            >
              <p className="uppercase tracking-[0.3em] text-blue-300 mb-4">
                Our Programs
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {current.title}
              </h2>

              <div className="w-24 h-1 bg-blue-400 mb-8"></div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {current.description}
              </p>

              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition" 
              onClick={() => navigate(current.route)}>
                Learn More
              </button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT SIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.mainImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative h-125 flex justify-center items-center"
            >
              
              <img
                src={current.mainImage}
                alt={current.title}
                className="
                  w-[320px]
                  h-80
                  md:w-95
                  md:h-95
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-2xl
                  z-20
                "
              />

              <img
                src={current.image2}
                alt=""
                className="
                  absolute
                  top-6
                  right-10
                  w-32
                  h-32
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-xl
                  z-10
                "
              />

              <img
                src={current.image3}
                alt=""
                className="
                  absolute
                  bottom-10
                  left-10
                  w-28
                  h-28
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-xl
                  z-10
                "
              />

              <div className="absolute w-107.5 h-107.5 rounded-full border border-white/10"></div>

              <div className="absolute w-125 h-125 rounded-full border border-white/5"></div>
            </motion.div>
          </AnimatePresence>

        </div>

        <div className="flex justify-center gap-4 mt-10">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-3 w-3 rounded-full transition ${
                active === index
                  ? "bg-blue-400 scale-125"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}