
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Sparkle, Award, Lightbulb } from 'lucide-react';
import NB from "../assets/Trophy.webp";

const images = [NB, NB, NB];

const texts = [
  {
    title: 'ISO Consulting',
    description:
      'Expert guidance to integrate ISO standards smoothly into your business.',
    Icon: Lightbulb,
  },
  {
    title: 'ISO Certification Assessment',
    description:
      'Comprehensive assessments to help you achieve ISO certification confidently.',
    Icon: Award,
  },
  {
    title: 'Training',
    description:
      'Practical training sessions designed to empower your team for compliance.',
    Icon: Sparkle,
  },
];

// Variants for a smooth swap (fade and scale slightly)
const contentVariants = {
  hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.4, ease: 'easeOut' } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};

const AnimatedImageGrid = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((imageSrc, index) => (
          <GridItem
            key={index}
            imageSrc={imageSrc}
            textData={texts[index]}
            // Each item can have a slightly different interval
            swapInterval={4000 + index * 500} // e.g., 4s, 4.5s, 5s
          />
        ))}
      </div>
    </section>
  );
};

// --- Separate Component for each Grid Item ---
const GridItem = ({ imageSrc, textData, swapInterval }) => {
  const ref = useRef(null);
  // Trigger when 50% in view. 'once: false' allows re-triggering on scroll in/out
  const isInView = useInView(ref, { amount: 0.5, once: false });

  // State to control what's currently displayed (true = image, false = text)
  const [showImage, setShowImage] = useState(true);
  // State to track if the initial scroll-in swap has happened
  const [hasTriggeredInitialSwap, setHasTriggeredInitialSwap] = useState(false);

  // Effect for managing initial scroll-in swap and subsequent timed swaps
  useEffect(() => {
    let intervalId;

    if (isInView) {
      // If currently in view
      if (!hasTriggeredInitialSwap) {
        // First time it scrolls into view for this session
        // Swap to text after a small delay
        const initialSwapTimeout = setTimeout(() => {
          setShowImage(false); // Swap to text
          setHasTriggeredInitialSwap(true); // Mark initial swap as done
        }, 500); // Small delay for initial animation

        return () => clearTimeout(initialSwapTimeout); // Clean up initial timeout
      }

      // If already in view and initial swap happened, or if it re-enters view after initial swap
      // Start the continuous swapping interval
      intervalId = setInterval(() => {
        setShowImage(prev => !prev); // Toggle between image and text
      }, swapInterval);

    } else {
      // If out of view, clear any running interval and reset state for next time it scrolls in
      if (intervalId) {
        clearInterval(intervalId);
      }
      setShowImage(true); // Reset to image when out of view
      setHasTriggeredInitialSwap(false); // Reset initial swap flag
    }

    // Cleanup function for the effect
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isInView, hasTriggeredInitialSwap, swapInterval]); // Dependencies

  const { title, description, Icon } = textData;

  return (
    <div
      ref={ref}
      className="relative bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden
                 flex justify-center items-center p-4 sm:p-6 md:p-8 min-h-[400px]
                 transition-all duration-300 hover:border-blue-400 group"
    >
      <AnimatePresence mode="wait" initial={false}>
        {showImage ? (
          <motion.img
            key="image"
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        ) : (
          <motion.div
            key="text"
            className="flex flex-col items-center justify-center text-center gap-4 p-4"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-blue-700" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B78]">{title}</h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-xs">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImageGrid;