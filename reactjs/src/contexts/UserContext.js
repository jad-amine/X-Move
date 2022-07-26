import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, showDrawer, setShowDrawer }}>
      {children}
    </UserContext.Provider>
  );
};
