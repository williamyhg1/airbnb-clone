import React, { useState, useRef, useCallback } from "react";
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
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [passwordMismatched, setPasswordMismatched] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const handleClickOpen = () => {
    setUser();
    setOpen(true);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirm: passwordConfirmRef.current?.value,
    };
    console.log(JSON.stringify(data));
    data.password === data.passwordConfirm
      ? createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            console.log(JSON.stringify(user));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          })
      : setPasswordMismatched("Passwords mismatched!");

    // setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {user
            ? "You have signed up!"
            : passwordMismatched
            ? passwordMismatched
            : errorMessage}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {user
              ? ""
              : "Please enter your email address and password toregister an account"}
          </DialogContentText>
          <TextField
            // onChange={(e) => setRegisterEmail(e.target.value)}
            inputRef={emailRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="outlined"
          />
          <TextField
            // onChange={(e) => setRegisterPassword(e.target.value)}
            inputRef={passwordRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
          />
          <TextField
            // onChange={(e) => setConfirmPassword(e.target.value)}
            inputRef={passwordConfirmRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="confirm-password"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            type="password"
          />
        </DialogContent>

        <DialogActions>
          {user ? "" : <Button onClick={handleRegister}>Sign up</Button>}
          {user ? (
            <Button onClick={handleClose}>Close</Button>
          ) : (
            <Button onClick={handleCancel}>Cancel</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;
