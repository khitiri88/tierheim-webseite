import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, TextField } from "@mui/material";
import ModalComponent from "./ModalComponent";

const AnimalCard = ({ name, art, bild, rasse, alter, beschreibung }) => {
  const [modalData, setModalData] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const openModal = () => {
    setModalData({ title: `${name} - ${rasse}, ${alter} Jahre`, content: beschreibung, image: bild });
  };

  const openRequestModal = (event) => {
    event.stopPropagation();
    setRequestModal(true);
  };

  const closeRequestModal = () => {
    setRequestModal(false);
    setEmail("");
    setMessage("");
    setSuccessMessage(false);
  };

  const handleSendRequest = () => {
    setSuccessMessage(true);
    setTimeout(() => {
      setRequestModal(false);
      setSuccessMessage(false);
    }, 2000);
  };

  return (
    <>
      <Card sx={{ width: 300, height: 350, margin: "10px", cursor: "pointer" }} onClick={openModal}>
        <CardMedia component="img" height="200" image={bild} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">{art}</Typography>
        </CardContent>
      </Card>

      {modalData && (
        <ModalComponent title={modalData.title} content={modalData.content} image={modalData.image} onClose={() => setModalData(null)}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
            <Button variant="contained" sx={{ backgroundColor: "#FF6F3C" }} onClick={openRequestModal}>
              Anfrage
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#FF3C3C" }} onClick={() => setModalData(null)}>
              Schließen
            </Button>
          </Box>
        </ModalComponent>
      )}

      {requestModal && (
        <ModalComponent title="Anfrage senden" onClose={closeRequestModal}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
            {successMessage ? (
              <Typography color="green" align="center">Anfrage erfolgreich gesendet!</Typography>
            ) : (
              <>
                <TextField label="Deine E-Mail" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Nachricht" variant="outlined" fullWidth multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <Button variant="contained" sx={{ backgroundColor: "#4CAF50" }} onClick={handleSendRequest}>
                    Senden
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: "#FF3C3C" }} onClick={closeRequestModal}>
                    Schließen
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </ModalComponent>
      )}
    </>
  );
};

export default AnimalCard;