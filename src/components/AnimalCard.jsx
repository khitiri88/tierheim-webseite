import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";

const AnimalCard = ({ name, art, bild, rasse, alter, beschreibung }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card 
        sx={{ 
          width: 320, 
          height: 380, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          cursor: "pointer", 
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFF7EB"
        }}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          component="img"
          image={bild}
          alt={name}
          sx={{ width: "100%", height: 220, objectFit: "cover", borderRadius: "15px 15px 0 0" }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "600", color: "#5E2D84" }}>{name}</Typography>
          <Typography variant="body2" color="textSecondary">{art}</Typography>
        </CardContent>
      </Card>

      {/* Modal für Details */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: "600", color: "#5E2D84" }}>
          {name} - {rasse}, {alter} Jahre
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            image={bild}
            alt={name}
            sx={{ width: "100%", height: "auto", maxHeight: 500, objectFit: "contain", borderRadius: "10px" }}
          />
          <Typography variant="body1" sx={{ mt: 2, textAlign: "left", padding: "0 20px", color: "#333" }}>
            {beschreibung}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimalCard;
