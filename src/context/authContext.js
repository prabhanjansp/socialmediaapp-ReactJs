import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import React from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("User")) || false
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "prabhanjan",
      profilepicture:
        "https://img.freepik.com/free-icon/important-person_318-10744.jpg?w=900&t=st=1687771953~exp=1687772553~hmac=5bb616f31d75b82b41277e6814ca2bc5ba38db073ee0a8305ec07a8ca0f51ed8",
    });
  };
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
