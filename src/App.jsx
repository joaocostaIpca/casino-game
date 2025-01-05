import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "./firebase";
import GameMenu from "./components/GameMenu";
import Game from "./components/Game";
import Login from "./components/Login";
import Register from "./components/Register";
import InsertName from "./components/InsertName";

const App = () => {
  const [gameState, setGameState] = useState("login"); // "login", "register", "insertName", "menu", "game", "gameOver", "talkToWife", "goToWork"
  const [gameResult, setGameResult] = useState("");
  const [money, setMoney] = useState(0);
  const [userId, setUserId] = useState(null);

  const handleLogin = (user) => {
    setUserId(user.uid);
    setGameState("insertName");
  };

  const handleRegister = (user) => {
    setUserId(user.uid);
    setGameState("login");
  };

  const handleNameInserted = () => {
    setGameState("menu");
  };

  const handleStartGame = () => setGameState("game");

  const handleGameOver = async (result, spentMoney) => {
    setGameResult(result);
    setMoney(spentMoney);
    setGameState("gameOver");

    // Save money to Realtime Database
    if (userId) {
      const userRef = ref(db, 'users/' + userId);
      await set(userRef, { money: spentMoney }, { merge: true });
    }
  };


  return (
    <div>
      {gameState === "login" && <Login onLogin={handleLogin} onSwitchToRegister={() => setGameState("register")} />}
      {gameState === "register" && <Register onRegister={handleRegister} onSwitchToLogin={() => setGameState("login")} />}
      {gameState === "insertName" && <InsertName userId={userId} onNameInserted={handleNameInserted} />}
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
      
    </div>
  );
};

export default App;