import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormDialogues from "./AddProperty";

export default function Header() {
  return (
  
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://pbs.twimg.com/media/Bsure9HIEAAZ48G?format=png&name=small"
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
        <Signin/>
      </div>
    </div>
     );
 
}
