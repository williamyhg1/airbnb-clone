import React from "react";
import "./Home.css";
import "./AddedItems.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ref, onValue, set, remove } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import db from "./firebase";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import TextField from "@mui/material/TextField";

function AddedItems() {
  const [open, setOpen] = useState(false);

  const [listings, setListings] = useState("");
  const [deleteItem, setDeleteItem] = useState();
  const [user, setUser] = useState();

  const [editOpen, setEditOpen] = useState(false);
  const [editItemKey, setEditItemKey] = useState();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [photoURL, setPhotoURL] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [sucessfulMessage, setSuccessfulMessage] = useState();
  const [successOpen, setSuccessOpen] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser()
    }
  });

  const data = {
    title,
    listingId: editItemKey,
    description,
    img: photoURL,
    price,
  };

  useEffect(() => {
    const ListingsRef = ref(db, "Listings");
    onValue(ListingsRef, (snapshot) => {
      const data = snapshot.val();
      setListings(data);
    });
  }, []);

  const handleEditClose = (event) => {
    event.preventDefault();
    setErrorMessage();
    setEditOpen(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (!data.title) {
      setErrorMessage("Property title is required");
    } else if (!data.description) {
      setErrorMessage("Property description is requred");
    } else if (!data.price) {
      setErrorMessage("Price is required");
    } else if (parseInt(data.price) < 1) {
      setErrorMessage("Price must be over $0");
    } else if (!data.img) {
      setErrorMessage("Property image is required");
    } else {
      set(ref(db, "Listings/" + editItemKey), data);
      setSuccessfulMessage("Your property has been updated");
      setSuccessOpen(true);
      setEditOpen(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    setSuccessfulMessage();
    setErrorMessage();
  };

  //Delete Modal

  const handleClose = (event) => {
    event.preventDefault();
    setErrorMessage();
    setOpen(false);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    remove(ref(db, "Listings/" + deleteItem));
    setSuccessfulMessage("Your property has been deleted")
    setSuccessOpen(true);
    setOpen(false);
  };

  const addedListings = Object.entries(listings).map(([key, data]) => (
    <Card sx={{ maxWidth: 400 }} key={key} className="card" data={data}>
      {" "}
      <CardMedia component="img" height="300" image={data.img} alt="" />
      <CardContent className="content">
        <div>
          <Typography variant="body2" color="text.secondary">
            Property ID&nbsp;: &nbsp;{key}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </div>
        <div className="delete">
          <Typography variant="h6" color="text.primary">
            ${data.price}/night
          </Typography>
          <div>
            {user ? (
              <>
                <IconButton
                  onClick={() => {
                    setEditOpen(true);
                    setEditItemKey(key);
                    setTitle(data.title);
                    setPrice(data.price);
                    setDescription(data.description);
                    setPhotoURL(data.img);
                  }}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => {
                    setOpen(true);
                    setDeleteItem(key);
                  }}
                >
                  <DeleteOutlineOutlinedIcon fontSize="medium" />
                </IconButton>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  ));
  return (
    <>
      {/* Delete property Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: 400 }}>
          Are you sure you want to delete this property?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Edit property Modal */}
      {successOpen ? (
        <>
          <Dialog open={successOpen} onClose={handleSuccessClose}>
            <DialogTitle style={{ width: 400 }}>{sucessfulMessage}</DialogTitle>

            <DialogActions>
              <Button onClick={handleSuccessClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : editOpen ? (
        <>
          <Dialog open={editOpen} onClose={handleEditClose}>
            <DialogTitle>
              {errorMessage ? errorMessage : "Edit details of my home"}
            </DialogTitle>

            <DialogContent>
              <DialogContentText></DialogContentText>
              <TextField
                autoComplete="off"
                autoFocus
                margin="dense"
                id="title"
                label="Property ID"
                fullWidth
                variant="outlined"
                value={editItemKey}
              />
              <TextField
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                autoComplete="off"
                autoFocus
                margin="dense"
                id="title"
                label="Property Title"
                fullWidth
                variant="outlined"
                required
                value={title}
              />
              <TextField
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                autoComplete="off"
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                fullWidth
                variant="outlined"
                required
                value={description}
              />
              <TextField
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
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
                value={price}
              />
              <TextField
                onChange={(e) => {
                  setPhotoURL(e.target.value);
                }}
                autoComplete="off"
                autoFocus
                margin="dense"
                id="photoURL"
                label="Photo URL"
                fullWidth
                variant="outlined"
                required
                value={photoURL}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleEditSubmit}>Save</Button>
              <Button onClick={handleEditClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <></>
      )}
      {addedListings}
    </>
  );
}

export default AddedItems;
