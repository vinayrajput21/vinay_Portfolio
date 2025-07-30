import React, { useState } from 'react';

function HireMe({ isOpen, onClose }) {
  const [mailBy, setMailBy] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSendMail = () => {
    const mailtoLink = `mailto:vinaypawar692002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${mailBy}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative max-w-md w-full mx-4">
        <div className="bg-[#A259FF] p-4 rounded-xl relative overflow-hidden shadow-lg border-2 border-black">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 w-6 h-6 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 z-10 font-bold"
          >
            x
          </button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vinaypawar692002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 left-2 bg-[#00C6AE] text-black border border-black font-bold py-1 px-2 rounded-full hover:bg-[#ffdd55] transition-colors duration-200 shadow-md z-10 text-sm"
          >
            Custom mail
          </a>
          <div className="relative z-10 mt-4">
            <h2 className="text-xl font-black text-white text-center mb-1">Hire Me</h2>
            <p className="text-white text-center mb-4 font-semibold">Full Stack Developer</p>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-black text-white mb-1">To</label>
                <input
                  type="email"
                  value="vinaypawar692002@gmail.com"
                  disabled
                  className="w-full p-2 rounded-lg bg-white text-black cursor-not-allowed font-semibold shadow-md"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">From</label>
                <input
                  type="email"
                  value={mailBy}
                  onChange={(e) => setMailBy(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Let's work together!"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#0ACF83] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows="3"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#EB7711] transition-colors duration-200 font-semibold resize-none placeholder-gray-500"
                />
              </div>
              <button
                onClick={handleSendMail}
                className="w-full bg-[#FFDD55] text-black font-black py-2 px-4 rounded-lg hover:bg-[#ffdd55] transition-colors duration-200 text-sm shadow-md transform hover:scale-105"
              >
                Send Mail
              </button>
              <p className="text-xs text-black text-center mb-3 font-semibold">
                By clicking above button you can send mail
              </p>
              <div className="flex justify-center items-center my-2">
                <hr className="w-1/3 border-t-2 border-black" />
                <span className="mx-2 text-xs font-semibold text-black">OR</span>
                <hr className="w-1/3 border-t-2 border-black" />
              </div>
              <div className="flex justify-center">

                </div>
                <p className="text-xs text-black text-center font-cursive" style={{ fontFamily: 'cursive' }}>
                 Call: +91 9306763879
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default HireMe;