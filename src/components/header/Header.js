import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
function Header() {
  const context = useContext(UserContext);
  console.log(context.user);
  return (
    <div className="w-full h-15 border-b-1 bg-light-green mb-4 ">
      <div className="flex  pt-2 justify-around items-center">
        <div>
          <strong className="text-2xl text-white"> Hack Ideas</strong>
        </div>
        <div>
          {context.user ? (
            <div className="flex  items-center">
              <button
                className="border-2 px-2 py-1 text-white border-white rounded-md"
                onClick={() => context.setUser(null)}
              >
                Logout
              </button>
              <strong className="ml-4 text-2xl text-white">{context.user}</strong>
            </div>
          ) : (
            <strong className="text-2xl text-white">Explore and add new ideas</strong>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
