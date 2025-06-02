import React from 'react';
import PurpleImage from '../assets/purple-image.jpg'; // Replace with your actual image path

export default function PurpleVision() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-purple-600 text-xl font-bold uppercase tracking-wide">Purple</h2>
          <h3 className="text-gray-900 text-2xl font-bold mb-4">Vision</h3>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right Section with image and purple background */}
        <div className="relative md:w-1/2">
          <div className="absolute top-4 right-4 bottom-4 left-4 bg-purple-500 z-0 rounded-md"></div>
          <img
            src={PurpleImage}
            alt="Purple Coral"
            className="relative z-10 w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}