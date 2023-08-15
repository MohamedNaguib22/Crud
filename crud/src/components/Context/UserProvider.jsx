import { createContext, useState } from "react";

/* eslint-disable react/prop-types */
export const User = createContext({});
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return <User.Provider value={{ auth, setAuth }}> {children} </User.Provider>;
};

export default UserProvider;
