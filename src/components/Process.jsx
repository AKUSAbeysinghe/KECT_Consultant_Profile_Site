import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Trophy from "../assets/Trophy.webp";

// Styles as a JavaScript object for organization
const componentStyles = {
    // Shared styles for PhaseBlock
    phaseBlock: {
        numberBox: (backgroundColor) => ({
            backgroundColor: backgroundColor,
            color: 'white',
            fontSize: '2.5em',
            fontWeight: 'bold',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            zIndex: 3,
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
            boxSizing: 'border-box',
            position: 'absolute', // Positioned relative to its parent `div`
            top: '0px',
            left: '-140px',
            // Responsive adjustments for numberBox
            '@media (max-width: 992px)': { // For tablets and smaller desktops
                position: 'relative', // Change to relative positioning for smaller screens
                left: '0',
                top: 'auto',
                marginBottom: '20px', // Add spacing below the number box when relative
                width: '80px',
                height: '80px',
                fontSize: '2em',
            },
            '@media (max-width: 768px)': { // For mobile devices
                width: '70px',
                height: '70px',
                fontSize: '1.8em',
            },
            '@media (max-width: 576px)': { // Even smaller mobile devices
                width: '60px',
                height: '60px',
                fontSize: '1.5em',
            },
        }),
        blockContainer: {
            backgroundColor: '#1A2D40',
            padding: '40px',
            borderRadius: '12px',
            boxSizing: 'border-box',
            width: '100%',
            minHeight: '160px',
            position: 'relative',
            // Responsive adjustments for blockContainer
            '@media (max-width: 992px)': {
                paddingLeft: '20px', // Adjust padding when number box is above
                paddingRight: '20px',
                minHeight: 'auto',
            },
            '@media (max-width: 576px)': {
                padding: '25px 15px',
            },
        },
        title: {
            fontSize: '2em',
            marginBottom: '16px',
            fontWeight: 'bold',
            color: '#E0F2F7',
            marginTop: '0',
            '@media (max-width: 768px)': {
                fontSize: '1.7em',
                marginBottom: '10px',
            },
            '@media (max-width: 576px)': {
                fontSize: '1.5em',
            },
        },
        description: {
            fontSize: '1.2em',
            lineHeight: '1.6',
            color: '#B0C4DE',
            marginBottom: '0',
            '@media (max-width: 768px)': {
                fontSize: '1.1em',
            },
            '@media (max-width: 576px)': {
                fontSize: '1em',
            },
        },
        boldText: {
            fontWeight: 'bold',
            color: 'white',
        },
    },

    // Main component styles
    main: {
        sectionContainer: {
            position: 'relative',
            backgroundColor: '#F0F8FF',
            padding: '80px 5%',
            fontFamily: 'Arial, sans-serif',
            overflow: 'hidden', // Changed from visible to hidden for better containment
            zIndex: 0,
            // Responsive padding
            '@media (max-width: 768px)': {
                padding: '60px 4%',
            },
            '@media (max-width: 576px)': {
                padding: '40px 3%',
            },
        },
        columnsWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            // Responsive gap and flex direction
            '@media (max-width: 992px)': {
                gap: '30px',
                flexDirection: 'column', // Stack columns on smaller screens
                alignItems: 'center', // Center items when stacked
            },
            '@media (max-width: 768px)': {
                gap: '20px',
            },
        },
        leftColumn: {
            flex: '1 1 300px',
            maxWidth: '500px',
            paddingRight: '20px', // Original padding for larger screens
            zIndex: 3,
            position: 'relative',
            // Responsive padding and max-width
            '@media (max-width: 992px)': {
                paddingRight: '0', // Remove right padding when stacked
                maxWidth: '700px', // Allow left column to take more width
                textAlign: 'center', // Center text for better appearance
            },
            '@media (max-width: 768px)': {
                maxWidth: '100%', // Full width on smaller mobiles
            },
        },
        howOverlay: {
            fontSize: '160px',
            fontWeight: 'bold',
            color: 'rgba(65, 105, 225, 0.05)',
            whiteSpace: 'nowrap',
            position: 'absolute', // Position relative to leftColumn
            top: '-50px',
            left: '0',
            // Responsive adjustments for overlay
            '@media (max-width: 992px)': {
                fontSize: '120px',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)', // Center the overlay horizontally
            },
            '@media (max-width: 768px)': {
                fontSize: '90px',
                top: '10px',
            },
            '@media (max-width: 576px)': {
                fontSize: '70px',
                top: '20px',
            },
        },
        subHeading: {
            fontSize: '1.1em',
            color: '#6495ED',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '14px',
            position: 'relative', // Added for z-index to bring text above overlay
            zIndex: 4,
            '@media (max-width: 768px)': {
                fontSize: '1em',
                marginBottom: '10px',
            },
            '@media (max-width: 576px)': {
                fontSize: '0.9em',
            },
        },
        mainHeading: {
            fontSize: '3.5em',
            fontWeight: 'bold',
            color: '#4169E1',
            marginBottom: '16px',
            lineHeight: '1.2',
            position: 'relative', // Added for z-index
            zIndex: 4,
            '@media (max-width: 768px)': {
                fontSize: '2.8em',
                marginBottom: '12px',
            },
            '@media (max-width: 576px)': {
                fontSize: '2.2em',
            },
        },
        descriptionParagraph: {
            fontSize: '1.3em',
            color: '#36454F',
            lineHeight: '1.8',
            marginTop: '30px',
            marginBottom: '40px',
            position: 'relative', // Added for z-index
            zIndex: 4,
            '@media (max-width: 768px)': {
                fontSize: '1.1em',
                marginTop: '20px',
                marginBottom: '30px',
            },
            '@media (max-width: 576px)': {
                fontSize: '1em',
                marginTop: '15px',
                marginBottom: '25px',
            },
        },
        imageBelowText: {
            display: 'block',
            margin: '0 auto 40px auto', // Centered and spaced below text
            maxWidth: '500px',
            width: '100%',
            height: 'auto',
            zIndex: 3,
            borderRadius: '12px',
            '@media (max-width: 992px)': {
                maxWidth: '400px',
            },
            '@media (max-width: 768px)': {
                maxWidth: '300px',
                marginBottom: '30px',
            },
            '@media (max-width: 576px)': {
                maxWidth: '250px',
                marginBottom: '20px',
            },
        },
        rightColumn: {
            flex: '1 1 300px',
            maxWidth: '600px',
            padding: '40px',
            backgroundColor: '#1A2D40',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 3,
            position: 'relative',
            // Responsive adjustments for right column
            '@media (max-width: 992px)': {
                maxWidth: '700px', // Allow right column to take more width
            },
            '@media (max-width: 768px)': {
                maxWidth: '100%', // Full width on smaller mobiles
                padding: '30px',
            },
            '@media (max-width: 576px)': {
                padding: '20px',
            },
        },
    },
};

