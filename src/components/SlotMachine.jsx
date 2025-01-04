import React, { useState, useEffect } from "react";

const SlotMachine = ({ onResult }) => {
  const [slots, setSlots] = useState(["🍒", "🍋", "🍊"]);
  const [spinning, setSpinning] = useState(false);
  const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];

  useEffect(() => {
    setSpinning(true);

    const interval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const results = ["🍒", "🍋", "🍊"]; // Hardcoded non-matching result
      setSlots(results);
      setSpinning(false);
      onResult(results); // Notify parent component about the result
    }, 2000);

    return () => clearInterval(interval);
  }, [onResult]);

  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <div className="flex justify-center space-x-4 text-4xl mb-4">
        {slots.map((slot, index) => (
          <span key={index} className="transition-transform duration-300">
            {slot}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlotMachine;
