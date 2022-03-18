import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ref, set} from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";

export default function AddProperty
() {
  const [listingId, setListingId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const writeListingData = (listingNumber) => {
    set(ref(db, "Listings/" + listingNumber), {
      title,
      description,
      img: photoURL,
      price,
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    writeListingData(listingId);
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        style={{ width: 120, height: 40 }}
        onClick={handleClickOpen}
      >
        Add my home
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a home</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Add or update your home with your customised property ID. Enter
            a property title, description, rate and photo URL to start.
          </DialogContentText>
          <TextField
            onChange={(e) => setListingId(`abnb${e.target.value}`)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="title"
            label="Property ID"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="title"
            label="Property Title"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="price"
            label="Price (AUD)"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPhotoURL(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="photoURL"
            label="Photo URL"
            fullWidth
            variant="outlined"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}