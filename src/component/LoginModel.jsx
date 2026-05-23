import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";

const LoginModal = ({
  open,
  onClose,
}) => {
  const { login } = useAuth();

  const [phone, setPhone] =
    useState("");

  const handleLogin = () => {
    if (!phone) {
      alert("Enter mobile number");
      return;
    }

    const customerData = {
      id: 1,
      name: "Rahul Sharma",
      phone,
      plan: "Monthly Plan",
    };

    login(customerData);

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl p-7">
        <h2 className="text-3xl font-black mb-2">
          Customer Login
        </h2>

        <p className="text-gray-500 mb-6">
          Continue to your tiffin account
        </p>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full border rounded-2xl p-4 mb-5"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold"
        >
          Login
        </button>

        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;