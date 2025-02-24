import React, { useState } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const openModal = (title, content) => {
    console.log("Modal wird geöffnet:", title);  // <--- Debugging
    setModalData({ title, content });
  };
  

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#FF914D", padding: "10px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography 
            variant="h5" 
            sx={{ cursor: "pointer", fontWeight: "bold", color: "#4A235A" }} 
            onClick={() => navigate("/")}
          >
            🐾 Tierheim
          </Typography>

          <div>
            <Button color="inherit" onClick={() => navigate("/hunde")}>Hunde</Button>
            <Button color="inherit" onClick={() => navigate("/katzen")}>Katzen</Button>
            <Button color="inherit" onClick={() => navigate("/kleintiere")}>Kleintiere</Button>
            <Button color="inherit" onClick={() => navigate("/voegel")}>Vögel</Button>

            <Button color="inherit" sx={{ fontWeight: "bold" }} onClick={() => openModal("Spenden", "Bankdaten: DE1234567890 | PayPal: paypal@tierheim.de")}>
              Spenden
            </Button>

            <Button color="inherit" sx={{ fontWeight: "bold" }} onClick={handleMenuOpen}>Info</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => openModal("Über Uns", "Wir helfen Tieren seit vielen Jahren und suchen liebevolle Besitzer.")}>Über Uns</MenuItem>
              <MenuItem onClick={() => openModal("Öffnungszeiten", "Unsere Öffnungszeiten: Mo - Fr, 10:00 - 18:00")}>Öffnungszeiten</MenuItem>
              <MenuItem onClick={() => openModal("Anfahrt", "Adresse: Tierheimstraße 12, 12345 Stadt")}>Anfahrt</MenuItem>
              <MenuItem onClick={() => openModal("Kontakt", "Notfall-Hotline: 0123-456789 | Email: info@tierheim.de")}>Kontakt</MenuItem>
              <MenuItem onClick={() => openModal("Impressum", "Tierheim e.V. - Geschäftsführer: Max Mustermann - Steuer-ID: 123456789")}>Impressum</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {modalData && (
        <ModalComponent title={modalData.title} content={modalData.content} onClose={() => setModalData(null)} />
      )}
    </>
  );
};

export default Navbar;
