import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import policyBackground from "../assets/policyBackground.jpg";

const TermsAndPolicy = () => {
  const termsRef = useRef(null);
  const privacyRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#terms" && termsRef.current) {
      termsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#privacy" && privacyRef.current) {
      privacyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 filter blur-sm brightness-60 z-0"
        style={{ backgroundImage: `url(${policyBackground})` }}
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <main
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white bg-black/70 backdrop-blur-md rounded-lg shadow-2xl"
        role="main"
        aria-label="Terms and Privacy Policy"
      >
        {/* Terms & Conditions Section */}
        <section ref={termsRef} id="terms" tabIndex={-1} className="mb-20">
          <h1 className="text-4xl font-bold mb-6 border-b border-gray-500 pb-3">
            Terms & Conditions
          </h1>
          <ul className="list-disc pl-6 space-y-4 text-base leading-relaxed text-gray-200">
            <li>
              <strong>Service Scope:</strong> We offer consultation services as outlined
              in your specific agreement.
            </li>
            <li>
              <strong>Confidentiality:</strong> Your information is kept confidential and
              used only to deliver our services.
            </li>
            <li>
              <strong>Payments:</strong> Fees are due as agreed. Late payments may result
              in service suspension.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All materials provided are for
              client use only and may not be redistributed.
            </li>
            <li>
              <strong>Liability:</strong> We are not liable for indirect or consequential
              damages.
            </li>
            <li>
              <strong>Termination:</strong> We reserve the right to terminate services in
              case of non-compliance.
            </li>
            <li>
              <strong>Jurisdiction:</strong> Governed by the laws of Sri Lanka.
            </li>
          </ul>
        </section>

        {/* Privacy Policy Section */}
        <section ref={privacyRef} id="privacy" tabIndex={-1}>
          <h1 className="text-4xl font-bold mb-6 border-b border-gray-500 pb-3">
            Privacy Policy
          </h1>
          <ul className="list-disc pl-6 space-y-4 text-base leading-relaxed text-gray-200">
            <li>
              <strong>What We Collect:</strong> Basic contact details, service-related
              info, and communication history.
            </li>
            <li>
              <strong>How We Use It:</strong> To provide consultation, communicate with
              you, and fulfill legal duties.
            </li>
            <li>
              <strong>Sharing:</strong> No data is sold. We only share with trusted
              partners or if required by law.
            </li>
            <li>
              <strong>Your Rights:</strong> You can request to access, update, or delete
              your data anytime.
            </li>
            <li>
              <strong>Security:</strong> We use reasonable measures to protect your
              information.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TermsAndPolicy;
