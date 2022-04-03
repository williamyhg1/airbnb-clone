import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";

export default function AddProperty(props) {
  const [listingId, setListingId] = useState();
  const [listedItem, setListedItem] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] =useState();
  const [errorMessage, setErrorMessage] = useState();
  const data = {
    title,
    listingId,
    description,
    img: photoURL,
    price,
  };

  const handleClickOpen = () => {
    setListingId();
    setTitle();
    setDescription();
    setPrice();
    setPhotoURL();
    setErrorMessage();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleSuccessClose = (event) => {
    event.preventDefault();
    setSuccessOpen(false);
  };

  const writeListingData = (listingNumber) => {
    set(ref(db, "Listings/" + listingNumber), data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.listingId) {
      setErrorMessage("Property ID is required");
    } else if (listedItem.includes(data.listingId)) {
      setErrorMessage("Property ID has exhisted");
    } else if (!data.title) {
      setErrorMessage("Property title is required");
    } else if (!data.description) {
      setErrorMessage("Property description is required");
    } else if (!data.price) {
      setErrorMessage("Price is required");
    } else if (parseInt(data.price) < 1) {
      setErrorMessage("Price must be over $0");
    } else if (!data.img) {
      setErrorMessage("Property image is required");
    } else {
      writeListingData(listingId);
      setSuccessMessage("Your property has been added")
      setSuccessOpen(true)
      setOpen(false);
    }
  };

  useEffect(() => {
    const ListingsRef = ref(db, "Listings");
    onValue(ListingsRef, (snapshot) => {
      const data = snapshot.val();
      setListedItem(Object.keys(data));
    });
  }, []);

  return (
    <div>
      {!props.user ? (
        <></>
      ) : (
        <Button
          color="primary"
          style={{ width: 120, height: 40 }}
          onClick={handleClickOpen}
        >
          Add my home
        </Button>
      )}
        {successOpen? (<>
          <Dialog open={successOpen} onClose={handleSuccessClose}>
        <DialogTitle style={{ width: 400 }}>
          {successMessage}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>

        <DialogActions>
        
            <Button onClick={handleSuccessClose}>Close</Button>
         
         
        </DialogActions>
      </Dialog>

        </>):open?(
        <>
<Dialog open={open} onClose={handleClose}>
        <DialogTitle>{errorMessage ? errorMessage : "Add a home"}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            {errorMessage
              ? ""
              : "Add or update your home with your customised property ID. Enter a property title, description, rate and photo URL to start."}
          </DialogContentText>
          <TextField
            onChange={(e) => setListingId(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="title"
            label="Property ID"
            fullWidth
            variant="outlined"
            required
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
            required
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
            required
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
            required
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
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
            required
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

        </>):<></>}

      
    </div>
  );
}
