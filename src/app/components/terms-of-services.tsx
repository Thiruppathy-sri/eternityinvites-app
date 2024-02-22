"use client";
// components/TermsOfService.js

import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>

      {/* Introduction */}
      <p>
        Welcome to EternityInvites. By using our website, you agree to comply
        with and be bound by the following terms and conditions of use.
      </p>

      {/* Acceptance of Terms */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Acceptance of Terms</h3>
        <p>
          Your access to and use of our services is conditioned on your
          acceptance of and compliance with these terms. By accessing or using
          the services, you agree to be bound by these terms.
        </p>
      </section>

      {/* Use of Services */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Use of Services</h3>
        <p>
          You may use our services for lawful purposes only. You are prohibited
          from violating any laws, third-party rights, or our policies.
        </p>
      </section>

      {/* User Accounts */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">User Accounts</h3>
        <p>
          To access certain features of our services, you may be required to
          create a user account. You are responsible for maintaining the
          confidentiality of your account information.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Intellectual Property</h3>
        <p>
          The content on our website, including text, graphics, logos, and
          images, is the property of EternityInvites and is protected by
          intellectual property laws.
        </p>
      </section>

      {/* Termination */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Termination</h3>
        <p>
          We reserve the right to terminate or suspend your account and access
          to our services for any reason, without notice.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Disclaimer</h3>
        <p>
          Our services are provided on an and basis. We make no representations
          or warranties of any kind, expressed or implied.
        </p>
      </section>

      {/* Governing Law */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Governing Law</h3>
        <p>
          These terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction].
        </p>
      </section>

      {/* Changes to Terms */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Changes to Terms</h3>
        <p>
          We reserve the right to modify or replace these terms at any time.
          Changes will be effective immediately upon posting on our website.
        </p>
      </section>

      {/* Contact Information */}
      <section className="my-6">
        <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
        <p>
          If you have any questions or concerns about these terms, please
          contact us at{" "}
          <a href="mailto:terms@eternityinvites.com">
            terms@eternityinvites.com
          </a>
          .
        </p>
      </section>

      {/* Date of Last Update */}
      <p className="text-gray-600">Last Updated: December 1, 2023</p>
    </div>
  );
};

export default TermsOfService;
