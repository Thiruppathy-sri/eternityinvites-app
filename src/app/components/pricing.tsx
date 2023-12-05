"use client";
// components/Pricing.js

import React from "react";

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Package 1 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Basic Package</h3>
            <p className="mb-4">One-page website with essential details.</p>
            <p className="text-2xl font-bold mb-4">$99</p>
            <a href="#choose-package" className="text-blue-500 hover:underline">
              Choose Package
            </a>
          </div>

          {/* Package 2 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Standard Package</h3>
            <p className="mb-4">
              Multi-page website with enhanced design and customization.
            </p>
            <p className="text-2xl font-bold mb-4">$199</p>
            <a href="#choose-package" className="text-blue-500 hover:underline">
              Choose Package
            </a>
          </div>

          {/* Package 3 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <p className="mb-4">
              Comprehensive website with advanced features and animations.
            </p>
            <p className="text-2xl font-bold mb-4">$299</p>
            <a href="#choose-package" className="text-blue-500 hover:underline">
              Choose Package
            </a>
          </div>

          {/* Package 4 */}
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold mb-2">Ultimate Package</h3>
            <p className="mb-4">
              All-inclusive package with live streaming and additional features.
            </p>
            <p className="text-2xl font-bold mb-4">$499</p>
            <a href="#choose-package" className="text-blue-500 hover:underline">
              Choose Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
