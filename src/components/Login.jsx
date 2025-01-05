import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      onLogin(user);
    } catch (error) {
      console.error("Login error:", error); // Log the error to the console
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <button onClick={onSwitchToRegister} className="text-blue-500 underline">
          Register here
        </button>
      </p>
    </div>
  );
};

export default Login;