import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  // Function to update user data
  const updateUser = (userData) => {
    SetUser(userData);
  };

  // Function to clear user data(eg. , on logout)
  const clearUser = () => {
    SetUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
