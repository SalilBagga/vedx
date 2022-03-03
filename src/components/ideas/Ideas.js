import React from 'react';

//components
import AddNewIdeas from './AddNewIdeas';
import IdeaList from './IdeaList';

export default function Ideas() {
  return (
    <div className="w-[60vw] mx-auto  ">
      <AddNewIdeas />
      <IdeaList />
    </div>
  );
}
