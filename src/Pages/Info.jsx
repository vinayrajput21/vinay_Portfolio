import React from 'react'

function Info({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-gradient-to-br from-[#ffdd00] to-[#ffd700] border-[6px] border-orange-500 rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl relative transform transition-all duration-300 scale-100 hover:scale-105">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            🚀 Tech Stack
          </h2>
          <p className="text-gray-800 mb-4">
            This web page is built using:
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">☁️</span>
              <span className="text-gray-800 font-medium">AWS CDK</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">⚡</span>
              <span className="text-gray-800 font-medium">AWS Lambda</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">🪣</span>
              <span className="text-gray-800 font-medium">AWS S3</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">⚡</span>
              <span className="text-gray-800 font-medium">Github Actions</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">⚛️</span>
              <span className="text-gray-800 font-medium">ReactJS</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">🟢</span>
              <span className="text-gray-800 font-medium">Node.js</span>
            </div>
            <div className="flex items-center justify-start bg-white bg-opacity-30 rounded-lg p-2">
              <span className="mr-3">🍃</span>
              <span className="text-gray-800 font-medium">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Info