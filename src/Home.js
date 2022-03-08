import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
// import Card from "./Card";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DATA from "./DATA";

const Home = () => {
  const allCategory = DATA.category.map((item, index) => (
    <Card sx={{ maxWidth: 425 }} className="card">
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={item.img}
        alt=""
      />
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
   
     <Card sx={{ maxWidth: 425}} className="card">
      <CardActionArea>
        <CardMedia
           component="img"
        height="300"
        image={item.img}
        alt=""
        />
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

  return (
    <div className="home">
      <Navbar />
      <div className="home_section">{allCategory}</div>
      <div className="home_section">{homeListings}</div>
    </div>
  );
};

export default Home;

