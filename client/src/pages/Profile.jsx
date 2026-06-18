// src/pages/Profile.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, deleteAccount } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "This will permanently delete your account and all your notes. Continue?"
    );
    if (!confirmed) return;

    setLoading(true);
    try {
      await deleteAccount();
      navigate("/register");
    } catch {
      setError("Failed to delete account. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Profile</h1>

      <div className="mb-6 space-y-2 rounded-lg border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-500">Name</p>
        <p className="text-gray-800">{user?.name}</p>
        <p className="mt-3 text-sm text-gray-500">Email</p>
        <p className="text-gray-800">{user?.email}</p>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <button
        onClick={handleDelete}
        disabled={loading}
        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? "Deleting..." : "Delete Account"}
      </button>
    </div>
  );
};

export default Profile;