import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from "../assets/Profileimage.jpg";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bounce, setBounce] = useState(false);
  const modalRef = useRef(null);
  const bounceIntervalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (!isModalOpen) {
      bounceIntervalRef.current = setInterval(() => {
        setBounce(true);
        setTimeout(() => setBounce(false), 1000);
      }, 5000);
    }

    return () => {
      if (bounceIntervalRef.current) {
        clearInterval(bounceIntervalRef.current);
      }
    };
  }, [isModalOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-4 py-2 rounded-b-xl z-50">
      <div className="relative" ref={modalRef}>
        <button
          onClick={toggleModal}
          className="relative group"
          aria-label="Open profile menu"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className={`w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-105 ${
              bounce ? "animate-bounce" : ""
            }`}
          />
        </button>
        {isModalOpen && (
          <div className="absolute top-16 left-0 z-50">
            <div
              className="fixed inset-0 bg-opacity-30"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-white rounded-2xl shadow-2xl w-80 transform transition-all duration-300 ease-out animate-in overflow-hidden">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200 z-10"
                aria-label="Close modal"
              ></button>
              <div className="relative">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    Vinay
                  </h3>
                  <p className="text-sm text-white mb-1 drop-shadow-md">
                    vinaypawar692002@gmail.com
                  </p>
                  <p className="text-sm text-white drop-shadow-md">
                    +91 9306763879
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-x-6 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          Project
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          AboutMe
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          Contact Me
        </NavLink>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-in {
          animation: animate-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Navbar;