import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Signin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
    };

    if (!data.email) {
      setErrorMessage("Email address is required");
    } else if (!data.email.includes("@" && ".com")) {
      setErrorMessage("Invalid email address");
    } else if (!data.password) {
      setErrorMessage("Password is requried");
    } else if (data.password.length < 7) {
      setErrorMessage("Password is too short");
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          setEmail();
          setPassword();
        })
        .catch((error) => {
          setErrorMessage("Incorrect account details");
        });
    }
  };

  return (
    <div>
      {user || props.user ? (
        ""
      ) : (
        <Button color="primary" onClick={handleClickOpen}>
          Sign in
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: 400 }} className="message">
          {user ? "You have signed in" : errorMessage}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {user
              ? ""
              : errorMessage
              ? ""
              : "Please enter your email address and password to sign in"}
          </DialogContentText>

          {user ? (
            ""
          ) : (
            <>
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
                value={user ? "" : email}
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
                value={user ? "" : password}
              />
            </>
          )}
        </DialogContent>

        <DialogActions>
          {user ? "" : <Button onClick={handleRegister}>Sign in</Button>}
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

export default Signin;
