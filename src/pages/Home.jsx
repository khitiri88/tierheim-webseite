import React from "react";
import { Container, Typography, Box } from "@mui/material";
import HomeImage from "../assets/images/Home.png"; // 📌 Lokales Bild importieren

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
      {/* Begrüßungstext */}
      <Typography variant="h3" color="primary" gutterBottom>
        Willkommen im Tierheim
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Hier kannst du Tiere zur Adoption finden.
      </Typography>

      {/* Warnung zur Adoption */}
      <Box
        sx={{
          backgroundColor: "#FFC107",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        ❗ Die Adoption eines Tieres ist eine große Verantwortung. Stelle sicher,
        dass du bereit bist, einem Tier ein dauerhaftes Zuhause zu geben.
      </Box>

      {/* Hauptbild */}
      <Box
        component="img"
        src={HomeImage} // 📌 Lokales Bild verwenden
        alt="Tiere und Kinder"
        sx={{ width: "100%", borderRadius: "10px", maxHeight: "400px", objectFit: "cover" }}
      />
    </Container>
  );
};

export default Home;
