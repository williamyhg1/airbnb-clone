import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router";

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Your home away from home</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems.</h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
