import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';
export default function UserDetails() {
  const context = useContext(UserContext);
  const [userName, setUserName] = useState(null);

  const handleLogin = () => {
    let temp = userName;

    if (temp) {
      temp = temp.replace(/\s+/g, '');
      context.setUser(temp);
    } else {
      console.log('ghjk');
    }
  };
  return (
    <div className="border-1 w-[40vw] h-[40vh] mx-auto flex items-center mt-4">
      <div className="mx-auto flex flex-col">
        <label>
          Enter UserName
          <input
            type="text"
            onChange={(e) => {
              let temp = e.target.value.trim();
              setUserName(temp);
            }}
            className="ml-4 border-1"
            required
          />
        </label>
        <button onClick={handleLogin} className="mt-4">
          Login
        </button>
      </div>
    </div>
  );
}
