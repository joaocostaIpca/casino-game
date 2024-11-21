import React from "react";

const GameMenu = ({ onStart }) => {
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">The Gambling Trap</h1>
      <button
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
    </div>
  );
};

export default GameMenu;
