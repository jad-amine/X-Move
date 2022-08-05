import React, { useState, createContext } from "react";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [applicationData, setApplicationData] = useState();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{ applicationData, setApplicationData, showDrawer, setShowDrawer }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
