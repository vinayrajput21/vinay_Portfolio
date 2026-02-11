import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG
import ProfileImage from "../assets/Profileimage.jpg";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [hasOpenedModal, setHasOpenedModal] = useState(false);
  const modalRef = useRef(null);
  const bounceIntervalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!hasOpenedModal) setHasOpenedModal(true);
  };

  // Profile Bounce Effect
  useEffect(() => {
    if (!isModalOpen && !hasOpenedModal) {
      bounceIntervalRef.current = setInterval(() => {
        setBounce(true);
        setTimeout(() => setBounce(false), 1000);
      }, 5000);
    }
    return () => clearInterval(bounceIntervalRef.current);
  }, [isModalOpen, hasOpenedModal]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/project" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `transition-colors duration-200 ${
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 rounded-b-xl border-b border-gray-800">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        
        {/* LEFT: Profile Section */}
        <div className="relative" ref={modalRef}>
          <button onClick={toggleModal} className="relative group flex items-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-transparent group-hover:border-yellow-400 transition-all ${
                bounce ? "animate-bounce" : ""
              }`}
            />
          </button>

          {/* Profile Modal */}
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

        {/* CENTER/RIGHT: Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <NavItem key={link.path} to={link.path}>{link.name}</NavItem>
          ))}
        </div>

        {/* RIGHT: Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col space-y-4 animate-in">
          {navLinks.map((link) => (
            <NavItem 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg block py-2">{link.name}</span>
            </NavItem>
          ))}
        </div>
      )}


    </nav>
  );
}

export default Navbar;