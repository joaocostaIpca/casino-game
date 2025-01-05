import React from "react";

const ResultPage = ({ message, buttonText, onButtonClick }) => {
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">{message}</h1>
      <button
        onClick={onButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ResultPage;
