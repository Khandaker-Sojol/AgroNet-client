import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  //   const { loading } = use(AuthContext);

  //   if (loading) {
  //     return <Loader></Loader>;
  //   }
  return children;
};

export default PrivateRoute;
