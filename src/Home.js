import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DATA from "./DATA";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import db from "./firebase";

const Home = () => {
  const allCategory = DATA.category.map((item, index) => (
    <Card sx={{ maxWidth: 400 }} className="card" key={index}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={item.img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  const homeListings = DATA.homeListings.map((item, index) => (
    <Card sx={{ maxWidth: 400 }} className="card" key={index}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={item.img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  const [listings, setListings] = useState("");

  useEffect(() => {
    const ListingsRef = ref(db, "Listings");
    onValue(ListingsRef, (snapshot) => {
      const data = snapshot.val();
      setListings(data);
    });
  }, []);

  const addedListings = Object.entries(listings).map(([key, data]) => (
    <Card sx={{ maxWidth: 400 }} key={key}>
      {" "}
      <CardActionArea>
        <CardMedia component="img" height="300" image={data.img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${data.price}/week
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <div className="home">
      <Navbar />
      <div className="home_section">{allCategory}</div>
      <div className="home_section">{homeListings}</div>
      <div className="home_section">{addedListings}</div>
    </div>
  );
};

export default Home;
