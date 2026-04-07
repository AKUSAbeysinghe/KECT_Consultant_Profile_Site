import React from "react";
import { CheckCircle } from "lucide-react";
import hrImage from "../assets/about-bg.jpg"; // Replace with your actual image path

const benefits = [
  "Managing performance",
  "Being cost effective",
  "Ensuring employee satisfaction",
  "Assessing expertise",
  "Managing risks & meeting compliance obligations",
  "Developing career training",
];

const HumanResources = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#e6f0ff] py-16 px-4 md:px-10 text-[#003B78]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">HUMAN RESOURCES</h2>

        <div className="flex justify-center mb-6">
          <img
            src={hrImage}
            alt="HR Professionals"
            className="rounded-lg shadow-md max-h-[250px]"
          />
        </div>

        <p className="text-lg leading-relaxed mb-10">
          Our highly experienced HR Professionals focus on your HR workload while you focus on your business. 
          We believe that achieving workforce excellence should be the ultimate goal of Human Resource(HR) 
          regardless of size, industry segment, or geography. We assist you to achieve goals and make assessment 
          criteria, schedule interview & reviews, record change in salary, position, skills and training etc.
        </p>

        <h3 className="text-xl font-semibold mb-4">Benefits of Human Resources:</h3>

        <ul className="text-left max-w-2xl mx-auto space-y-3">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-[#007bff]" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HumanResources;
