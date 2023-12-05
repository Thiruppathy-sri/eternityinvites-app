"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      <img
        className="w-full h-screen object-cover"
        src="https://source.unsplash.com/1600x900/?wedding"
        alt="Hero"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">
            Your Unique Wedding Invitations
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            Crafted with love and creativity
          </p>
          <a
            href="#get-started"
            className="bg-white text-black py-2 px-4 rounded-full font-bold hover:bg-gray-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
