import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Signout() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  const handleClickOpen = () => {
    setUser();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    window.location.reload();
    setOpen(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleSignout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        setMessage("Sign out successful");
      })
      .catch((error) => {
        setMessage("An error happened");
      });
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sign out
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: 400 }}>
          {user ? "You have signed in!" : message}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {user ? "" : message ? "" : "Are you sure you want to sign out?"}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {message ? "" : <Button onClick={handleSignout}>Sign out</Button>}
          {message ? (
            <Button onClick={handleClose}>Close</Button>
          ) : (
            <Button onClick={handleCancel}>Cancel</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signout;
