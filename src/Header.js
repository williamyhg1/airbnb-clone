import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Signout from "./Signout";
import Profile from "./Dashboard"
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddProperty from "./AddProperty";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState();

  
useEffect(() => {
 onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser();
    }
  });
}, []);

  

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://www.nicepng.com/png/full/60-606438_airbnb-bucketlist-logo.png"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="header_right">
        <Signin user={user} />
        <Signup user={user} />
        <AddProperty user={user} />
        <Signout user={user} />
        {!user ? (
        ""
      ) : (
        <Link to="/dashboard">
          <Avatar />
        </Link>
      )}
      </div>
    </div>
  );
}
