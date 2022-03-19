import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormDialogues from "./AddProperty";
import  AuthProvider  from "./contexts/AuthContext";

export default function Header() {
  
  
  
  
  
  return (
  <AuthProvider>
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
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
        <FormDialogues />
        <Signup />
        <Login/>
      </div>
    </div>
    
  </AuthProvider> );
 
}
