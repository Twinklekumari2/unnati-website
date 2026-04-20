import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { cloudinaryImage, cloudinaryImage2 } from "../../../utils/cloudinary";

const ExecutiveBody = () => {

  const membersExecutive = [
    {
      name: "Dheeraj Yadav",
      post: "PRESIDENT",
      img: "dheeraj_cuclko",
      email: "dheeraj.230101050@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/dheeraj-yadav-681325218",
    },
    {
      name: "Divyanshu Pal",
      post: "VICE-PRESIDENT",
      img: "divyanshusir_zb2xxd",
      email: "divyanshu.230101051@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/divyaanshu/",
    },
    {
      name: "Ayush Thakur",
      post: "SECRETARY",
      img: "ayushThakur_p0kzyf",
      email: "ayush.240102123@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-thakur-544886325/",
    },
    {
      name: "Jayanshu Bhardwaj",
      post: "JS PUBLIC RELATION",
      img: "jayanshu_gdrakx",
      email: "jayanshu.240101181@iitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/jayanshu-bhardwaj-05a791322/",
    },
    {
      name: "Twinkle Kumari",
      post: "JS TECHNICAL",
      img: "twinkle_akhjbq",
      email: "twinkle.240101143@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/twinkle-kumari-b09306325/",
    },
    {
      name: "Ayush Yadav",
      post: "JS PROGRAMS",
      img: "ayushyadv_z0khzd",
      email: "ayush.240102215@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/search/results/all/?keywords=ayush%20yadav",
    },
  ];
const membersLead = [
  {
    name: "Sanjana Adhikari",
    post: "Social Media Lead",
    img: "pic_-_Sanjana_Adhikari_lxddhm",
    email: "sanjana.240102169@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/sanjana-adhikari-541bab2a3",
  },
  {
    name: "Harsh Kumar Yadav",
    post: "Research & Development Lead",
    img: "IMG_20251006_094850_-_HARSH_YADAV_drkoll",
    email: "harsh.240101010@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/harsh-kumar-yadav-20844a2b6",
  },
  {
    name: "Shashank Shekhar",
    post: "Event & Membership Coordinator",
    img: "shashankk_bbihmd",
    email: "shashankshekhar2734@gmail.com",
    linkedin: "https://www.linkedin.com/in/shashank-shekhar-4b6179339/",
  },
  {
    name: "Krish Sonkar",
    post: "Research and Development",
    img: "1759778636960_-_KRISH_SONKAR_uiuvvy",
    email: "krish.240101127@iiitbh.ac.in",
    linkedin: "#",
  },
  {
    name: "Navneet Jaiswal",
    post: "Operational Lead",
    img: "IMG_20260413_104213_-_Navneet_Jaiswal_1_stokob",
    email: "navneet.240101028@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/navneet-jaiswal-8aa05b322",
  },
  {
    name: "Prabhat Rai",
    post: "Operations Lead",
    img: "prabhat_-_Prabhat_Rai_jax0i7",
    email: "prabhat.240103257@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/prabhat-rai",
  },
  {
    name: "Divya",
    post: "Digixplore Lead",
    img: "IMG-20260301-WA0099_-_Divya_Patlan_nndf4y",
    email: "divya.240101288@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/divya-patlan-4a2018324",
  },
  {
      name: "Twinkle Kumari",
      post: "Web Developmnt Lead",
      img: "twinkle_akhjbq",
      email: "twinkle.240101143@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/twinkle-kumari-b09306325/",
    },
  {
    name: "Ishani Karpoor",
    post: "App Development Lead",
    img: "ishani_punner",
    email: "ishani.240103291@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/ishani-karpoor-8a73b1312",
  },
  {
    name: "Jayanshu Bhardwaj",
    post: "Netritva Lead",
    img: "jayanshu_gdrakx",
    email: "jayanshu18@gmail.com",
    linkedin: "https://www.linkedin.com/in/jayanshu-bhardwaj-05a791322/",
  },
  {
    name: "Sukrit Aryan",
    post: "Design and Content Lead",
    img: "Sukrit_Aryan_xgrmzg",
    email: "sukritaryan1@gmail.com",
    linkedin: "https://www.linkedin.com/in/sukrit-aryan",
  },
  {
    name: "Anuj Sah",
    post: "Digixplore Lead",
    img: "Anuj_Sah_yohlp3",
    email: "anujah375@gmail.com",
    linkedin: "#",
  },
  {
    name: "Satyak Atul Govindwar",
    post: "Outreach Lead",
    img: "SATYAK_GOVINDWAR_nshcyu",
    email: "satyakatulgovindwar@gmail.com",
    linkedin: "https://www.linkedin.com/in/satyak-govindwar-6b2246324",
  },
  {
    name: "Anushka Sonkar",
    post: "Event and Membership Coordinator",
    img: "Screenshot_2026-04-20_190608_s86hsv",
    email: "anushka.240102057@iiitbh.ac.in",
    linkedin: "https://www.linkedin.com/in/anushka-sonkar-2b9ba5324",
  },
];


  const Card = ({ member }) => (
    <div className="flex flex-col justify-center items-center gap-4 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 bg-white">

      <img
        src={cloudinaryImage(member.img)}
        alt={member.name}
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
      />

      <div className="text-center">
        <h1 className="oswald-font-3 text-sm md:text-base">
          {member.post}
        </h1>

        <h1 className="stick-no-bills text-xl tracking-wider">
          {member.name}
        </h1>

        <div className="flex gap-4 justify-center mt-2 text-xl">
          <a href={`mailto:${member.email}`}>
            <MdEmail className="cursor-pointer hover:text-blue-600" />
          </a>

          {member.linkedin && member.linkedin !== "#" && (
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
            </a>
          )}
        </div>
      </div>

    </div>
  );

  return (
    <section className="py-10 bg-gray-50">

      {/* EXECUTIVE BODY */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="oswald-font-3 text-3xl md:text-4xl mb-8 text-center">
          EXECUTIVE BODY 2025-26
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl px-4">
          {membersExecutive.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      </div>

      {/* TEAM LEADS */}
      <div className="flex flex-col items-center">
        <h1 className="oswald-font-3 text-3xl md:text-4xl mb-8 text-center">
          TEAM LEADS
        </h1>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl px-4">
          {membersLead.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExecutiveBody;
