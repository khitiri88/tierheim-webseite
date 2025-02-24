import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import ModalComponent from "./ModalComponent";

const Footer = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, content) => {
    setModalData({ title, content });
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FF914D",
          padding: "10px",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Typography variant="body2" color="white">
          <Link href="#" onClick={() => openModal("Über Uns", "Wir helfen Tieren seit vielen Jahren.")} color="inherit">
            Über Uns
          </Link>
          {" | "}
          <Link href="#" onClick={() => openModal("Öffnungszeiten", "Mo - Fr, 10:00 - 18:00")} color="inherit">
            Öffnungszeiten
          </Link>
          {" | "}
          <Link href="#" onClick={() => openModal("Anfahrt", "Adresse: Tierheimstraße 12, 12345 Stadt")} color="inherit">
            Anfahrt
          </Link>
          {" | "}
          <Link href="#" onClick={() => openModal("Kontakt", "Notfall-Hotline: 0123-456789 | Email: info@tierheim.de")} color="inherit">
            Kontakt
          </Link>
          {" | "}
          <Link href="#" onClick={() => openModal("Impressum", "Tierheim e.V. - Geschäftsführer: Max Mustermann - Steuer-ID: 123456789")} color="inherit">
            Impressum
          </Link>
        </Typography>
      </Box>

      {modalData && (
        <ModalComponent title={modalData.title} content={modalData.content} onClose={() => setModalData(null)} />
      )}
    </>
  );
};

export default Footer;
