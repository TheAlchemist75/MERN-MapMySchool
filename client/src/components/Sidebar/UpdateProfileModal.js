import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

const UpdateProfileModal = ({ open, handleClose, user }) => {
  const [username, setUsername] = useState(user ? user.username : "");

  const handleUpdateProfile = () => {
    console.log("Profile Updated:", username);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Update Profile</Typography>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProfile}
        >
          Update Profile
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

export default UpdateProfileModal;
