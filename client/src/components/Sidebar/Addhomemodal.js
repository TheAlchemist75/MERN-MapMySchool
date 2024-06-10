import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

const AddHomeModal = ({ open, handleClose }) => {
  const [homeName, setHomeName] = useState("");

  const handleAddHome = () => {
    console.log("Home Added:", homeName);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Add Home</Typography>
        <TextField
          fullWidth
          label="Home Name"
          value={homeName}
          onChange={(e) => setHomeName(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddHome}>
          Add Home
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default AddHomeModal;
