import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import FormDialogues from "./FormDialogue";

export default function Header() {
  return (
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
        <SearchIcon />
      </div>
      <div className="header_right">
        <FormDialogues />
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}
