import React, { useState } from "react";
import Signup, {Signedup} from "./Signup";
import Signin from "./Signin";
import Signout from "./Signout";
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      console.log(JSON.stringify(user))
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

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
        {user? <Signout />:<Signin />  }
        {user?<AddProperty />: ""}
        <Signup/>
      </div>
    </div>
  );
}
