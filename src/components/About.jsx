import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ChairmanProfile from "../components/Words.jsx";
import Process from "../components/Process.jsx";
import WhoWeAre from "../components/WhoWeare.jsx";
import OurClients from "../components/OurClient.jsx";
import Testimonials from "../components/Testimonials.jsx";

import BackgroundImage from "../assets/BGT.webp";
import missionImg from "../assets/mission.webp";
import visionImg from "../assets/vision.webp";
import valueImg from "../assets/value.webp";

// CountUp component
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    let startTime = null;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const value = Math.min(end, Math.floor((progress / duration) * end));
      setCount(value);
      if (value < end) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#003B78] drop-shadow-md"
    >
      {count}+
    </span>
  );
};

const AboutPage = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: false });
    let lastScrollY = window.pageYOffset;
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const animation = scrollDirection === "down" ? "fade-up" : "fade-down";

  const stats = [
    {
      value: 10,
      label: "Years Experience",
      iconPath:
        "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      value: 150,
      label: "Clients Served",
      iconPath:
        "M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2m3-2v2m0-5V9m4-2h.01",
    },
    {
      value: 15,
      label: "Industries Covered",
      iconPath:
        "M19 11H5m14 0a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2",
    },
  ];

  // Updated with exact text from the KECT image
  const infoSections = [
    {
      title: "Our Vision",
      content:
        "Our vision is to be a world-class group of companies empower businesses and individuals to achieve international success and to be the most trusted partner in global trade, talent solutions, and quality consulting creating value that transcends borders.",
      image: visionImg,
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to drive sustainable growth through excellence, innovation, and strategic diversification — building strong businesses that create long-term value for our stakeholders and strengthen our position as a trusted industry leader in import and export solutions, professional recruitment, and quality consulting that drive sustainable growth.",
      image: missionImg,
    },
    {
      title: "Our Values",
      list: [
        "Integrity: We conduct our business with honesty, transparency, and accountability — building trust with our clients, partners, and communities.",
        "Excellence: We strive for the highest standards in everything we do, constantly improving our performance to deliver superior results and lasting value.",
        "Commitment: We are dedicated to fulfilling our promises — to our clients, employees, and stakeholders — through hard work, reliability, and perseverance.",
        "Teamwork: We believe that collaboration and mutual respect empower us to achieve more together, fostering a culture of unity and shared success.",
        "Customer Focus: We put our clients at the heart of everything we do, ensuring their satisfaction through quality, responsiveness, and trust.",
      ],
      image: valueImg,
    },
  ];

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollTo");
      }, 300);
    }
  }, []);

  return (
    <div>
      <style>
        {`
          @keyframes blink-glow {
            0%, 100% {
              box-shadow: 0 0 0px rgba(0, 91, 187, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 91, 187, 0.8);
            }
          }
          .blinking-shadow {
            animation: blink-glow 2s infinite;
          }
        `}
      </style>

      <section
        data-aos={animation}
        className="relative py-24 px-4 sm:px-6 lg:px-20 bg-white text-[#003B78]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16">
            Why you should choose us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-[#003B78] rounded-xl shadow-md hover:shadow-xl transition text-center"
                data-aos={animation}
                data-aos-delay={i * 100}
              >
                <div className="p-4 rounded-full bg-[#E6EEF5] mb-4">
                  <div className="flex justify-center mb-0">
                    <svg
                      className="h-10 w-10 text-[#003B78]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={stat.iconPath}
                      />
                    </svg>
                  </div>
                </div>
                <CountUp end={stat.value} />
                <p className="text-lg font-semibold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-24 mb-40 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003B78] mb-4">
              About KECT Consultants
            </h2>
            <p className="text-lg text-[#003B78] max-w-3xl mx-auto leading-relaxed">
              We are your reliable partner in driving operational excellence through expert consultancy,
              strategic guidance for ISO certification support across industries.
            </p>
          </div>

          {/* Vision, Mission, Values Section - Updated with exact text from image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-16 gap-x-10">
            {infoSections.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white pt-36 sm:pt-32 md:pt-40 lg:pt-44 px-4 sm:px-6 md:px-10 pb-8 
                           rounded-xl border border-[#003B78] shadow-md text-left min-h-[380px] sm:min-h-[420px] md:min-h-[460px]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {item.image && (
                  <div className="absolute -top-28 left-1/2 transform -translate-x-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-56 h-56 object-cover border-4 border-blue-400 rounded-xl bg-white transition-transform duration-300 ease-in-out hover:scale-110 blinking-shadow"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold uppercase mb-6 text-center tracking-wide">
                  {item.title}
                </h3>
                
                {item.list ? (
                  <ul className="list-disc list-inside space-y-4 text-base leading-relaxed text-[#003B78]">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base leading-relaxed text-[#003B78]">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section id="who-we-are" className="max-w-7xl mx-auto px-4 py-16">
        <WhoWeAre />
      </section>
      <section id="chairmans-profile" className="max-w-7xl mx-auto px-4 py-16">
        <ChairmanProfile />
      </section>
      <section id="our-process" className="max-w-7xl mx-auto px-4 py-16">
        <Process />
      </section>
      <section id="our-clients" className="max-w-7xl mx-auto px-4 py-16">
        <OurClients />
      </section>
      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-16">
        <Testimonials />
      </section>
    </div>
  );
};

export default AboutPage;