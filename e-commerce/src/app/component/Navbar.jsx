"use client";
import Link from 'next/link';
import { supabase } from "../lib/supabase/client";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const Router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    Router.push("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-sky-300 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          My Store
        </Link>
        <div className="flex gap-6">
          <Link href="/dashboard" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/addproduct" className="text-white hover:text-gray-200 transition">
            Add Product
          </Link>
          <Link href="/card" className="text-white hover:text-gray-200 transition">
            Cart
          </Link>
          <button 
            onClick={handleLogout} 
            className="text-white hover:text-gray-200 transition"
          >
            Logout
          </button>
          <Link href="/User" className="text-white hover:text-gray-200 transition">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
