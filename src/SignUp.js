import React, { useState } from "react";
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
import { auth }  from "./firebase";


  
  
  


function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    setUser();
    setRegisterEmail();
    setRegisterPassword()
    setConfirmPassword();
    setOpen(false);
  };


  const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword,
      confirmPassword
    );
    setUser(user);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

  const handleRegister = (event) => {
    event.preventDefault();
    register();
    
    // setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
      {user?"You have Signed up!":""}</DialogTitle>

        <DialogContent>
          <DialogContentText>
          {user? ("") : ("Please enter your email address and password toregister an account")}
            
          </DialogContentText>
          <TextField
            onChange={(e) => setRegisterEmail(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="outlined"
            autocomplete="off"
          />
          <TextField
            onChange={(e) => setRegisterPassword(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            autocomplete="off"
          />
          <TextField
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="confirm-password"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            type="password"
            autocomplete="off"
          />
        </DialogContent>

        <DialogActions>
        {user?(""):(<Button onClick={handleRegister}>Sign up</Button>)}
        {user?(<Button onClick={handleClose}>Close</Button>):(<Button onClick={handleCancel}>Cancel</Button>)}
        
          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;