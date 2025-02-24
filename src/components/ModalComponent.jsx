import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ModalComponent = ({ title, content, image, onClose, children }) => {
  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
        )}
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {content}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
