/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userSearched, setUserSearched] = useState(false);

  const setUser = (data) => {
    setUserData(data);
    setUserSearched(true);
  };

  return (
    <UserContext.Provider value={{ userData, setUser, userSearched }}>
      {children}
    </UserContext.Provider>
  );
};
