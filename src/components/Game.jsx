import React, { useState, useEffect } from "react";
import SlotMachine from "./SlotMachine";
import storyData from "./story.json";

const Game = ({ onGameOver }) => {
  const [sceneId, setSceneId] = useState("1");
  const [scene, setScene] = useState(storyData.scenes["1"]);
  const [money, setMoney] = useState(100);
  const [spent, setSpent] = useState(0); 
  const [isSpinning, setIsSpinning] = useState(false); // Control slot machine state

  useEffect(() => {
    setScene(storyData.scenes[sceneId]);

    if (scene.outcome === "win") {
      setTimeout(() => onGameOver("win"), 2000);
    } else if (scene.outcome === "escaped") {
      setTimeout(() => onGameOver("escaped"), 2000);
    } else if (scene.outcome === "lose") {
      setTimeout(() => onGameOver("lose"), 2000);
    }
  }, [sceneId, money, onGameOver]);

  useEffect(() => {
    if (money <= 0 ) {
      setSceneId("lose3"); // Move to final losing scene
    }
  }, [money, sceneId]);

  const handleChoice = (choice) => {
   

    if (choice.next === "3" || choice.next === "4" || choice.next === "5") {
      setIsSpinning(true); // Start spinning for relevant scenes
    } else {
      setSceneId(choice.next);
    }
  };

  const handleSlotResult = () => {
    setIsSpinning(false);

    // Apply money change after spinning stops
    if (scene.moneyChange) {
      setMoney((prev) => prev + scene.moneyChange);
      setSpent((prev) => prev - scene.moneyChange);
    }

    setSceneId(scene.choices.find((choice) => choice.text.includes("Play again"))?.next || "3");
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-end items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/public/background.png")' }}
    >
      {isSpinning && (
        <div
          className="absolute"
          style={{ bottom: "140px", right: "10%", transform: "translateY(-50%)" }}
        >
          <SlotMachine onResult={handleSlotResult} />
        </div>
      )}

      {!isSpinning && (
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
      )}
    </div>
  );
};

export default Game;
