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
import { useState } from "react";
import { BiFirstPage } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import DealGif from "../assets/deal.gif";
import fingurGif from "../assets/finger.gif";
import processGif from "../assets/telephone.gif";
import servicesData from "./ServicesData.jsx";

export default function Services() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
        training services in ISO management systems...
      </Typography>

      <Box
        sx={{
          mt: 2,
          mb: 5,
          display: "flex",
          justifyContent: "center",
          px: 1,
        }}
      >
        <input
          type="text"
          placeholder="Search for an ISO service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "12px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid blue",
            outline: "none",
            transition: "border-color 0.3s ease",
            margin: "0 10px",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
          onBlur={(e) => (e.target.style.borderColor = "blue")}
        />
      </Box>

      {servicesData
        .map((row) =>
          row.filter(([img, title]) =>
            title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .filter((filteredRow) => filteredRow.length > 0)
        .map((filteredRow, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr",
                  md: "1fr 1fr",
                },
                justifyItems: "center", // ⭐ Center cards in each cell
                gap: { xs: "30px", sm: "40px", md: "50px" },
                mt: 8,
                px: { xs: 2, sm: 4, md: 0 },
                maxWidth: "1200px",
                mx: "auto",
              }}
            >
              {filteredRow.map(([img, title, desc, path]) =>
                renderCard(img, title, desc, path)
              )}
            </Box>
          </motion.div>
        ))}

      <div className="w-full max-w-9xl mx-auto p-6 rounded-lg">
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">
          <img src={processGif} alt="process icon" className="w-20 sm:w-24 h-20 sm:h-24" />
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
            from consultation to successful certification 
            — with zero stress and full support.
          </p>
        </div>
      </div>

      <BiFirstPage
        size={window.innerWidth < 600 ? 35 : 45}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          color: "#12b5e7",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 999,
          transition: "all 0.3s ease",
          touchAction: "manipulation",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0d7bc4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#12b5e7")}
        onClick={() => navigate("/services")}
        aria-label="Scroll to top"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") navigate("/services");
        }}
      />
    </Box>
  );
}
