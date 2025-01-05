import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

const InsertName = ({ userId, onNameInserted }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }

    try {
      // Save name to Realtime Database
      await set(ref(db, 'users/' + userId), {
        name: name
      });

      onNameInserted();
    } catch (error) {
      console.error("Error saving name:", error);
      setError("Failed to save name. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Insert Your Name</h1>
      <form onSubmit={handleNameSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded text-black"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Name
        </button>
      </form>
    </div>
  );
};

export default InsertName;