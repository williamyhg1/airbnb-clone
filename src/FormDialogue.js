import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./FormDialog.css";
import { useState } from "react";


export default function FormDialog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
event.preventDefault();
    setOpen(false);
  };

  // const handleSubmit= () => {
  //   <AddedItem 
  //   title={title}
  //   description={description}
  //   price={price}
  //   photo={photo}
  //    />
  //    console.log(title)
  //    console.log(description)
  //    console.log(price)
  //    console.log(photo)
     
  // }

  return (
    <div>
      <Button
        color="primary"
        style={{ width: 160, height: 40 }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Become a host
      </Button>
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Add a property</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Add your property to our databse with property title, description,
            desired price and a photo.
          </DialogContentText>
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
            label="Desired price"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPhoto(e.target.value)}
            autoComplete="off"
            autoFocus
            margin="dense"
            id="photo"
            label="Photo URL"
            fullWidth
            variant="outlined"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
