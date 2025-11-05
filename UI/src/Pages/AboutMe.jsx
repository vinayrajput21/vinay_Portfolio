import React, { useState } from "react";
import ProfileImage from "../assets/about2.jpg";
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
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="mx-auto max-w-7xl">
        {/* Profile Image and Intro Text Side by Side */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0 self-center sm:self-start">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg overflow-hidden">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Introductory Text */}
          <div className="flex-1 text-center sm:text-left sm:mt-8 md:mt-12 lg:mt-20">
            <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-4">
              Hey!
            </h1>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              I'm a passionate developer specializing in the{" "}
              <span className="text-teal-600 font-bold">MERN stack</span> building dynamic
              and scalable web applications.
            </p>
          </div>
        </div>

        {/* Card Grid Layout - Single column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
          {/* Education Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">1</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Education</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
                <img
                  src={JCBOSE}
                  alt="JC Bose University"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain self-center sm:self-start"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">
                    J.C. Bose University of Science and Technology
                  </h3>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">
                    Master of Computer Applications • Aug 2023 – June 2025
                  </p>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">CGPA: 8.2/10</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Coursework: Operating System, Computer Networks, Object-Oriented Programming, Database Management System
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
                <img src={MDU} alt="MDU" className="w-12 h-12 sm:w-16 sm:h-16 object-contain self-center sm:self-start" />
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">
                    Maharshi Dayanand University
                  </h3>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">
                    Bachelor of Computer Applications • June 2020 – July 2023
                  </p>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">Division: 1st</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Coursework: Introduction to C, Programming with C++, Java, Data Structure and Algorithms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">2</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Experience</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
                <img
                  src={EduaiExp}
                  alt="Eduai Certificate"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain border border-black rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 self-center sm:self-start"
                  onClick={() => openModal(EduaiExp)}
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-bold">
                    Eduai - Aanya Tutor
                  </h3>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">Software Developer • 5 months</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Developed Aanya Tutor using React.js, FastAPI, and MongoDB, creating an interactive educational platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-bold">
                    Aventiq - Orchestrate and Freight Management
                  </h3>
                  <p className="text-teal-600 font-medium text-sm sm:text-base">Software Developer • Present</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Built features for Orchestrate and freight management systems using React.js, Node.js, MongoDB, and AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">3</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Skills</h2>
            </div>
            <ul className="list-disc list-inside text-white space-y-2 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
              <li className="text-gray-600 text-sm sm:text-base">
                <span className="text-gray-800 font-bold">Programming Languages:</span>{" "}
                Java, Python, JavaScript, HTML5, CSS3
              </li>
              <li className="text-gray-600 text-sm sm:text-base">
                <span className="text-gray-800 font-bold">Frameworks & Libraries:</span>{" "}
                React.js, Node.js, Express.js, Tailwind CSS
              </li>
              <li className="text-gray-600 text-sm sm:text-base">
                <span className="text-gray-800 font-bold">Database & ORM/ODM:</span>{" "}
                MongoDB, Mongoose
              </li>
              <li className="text-gray-600 text-sm sm:text-base">
                <span className="text-gray-800 font-bold">Soft Skills:</span>{" "}
                Communication, Problem-Solving, Team Collaboration, Time Management
              </li>
            </ul>
          </div>

          {/* Tools Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">4</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Tools</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-gray-600 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaGitAlt className="text-lg sm:text-xl text-yellow-500" /> Git
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaGithub className="text-lg sm:text-xl text-gray-800" /> GitHub
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaDesktop className="text-lg sm:text-xl text-gray-800" /> GitHub Desktop
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <SiPostman className="text-lg sm:text-xl text-yellow-500" /> Postman
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaAws className="text-lg sm:text-xl text-yellow-500" /> AWS
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <SiMongodb className="text-lg sm:text-xl text-yellow-500" /> MongoDB Compass/Atlas
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <SiTailwindcss className="text-lg sm:text-xl text-yellow-500" /> Tailwind CSS
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <VscVscode className="text-lg sm:text-xl text-yellow-500" /> VS Code
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">5</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Hobbies</h2>
            </div>
            <ul className="text-gray-600 space-y-2 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <BiSolidCricketBall className="text-base sm:text-lg text-yellow-500" /> Cricket
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <FaBookOpen className="text-base sm:text-lg text-yellow-500" /> Reading
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <FaPenNib className="text-base sm:text-lg text-yellow-500" /> Writing
              </li>
            </ul>
          </div>

          {/* Certificates Card */}
          <div className="bg-teal-500 border-4 border-gray-800 shadow-[4px_4px_0px_#1f2937] sm:shadow-[6px_6px_0px_#1f2937] md:shadow-[8px_8px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                <span className="text-sm sm:text-base">6</span>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold ml-3 sm:ml-4">Certificates</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-800">
              <img
                src={NPTEL}
                alt="NPTEL Certificate"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain border border-black rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 self-center sm:self-start"
                onClick={() => openModal(NPTEL)}
              />
              <div className="text-center sm:text-left">
                <p className="text-gray-600 text-sm sm:text-base">
                  Scored with distinction in Swayam NPTEL course from IIT Roorkee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Full-Screen Image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Full-screen Certificate"
                className="w-full h-auto rounded-lg border-4 border-gray-800"
              />
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;