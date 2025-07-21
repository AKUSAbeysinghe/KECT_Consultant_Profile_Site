import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiFirstPage } from "react-icons/bi";

import processGif from "../assets/telephone.gif";
import DealGif from "../assets/deal.gif";
import fingurGif from "../assets/finger.gif"; // Adjust path if needed
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

      {/* Search Input */}
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

      {/* Cards Grid */}
      {servicesData
        .map((row) =>
          row.filter(([img, title]) =>
            title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .filter((filteredRow) => filteredRow.length > 0) // Only rows with cards
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
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: { xs: "10px 15px", sm: "20px 25px", md: "25px 30px" },
                mt: 5,
                px: { xs: 1, sm: 3, md: 5 },
                maxWidth: "100%",
              }}
            >
              {filteredRow.map(([img, title, desc, path]) =>
                renderCard(img, title, desc, path)
              )}
            </Box>
          </motion.div>
        ))}

      {/* Call to Action Section */}
      <Box
        sx={{
          mt: 8,
          mb: 8,
          p: 3,
          borderRadius: 3,
          boxShadow: 2,
          backgroundColor: "#f9fafb",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 3,
            justifyContent: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Process Icon */}
          <Box
            component="img"
            src={processGif}
            alt="process icon"
            sx={{ width: { xs: 60, sm: 80, md: 96 }, height: { xs: 60, sm: 80, md: 96 } }}
          />

          {/* Text + Deal Icon + Call Button */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 3,
              justifyContent: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: "bold",
                color: "gray.800",
                lineHeight: 1.2,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
              }}
            >
              Simplifying ISO: We Consult,{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                You Get Certified!
              </Box>
            </Typography>

            <Box
              component="img"
              src={DealGif}
              alt="deal icon"
              sx={{ width: { xs: 60, sm: 80, md: 96 }, height: { xs: 60, sm: 80, md: 96 } }}
            />

            <Button
              component="a"
              href="tel:+94769780984"
              variant="contained"
              sx={{
                bgcolor: "success.main",
                color: "#fff",
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "1rem", sm: "1.5rem" },
                borderRadius: 2,
                boxShadow: 3,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "success.dark",
                },
              }}
            >
              📞 Call Now +94769780984
            </Button>
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 3,
            color: "gray.600",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          We make ISO certification easy by guiding you through every step — from
          consultation to successful certification — with zero stress and full
          support.
        </Typography>
      </Box>

      {/* Scroll to Top Button */}
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
