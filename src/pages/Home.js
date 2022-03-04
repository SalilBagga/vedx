import React, { useContext } from 'react';

//components
import Header from '../components/header/Header';
import UserDetails from '../components/userdetails/UserDetails';
import Ideas from '../components/ideas/Ideas';
import { UserContext } from '../context/UserContext';

export default function Home() {
  const context = useContext(UserContext);

  return (
    <div>
      <Header />
      {context.user ? <Ideas /> : <UserDetails />}
    </div>
  );
}
