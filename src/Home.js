import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DATA from "./DATA";
import AddedItems from "./AddedItems";

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

  return (
    <div className="home">
      <Navbar />
      <div className="home_section">{allCategory}</div>
      <div className="home_section"><AddedItems/></div>
    </div>
  );
};

export default Home;
