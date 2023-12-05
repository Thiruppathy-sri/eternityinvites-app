"use client";
// components/HowItWorks.js

import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
            <div className="text-xl font-bold mb-2">Step 1</div>
            <p>Choose a package that suits your needs.</p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
            <div className="text-xl font-bold mb-2">Step 2</div>
            <p>Provide us with your event details and preferences.</p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
            <div className="text-xl font-bold mb-2">Step 3</div>
            <p>Our team creates a personalized website for your event.</p>
          </div>

          {/* Step 4 */}
          <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
            <div className="text-xl font-bold mb-2">Step 4</div>
            <p>Review and approve the design before we go live.</p>
          </div>

          {/* Step 5 */}
          <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
            <div className="text-xl font-bold mb-2">Step 5</div>
            <p>Share your unique website with your guests!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
