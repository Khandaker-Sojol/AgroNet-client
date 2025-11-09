import React, { useState } from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const authInfo = { loading, setLoading, user, setUser };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
