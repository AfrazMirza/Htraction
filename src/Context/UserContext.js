import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userName, setUserName] = useState('Guest');
  
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context easily
export const useUser = () => useContext(UserContext);
