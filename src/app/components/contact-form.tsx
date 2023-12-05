"use client";
// components/ContactForm.js
// components/ContactForm.js

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Add this line for the modal state

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Replace these values with your own Email.js service, template, and user IDs
    const serviceId = "service_rpipej9";
    const templateId = "template_yztonyc";
    const userId = "G2p8yrY7BYbZpqccR";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
        },
        userId
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // You can add additional logic here, such as displaying a success message or redirecting the user
        setIsOpen(false); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle errors, such as displaying an error message to the user
      });
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Enquire Now
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Event Invitations Enquiry
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>

            <button
              className="mt-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
