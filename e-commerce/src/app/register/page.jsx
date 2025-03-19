"use client"
import React, { useState } from 'react'
import { supabase } from '../lib/supabase/client';
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User created successfully");
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative bg-white shadow-lg border border-gray-300 rounded-lg p-8 w-96 text-gray-900 transition-all duration-500">
        <h2 className="text-blue-500 text-2xl font-bold text-center">Register</h2>
        <br />
        {message && <p className="text-red-500 text-sm text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
