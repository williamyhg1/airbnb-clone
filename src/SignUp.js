import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  //   const writeListingData = (listingNumber) => {
  //     set(ref(db, "Listings/" + listingNumber), {
  //       title,
  //       description,
  //       img: photoURL,
  //       price,
  //     });
  //   };

  const handleRegister = (event) => {
    event.preventDefault();
    // writeListingData(listingId);
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up with us!</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please enter your email address, preferred username and password to
            register an account
          </DialogContentText>
          <TextField
            //   onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            variant="outlined"
          />
          <TextField
            //   onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRegister}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp;
