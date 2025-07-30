import React from "react";
import profileImage from "../assets/avatar.png";
import HireMe from "../assets/HireMe1.png";
import DownloadCV from "../assets/DownloadCV1.png";
import MoreAboutMe from "../assets/MoreAboutMe.png";
import SeeMoreProjects from "../assets/SeeMoreProjects.png";
import logo from "../assets/logo.png";
import ContactMe from "../assets/ContactMe.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";
import cvPdf from "../assets/Vinay_Rajput_MERN.pdf";
import { useModal } from "../Context/ModalContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showCopyMessage, setShowCopyMessage] = React.useState(false);
  const { openHireMeModal } = useModal();
  const navigate = useNavigate();

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9306763879");
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  const handleMoreAboutMe = () => {
    navigate("/about");
  };
  const handleSeeMoreProjects = () => {
    navigate("/project");
  };
  const handleContactMe = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* First Section */}
      <div className="min-h-screen bg-[#FFDD55] flex flex-col md:flex-row justify-center items-center px-4 md:px-8 py-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start max-w-md space-y-4 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hello, <br /> I’m Vinay
          </h1>
          <p className="text-black text-lg sm:text-xl">
            Full Stack Developer, <span className="text-gray-700">AWS</span>
          </p>
          <div className="flex space-x-3">
            <img
              src={HireMe}
              alt="Hire Me"
              onClick={openHireMeModal}
              className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
            />
            <a href={cvPdf} download="Vinay_Rajput_MERN.pdf">
              <img
                src={DownloadCV}
                alt="Download CV"
                className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={profileImage}
            alt="profile"
            className="h-60 sm:h-72 md:h-110 w-auto"
          />

          {/* Social Icons */}
          <div className="absolute right-[-1rem] sm:right-2 top-1/2 transform -translate-y-1/2 space-y-3">
            <a
              href="https://www.linkedin.com/in/vinay-rajput-64406b2b5"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-8 h-8 sm:w-10 sm:h-10 p-1 bg-white rounded-full shadow hover:scale-125 transition-transform duration-200"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://github.com/vinayrajput21"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-8 h-8 sm:w-10 sm:h-10 p-1 bg-white rounded-full shadow hover:scale-125 transition-transform duration-200"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vinaypawar692002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-8 h-8 sm:w-10 sm:h-10 p-1 bg-white rounded-full shadow hover:scale-125 transition-transform duration-200"
            >
              <img
                src={gmail}
                alt="Gmail"
                className="w-full h-full object-contain"
              />
            </a>
            <div className="relative">
              <a
                href="#"
                onClick={handleCopyPhone}
                className="block w-8 h-8 sm:w-10 sm:h-10 p-1 bg-white rounded-full shadow hover:scale-125 transition-transform duration-200"
              >
                <img
                  src={phone}
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </a>
              {showCopyMessage && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-md z-10 flex items-center justify-center">
                  Copied Mobile no
                  <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Section (Banner) */}
      <div className="bg-[#EB7711] flex flex-col ml-20 mr-20 mb-20 md:flex-row justify-center items-center px-4 md:px-8 py-15 rounded-xl text-white">
        {/* Avatar */}
        <div className="p-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 sm:w-56 md:w-72 h-48 sm:h-66 md:h-82"
          />
        </div>

        {/* Text Section */}
        <div className="md:ml-6 mt-4 md:mt-0 max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            About me
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-white">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white mb-3">
            AWS
          </p>
          <p className="text-white text-base sm:text-lg mb-4 leading-relaxed">
            Hi! I'm a full stack developer leveraging AWS. Dive into my
            portfolio to explore a blend of innovative frontend designs and
            robust backend solutions using cloud technologies.
          </p>

          {/* Image Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-3">
            <img
              src={MoreAboutMe}
              alt="More About Me"
              onClick={handleMoreAboutMe}
              className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Third Section (Banner) */}
      <div className="bg-[#106EE8] ml-20 mr-20 mb-20 flex flex-col md:flex-row justify-center items-center px-4 md:px-8 py-15 rounded-xl text-white">
        {/* Text Section */}
        <div className="md:ml-6 md:mt-0 max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Explore My Projects
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-white">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white mb-3">
            AWS Powered
          </p>
          <p className="text-white text-base sm:text-lg mb-4 leading-relaxed">
            Check out my portfolio to see a variety of projects showcasing my
            expertise in full stack development. From dynamic web applications
            to scalable AWS-based solutions, each project highlights my ability
            to deliver innovative and efficient code.
          </p>

          {/* Image Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-3">
            <img
              src={SeeMoreProjects}
              alt="See More Projects"
              onClick={handleSeeMoreProjects}
              className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Avatar */}
        <div className="p-2 mt-4 md:mt-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 sm:w-56 md:w-72 h-48 sm:h-66 md:h-82"
          />
        </div>
      </div>

      {/* Contact Section (Banner) */}
      <div className="bg-[#0ACF83] p-8 flex flex-col items-center justify-center text-center h-[350px]">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
          If you have any Query or Project ideas feel free to
        </p>
        <div className="flex justify-center">
          <img
            src={ContactMe}
            alt="Contact Me"
            onClick={handleContactMe}
            className="h-14 sm:h-16 md:h-20 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className=" p-8 flex flex-col items-center text-center space-y-4 m-20">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-16 h-16 " />
          <p className="text-black text-2xl sm:text-3xl font-bold">
            Vinay Rajput
          </p>
        </div>
        <p className="text-black text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          I Make as soon as Possible. You really like my work, contact me and
          let's Work Together.
        </p>
      </div>

       <footer className="bg-black p-4 text-center">
        <p className="text-white text-sm sm:text-base">
          @ This web page built using MERN Stack and AWS services
        </p>
      </footer>
    </>
  );
}

export default Home;
