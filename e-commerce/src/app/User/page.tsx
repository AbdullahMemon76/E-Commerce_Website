"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase/client";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        return;
      } else {
        setUser(user);
      }

      const { data: details, error: detailsError } = await supabase
        .from("user_detail")
        .select("*")
        .eq("id", user.id)
        .single();

      if (detailsError) {
        console.error("Error fetching user details:", detailsError);
        return;
      } else {
        setUserDetail(details);
      }
    }

    getUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-96 text-center">
        <h1 className="text-2xl font-bold text-blue-500">User Profile</h1>
        {user ? (
          <div className="mt-4">
            <p><strong className="text-gray-700">Email:</strong> {user.email}</p>
            <p><strong className="text-gray-700">ID:</strong> {user.id}</p>
            {userDetail ? (
              <>
                <p><strong className="text-gray-700">Name:</strong> {userDetail.name}</p>
                <p><strong className="text-gray-700">Phone:</strong> {userDetail.phone}</p>
                <p><strong className="text-gray-700">Address:</strong> {userDetail.address}</p>
              </>
            ) : (
              <p className="text-gray-500">Loading user details...</p>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Loading user data...</p>
        )}
      </div>
    </div>
  );
}
