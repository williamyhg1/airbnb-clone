import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_search">
        {showSearch && <Search />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="navbar_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="navbar_info">
        <h1>Your home away from home</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems.</h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Now
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
