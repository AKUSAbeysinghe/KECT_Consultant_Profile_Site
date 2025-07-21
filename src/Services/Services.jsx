import { Button, Box, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ALLISOImage from "../assets/ISObgI.webp";
import GMPImage from "../assets/GMPbgI.webp";
import HACCPImage from "../assets/HACCPbgI.webp";
import CEMARKINGImage from "../assets/CEMARKINGbgI.webp";
import fingurGif from "../assets/finger.gif";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "ISO Services",
      subtitle: "All ISO Services",
      image: ALLISOImage,
      route: "/all-iso",
      description:
        "We provide comprehensive ISO consulting tailored to your organization's needs, guiding you through implementation, training, audits, and certification for lasting compliance.",
    },
    {
      title: "GMP Service",
      subtitle: "Good Manufacturing Practice",
      image: GMPImage,
      route: "/gmpMain",
      description:
        "Expert consulting to help you implement and maintain Good Manufacturing Practices, ensuring high production quality, consistent processes, and compliance with industry standards.",
    },
    {
      title: "HACCP Service",
      subtitle: "Food Safety Assurance",
      image: HACCPImage,
      route: "/hacpMain",
      description:
        "Comprehensive consulting to establish robust food safety systems, ensuring compliance, risk management, and readiness for HACCP certification to protect your products and consumers.",
    },
    {
      title: "CE Marking",
      subtitle: "European Product Compliance",
      image: CEMARKINGImage,
      route: "/ceMain",
      description:
        "Expert guidance to navigate and meet European regulatory requirements, ensuring your products comply with EU standards for smooth market entry and sustained access.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        padding: "0 5%",
        boxSizing: "border-box",
      }}
    >
      <div className="py-2 max-w-7xl mx-auto text-left">
        {/* Header */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 6,
            height: "200px",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              position: "absolute",
              color: "#003B73",
              fontFamily: "Arial",
              opacity: 0.15,
              zIndex: 1,
              fontSize: {
                xs: "3rem",
                sm: "5rem",
                md: "7rem",
                lg: "9rem",
                xl: "10rem",
              },
            }}
          >
            OUR SERVICES
          </Typography>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "#003B73", fontFamily: "Arial" }}
            >
              What we can do for you
            </Typography>

            <Box
              component="img"
              src={fingurGif}
              alt="finger gif"
              sx={{ width: 50, height: 50 }}
            />
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#5A5A5A",
            mt: 3,
            fontFamily: "Helvetica",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
         <b>KECT CONSULTANTS (PVT) LTD</b> offers a wide range of consulting and
          training services specializing in <b>international standards and
          compliance systems</b>. We support organizations in achieving and
          maintaining certifications in areas such as quality, environmental,
          food safety, and information security. Our expertise extends across
          healthcare, manufacturing, laboratories, and more—guiding clients
          through implementation, internal audits, and regulatory readiness. We
          also support best practices like <b>GMP, HACCP and CE Marking</b> to enhance
          quality and global compliance.
        </Typography>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
              mt: 6,
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  width: "22%",
                  minWidth: 260,
                  maxWidth: 300,
                  height: 420,
                  cursor: "pointer",
                  perspective: 1000,
                  position: "relative",
                  mb: 3,
                  "&:hover .flip-box": {
                    transform: "rotateX(180deg)",
                  },
                }}
                onClick={() => navigate(service.route)}
              >
                <Box
                  className="flip-box"
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s ease",
                  }}
                >
                  {/* Front */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 4,
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.7)",
                      }}
                    />
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(112, 112, 112, 0.85)",
                        color: "rgba(239, 241, 241, 0.85)",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontFamily: "Arial",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  {/* Back */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateX(180deg)",
                      backgroundColor: "#003B73",
                      borderRadius: 3,
                      color: "#eef3f7",
                      padding: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.route);
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mb: 2, fontSize: "1.5rem" }}
                      >
                        {service.subtitle}
                      </Typography>

                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {service.description}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#194CF5",
                        color: "#EEF3F7",
                        px: 4,
                        py: 1,
                        alignSelf: "center",
                        mt: 2,
                        "&:hover": { backgroundColor: "#1C28D4" },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </motion.div>
      </div>
    </div>
  );
}
