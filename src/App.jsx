import React, { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import GameMenu from "./components/GameMenu";
import Game from "./components/Game";
import Login from "./components/Login";

const App = () => {
  const [gameState, setGameState] = useState("login"); // "login", "register", "menu", "game", "gameOver", "talkToWife", "goToWork"
  const [gameResult, setGameResult] = useState("");
  const [money, setMoney] = useState(0);

  const handleLogin = () => setGameState("menu");
  const handleRegister = () => setGameState("login");
  const handleStartGame = () => setGameState("game");

  const handleGameOver = async (result, spentMoney) => {
    setGameResult(result);
    setMoney(spentMoney);
    setGameState("gameOver");

    // Save money to Firestore
    const userDoc = doc(db, "users", "user1"); // Replace "user1" with the actual user ID
    await setDoc(userDoc, { money: spentMoney }, { merge: true });
  };

  const handleTalkToWife = () => setGameState("talkToWife");
  const handleGoToWork = () => setGameState("goToWork");

  return (
    <div>
      {gameState === "login" && <Login onLogin={handleLogin} onSwitchToRegister={() => setGameState("register")} />}
      {gameState === "register" && <Register onRegister={handleRegister} onSwitchToLogin={() => setGameState("login")} />}
      {gameState === "menu" && <GameMenu onStart={handleStartGame} />}
      {gameState === "game" && <Game onGameOver={handleGameOver} />}
      {gameState === "gameOver" && (
        <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-8">
            {gameResult === "win" && "You win, and you didn’t lose anything."}
            {gameResult === "escaped" && "Well, you got caught in gambling, but you escaped successfully."}
            {gameResult === "lose" && `You lost everything at the price of $${money}.`}
          </h1>
          <button
            onClick={() => setGameState("menu")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Menu
          </button>
        </div>
      )}
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