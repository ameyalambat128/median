import { useMoralis } from "react-moralis";
import React, { useState } from "react";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(`Enter your Username: ${user.getUsername()}`);
    if (!username) return;
    setUserData({ username });
  };
  return (
    <div className="">
      <div className="text-sm absolute top-5 right-10">
        <button
          disabled={isUserUpdating}
          onClick={setUsername}
          className="text-black font-semibold rounded-lg border-2 bg-white border-white p-2  hover:shadow-lg hover:text-red-400"
        >
          Change your Username
        </button>
      </div>
    </div>
  );
};

export default ChangeUsername;
