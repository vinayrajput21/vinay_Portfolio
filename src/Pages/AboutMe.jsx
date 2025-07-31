import React, { useState } from "react";
import ProfileImage from "../assets/about2.png";
import JCBOSE from "../assets/JCBose.png";
import MDU from "../assets/MDU.png";
import EduaiExp from "../assets/EduaiCertificate.png";
import NPTEL from "../assets/NPTEL.png";
import {
  FaGithub,
  FaAws,
  FaGitAlt,
  FaDesktop,
  FaBookOpen,
  FaPenNib,
} from "react-icons/fa";
import {
  SiPostman,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { BiSolidCricketBall } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen p-8 md:p-12 lg:p-16">
      <div className="mx-auto">
        {/* Profile Image and Intro Text Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-72 lg:h-72 border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg overflow-hidden">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Introductory Text */}
          <div className="mt-20 flex-1 text-lg text-gray-600 leading-relaxed">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Hey!
            </h1>
            <p className="text-white text-lg sm:text-xl">
              I'm a passionate developer specializing in the{" "}
              <span className="text-gray-900">MERN stack</span> building dynamic
              and scalable web applications.
            </p>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Education Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                1
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={JCBOSE}
                  alt="JC Bose University"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-[#1F2937] text-xl font-semibold">
                    J.C. Bose University of Science and Technology
                  </h3>
                  <p className="text-gray-600">
                    Master of Computer Applications • Aug 2023 – June 2025
                  </p>
                  <p className="text-gray-600">CGPA: 8/10</p>
                  <p className="text-gray-600">
                    Coursework: Operating System, Computer Networks, Object-Oriented Programming, Database Management System
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src={MDU} alt="MDU" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-[#1F2937] text-xl font-semibold">
                    Maharshi Dayanand University
                  </h3>
                  <p className="text-gray-600">
                    Bachelor of Computer Applications • June 2020 – July 2023
                  </p>
                  <p className="text-gray-600">Division: 1st</p>
                  <p className="text-gray-600">
                    Coursework: Introduction to C, Programming with C++, Java, Data Structure and Algorithms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                2
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={EduaiExp}
                  alt="Eduai Certificate"
                  className="w-16 h-16 object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => openModal(EduaiExp)}
                />
                <div>
                  <h3 className="text-[#1F2937] text-2xl font-bold">
                    Eduai - Aanya Tutor
                  </h3>
                  <p className="text-gray-600">Software Developer • 5 months</p>
                  <p className="text-gray-600">
                    Developed Aanya Tutor using React.js, FastAPI, and MongoDB, creating an interactive educational platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-[#1F2937] text-2xl font-bold">
                    Aventiq - Orchestrate and Freight Management
                  </h3>
                  <p className="text-gray-600">Software Developer • 3 months</p>
                  <p className="text-gray-600">
                    Built features for Orchestrate and freight management systems using React.js, Node.js, MongoDB, and AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                3
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Skills</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="text-[#1F2937] font-bold">Programming Languages:</span>{" "}
                Java, Python, JavaScript, HTML5, CSS3
              </li>
              <li>
                <span className="text-[#1F2937] font-bold">Frameworks & Libraries:</span>{" "}
                React.js, Node.js, Express.js, Tailwind CSS
              </li>
              <li>
                <span className="text-[#1F2937] font-bold">Database & ORM/ODM:</span>{" "}
                MongoDB, Mongoose
              </li>
              <li>
                <span className="text-[#1F2937] font-bold">Soft Skills:</span>{" "}
                Communication, Problem-Solving, Team Collaboration, Time Management
              </li>
            </ul>
          </div>

          {/* Tools Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                4
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Tools</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaGitAlt className="text-xl text-[#F97316]" /> Git
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-[#1F2937]" /> GitHub
              </div>
              <div className="flex items-center gap-2">
                <FaDesktop className="text-xl text-[#1F2937]" /> GitHub Desktop
              </div>
              <div className="flex items-center gap-2">
                <SiPostman className="text-xl text-[#F97316]" /> Postman
              </div>
              <div className="flex items-center gap-2">
                <FaAws className="text-xl text-[#F97316]" /> AWS
              </div>
              <div className="flex items-center gap-2">
                <SiMongodb className="text-xl text-[#F97316]" /> MongoDB Compass/Atlas
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-xl text-[#F97316]" /> Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <VscVscode className="text-xl text-[#F97316]" /> VS Code
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                5
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Hobbies</h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <BiSolidCricketBall className="text-lg text-[#F97316]" /> Cricket
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen className="text-lg text-[#F97316]" /> Reading
              </li>
              <li className="flex items-center gap-2">
                <FaPenNib className="text-lg text-[#F97316]" /> Writing
              </li>
            </ul>
          </div>

          {/* Certificates Card */}
          <div className="bg-[#FFFFFF] border-4 border-[#E5E7EB] shadow-[5px_5px_0px_#E5E7EB] rounded-lg p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">
                6
              </div>
              <h2 className="text-[#1F2937] text-2xl font-bold ml-4">Certificates</h2>
            </div>
            <div className="flex items-start gap-4">
              <img
                src={NPTEL}
                alt="NPTEL Certificate"
                className="w-16 h-16 object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => openModal(NPTEL)}
              />
              <div>
                <p className="text-gray-600">
                  Scored with distinction in Swayam NPTEL course from IIT Roorkee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Full-Screen Image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Full-screen Certificate"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;