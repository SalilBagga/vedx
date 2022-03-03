import React from 'react';

//components
import AddNewIdeas from './AddNewIdeas';

export default function IdeaList() {
  return (
    <div className="w-[60vw] mx-auto border-1">
      <div>
        <AddNewIdeas />
      </div>
    </div>
  );
}
