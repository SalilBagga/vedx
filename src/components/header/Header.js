import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
function Header() {
  const context = useContext(UserContext);
  console.log(context.user);
  return (
    <div className="w-full h-15 border-b-1">
      <div className="flex p-4 justify-around">
        <div>
          <h1> Hack Ideas</h1>
        </div>
        <div>
          {context.user ? (
            <div className="flex">
              <button onClick={() => context.setUser(null)}>Logout</button>{' '}
              <h1 className="ml-4">{context.user}</h1>
            </div>
          ) : (
            <h1>Explore and add new ideas</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
