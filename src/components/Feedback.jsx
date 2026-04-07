
import React from "react";

const ClientTestimonialsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#003B78" }}
          >
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto px-2 sm:px-0">
            Hear from our satisfied clients about their experience working with
            KECT Consultants.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card 1 */}
          <div className="mb-6 md:mb-0">
            <div
              className="rounded-lg shadow-lg p-6 sm:p-8 flex flex-col justify-between"
              style={{ backgroundColor: "#003B78", color: "white" }}
            >
              <div className="mb-6">
                {/* Quote Icon */}
                <p className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#B3D4F7" }}>
                  ”
                </p>
                <p className="text-lg leading-relaxed">
                  "KECT Consultants transformed our quality management system.
                  Their expertise in ISO 9001 implementation was exceptional, and
                  we achieved certification in record time."
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-1">Rajesh Gupta</p>
                <p className="text-md mb-3" style={{ color: "#B3D4F7" }}>
                  CEO, TechCorp Solutions
                </p>
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.21-6.001 5.856 1.416 8.292L12 18.892l-7.415 3.891 1.416-8.292-6.001-5.856 8.332-1.21L12 .587z" />
                    </svg>
                  ))}
                  <svg
                    className="h-5 w-5 text-gray-300 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.21-6.001 5.856 1.416 8.292L12 18.892l-7.415 3.891 1.416-8.292-6.001-5.856 8.332-1.21L12 .587z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div>
            <div
              className="rounded-lg shadow-lg p-6 sm:p-8 flex flex-col justify-between"
              style={{ backgroundColor: "#003B78", color: "white" }}
            >
              <div className="mb-6">
                {/* Quote Icon */}
                <p className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#B3D4F7" }}>
                  ”
                </p>
                <p className="text-lg leading-relaxed">
                  "Professional, knowledgeable, and results-driven. The team at
                  KECT helped us streamline our processes and achieve ISO 14001
                  certification seamlessly."
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-1">Sarah Johnson</p>
                <p className="text-md mb-3" style={{ color: "#B3D4F7" }}>
                  Operations Director, Manufacturing Plus Ltd
                </p>
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.21-6.001 5.856 1.416 8.292L12 18.892l-7.415 3.891 1.416-8.292-6.001-5.856 8.332-1.21L12 .587z" />
                    </svg>
                  ))}
                  <svg
                    className="h-5 w-5 text-gray-300 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.21-6.001 5.856 1.416 8.292L12 18.892l-7.415 3.891 1.416-8.292-6.001-5.856 8.332-1.21L12 .587z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;

