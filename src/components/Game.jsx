import React, { useState, useEffect } from "react";
import SlotMachine from "./SlotMachine";
import storyData from "./story.json";
import ResultPage from "./ResultPage";

const Game = ({ onGameOver }) => {
  const [sceneId, setSceneId] = useState("1");
  const [scene, setScene] = useState(storyData.scenes["1"]);
  const [money, setMoney] = useState(100);
  const [spent, setSpent] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false); // Controls the slot machine state
  const [resultMessage, setResultMessage] = useState(null); // Tracks the result message for win/lose/escaped outcomes

  // Update the scene when sceneId changes
  useEffect(() => {
    console.log("Current Scene ID:", sceneId);
    const newScene = storyData.scenes[sceneId];
    if (!newScene) {
      console.error("Invalid scene ID:", sceneId);
      return;
    }

    setScene(newScene);

    // Handle outcome conditions dynamically
    if (newScene.outcome === "win") {
      console.log("Outcome: Win");
      setResultMessage("You Win! You resisted temptation and walked away!");
    } else if (newScene.outcome === "lose") {
      console.log("Outcome: Lose All Money");
      setResultMessage(
        "You gamble at what cost? Everything... You go home to your family, feeling regretful."
      );
    } else if (newScene.outcome === "lose2") {
      console.log("Outcome: Lose Some Money");
      setResultMessage(
        "You leave the casino with your losses, feeling regretful."
      );
    } else if (newScene.outcome === "escaped") {
      console.log("Outcome: Escaped");
      setResultMessage(
        "You Escaped! You got caught in gambling, but you managed to leave."
      );
    }
  }, [sceneId]);

  // Handle slot machine scenes
  useEffect(() => {
    if (money <= 0) {
      console.log("Money depleted. Setting to Lose condition.");
      setSceneId("lose");
    }
  }, [money]);

  const handleChoice = (choice) => {
    console.log("Choice made:", choice);
    if (scene.requiresSlotMachine && choice.text.toLowerCase().includes("play")) {
      setIsSpinning(true);
    } else {
      setSceneId(choice.next);
    }
  };

  const handleSlotResult = () => {
    setTimeout(() => {
      setIsSpinning(false);

      if (scene.moneyChange) {
        setMoney((prev) => prev + scene.moneyChange);
        setSpent((prev) => prev - scene.moneyChange);
      }

      const nextSceneId =
        scene.choices.find((choice) =>
          choice.text.toLowerCase().includes("play again")
        )?.next || scene.choices[0]?.next;

      if (nextSceneId) {
        setSceneId(nextSceneId);
      } else {
        console.error("No valid next scene found!");
      }
    }, 2000);
  };

  // If a result message is set, render the ResultPage
  if (resultMessage) {
    console.log("Rendering ResultPage with message:", resultMessage);
    return (
      <ResultPage
        message={resultMessage}
        buttonText="Back to Menu"
        onButtonClick={() => onGameOver("menu")}
      />
    );
  }

  return (
    <div
      className="h-screen w-screen flex flex-col justify-end items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/public/background.png")' }}
    >
      {/* Slot Machine */}
      {isSpinning && (
        <div
          className="absolute"
          style={{ bottom: "140px", right: "10%", transform: "translateY(-50%)" }}
        >
          <SlotMachine onResult={handleSlotResult} />
        </div>
      )}

      {/* Text Box */}
      <div className="w-5/6 bg-gray-900 bg-opacity-75 text-white p-6 rounded-lg mb-4">
        <p className="mb-4 text-center">{scene.text.replace("[spent]", spent)}</p>
        <p className="text-center">Money: ${money}</p>

        {/* Choices */}
        {!isSpinning && (
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
        )}
      </div>
    </div>
  );
};

export default Game;
