import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Github, Linkedin } from 'lucide-react';

function ContactMe() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 p-2 flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Left Column - Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl font-bold shadow-md">
              VR
            </div>
            <p className="text-gray-600 text-sm">Let's create something amazing together!</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 shadow-md">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-xs">Email</p>
                <p className="text-blue-600 text-xs">vinaypawar692002@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 shadow-md">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-xs">Phone</p>
                <p className="text-green-600 text-xs">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2 shadow-md">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-xs">WhatsApp</p>
                <p className="text-purple-600 text-xs">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2 shadow-md">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-xs">Location</p>
                <p className="text-orange-600 text-xs">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;