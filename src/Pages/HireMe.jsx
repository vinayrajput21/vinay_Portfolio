import React, { useState } from "react";
import { hireMeAPI } from "../Services/APIserives";

function HireMe({ isOpen, onClose }) {
  const [companyName, setCompanyName] = useState("");
  const [weblink, setWeblink] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const validateFields = () => {
    const newErrors = {};

    if (!companyName.trim()) {
      newErrors.companyName = "Company Name is required.";
    }
    if (!weblink.trim()) {
      newErrors.weblink = "Website/Link is required.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!role.trim()) {
      newErrors.role = "Role is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleHire = async () => {
    if (!validateFields()) {
      return;
    }

    setIsLoading(true);
    const payload = {
      companyName,
      weblink,
      email,
      role,
    };

    try {
      const response = await hireMeAPI(payload);
      console.log("response", response);

      setIsSaved(true);
      setCompanyName("");
      setWeblink("");
      setEmail("");
      setRole("");
      onClose();
    } catch (err) {
      console.error("Failed to hire:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMail = () => {
    if (!validateFields()) {
      return;
    }
    const mailtoLink = `mailto:vinaypawar692002@gmail.com?body=${encodeURIComponent(
      `From: ${companyName}\nWeblink: ${weblink}\nEmail: ${email}\nRole: ${role}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative max-w-sm w-full mx-4">
        <div className="bg-[#A259FF] p-4 rounded-xl relative overflow-hidden shadow-lg border-2 border-black">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 z-10 font-bold text-lg"
          >
            ×
          </button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vinaypawar692002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 bg-[#00C6AE] text-black border border-black font-bold py-1 px-3 rounded-full hover:bg-[#ffdd55] transition-colors duration-200 shadow-md z-10 text-sm"
          >
            Custom Mail
          </a>
          <div className="relative z-10 mt-10">
            <h2 className="text-xl font-black text-white text-center mb-2">
              Hire Me
            </h2>
            <p className="text-white text-center mb-3 font-semibold text-sm">
              Full Stack Developer
            </p>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-black text-white mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter Company Name"
                  className="w-full p-1.5 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">
                  Website/Link *
                </label>
                <input
                  type="text"
                  value={weblink}
                  onChange={(e) => setWeblink(e.target.value)}
                  placeholder="Company Website or LinkedIn"
                  className="w-full p-1.5 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
                {errors.weblink && (
                  <p className="text-red-500 text-xs mt-1">{errors.weblink}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">
                  Role *
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter Job Role"
                  className="w-full p-1.5 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full p-1.5 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <button
                onClick={handleHire}
                disabled={isLoading || isSaved}
                className="w-full bg-[#FFDD55] text-black font-black py-1.5 px-3 rounded-lg hover:bg-[#ffdd55] transition-colors duration-200 text-xs shadow-md transform hover:scale-105 disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-4 w-4 mr-1 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isSaved ? "Saved" : "Available"}
              </button>
              <p className="text-xs text-black text-center mt-2 font-semibold">
                Click above to send your hiring details
              </p>
              <div className="flex justify-center items-center my-3">
                <hr className="w-1/3 border-t-2 border-black" />
                <span className="mx-2 text-xs font-semibold text-black">
                  OR
                </span>
                <hr className="w-1/3 border-t-2 border-black" />
              </div>
              <p
                className="text-xs text-black text-center mt-3 font-cursive"
                style={{ fontFamily: "cursive" }}
              >
                Contact: +91 9306763879 | vinaypawar692002@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
