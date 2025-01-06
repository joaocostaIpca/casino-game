import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0; // Initialize index to 0
    setDisplayedText(""); // Clear displayed text when `text` changes

    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete(); // Notify when typing is complete
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup on unmount or text change
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypingText;
