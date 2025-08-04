import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Github, Linkedin } from 'lucide-react';

function ContactMe() {

  return (
    <div className="min-h-screen bg-yellow-400 p-2 flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Contact Card */}
        <div className="bg-teal-500 rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 border-4 border-gray-800">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-800 text-2xl font-bold shadow-lg border-3 border-gray-800">
              VR
            </div>
            <p className="text-white text-base font-medium">Let's create something amazing together!</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-800">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-md border-2 border-gray-800">
                <Mail className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Email</p>
                <p className="text-teal-600 text-sm font-medium">vinaypawar692002@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-800">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-md border-2 border-gray-800">
                <Phone className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Phone</p>
                <p className="text-teal-600 text-sm font-medium">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-800">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-md border-2 border-gray-800">
                <MessageCircle className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">WhatsApp</p>
                <p className="text-teal-600 text-sm font-medium">+91 9306763879</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-800">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-md border-2 border-gray-800">
                <MapPin className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Location</p>
                <p className="text-teal-600 text-sm font-medium">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;