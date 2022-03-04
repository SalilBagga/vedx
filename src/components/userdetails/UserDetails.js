import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';
export default function UserDetails() {
  const context = useContext(UserContext);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(false);

  const handleLogin = () => {
    let temp = userName;
    if (temp) {
      temp = temp.trim();
      context.setUser(temp);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="border-1 w-[40vw] h-[40vh] mx-auto flex items-center mt-4 bg-light-green rounded-md">
      <div className="mx-auto flex flex-col text-white">
        <strong className="text-md">
          Enter UserName
          <input
            type="text"
            onChange={(e) => {
              let temp = e.target.value.trim();
              setUserName(temp);
            }}
            className="ml-4 border-1 text-black"
            required
          />
        </strong>
        {error && <span className="mt-4 text-red-500 text-sm ">Enter Valid username</span>}
        <div>
          <button
            onClick={handleLogin}
            className="mt-4 px-2 py-1 rounded-md  border-2 border-white "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
