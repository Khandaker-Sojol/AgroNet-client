import React, { useState } from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const authInfo = { loading, setLoading };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