// Helper function to apply responsive styles
const applyResponsiveStyles = (baseStyle, mediaQueries) => {
    let finalStyle = { ...baseStyle };
    if (typeof window !== 'undefined') {
        for (const query in mediaQueries) {
            if (window.matchMedia(query.replace('@media ', '')).matches) {
                finalStyle = { ...finalStyle, ...mediaQueries[query] };
            }
        }
    }
    return finalStyle;
};

const PhaseBlock = ({ number, title, description, backgroundColor }) => {
    const [animatedNumber, setAnimatedNumber] = useState(0);
    const ref = useRef(null);
    // Use a smaller amount for isInView for earlier animation trigger
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Extracting styles for easier application
    const { numberBox, blockContainer, title: phaseTitle, description: phaseDescription, boldText } = componentStyles.phaseBlock;

    const dynamicNumberBoxStyle = applyResponsiveStyles(
        numberBox(backgroundColor),
        {
            '@media (max-width: 992px)': numberBox(backgroundColor)['@media (max-width: 992px)'],
            '@media (max-width: 768px)': numberBox(backgroundColor)['@media (max-width: 768px)'],
            '@media (max-width: 576px)': numberBox(backgroundColor)['@media (max-width: 576px)'],
        }
    );

    const dynamicBlockContainerStyle = applyResponsiveStyles(
        blockContainer,
        {
            '@media (max-width: 992px)': blockContainer['@media (max-width: 992px)'],
            '@media (max-width: 576px)': blockContainer['@media (max-width: 576px)'],
        }
    );

    const dynamicTitleStyle = applyResponsiveStyles(
        phaseTitle,
        {
            '@media (max-width: 768px)': phaseTitle['@media (max-width: 768px)'],
            '@media (max-width: 576px)': phaseTitle['@media (max-width: 576px)'],
        }
    );

    const dynamicDescriptionStyle = applyResponsiveStyles(
        phaseDescription,
        {
            '@media (max-width: 768px)': phaseDescription['@media (max-width: 768px)'],
            '@media (max-width: 576px)': phaseDescription['@media (max-width: 576px)'],
        }
    );

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(number);
            const duration = 1000;
            const incrementTime = 50;
            let currentTime = 0;
            const animateCount = () => {
                currentTime += incrementTime;
                const progress = Math.min(currentTime / duration, 1);
                const value = Math.floor(start + progress * (end - start));
                setAnimatedNumber(value);
                if (currentTime < duration) {
                    requestAnimationFrame(animateCount);
                } else {
                    setAnimatedNumber(end);
                }
            };
            requestAnimationFrame(animateCount);
        }
    }, [isInView, number]);

    const parsedDescription = description.split(/(\*\*.*?\*\*)/g).map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
            <strong key={index} style={boldText}>
                {part.slice(2, -2)}
            </strong>
        ) : (
            part
        )
    );

    return (
        <div
            ref={ref}
            // Conditional styling for the parent div to manage positioning based on screen size
            style={
                window.innerWidth <= 992
                    ? { position: 'relative', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }
                    : { position: 'relative', marginBottom: '60px' }
            }
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true, amount: 0.8 }}
                style={dynamicNumberBoxStyle}
            >
                {animatedNumber}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                style={dynamicBlockContainerStyle}
            >
                <h3 style={dynamicTitleStyle}>{title}</h3>
                <p style={dynamicDescriptionStyle}>{parsedDescription}</p>
            </motion.div>
        </div>
    );
};

