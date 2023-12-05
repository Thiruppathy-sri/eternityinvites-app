"use client";
// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-lg font-bold">
        {/* Your logo or company name */}
        MyLogo
      </div>
      <nav className="space-x-4">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Services
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
