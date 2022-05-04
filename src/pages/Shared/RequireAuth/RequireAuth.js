import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init';
import Loadding from "../Loadding/Loadding";

const RequireAuth = ({children}) => {
    const location = useLocation();
  const [user, loadding] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

  if(loadding){
      return <Loadding></Loadding>
  }
  if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
