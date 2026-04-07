import React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  MdInventory,
  MdVisibility,
  MdDeleteSweep,
  MdWarning,
  MdChecklistRtl,
} from "react-icons/md";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const inventoryBenefits = [
  {
    title: "Stock Control Savings",
    description: "Significant savings from stock control.",
    icon: MdInventory,
    number: "01",
  },
  {
    title: "Improved Visibility",
    description: "Enhanced visibility and improved decision-making.",
    icon: MdVisibility,
    number: "02",
  },
  {
    title: "Reduce Wastage",
    description: "Minimization of wastage and increased productivity.",
    icon: MdDeleteSweep,
    number: "03",
  },
  {
    title: "Avoid Over-Stocking",
    description: "Avoidance of unnecessary stocking and risk.",
    icon: MdWarning,
    number: "04",
  },
  {
    title: "Customer Fulfillment",
    description: "Accurate fulfillment of customer requirements.",
    icon: MdChecklistRtl,
    number: "05",
  },
];

export default function InventoryManagement() {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      {/* What is Inventory Management? */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#003B73",
          fontFamily: "Arial",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
        }}
      >
        What does it mean by Inventory Management?
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          mt: 3,
          color: "#555",
          fontFamily: "Helvetica",
          maxWidth: "900px",
          mx: "auto",
          fontSize: { xs: "0.95rem", sm: "1rem" },
        }}
      >
        The ordering, storing, tracking, and regulating of inventories is known as Inventory Management.
        Everything a company utilizes to make its commodities—from raw materials to completed products—is subject to Inventory Management.
      </Typography>

      {/* Benefits */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 8,
          fontWeight: "bold",
          color: "#003B73",
          fontFamily: "Arial",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
        }}
      >
        Benefits of Inventory Management Services
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          mt: 3,
          color: "#555",
          fontFamily: "Helvetica",
          maxWidth: "900px",
          mx: "auto",
          fontSize: { xs: "0.95rem", sm: "1rem" },
        }}
      >
        Inventory management services enable organizations to maximize efficiency, reduce costs, and ensure accurate delivery through strategic stock oversight.
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 mt-8">
        {inventoryBenefits.map(({ title, description, icon: IconComponent, number }, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "background-color 0.5s ease",
                cursor: "pointer",
                padding: "20px",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  backgroundColor: "#1976d2",
                  borderBottomLeftRadius: "100%",
                  transition: "all 0.5s ease-in-out",
                  zIndex: 1,
                },
                "&:hover:before": {
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                },
                "& > *": {
                  position: "relative",
                  zIndex: 2,
                  transition: "color 0.5s ease",
                },
                "&:hover .card-title, &:hover .card-number, &:hover .card-description": {
                  color: "#fff",
                },
                "& .icon-container": {
                  position: "absolute",
                  top: 8,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1976d2",
                  fontSize: "1.6rem",
                  transition: "all 0.5s ease",
                  zIndex: 3,
                },
                "&:hover .icon-container": {
                  backgroundColor: "transparent",
                  color: "gold",
                },
                "& .card-number": {
                  position: "absolute",
                  top: 8,
                  right: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  color: "#1976d2",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  zIndex: 3,
                  transition: "all 0.5s ease",
                },
                "&:hover .card-number": {
                  backgroundColor: "transparent",
                  color: "gold",
                },
              }}
            >
              <CardContent sx={{ pt: 6 }}>
                <Box className="icon-container">
                  <IconComponent />
                </Box>
                <Typography className="card-number">{number}</Typography>
                <Typography
                  variant="subtitle1"
                  className="card-title"
                  sx={{ fontWeight: 600, mt: 4, mb: 1 }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  className="card-description"
                  sx={{ fontSize: "0.85rem", color: "#555" }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Box>
          </motion.div>
        ))}
      </div>
    </div>
  );
}