"use client";
import React, { useState } from "react";
import data from "@/app/data.js";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10
                    ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        {/* Sidebar content */}
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl font-bold mt-4'>Information</h2>
          {data.map((item, index) => (
            <div className='mt-4'>
              <a href='#' className='text-white hover:text-gray-300'>
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 p-4 ${isOpen ? "ml-64" : "ml-0"}`}>
        {/* Button to toggle sidebar */}
        <div className='ml-auto'>
          <button
            className='bg-blue-500 hover:bg-blue-700 
                       text-white font-bold py-2 px-4 rounded'
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Toggle icon based on isOpen state */}
            {isOpen ? (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
