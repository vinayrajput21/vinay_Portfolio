import React, { useState } from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import OrchestrateMain from "../assets/OrchestrateMain.png";
import O1 from "../assets/O1.png";
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
import AanyaMain from "../assets/AanyaMain.png";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
import A5 from "../assets/A5.png";
import A6 from "../assets/A6.png";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

const projects = [
  {
    id: 1,
    image: Project1,
    mainImage: OrchestrateMain,
    name: "Orchestrate.aventiq.ai",
    link: "https://orchestrate.aventiq.ai/login",
    description: `Orchestrate.Aventiq.ai is an enterprise-grade project management
            platform designed to serve international clients across diverse
            industries. This comprehensive solution streamlines the entire
            ideation-to-execution lifecycle, providing organizations with robust
            tools to conceptualize, develop, and implement strategic
            initiatives. The platform features an integrated stage planner that
            guides projects through critical phases including Discovery, Design,
            Build, User Acceptance Testing (UAT), and Hypercare, ensuring
            systematic progression and quality assurance at each milestone.
            Additionally, Orchestrate incorporates advanced automation and
            maintenance capabilities, offering centralized management of issue
            logs, change requests, and ticket tracking systems.`,
    images: [O1, O2, O3, O4, O5, O6],
  },
  {
    id: 2,
    image: Project2,
    mainImage: FMSmain,
    name: "freight-management.aventiq.ai",
    link: "https://freight-management.aventiq.ai",
    description: `Freight Management System is a comprehensive logistics platform that provides end-to-end visibility and control over maritime shipping operations. This sophisticated system meticulously tracks all stakeholders in the supply chain, including shipping lines, shippers, and customs housing agents, while maintaining detailed records of freight charges and associated costs. The platform enables users to efficiently book available slots and monitor booked shipments across various ports and harbors worldwide. With complete cargo tracking capabilities, the system captures and maintains data from origin to final destination, providing real-time updates on shipment status, transit times, and delivery milestones. The integrated dashboard serves as a centralized command center, presenting critical shipping data through intuitive visualizations and reports that enable stakeholders to make informed decisions quickly.`,
    images: [F1, F2, F3, F4, F5, F6],
  },
  {
    id: 3,
    image: Project3,
    mainImage: AanyaMain,
    name: "Aanya Tutor",
    link: "https://aanya.eduai.live/login",
    description: `Aanya Tutor, part of the EduAI.live ecosystem, represents an innovative AI-powered educational platform designed to revolutionize personalized learning experiences for students. This cutting-edge system leverages advanced artificial intelligence augmented with expert human teachers to deliver comprehensive educational support for K-12 students. The platform focuses on providing hands-on AI and mathematics education through interactive, project-based learning that prepares students for an AI-transformed future. With small, private batches led by top 1% expert teachers and supported by advanced AI tools, Aanya Tutor offers a future-ready curriculum that blends creativity with technology.`,
    images: [A1, A2, A3, A4, A5, A6],
  },
];

function Project() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  const handleLearnMore = (projectId, images) => {
    setActiveProjectId(projectId);
    setCurrentImages(images);
  };

  const handleImageClick = (index) => setSelectedIndex(index);
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
    <div className="flex flex-col items-center gap-8 md:gap-20 py-6 md:py-10 px-4 md:px-6 text-white">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col lg:flex-row justify-center lg:justify-left items-center w-full relative max-w-6xl mb-0"
        >
          {/* Main Thumbnail */}
          <div className="p-2 relative flex-shrink-0">
            {/* Background mockup image */}
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-64 sm:w-64 md:w-70 lg:w-86 h-auto"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-0">
              {/* Main project image */}
              <img
                src={project.mainImage}
                alt="Main"
                className="w-55 mt-14 sm:w-55 md:w-64 lg:w-72 h-28 sm:h-32 md:h-36 lg:h-44 mb-2 sm:mb-3 border border-black border-[2px] sm:border-[3px] rounded-lg sm:rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleLearnMore(project.id, project.images)}
              />
              
              {/* Project name link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs sm:text-sm md:text-base font-medium mb-2 underline hover:text-blue-300 transition-colors text-center px-2"
              >
                {project.name}
              </a>
              
              {/* Learn More button */}
              <button
                className="bg-[#ffdd55] hover:bg-yellow-600 text-black font-bold mt-10 py-2 sm:py-3 px-12 sm:px-12 md:px-14 rounded text-sm sm:text-base md:text-xl transition-colors"
                onClick={() => handleLearnMore(project.id, project.images)}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Text Section - Only show when no active project */}
          {activeProjectId !== project.id && (
            <div className="lg:ml-6 max-w-full lg:max-w-2xl text-center lg:text-left animate-fadeIn transition-opacity duration-500 mt-4 lg:mt-0">
              <p className="font-semibold text-white text-sm sm:text-base lg:text-lg leading-relaxed px-2 lg:px-0">
                {project.description}
              </p>
            </div>
          )}

          {/* Image Grid - Show when project is active */}
          {activeProjectId === project.id && (
            <div className="w-full lg:ml-5 mt-6 px-2 lg:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-fadeUp">
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Project ${project.id} - ${idx + 1}`}
                    onClick={() => handleImageClick(idx)}
                    className="cursor-pointer rounded-lg sm:rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-full h-32 sm:h-36 md:h-40 object-cover"
                  />
                ))}
              </div>
              
              {/* Close button for mobile */}
              <div className="flex justify-center mt-4 lg:hidden">
                <button
                  onClick={() => setActiveProjectId(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Fullscreen Modal with Slider */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
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
            onClick={() => setSelectedIndex(null)}
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