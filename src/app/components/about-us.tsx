"use client";
// components/AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex items-center">
        {/* Left side (Image) */}
        <div className="w-1/2">
          <img
            className="w-full h-auto rounded"
            src="https://source.unsplash.com/800x600/?team"
            alt="About Us"
          />
        </div>
        {/* Right side (Text) */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to EternityInvites, where creativity meets celebration! We
            specialize in crafting personalized and visually stunning wedding
            websites. Our dedicated team is passionate about turning your love
            story into a unique online experience for you and your guests.
          </p>
          <p className="text-lg">
            At EternityInvites, we believe that every couple deserves a
            one-of-a-kind invitation that reflects their style and personality.
            Let us be a part of your special day, creating digital memories that
            last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
