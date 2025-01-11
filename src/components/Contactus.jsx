import React from "react";
import '../index.css';


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Div Container */}
      <div className="space-y-6 w-full">
        {/* First Slanted Div (Aligned Left) */}
        <div className="flex justify-start">
          <div className="relative w-80 h-24 bg-gray-800">
            <div className="absolute inset-0 clip-left bg-gray-800"></div>
            <div className="absolute top-0 right-0 w-1 h-1 border-t-4 border-purple-500"></div>
          </div>
        </div>

        {/* Second Slanted Div (Aligned Right) */}
        <div className="flex justify-end">
          <div className="relative w-80 h-24 bg-gray-800">
            <div className="absolute inset-0 clip-right bg-gray-800"></div>
            <div className="absolute top-0 right-0 w-1 h-1 border-t-4 border-purple-500"></div>
          </div>
        </div>

        {/* Third Slanted Div (Aligned Left) */}
        <div className="flex justify-start">
          <div className="relative w-80 h-24 bg-gray-800">
            <div className="absolute inset-0 clip-left bg-gray-800"></div>
            <div className="absolute top-0 right-0 w-1 h-1 border-t-4 border-purple-500"></div>
          </div>
        </div>

        {/* Fourth Slanted Div (Aligned Right) */}
        <div className="flex justify-end">
          <div className="relative w-80 h-24 bg-gray-800">
            <div className="absolute inset-0 clip-right bg-gray-800"></div>
            <div className="absolute top-0 right-0 w-1 h-1 border-t-4 border-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
