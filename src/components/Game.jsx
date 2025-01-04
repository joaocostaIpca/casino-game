import React, { useState, useEffect } from "react";
import SlotMachine from "./SlotMachine";
import storyData from "./story.json";

const Game = ({ onGameOver }) => {
  const [sceneId, setSceneId] = useState("1");
  const [scene, setScene] = useState(storyData.scenes["1"]);
  const [money, setMoney] = useState(100);
  const [spent, setSpent] = useState(0); // Track total money spent

  useEffect(() => {
    setScene(storyData.scenes[sceneId]);
  
    if (sceneId === "win1" || sceneId === "win2" || sceneId === "win3") {
      setTimeout(() => onGameOver("win"), 2000);
    } else if (sceneId === "lose2") {
      setTimeout(() => onGameOver("escaped"), 2000);
    } else if (sceneId === "lose3") {
      setTimeout(() => onGameOver("lose"), 2000);
    }
  }, [sceneId, money, onGameOver]);
  

  const handleChoice = (choice) => {
    const nextSceneId = choice.next;

    if (scene.moneyChange) {
      setMoney((prev) => prev + scene.moneyChange);
      setSpent((prev) => prev - scene.moneyChange); // Add spent money
    }

    setSceneId(nextSceneId);
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-end items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/public/background.png")' }}
    >
      {sceneId === "3" && (
        <div
          className="absolute"
          style={{ bottom: "140px", right: "10%", transform: "translateY(-50%)" }}
        >
          <SlotMachine
            onResult={() => handleChoice({ next: "3" })}
          />
        </div>
      )}

      <div
        className="w-5/6 bg-gray-900 bg-opacity-75 text-white p-6 rounded-lg mb-4"
      >
        <p className="mb-4 text-center">{scene.text.replace("[spent]", spent)}</p>
        <p className="text-center">Money: ${money}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {scene.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
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
