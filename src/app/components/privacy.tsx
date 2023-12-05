"use client";
// components/PrivacyPolicy.js

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>

      {/* Introduction */}
      <p>
        Welcome to EternityInvites. This Privacy Policy explains how we collect,
        use, and protect your personal information on our website.
      </p>

      {/* Information Collection */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Information Collection</h3>
        <p>
          We collect personal information, including names, email addresses, and
          event details, when you use our services or provide them to us.
        </p>
        <p>
          This information is collected through user input forms on our website.
        </p>
      </section>

      {/* Use of Information */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Use of Information</h3>
        <p>
          We use the collected information to create personalized wedding
          websites, communicate with our clients, and provide the best possible
          service.
        </p>
      </section>

      {/* Sharing of Information */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Sharing of Information</h3>
        <p>
          We do not share personal information with third parties, except for
          the third-party services we use to operate our business, such as
          payment processors.
        </p>
      </section>

      {/* Security Measures */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Security Measures</h3>
        <p>
          We implement security measures, including encryption and secure
          hosting, to protect the personal information of our users.
        </p>
      </section>

      {/* Cookies and Tracking Technologies */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">
          Cookies and Tracking Technologies
        </h3>
        <p>
          We use cookies and similar tracking technologies to enhance user
          experience and track website performance. Users can manage cookie
          preferences in their browser settings.
        </p>
      </section>

      {/* Third-Party Links */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Third-Party Links</h3>
        <p>
          Our website may contain links to third-party sites. Our privacy policy
          does not apply to those sites, and we are not responsible for their
          practices.
        </p>
      </section>

      {/* User Choices */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">User Choices</h3>
        <p>
          Users have the choice to opt-out or update their preferences regarding
          the collection and use of their information.
        </p>
      </section>

      {/* Updates to the Privacy Policy */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">
          Updates to the Privacy Policy
        </h3>
        <p>
          We may update this privacy policy to reflect changes in our practices.
          Users will be notified of significant changes.
        </p>
      </section>

      {/* Contact Information */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
        <p>
          For any privacy-related inquiries or concerns, please contact us at{" "}
          <a href="mailto:privacy@eternityinvites.com">
            privacy@eternityinvites.com
          </a>
          .
        </p>
      </section>

      {/* Date of Last Update */}
      <p className="text-gray-600">Last Updated: December 1, 2023</p>
    </div>
  );
};

export default PrivacyPolicy;
