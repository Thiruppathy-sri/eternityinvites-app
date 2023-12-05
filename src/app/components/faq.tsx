"use client";
// components/FAQs.js

import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I get started with EternityInvites?",
      answer:
        "Getting started is easy! Just follow our simple sign-up process...",
    },
    {
      question: "Can I customize the design of my wedding website?",
      answer:
        "Absolutely! We offer various customization options to make your website unique...",
    },
    {
      question: "What is the pricing structure for your services?",
      answer:
        "We have different packages to suit various needs and budgets. Check out our Pricing section for details...",
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
