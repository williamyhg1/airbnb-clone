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
import { ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function AddedItems() {
  const [open, setOpen] = useState(false);
  const [listings, setListings] = useState("");
  const [deleteItem, setDeleteItem] = useState();
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  useEffect(() => {
    const ListingsRef = ref(db, "Listings");
    onValue(ListingsRef, (snapshot) => {
      const data = snapshot.val();
      setListings(data);
    });
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    remove(ref(db, "Listings/" + deleteItem));
    setOpen(false);
  };

  const addedListings = Object.entries(listings).map(([key, data]) => (
    <Card sx={{ maxWidth: 400 }} key={key} className="card">
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
                <IconButton>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: 400 }}>
          Are you sure you want to delete this property?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>

          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {addedListings}
    </>
  );
}

export default AddedItems;
