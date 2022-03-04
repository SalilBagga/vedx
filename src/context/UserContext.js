import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('idea-list'));
    if (savedList) {
      setIdeas(savedList);
    }
    const savedUser = JSON.parse(localStorage.getItem('idea-user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('idea-list', JSON.stringify(ideas));
    localStorage.setItem('idea-user', JSON.stringify(user));
  }, [ideas, user]);

  return (
    <UserContext.Provider value={{ user, setUser, ideas, setIdeas }}>
      {children}
    </UserContext.Provider>
  );
};
