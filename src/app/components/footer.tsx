"use client";
// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">EternityInvites</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
          <a href="#privacy-policy" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
