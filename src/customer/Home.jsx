import React from "react";

import { useAuth } from "../context/AuthContext";

const CustomerHome = () => {
  const { customer } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* WELCOME */}
      <div className="bg-orange-500 text-white rounded-3xl p-8 mb-8">
        <h1 className="text-4xl font-black">
          Welcome Back,
          {customer?.name}
        </h1>

        <p className="mt-3 text-orange-100">
          Manage your meals,
          subscriptions and payments
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-bold">
            Active Plan
          </h3>

          <p className="text-3xl font-black mt-4">
            Monthly Plan
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-bold">
            Next Delivery
          </h3>

          <p className="text-3xl font-black mt-4">
            Today
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-bold">
            Pending Payment
          </h3>

          <p className="text-3xl font-black mt-4">
            ₹0
          </p>
        </div>
      </div>

      {/* TODAY MENU */}
      <div className="bg-white rounded-3xl p-8 shadow mt-8">
        <h2 className="text-3xl font-black mb-5">
          Today's Meals
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              Breakfast
            </h3>

            <p className="text-gray-500 mt-2">
              Poha + Tea
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              Lunch
            </h3>

            <p className="text-gray-500 mt-2">
              Dal, Rice, Roti, Sabji
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              Dinner
            </h3>

            <p className="text-gray-500 mt-2">
              Paneer + Chapati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;