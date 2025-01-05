import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";

const Register = ({ onRegister, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

    

      onRegister(user);
    } catch (error) {
      console.error("Registration error:", error); // Log the error to the console
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
      
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded text-black"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="text-blue-500 underline">
          Login here
        </button>
      </p>
    </div>
  );
};

export default Register;