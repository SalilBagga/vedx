import React, { useContext } from 'react';

//components
import Header from '../components/header/Header';
import UserDetails from '../components/userdetails/UserDetails';
import IdeaList from '../components/ideas/IdeaList';
import Ideas from '../components/ideas/Ideas';
import { UserContext } from '../context/UserContext';

export default function Home() {
  const context = useContext(UserContext);
  console.log(context.user);
  return (
    <div>
      <Header />
      {/* {context.user ? <Ideas /> : <UserDetails />} */}
      <Ideas />
    </div>
  );
}
