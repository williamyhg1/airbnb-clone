import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar } from "@mui/material";

function Profile(props) {
  return (
    <div>
      {!props.user ? (
        ""
      ) : (
        <IconButton>
          <Avatar />
        </IconButton>
      )}
    </div>
  );
}

export default Profile;
