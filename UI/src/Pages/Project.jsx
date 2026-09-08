import React, { useState } from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import STPLMain from "../assets/STPLmainimage.png";
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";
import S6 from "../assets/S6.png";
import OrchestrateMain from "../assets/O2.png";
import O1 from "../assets/OrchestrateMain.png";
import O2 from "../assets/O2.png";
import O3 from "../assets/O3.png";
import O4 from "../assets/O4.png";
import O5 from "../assets/O5.png";
import O6 from "../assets/O6.png";
import FMSmain from "../assets/FMSmain.png";
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";
import F6 from "../assets/F6.png";
import Medhaimain from "../assets/Medhaimain.png";
import M1 from "../assets/M1.png";
import M2 from "../assets/M2.png";
import M3 from "../assets/M3.png";
import M4 from "../assets/M4.png";
import M5 from "../assets/M5.png";
import M6 from "../assets/M6.png";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

const projects = [
   {
    id: 1,
    mainImage: STPLMain,
    name: "Satzillo Telecom Private Limited",
    link: "https://smartping.live/entity/login",
    description: `STPL is a telecom DLT (Distributed Ledger Technology) platform designed to regulate commercial communications, featuring dedicated role-based access and workflows for Entities, Telemarketers, and Telecom Operators.`,
    techStack: ["React.js/Angular.js", "Node.js", "Express.js", "MongoDB"],
    rating: 4,
    reviewer: "Tech Lead",
    images: [S6, S1, S3, S4, S5, S2],
  },
  {
    id: 2,
    mainImage: OrchestrateMain,
    name: "Orchestrate.aventiq.ai",
    link: "https://orchestrate.aventiq.ai/login",
    description: `Orchestrate is an enterprise-grade project management platform that streamlines the ideation-to-execution lifecycle. It features a stage planner covering Discovery, Design, Build, UAT, and Hypercare, along with automation for issue logs, change requests, and ticket tracking.`,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    rating: 5,
    reviewer: "Tech Lead",
    images: [O1, O2, O3, O4, O5, O6],
  },
  {
    id: 3,
    mainImage: FMSmain,
    name: "freight-management.aventiq.ai",
    link: "https://freight-management.aventiq.ai",
    description: `Freight Management System is a logistics platform offering end-to-end visibility over maritime shipping. It tracks shipping lines, shippers, and customs agents, manages freight charges, and provides real-time cargo tracking with a centralized reporting dashboard.`,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    rating: 4,
    reviewer: "Tech Lead",
    images: [F1, F2, F3, F4, F5, F6],
  },
  {
    id: 4,
    mainImage: Medhaimain,
    name: "Medha Ai",
    link: "Under development",
    description: `Medha Ai is an AI-powered educational platform and school management system designed to transform personalized learning while automating administrative workflows, communication, and institutional operations.`,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB","AI", "RAG"],
    rating: 5,
    reviewer: "Owner",
    images: [M3, M2, M1, M4, M5, M6],
  },
];

// Simple star icon: yellow fill, black outline
const Star = ({ filled = true }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 sm:w-5 sm:h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
      fill={filled ? "#facc15" : "#ffffff"}
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

function Project() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  const openGallery = (images) => {
    setCurrentImages(images);
    setSelectedIndex(0);
  };

  const closeGallery = () => {
    setSelectedIndex(null);
    setCurrentImages([]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-10 md:py-14 px-6 md:px-12 min-h-screen justify-center items-center">
      {projects.map((project, idx) => {
        const reversed = idx % 2 !== 0;
        return (
          <div
            key={project.id}
            className="relative w-full max-w-7xl bg-teal-500 border-3 border-gray-800 shadow-[2px_2px_0px_#1f2937] sm:shadow-[4px_4px_0px_#1f2937] md:shadow-[6px_6px_0px_#1f2937] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-200"
          >
            {/* Star rating badge - top right */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-row items-end gap-1 z-10">
              <div className="text-black text-[16px] sm:text-md font-semibold bg-[#FFDD55] border border-black border-2 px-2 py-0.5 rounded-md">
              {project.reviewer} Review
              </div>
              <div className="flex gap-0.5 bg-white/90 border-2 border-black rounded-md px-2 py-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < project.rating} />
                ))}
              </div>
            </div>

            {/* Numbered heading, same style as Education/Experience cards */}
            <div className="flex items-center gap-3 mb-5 md:mb-6 pr-24 sm:pr-28">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-800">
                {idx + 1}
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                {project.name}
              </h3>
            </div>

            {/* Image + text row, alternating direction per project */}
            <div
              className={`flex flex-col ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-5 md:gap-6 items-stretch`}
            >
              {/* Project image */}
              <div className="w-full lg:w-[42%] flex-shrink-0">
                <img
                  src={project.mainImage}
                  alt={project.name}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-full lg:min-h-[22rem] object-cover rounded-lg  cursor-pointer"
                  onClick={() => openGallery(project.images)}
                />
              </div>

              {/* White text box */}
              <div className="flex-1 bg-white rounded-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between ">
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 font-semibold underline hover:text-teal-900 transition-colors text-sm sm:text-base break-words"
                  >
                    {project.link}
                  </a>
                  <p className="text-black text-lg font-bold sm:text-base leading-relaxed mt-2 sm:mt-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-sm border-2 border-teal-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openGallery(project.images)}
                  className="mt-4 self-start bg-[#ffdd55] hover:bg-yellow-500 text-black font-bold py-2 sm:py-2.5 px-8 sm:px-10 rounded text-sm sm:text-base transition-colors border-2 border-black hover:scale-105 transform duration-200 cursor-pointer shadow-[5px_5px_0px_0px_#000]"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Fullscreen Gallery Modal with Slider */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeGallery}
        >
          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 text-white bg-opacity-40 hover:bg-opacity-60 rounded-full p-2 sm:p-3 transition-all z-10"
          >
            <img
              src={LeftArrow}
              alt="Previous"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
            />
          </button>

          {/* Main image */}
          <img
            src={currentImages[selectedIndex]}
            alt="Fullscreen"
            className="max-w-full max-h-[80vh] sm:max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 text-white bg-opacity-40 hover:bg-opacity-60 rounded-full p-2 sm:p-3 transition-all z-10"
          >
            <img
              src={RightArrow}
              alt="Next"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
            />
          </button>

          {/* Close button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white bg-opacity-40 hover:bg-opacity-60 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold transition-all"
          >
            ×
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 bg-opacity-60 text-black px-3 py-1 font-semibold rounded-full text-sm">
            {selectedIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;