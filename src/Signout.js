import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Signout(props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
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
      {!props.user ? (
        <></>
      ) : (
        <Button color="primary" onClick={handleClickOpen}>
          Sign out
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: 400 }}>
          {props.user ? "Are you sure you want to sign out?" : message ? message : ""}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {!props.user ? "" : <Button onClick={handleSignout}>Sign out</Button>}
          {!props.user ? (
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
