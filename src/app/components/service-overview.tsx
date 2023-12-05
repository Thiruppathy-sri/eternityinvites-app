"use client";
// components/ServicesOverview.js

import React from "react";

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Basic Package</h3>
            <p className="mb-4">One-page website with essential details.</p>
            <a href="#get-started" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Standard Package</h3>
            <p className="mb-4">
              Multi-page website with enhanced design and customization.
            </p>
            <a href="#get-started" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <p className="mb-4">
              Comprehensive website with advanced features and animations.
            </p>
            <a href="#get-started" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Service 4 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Ultimate Package</h3>
            <p className="mb-4">
              All-inclusive package with live streaming and additional features.
            </p>
            <a href="#get-started" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
