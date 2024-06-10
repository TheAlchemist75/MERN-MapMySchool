import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

const DeleteProfileModal = ({ open, handleClose }) => {
  const handleDeleteProfile = () => {
    console.log("Profile Deleted");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Delete Profile</Typography>
        <Typography variant="body1" mb={2}>
          Are you sure you want to delete your profile?
        </Typography>
        <Button variant="contained" color="error" onClick={handleDeleteProfile}>
          Delete Profile
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

export default DeleteProfileModal;
