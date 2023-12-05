"use client";
// components/Testimonials.js

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      message:
        "EternityInvites made our wedding website truly special. The personalized touch and attention to detail were amazing!",
    },
    {
      name: "Jane Smith",
      message:
        "The team at EternityInvites exceeded our expectations. Our guests loved the unique digital experience!",
    },
    {
      name: "Mike Johnson",
      message:
        "Highly recommend EternityInvites for anyone looking for a creative and memorable wedding website. A fantastic service!",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <p className="mb-4">{testimonial.message}</p>
              <p className="text-lg font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
