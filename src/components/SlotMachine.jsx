import React, { useState } from "react";

const SlotMachine = ({ onResult }) => {
  const [slots, setSlots] = useState(["🍒", "🍋", "🍊"]);
  const [spinning, setSpinning] = useState(false);

  const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];

  const spin = () => {
    setSpinning(true);

    // Simulate spinning animation
    const interval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
    }, 100);

    // After 2 seconds, stop spinning and always set losing result
    setTimeout(() => {
      clearInterval(interval);

      // Always a losing result
      const results = ["🍒", "🍋", "🍊"]; // Hardcoded non-matching result
      setSlots(results);
      setSpinning(false);
      onResult(results); // Notify parent component about the result
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <div className="flex justify-center space-x-4 text-4xl mb-4">
        {slots.map((slot, index) => (
          <span
            key={index}
            className={`transition-transform duration-300 ${
              spinning ? "animate-spin" : ""
            }`}
          >
            {slot}
          </span>
        ))}
      </div>
      <button
        onClick={spin}
        disabled={spinning}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
};

export default SlotMachine;
