import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FF914D", padding: "10px", textAlign: "center", marginTop: "30px" }}>
      <Typography variant="body2" color="white">
        <Link href="#" onClick={() => alert("Wir helfen Tieren seit vielen Jahren.")} color="inherit">Über Uns</Link> | 
        <Link href="#" onClick={() => alert("Mo - Fr, 10:00 - 18:00")} color="inherit"> Öffnungszeiten</Link> | 
        <Link href="#" onClick={() => alert("Adresse: Tierheimstraße 12, 12345 Stadt")} color="inherit"> Anfahrt</Link> | 
        <Link href="#" onClick={() => alert("Notfall-Hotline: 0123-456789 | Email: info@tierheim.de")} color="inherit"> Kontakt</Link> | 
        <Link href="#" onClick={() => alert("Tierheim e.V. - Geschäftsführer: Max Mustermann - Steuer-ID: 123456789")} color="inherit"> Impressum</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
