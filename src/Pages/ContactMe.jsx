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
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl gap-8">
        
        {/* Left Column - Contact Info */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              VR
            </div>
            <p className="text-gray-600">Let's create something amazing together!</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-blue-600">vinaypawar692002@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-green-600">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <p className="text-purple-600">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-orange-600">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactMe;