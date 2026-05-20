import React, { useState } from "react";

const OrderGeneration = () => {
  const [selectedDate, setSelectedDate] = useState("2026-05-10");

  const stats = [
    {
      title: "Total Meals",
      value: 182,
      color: "bg-black text-white",
    },
    {
      title: "Breakfast",
      value: 42,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Lunch",
      value: 80,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Dinner",
      value: 60,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Paused",
      value: 12,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Delivered",
      value: 95,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const comboStats = [
    {
      combo: "Lunch Only",
      count: 30,
    },
    {
      combo: "Dinner Only",
      count: 18,
    },
    {
      combo: "Lunch + Dinner",
      count: 22,
    },
    {
      combo: "Breakfast + Lunch",
      count: 8,
    },
    {
      combo: "Full Day Combo",
      count: 5,
    },
  ];

  const orders = [
    {
      id: "#ORD001",
      customer: "Rahul Sharma",
      plan: "Monthly",
      combo: "Lunch + Dinner",
      meals: 2,
      deliveryBoy: "Amit",
      status: "Preparing",
    },
    {
      id: "#ORD002",
      customer: "Priya Jain",
      plan: "Weekly",
      combo: "Lunch",
      meals: 1,
      deliveryBoy: "Rohit",
      status: "Ready",
    },
    {
      id: "#ORD003",
      customer: "Ankit Verma",
      plan: "Custom",
      combo: "Breakfast + Lunch + Dinner",
      meals: 3,
      deliveryBoy: "Vikas",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-black">
            Order Generation
          </h1>

          <p className="text-gray-500 mt-2">
            Generate & manage daily tiffin operations
          </p>
        </div>

        <div className="flex gap-3">

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(e.target.value)
            }
            className="border rounded-2xl px-4 py-3 bg-white shadow"
          />

          <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
            Generate Orders
          </button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">

        {stats.map((item, i) => (
          <div
            key={i}
            className={`rounded-3xl p-5 shadow-lg ${item.color}`}
          >
            <p className="text-sm font-medium opacity-80">
              {item.title}
            </p>

            <h2 className="text-3xl font-black mt-2">
              {item.value}
            </h2>
          </div>
        ))}

      </div>

      {/* COMBO STATS */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

        <h2 className="text-xl font-bold mb-5">
          Combo Wise Orders
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

          {comboStats.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl px-4 py-5"
            >
              <p className="font-medium text-gray-600">
                {item.combo}
              </p>

              <h3 className="text-3xl font-black mt-2">
                {item.count}
              </h3>
            </div>
          ))}

        </div>

      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-3xl shadow-lg p-5 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Customer */}
          <input
            type="text"
            placeholder="Search Customer"
            className="border rounded-2xl px-4 py-3"
          />

          {/* Plan */}
          <select className="border rounded-2xl px-4 py-3">
            <option>All Plans</option>
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Custom</option>
          </select>

          {/* Meals */}
          <select className="border rounded-2xl px-4 py-3">
            <option>All Meals</option>
            <option>1 Meal</option>
            <option>2 Meals</option>
            <option>3 Meals</option>
          </select>

          {/* Delivery Boy */}
          <select className="border rounded-2xl px-4 py-3">
            <option>All Delivery Boys</option>
            <option>Amit</option>
            <option>Rohit</option>
            <option>Vikas</option>
          </select>

          {/* Status */}
          <select className="border rounded-2xl px-4 py-3">
            <option>All Status</option>
            <option>Preparing</option>
            <option>Ready</option>
            <option>Delivered</option>
          </select>

        </div>

      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* TOP */}
        <div className="p-6 border-b flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h2 className="text-2xl font-black">
              Today's Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Complete operational order list
            </p>
          </div>

          <div className="flex gap-3">

            <button className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold">
              Assign Delivery
            </button>

            <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold">
              Print Kitchen Sheet
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="bg-gray-50">

              <tr className="text-left text-sm text-gray-500">

                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Combo</th>
                <th className="p-4">Meals</th>
                <th className="p-4">Delivery Boy</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-gray-50"
                >

                  {/* Order ID */}
                  <td className="p-4 font-bold">
                    {order.id}
                  </td>

                  {/* Customer */}
                  <td className="p-4">
                    {order.customer}
                  </td>

                  {/* Plan */}
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-xs font-bold">
                      {order.plan}
                    </span>
                  </td>

                  {/* Combo */}
                  <td className="p-4 font-medium">
                    {order.combo}
                  </td>

                  {/* Meals */}
                  <td className="p-4">

                    <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs font-bold">
                      {order.meals} Meals
                    </span>

                  </td>

                  {/* Delivery Boy */}
                  <td className="p-4">
                    {order.deliveryBoy}
                  </td>

                  {/* Status */}
                  <td className="p-4">

                    <span
                      className={`px-3 py-2 rounded-full text-xs font-bold ${
                        order.status === "Preparing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Ready"
                          ? "bg-green-100 text-green-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {order.status}
                      
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="p-4">

                    <div className="flex gap-2">

                      <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200">
                        View
                      </button>

                      <button className="bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold">
                        Update
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default OrderGeneration;