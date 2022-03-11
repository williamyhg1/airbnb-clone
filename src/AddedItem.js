import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { getDatabase, ref, child, get } from "firebase/database";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";

function AddedItem() {
  const [listings, setListings] = useState("");


  useEffect(()=>{
      const ListingsRef = ref(db, "Listings");
  onValue(ListingsRef, (snapshot) => {
    const data = snapshot.val();
    setListings(data);
  });
  },[]);
  
  const allListings = 
  Object.entries(listings).map(([key, data]) => (
 <Card sx={{ maxWidth: 425 }} key={key}
 >         <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={data.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
));


return (
      <div>
   {allListings}
   </div>
  );
}

export default AddedItem;
