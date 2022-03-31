import React, {useState} from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

export default PrivateRoute;
