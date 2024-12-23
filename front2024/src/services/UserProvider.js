import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState("u1");
  const value = {
    userList: [
      { id: "u1", name: "vochomůrka" },
      { id: "u2", name: "křemílek" },
      { id: "u3", name: "guest" },
    ],
    loggedInUser,
    setLoggedInUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;