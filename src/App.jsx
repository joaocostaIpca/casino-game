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
