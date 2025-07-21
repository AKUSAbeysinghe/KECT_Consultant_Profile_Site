
import React from "react";
import { motion } from "framer-motion";
import TestimonialImage1 from "../assets/DT_ .webp";
import TestimonialImage2 from "../assets/Desir.webp";

const testimonials = [
  {
    text: `Working with your team has been a game-changer for our tyre manufacturing operations. The ISO 9001:2015 certification guidance was seamless, and your expertise helped us streamline our processes while improving quality control. Highly recommended!`,
    client: "Dharmasiri Tyres",
    rating: 4,
    image: TestimonialImage1,
  },
  {
    text: `As a confectionery manufacturer, maintaining high food safety standards is critical. Your team’s support in achieving ISO 22000:2018, GMP, and HACCP certifications was outstanding. Thank you for your professionalism!`,
    client: "Desir Confectionaries",
    rating: 4,
    image: TestimonialImage2,
  },
];

const renderStars = (count) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1 mt-1" aria-label={`${count} out of 5 stars`}>
      {[...Array(totalStars)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? "text-[#003B78]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.21-6.001 5.856 1.416 8.292L12 18.892l-7.415 3.891 1.416-8.292-6.001-5.856 8.332-1.21L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

const ClientTestimonialsSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background heading container */}
      <div className="relative text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     font-extrabold text-[#003B78] select-none pointer-events-none uppercase whitespace-nowrap
                     text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem]"
          // **FONT SIZES SIGNIFICANTLY REDUCED AGAIN FOR MAXIMUM SUBTLETY**
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003B78] mb-4 z-10"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative text-[#003B78] max-w-md mx-auto text-base sm:text-lg tracking-wide px-4 z-10"
        >
          Real feedback from our valued partners across industries.
        </motion.p>
      </div>

      {/* Testimonials Container */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20 sm:gap-24 md:gap-28">
        {testimonials.map(({ text, client, rating, image }, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative grid items-center w-full max-w-xl mx-auto
                          md:max-w-none md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr]
                          ${isLeft ? "" : "md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr]"} {/* Reverse columns for right side */}
                          `}
            >
              {/* Testimonial Image - positioned directly in the grid or flow */}
              <motion.div
                initial={{ rotateY: isLeft ? -90 : 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#003B78] bg-white z-20 mx-auto -mb-16
                            md:w-40 md:h-40 lg:w-48 lg:h-48 md:mb-0
                            ${isLeft ? "md:mr-[-2rem]" : "md:ml-[-2rem]"} {/* Creates the overlap effect */}
                            ${isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"}
                           `}
              >
                <div className="relative w-full h-full">
                  <motion.img
                    src={image}
                    alt={`${client} blurred`}
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: [1.05, 1.1, 1.05] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <img
                    src={image}
                    alt={client}
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative bg-white text-[#003B78] rounded-2xl shadow-xl ring-2 ring-[#003B78] w-full
                           p-6 pt-20 sm:p-8 sm:pt-24 md:p-10 md:pt-10 lg:p-12 lg:pt-12
                           ${isLeft ? "md:pl-[6rem] lg:pl-[8rem]" : "md:pr-[6rem] lg:pr-[8rem]"}
                           ${isLeft ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"}
                           `}
              >
                {/* Quote */}
                <blockquote className="text-center italic text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto mb-4">
                  “{text}”
                </blockquote>

                {/* Footer: Client Name + Stars - always reliably positioned within the card */}
                <div className="flex flex-col items-center mt-4">
                  <p className="font-semibold text-lg sm:text-xl text-[#003B78]">{client}</p>
                  {renderStars(rating)}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;