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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            desired price and photos.
          </DialogContentText>
          <TextField
            autoComplete="off"
            autoFocus
            margin="dense"
            id="title"
            label="Property Title"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoComplete="off"
            autoFocus
            margin="dense"
            id="description"
            label="Descreption"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoComplete="off"
            autoFocus
            margin="dense"
            id="price"
            label="Desired price"
            fullWidth
            variant="outlined"
          />
          <TextField
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
