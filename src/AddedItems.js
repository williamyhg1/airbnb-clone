import React from "react";
import "./Home.css";
import "./AddedItems.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import { ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";

function AddedItems() {
  const [listings, setListings] = useState("");
  useEffect(() => {
    const ListingsRef = ref(db, "Listings");
    onValue(ListingsRef, (snapshot) => {
      const data = snapshot.val();
      setListings(data);
    });
  }, []);

  const addedListings = Object.entries(listings).map(([key, data]) => (
    <Card sx={{ maxWidth: 400 }} key={key} className="card">
      {" "}
      <CardActionArea>
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
            <IconButton
              onClick={() => {
                remove(ref(db, "Listings/" + key));
              }}
            >
              <DeleteOutlineOutlinedIcon fontSize="medium" />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return <>{addedListings}</>;
}

export default AddedItems;
