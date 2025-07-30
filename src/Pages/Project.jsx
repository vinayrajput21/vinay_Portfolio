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
    link: "https://freight-management.aventiq.ai/login",
    description: ` Freight Management System is a comprehensive logistics platform that provides end-to-end visibility and control over maritime shipping operations. This sophisticated system meticulously tracks all stakeholders in the supply chain, including shipping lines, shippers, and customs housing agents, while maintaining detailed records of freight charges and associated costs. The platform enables users to efficiently book available slots and monitor booked shipments across various ports and harbors worldwide. With complete cargo tracking capabilities, the system captures and maintains data from origin to final destination, providing real-time updates on shipment status, transit times, and delivery milestones. The integrated dashboard serves as a centralized command center, presenting critical shipping data through intuitive visualizations and reports that enable stakeholders to make informed decisions quickly.`,
    images: [F1, F2, F3, F4, F5, F6],
  },
  {
    id: 3,
    image: Project3,
    mainImage: AanyaMain,
    name: "Aanya Tutor",
    link: "https://aanya.eduai.live/login",
    description: ` Aanya Tutor, part of the EduAI.live ecosystem, represents an innovative AI-powered educational platform designed to revolutionize personalized learning experiences for students. This cutting-edge system leverages advanced artificial intelligence augmented with expert human teachers to deliver comprehensive educational support for K-12 students.The platform focuses on providing hands-on AI and mathematics education through interactive, project-based learning that prepares students for an AI-transformed future. With small, private batches led by top 1% expert teachers and supported by advanced AI tools, Aanya Tutor offers a future-ready curriculum that blends creativity with technology.`,
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
    <div className="flex flex-col items-center gap-20 py-10 px-6 text-white">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row justify-left items-center w-full relative"
        >
          {/* Main Thumbnail */}
          <div className="p-2 relative">
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-48 sm:w-56 md:w-82 h-48 sm:h-66 md:h-112"
            />
            <div className="absolute inset-0 flex flex-col items-center mt-30 mr-3">
              <img
                src={project.mainImage}
                alt="Main"
                className="w-72 h-44 mb-3 ml-2 border border-black border-[3px] rounded-xl"
                onClick={() => handleLearnMore(project.id, project.images)}
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm sm:text-base font-medium mb-2 underline"
              >
                {project.name}
              </a>
              <button
                className="bg-[#ffdd55] hover:bg-yellow-600 mt-5 text-xl text-black font-bold py-3 px-14 rounded"
                onClick={() => handleLearnMore(project.id, project.images)}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Text Section */}
          {activeProjectId !== project.id && (
            <div className="md:ml-6 max-w-2xl text-center md:text-left animate-fadeIn transition-opacity duration-500">
              <p className="mt-10 font-semibold text-white text-base sm:text-lg mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* Image Grid */}
          {activeProjectId === project.id && (
            <div className="ml-5 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeUp">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project ${project.id} - ${idx + 1}`}
                  onClick={() => handleImageClick(idx)}
                  className="cursor-pointer rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-72 h-32 object-cover"
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Fullscreen Modal with Slider */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white text-4xl px-4 py-2 bg-opacity-40 hover:bg-opacity-60 rounded-full"
          >
            <img
              src={LeftArrow}
              alt="LeftArrow"
              className={`w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-105`}
            />
          </button>

          <img
            src={currentImages[selectedIndex]}
            alt="Fullscreen"
            className="max-w-4xl h-[80vh] rounded-lg shadow-2xl"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-4xl px-4 py-2 bg-opacity-40 hover:bg-opacity-60 rounded-full"
          >
            <img
              src={RightArrow}
              alt="RightArrow"
              className={`w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-105`}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