function ISOConsultancyProcess() {
    const controls = useAnimation();
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { amount: 0.5 });

    // Extracting main styles
    const {
        sectionContainer,
        columnsWrapper,
        leftColumn,
        howOverlay,
        subHeading,
        mainHeading,
        descriptionParagraph,
        imageBelowText,
        rightColumn,
    } = componentStyles.main;

    // Applying responsive styles dynamically
    const dynamicSectionContainer = applyResponsiveStyles(sectionContainer, {
        '@media (max-width: 768px)': sectionContainer['@media (max-width: 768px)'],
        '@media (max-width: 576px)': sectionContainer['@media (max-width: 576px)'],
    });

    const dynamicColumnsWrapper = applyResponsiveStyles(columnsWrapper, {
        '@media (max-width: 992px)': columnsWrapper['@media (max-width: 992px)'],
        '@media (max-width: 768px)': columnsWrapper['@media (max-width: 768px)'],
    });

    const dynamicLeftColumn = applyResponsiveStyles(leftColumn, {
        '@media (max-width: 992px)': leftColumn['@media (max-width: 992px)'],
        '@media (max-width: 768px)': leftColumn['@media (max-width: 768px)'],
    });

    const dynamicHowOverlay = applyResponsiveStyles(howOverlay, {
        '@media (max-width: 992px)': howOverlay['@media (max-width: 992px)'],
        '@media (max-width: 768px)': howOverlay['@media (max-width: 768px)'],
        '@media (max-width: 576px)': howOverlay['@media (max-width: 576px)'],
    });

    const dynamicSubHeading = applyResponsiveStyles(subHeading, {
        '@media (max-width: 768px)': subHeading['@media (max-width: 768px)'],
        '@media (max-width: 576px)': subHeading['@media (max-width: 576px)'],
    });

    const dynamicMainHeading = applyResponsiveStyles(mainHeading, {
        '@media (max-width: 768px)': mainHeading['@media (max-width: 768px)'],
        '@media (max-width: 576px)': mainHeading['@media (max-width: 576px)'],
    });

    const dynamicDescriptionParagraph = applyResponsiveStyles(descriptionParagraph, {
        '@media (max-width: 768px)': descriptionParagraph['@media (max-width: 768px)'],
        '@media (max-width: 576px)': descriptionParagraph['@media (max-width: 576px)'],
    });

    const dynamicImageBelowText = applyResponsiveStyles(imageBelowText, {
        '@media (max-width: 992px)': imageBelowText['@media (max-width: 992px)'],
        '@media (max-width: 768px)': imageBelowText['@media (max-width: 768px)'],
        '@media (max-width: 576px)': imageBelowText['@media (max-width: 576px)'],
    });

    const dynamicRightColumn = applyResponsiveStyles(rightColumn, {
        '@media (max-width: 992px)': rightColumn['@media (max-width: 992px)'],
        '@media (max-width: 768px)': rightColumn['@media (max-width: 768px)'],
        '@media (max-width: 576px)': rightColumn['@media (max-width: 576px)'],
    });

    useEffect(() => {
        if (isImageInView) {
            controls.start({ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } });
        } else {
            // Stop animation when image is out of view, to save resources
            controls.stop();
        }
    }, [isImageInView, controls]);

    return (
        <section style={dynamicSectionContainer}>
            <div style={dynamicColumnsWrapper}>
                <div style={dynamicLeftColumn}>
                    <div style={dynamicHowOverlay}>HOW?</div>
                    <p style={dynamicSubHeading}>PROCESS OF ISO CERTIFICATION CONSULTING</p>
                    <h1 style={dynamicMainHeading}>How it works</h1>
                    <h2 style={dynamicMainHeading}>ISO Consultancy?</h2>
                    <p style={dynamicDescriptionParagraph}>
                        Let us guide you through the certification process seamlessly and efficiently.
                    </p>
                    <motion.img
                        ref={imageRef}
                        src={Trophy}
                        alt="ISO Consultancy Trophy"
                        style={dynamicImageBelowText}
                        initial={{ scale: 1 }}
                        animate={controls}
                    />
                </div>

                <div style={dynamicRightColumn}>
                    <PhaseBlock number="1" title="Free Initial Consultation" backgroundColor="#28a745" description="**Understand your needs** – A complimentary session to explore your organization's requirements, challenges, and ISO certification goals." />
                    <PhaseBlock number="2" title="Gap Analysis & Quotation" backgroundColor="#ffc107" description="**Evaluate current state** – A structured review of existing processes and documentation, followed by a tailored quotation for certification support." />
                    <PhaseBlock number="3" title="Documentation & Training" backgroundColor="#007bff" description="**Develop and educate** – Creating required policies and procedures while training your team to align with ISO standards." />
                    <PhaseBlock number="4" title="Internal Audit" backgroundColor="#dc3545" description="**Audit readiness check** – Conducting a mock internal audit to validate compliance and identify any final improvements." />
                    <PhaseBlock number="5" title="Certification & Coordination" backgroundColor="#6f42c1" description="**Smooth certification journey** – Coordinating with the external auditor and supporting you throughout the official certification process." />
                </div>
            </div>
        </section>
    );
}

export default ISOConsultancyProcess;