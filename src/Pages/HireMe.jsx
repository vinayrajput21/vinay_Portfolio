import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HireMe as HireMeService } from '../Services/APIserives';

function HireMe({ isOpen, onClose }) {
  const [companyName, setCompanyName] = useState('');
  const [weblink, setWeblink] = useState('');
  const [ctc, setCtc] = useState('');
  const [role, setRole] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleHire = async () => {
    setIsLoading(true);
    const payload = {
      companyName,
      weblink,
      ctc,
      role,
      subject,
      message,
    };

    try {
      await HireMeService(payload);
      toast.success('Hired successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setCompanyName('');
      setWeblink('');
      setCtc('');
      setRole('');
      setSubject('');
      setMessage('');
    } catch (err) {
      toast.error('Failed to hire. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMail = () => {
    const mailtoLink = `mailto:vinaypawar692002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${companyName}\nWeblink: ${weblink}\nCTC: ${ctc}\nRole: ${role}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative max-w-md w-full mx-4">
        <div className="bg-[#A259FF] p-6 rounded-xl relative overflow-hidden shadow-lg border-2 border-black">
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
            <h2 className="text-2xl font-black text-white text-center mb-2">Hire Me</h2>
            <p className="text-white text-center mb-4 font-semibold">Full Stack Developer</p>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-black text-white mb-1">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter Company Name"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">Website/Link</label>
                <input
                  type="text"
                  value={weblink}
                  onChange={(e) => setWeblink(e.target.value)}
                  placeholder="Company Website or LinkedIn"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">CTC (Compensation)</label>
                <input
                  type="text"
                  value={ctc}
                  onChange={(e) => setCtc(e.target.value)}
                  placeholder="Enter CTC (e.g., 4 LPA)"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-white mb-1">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter Job Role"
                  className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:border-[#A259FF] transition-colors duration-200 font-semibold placeholder-gray-500"
                />
              </div>

              <button
                onClick={handleHire}
                disabled={isLoading}
                className="w-full bg-[#FFDD55] text-black font-black py-2 px-4 rounded-lg hover:bg-[#ffdd55] transition-colors duration-200 text-sm shadow-md transform hover:scale-105 disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-black"
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
                Immediately Available
              </button>
              <p className="text-xs text-black text-center mt-2 font-semibold">
                Click above to send your hiring details
              </p>
              <div className="flex justify-center items-center my-3">
                <hr className="w-1/3 border-t-2 border-black" />
                <span className="mx-2 text-xs font-semibold text-black">OR</span>
                <hr className="w-1/3 border-t-2 border-black" />
              </div>
              <p className="text-xs text-black text-center mt-3 font-cursive" style={{ fontFamily: 'cursive' }}>
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