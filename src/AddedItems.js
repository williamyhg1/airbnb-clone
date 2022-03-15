import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ref, onValue } from "firebase/database";
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
    <Card sx={{ maxWidth: 400 }} className="card" key={key}>
      {" "}
      <CardActionArea>
        <CardMedia component="img" height="300" image={data.img} alt="" />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            Property ID : {key}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${data.price}/night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return <>{addedListings}</>;
}

export default AddedItems;
