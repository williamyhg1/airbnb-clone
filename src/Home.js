import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Card from "./Card";
import { Link } from "react-router-dom";
import DATA from "./DATA";

const Home = () => {
  const allCategory = DATA.category.map((item, index) => (
    <Link to="/search">
    <Card
      src={item.img}
      title={item.title}
      description={item.description}
      key={index}
    />
    </Link>
  ));

  const homeListings = DATA.homeListings.map((item, index) => (
    <Link to="/search">
    <Card
      src={item.img}
      title={item.title}
      description={item.description}
      price={item.price}
      key={index}
    />
    </Link>
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
