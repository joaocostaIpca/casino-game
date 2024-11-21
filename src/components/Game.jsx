import React, { useState } from "react";
import SlotMachine from "./SlotMachine";

const Game = ({ onGameOver }) => {
  const [story, setStory] = useState("You are drawn to a slot machine. What do you do?");
  const [choices, setChoices] = useState([
    { text: "Play the slot machine", action: "play" },
    { text: "Walk away", action: "leave" },
  ]);
  const [money, setMoney] = useState(100);

  const handleChoice = (action) => {
    if (action === "play") {
      setStory("You decide to play. Spin the slot machine!");
      setChoices([]);
    } else if (action === "leave") {
      setStory("You walked away from the machine. You feel relieved.");
      setChoices([]);
      setTimeout(() => onGameOver("win"), 2000);
    }
  };

  const handleSpinResult = () => {
    setStory("You lost the spin. Try again or walk away.");
    setMoney((prevMoney) => prevMoney - 20);

    if (money - 20 <= 0) {
      setTimeout(() => onGameOver("lose"), 2000);
    } else {
      setChoices([
        { text: "Play again", action: "play" },
        { text: "Walk away", action: "leave" },
      ]);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-end items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/public/background.png")' }} // Game background
    >
      {/* Slot Machine */}
      <div
        className="absolute"
        style={{ bottom: "140px", right: "10%", transform: "translateY(-50%)" }}
      >
        <SlotMachine onResult={handleSpinResult} />
      </div>

      {/* Text Box */}
      <div
        className="w-5/6  bg-gray-900 bg-opacity-75 text-white p-6 rounded-lg mb-4"
        style={{
          backgroundImage: 'url("/path-to-your-textbox-background.jpg")', // Text box background
          backgroundSize: "cover",
        }}
      >
        <p className="mb-4 text-center">{story}</p>
        <p className="text-center">Money: ${money}</p>

        {/* Choices */}
        <div className="flex justify-center space-x-4 mt-4">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice.action)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
