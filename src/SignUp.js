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
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [errorMessage, setErrorMessage] = useState(false);
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
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirm: passwordConfirmRef.current?.value,
    };
    console.log(JSON.stringify(data.email.includes("@")));

    // data.email.includes("@" && ".com")
    //   ? data.password && data.passwordConfirm
    //     ? data.password === data.passwordConfirm
    //       ? createUserWithEmailAndPassword(auth, data.email, data.password)
    //           .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             setUser(user);
    //             console.log(JSON.stringify(user));
    //           })
    //           .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             setErrorMessage(errorMessage);
    //           })
    //       : setPasswordMismatched("Passwords mismatched!")
    //     : setErrorMessage("Password is requried")
    //   : setErrorMessage("Invalid email address");
    if (!data.email) {
      setErrorMessage("Email address is required");
    } else if (!data.email.includes("@" && ".com")) {
      setErrorMessage("Invalid email address");
    } else if (!data.password) {
      setErrorMessage("Password is requried");
    } else if (data.password && !data.passwordConfirm) {
      setErrorMessage("Please confirm your password");
    } else if (data.password !== data.passwordConfirm) {
      setErrorMessage("Passwords mismatched!");
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          console.log(JSON.stringify(user));
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
              : "Please enter your email address and password to register an account"}
          </DialogContentText>
          <TextField
            inputRef={emailRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            inputRef={passwordRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            required
          />
          <TextField
            inputRef={passwordConfirmRef}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="confirm-password"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            type="password"
            required
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
