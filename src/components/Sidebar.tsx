"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className='fixed bottom-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-md test-sm'
      >
        {isOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      {isOpen && (
        <div 
        className={'w-64 text-gray-800 bg-white p-4 border border-black shadow-lg ${ isOpen ? "translate-x-0" : "-translate-x-full"}'}
        >
          <h2 className='text-xl font-bold mb-6'>Information</h2>
          <nav>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='block px-4 py-2 rounded hover:bg-gray-700'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard'
                  className='block px-4 py-2 rounded hover:bg-gray-700'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/settings'
                  className='block px-4 py-2 rounded hover:bg-gray-700'
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
