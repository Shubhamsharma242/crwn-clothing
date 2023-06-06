import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const myName = (name1)=>{
    console.log(name1)
  };
  const value = { currentUser, setCurrentUser,myName };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
