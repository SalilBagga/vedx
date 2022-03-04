import React, { useState, useEffect, useContext } from 'react';

//components
import AddNewIdeas from './AddNewIdeas';
import IdeaList from './IdeaList';
import Filter from '../filter/Filter';

import { UserContext } from '../../context/UserContext';
export default function Ideas() {
  const context = useContext(UserContext);
  const [displayIdea, setDisplayIdea] = useState([]);
  const [option, setOption] = useState('');

  useEffect(() => {
    let temp = context.ideas;
    function filter(temp) {
      if (option === 'old') {
        setDisplayIdea(temp);
        console.log('old working');
      } else if (option === 'new') {
        temp = temp.reverse();
        setDisplayIdea(temp);
        console.log('new working');
      } else if (option === 'most') {
        temp = temp.sort((a, b) => (a.likes.length > b.likes.length ? 1 : -1));
        setDisplayIdea(temp);
        console.log('most working');
      } else if (option === 'least') {
        temp = temp.sort((a, b) => (a.likes.length < b.likes.length ? 1 : -1));
        setDisplayIdea(temp);
        console.log('least working');
      }
    }
    return filter(temp);
  }, [option, context.ideas]);

  return (
    <div className="w-[60vw] mx-auto  ">
      <AddNewIdeas />
      <Filter
        setDisplayIdea={setDisplayIdea}
        displayIdea={displayIdea}
        option={option}
        setOption={setOption}
      />
      <IdeaList setDisplayIdea={setDisplayIdea} displayIdea={displayIdea} />
    </div>
  );
}
