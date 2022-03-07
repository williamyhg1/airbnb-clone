import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";
import DATA from "./DATA";

function SearchPage() {
  const searchListings = DATA.searchListings.map((item, index) => (
    <SearchResult
      img={item.img}
      location={item.location}
      title={item.title}
      description={item.description}
      star={item.star}
      price={item.price}
      total={item.total}
      key={index}
    />
  ));
  return (
    <div className="searchPage">
      <p>32 stays · 22 April to 26 April · 2 guests</p>
      <h1>Stays nearby</h1>
      <div className="searchPage_info">
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {searchListings}
    </div>
  );
}

export default SearchPage;
