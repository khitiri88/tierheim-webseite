import React, { useState } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF914D", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo als Button */}
        <Typography 
          variant="h5" 
          sx={{ cursor: "pointer", fontWeight: "bold", color: "#4A235A" }} 
          onClick={() => navigate("/")}
        >
          🐾 Tierheim
        </Typography>

        {/* Navigationsbuttons */}
        <div>
          <Button color="inherit" onClick={() => navigate("/hunde")}>Hunde</Button>
          <Button color="inherit" onClick={() => navigate("/katzen")}>Katzen</Button>
          <Button color="inherit" onClick={() => navigate("/kleintiere")}>Kleintiere</Button>
          <Button color="inherit" onClick={() => navigate("/voegel")}>Vögel</Button>

          {/* Spenden-Button */}
          <Button color="inherit" sx={{ fontWeight: "bold" }} onClick={() => alert("Bankdaten: DE1234567890 | PayPal: paypal@tierheim.de")}>
            Spenden
          </Button>

          {/* Info-Menü */}
          <Button color="inherit" sx={{ fontWeight: "bold" }} onClick={handleMenuOpen}>
            Info
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => alert("Wir helfen Tieren seit vielen Jahren und suchen liebevolle Besitzer.")}>Über Uns</MenuItem>
            <MenuItem onClick={() => alert("Unsere Öffnungszeiten: Mo - Fr, 10:00 - 18:00")}>Öffnungszeiten</MenuItem>
            <MenuItem onClick={() => alert("Adresse: Tierheimstraße 12, 12345 Stadt")}>Anfahrt</MenuItem>
            <MenuItem onClick={() => alert("Notfall-Hotline: 0123-456789 | Email: info@tierheim.de")}>Kontakt</MenuItem>
            <MenuItem onClick={() => alert("Tierheim e.V. - Geschäftsführer: Max Mustermann - Steuer-ID: 123456789")}>Impressum</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
