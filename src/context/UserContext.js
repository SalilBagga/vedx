import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, ideas, setIdeas }}>
      {children}
    </UserContext.Provider>
  );
};
