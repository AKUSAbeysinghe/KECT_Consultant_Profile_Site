
import React from "react";
import FoodFair from "../assets/CEOFoodFair.jpeg";
import Fair from "../assets/Fair.jpeg";
import FairFood from "../assets/Fair2.jpeg";
import Process from './Process.jsx';

function OurStorySection() {
  return (
    <div>
    <div className="font-sans text-gray-800 flex flex-col lg:flex-row items-center justify-center px-4 py-10 sm:px-8 sm:py-16">
      {/* Left Side: Image Collage */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 lg:pr-10">
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-[400px] sm:h-[450px] lg:h-[520px]">
          {/* Image 1 */}
          <img
            src={FoodFair}
            alt="CEO at Food Fair"
            className="absolute top-0 right-0 w-1/2 h-1/3 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.target.src = "https://placehold.co/200x150?text=Error")}
          />

          {/* Image 2 */}
          <img
            src={Fair}
            alt="Team at Event"
            className="absolute top-1/4 left-1/4 w-3/4 h-1/2 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.target.src = "https://placehold.co/300x200?text=Error")}
          />

          {/* Image 3 */}
          <img
            src={FairFood}
            alt="Fair Booth"
            className="absolute bottom-0 left-0 w-2/3 h-2/5 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.target.src = "https://placehold.co/250x180?text=Error")}
          />

          {/* Overlay Box */}
          <div className="absolute top-0 left-0 w-2/3 sm:w-1/2 h-1/2 bg-gradient-to-br from-[#003B78] to-blue-800 rounded-lg shadow-xl p-4 sm:p-6 text-white flex flex-col justify-center">
            <p className="text-sm sm:text-base font-medium opacity-80 mb-1">OUR STORY</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Something <br /> to Know <br /> About <br /> Us.
            </h2>
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left p-4 sm:p-6">
        {/* Legal Edge */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003B78] mb-3">Legal Edge</h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          3 Attorney-Directors Ensure Full Compliance
        </h3>
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          M. Thiyagaraja (ACA, FCMA)<br />
          Chathurangi Amarathunge (LL.B Hons)<br />
          Thirasha Fernando (LL.B Hons)
        </p>

        {/* Global Network */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003B78] mb-3">Global Network</h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          15 Country Coordinators with Local Expertise
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          <span className="font-semibold text-[#003B78]">Germany:</span> Ameesha Fernando (BSc Cyber Security)<br />
          <span className="font-semibold text-[#003B78]">Japan:</span> Mohomad Rafeek (Computer Science Degree)<br />
          <span className="font-semibold text-[#003B78]">Saudi Arabia:</span> Hemali Kumari (BA Leadership & Management)
        </p>
      </div>
    </div>
    <Process />
    </div>
  );
}

export default OurStorySection;
