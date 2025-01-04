import React, { useState } from "react";
import GameMenu from "./components/GameMenu";
import Game from "./components/Game";
import Login from "./components/Login";

const App = () => {
  const [gameState, setGameState] = useState("login"); // "login", "menu", "game", "gameOver", "home", "talkToWife", "goToWork"
  const [gameResult, setGameResult] = useState("");

  const handleLogin = () => setGameState("menu");
  const handleStartGame = () => setGameState("game");
  const handleGoHome = () => setGameState("home");

  const handleGameOver = (result) => {
    setGameResult(result);
    setGameState("gameOver");
  };

  const handleTalkToWife = () => setGameState("talkToWife");
  const handleGoToWork = () => setGameState("goToWork");

  return (
    <div>
      {gameState === "login" && <Login onLogin={handleLogin} />}
      {gameState === "menu" && <GameMenu onStart={handleStartGame} onGoHome={handleGoHome} />}
      {gameState === "game" && <Game onGameOver={handleGameOver} />}
      {gameState === "gameOver" && (
        <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-8">
            {gameResult === "win" && "You win, and you didn’t lose anything."}
            {gameResult === "escaped" && "Well, you got caught in gambling, but you escaped successfully."}
            {gameResult === "lose" && `You lost everything at the price of $${gameSpent}.`}
          </h1>
          <button
            onClick={() => setGameState("menu")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Menu
          </button>
        </div>
      )}
      {gameState === "home" && <Home onTalkToWife={handleTalkToWife} onGoToWork={handleGoToWork} />}
      {gameState === "talkToWife" && (
        <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-8">You talked to your wife. She is happy to see you home.</h1>
          <button
            onClick={() => setGameState("menu")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Menu
          </button>
        </div>
      )}
      {gameState === "goToWork" && (
        <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-8">You went to work. You earned some money and your wife is happy.</h1>
          <button
            onClick={() => setGameState("menu")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default App;