import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import DealGif from "../assets/deal.gif";
import fingurGif from "../assets/finger.gif"; // Adjust path if needed
import processGif from "../assets/telephone.gif";
import servicesData from "./ServicesData.jsx";

export default function AMSMain() {
  const navigate = useNavigate();

  // Flatten servicesData to get all cards, then take first 4 cards only
  const allCards = servicesData.flat();
  const cardsToShow = allCards.slice(0, 4);

  const renderCard = (image, title, description, path) => {
    const [isoCode, ...rest] = title.split(" - ");
    const titleRemainder = rest.join(" - ");

    return (
      <Card
        sx={{
          width: { xs: 280, sm: 320, md: 550 },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s ease",
          position: "relative",
          zIndex: 1,
          "&:hover": {
            transform: "translateY(-6px) scale(1.02)",
            boxShadow: 8,
            zIndex: 10,
          },
          "&:hover .hover-area": {
            backgroundColor: "#e0f3ff",
          },
        }}
        key={title}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 100,
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <CardContent
          className="hover-area"
          sx={{
            flexGrow: 1,
            transition: "background-color 0.3s ease",
          }}
        >
          {/* Title Split Here */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: "rgb(4, 28, 160)",
              textAlign: "center",
              backgroundColor: "#e3f2fd",
              borderRadius: 1,
              py: 0.5,
              mb: 1,
              fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            {isoCode}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "text.primary",
              mb: 1,
              fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            {titleRemainder}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
            }}
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions
          className="hover-area"
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            paddingX: 2,
            paddingBottom: 2,
            transition: "background-color 0.3s ease",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "rgb(10, 64, 240)",
              color: "#EEF3F7",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 1,
              px: 3,
              "&:hover": {
                backgroundColor: "rgb(11, 23, 190)",
              },
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
            }}
            onClick={() => {
              if (path) navigate(path);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        margin: 0,
        padding: { xs: 2, sm: 4, md: 8 },
        minHeight: "100vh",
        boxSizing: "border-box",
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 6,
          height: { xs: 150, sm: 180, md: 200 },
          mb: 3,
        }}
      >
        {/* Background title */}
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            position: "absolute",
            color: "#003B73",
            fontFamily: "Arial",
            opacity: 0.15,
            fontSize: { xs: "3rem", sm: "5rem", md: "8rem" },
            zIndex: 1,
            userSelect: "none",
          }}
        >
          OUR SERVICES
        </Typography>

        {/* Foreground subtitle */}
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
            sx={{
              color: "#003B73",
              fontFamily: "Arial",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            What we can do for you
          </Typography>

          <Box
            component="img"
            src={fingurGif}
            alt="finger gif"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
            }}
          />
        </Box>
      </Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          color: "black",
          fontFamily: "Arial",
          textAlign: "center",
          fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
          mb: 2,
        }}
      >
        Our ISO Certification Consulting Services
      </Typography>

      <Typography
        component="p"
        sx={{
          fontFamily: "Helvetica",
          color: "#5A5A5A",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
          fontWeight: "500",
          lineHeight: 1.5,
        }}
      >
        <b>KECT CONSULTANTS (PVT) LTD</b> offers expert consultancy and tailored
        training services in ISO management systems, supporting organizations
        in achieving, maintaining, and improving compliance with international
        standards. We work across a wide range of industries to guide clients
        through the entire lifecycle of ISO implementation—from system design
        and documentation to internal audits and successful certification. Our
        services cover standards such as ISO 9001, ISO 14001, ISO 13485, ISO
        27001, and more. With a client-focused approach, our experienced
        consultants deliver practical, customized solutions that align with
        each organization’s operational goals and regulatory requirements. We
        are committed to helping businesses not only meet certification
        requirements but also strengthen overall performance, risk management,
        and continuous improvement. At KECT, we empower our clients to build
        robust management systems that drive long-term success and global
        competitiveness.
      </Typography>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 card per row on xs screens
              sm: "1fr", // 1 card per row on sm screens
              md: "1fr 1fr", // 2 cards per row on md+ screens
            },
            gap: { xs: "30px", sm: "40px", md: "50px" },
            mt: 8,
            px: { xs: 1, sm: 2, md: 0 },
            maxWidth: "1200px",
            mx: "auto",
            justifyContent: "center",
          }}
        >
          {cardsToShow.map(([img, title, desc, path]) =>
            renderCard(img, title, desc, path)
          )}
        </Box>
      </motion.div>

      {/* Call to Action Section */}
      <div className="w-full max-w-9xl mx-auto p-6 rounded-lg">
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">
          <img
            src={processGif}
            alt="process icon"
            className="w-20 sm:w-24 h-20 sm:h-24"
          />

          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
              Simplifying ISO: We Consult,
              <span className="text-blue-700 font-bold"> You Get Certified!</span>
            </p>
            <img src={DealGif} alt="deal icon" className="w-20 sm:w-24 h-20 sm:h-24" />
            <a
              href="tel:+94769780984"
              className="inline-flex items-center gap-2 px-6 sm:px-9 py-3 sm:py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition text-lg sm:text-2xl whitespace-nowrap"
            >
              📞 Call Now +94769780984
            </a>
          </div>
        </div>

        <div className="max-w-xl ml-4 sm:ml-[5.5rem] mt-4 text-left">
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-semibold">
            We make ISO certification easy by guiding you through every step —
            from consultancy and training to successful audit and certification.
            Let's build your path to international standards compliance today!
          </p>
        </div>
      </div>
    </Box>
  );
}
