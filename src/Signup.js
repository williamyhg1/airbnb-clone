import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();

  const handleClickOpen = () => {

    setUser();
    setErrorMessage();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      passwordConfirm,
    };

    if (!data.email) {
      setErrorMessage("Email address is required");
    } else if (!data.email.includes("@" && ".com")) {
      setErrorMessage("Invalid email address");
    } else if (!data.password) {
      setErrorMessage("Password is requried");
    } else if (data.password.length < 7) {
      setErrorMessage("Password is too short");
    } else if (data.password && !data.passwordConfirm) {
      setErrorMessage("Please confirm your password");
    } else if (data.password !== data.passwordConfirm) {
      setErrorMessage("Passwords mismatched");
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          setEmail();
          setPassword();
          setPasswordConfirm();
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{user ? "You have signed up!" : errorMessage}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            {user
              ? ""
              : errorMessage? "":"Please enter your email address and password to register an account"}
          </DialogContentText>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="outlined"
            required
            value={email}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            required
            value={password}
          />
          <TextField
            onChange={(e) => setPasswordConfirm(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="confirm-password"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            type="password"
            required
            value={passwordConfirm}
          />
        </DialogContent>

        <DialogActions>
          {user ? "" : <Button onClick={handleRegister}>Sign up</Button>}
          {user ? (
            <Button onClick={handleClose}>Close</Button>
          ) : (
            <Button onClick={handleClose}>Cancel</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;