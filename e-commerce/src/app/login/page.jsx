"use client";
import React, { useState } from "react";
import { supabase } from "../lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      setEmail("");
      setPassword("");
      return;
    }

    if (data) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-900">
      <div className="relative bg-white shadow-lg border border-gray-300 rounded-lg p-8 w-96 transition-all duration-500">
        <h2 className="text-blue-600 text-2xl font-bold text-center">Login</h2>
        <br />
        {message && <p className="text-red-500 text-sm text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}