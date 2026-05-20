import React, { useState } from "react";
import {
  Bike,
  PackageCheck,
  Clock3,
  MapPin,
  Phone,
  Bell,
  User,
  Wallet,
  CheckCircle2,
  AlertCircle,
  TimerReset,
  ScanLine,
  Route,
} from "lucide-react";

const DeliveryBoyPanel = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // =========================
  // DUMMY DELIVERY BOY
  // =========================

  const deliveryBoy = {
    name: "Rakesh Verma",
    phone: "9876543210",
    assignedAreas: ["Palasia", "Vijay Nagar", "Bhawarkua"],
    todayOrders: 18,
    completed: 11,
    pending: 5,
    failed: 2,
    earnings: 850,
  };

  // =========================
  // DUMMY ORDERS
  // =========================

  const orders = [
    {
      id: "#ORD001",
      customer: "Rahul Sharma",
      phone: "9999999999",
      address: "Palasia Square, Indore",
      area: "Palasia",
      meal: "Lunch",
      status: "out_for_delivery",
      payment: "Paid",
      deliveryTime: "12:30 PM",
    },
    {
      id: "#ORD002",
      customer: "Priya Jain",
      phone: "8888888888",
      address: "Near C21 Mall, Vijay Nagar",
      area: "Vijay Nagar",
      meal: "Dinner",
      status: "pending_pickup",
      payment: "COD",
      deliveryTime: "7:00 PM",
    },
    {
      id: "#ORD003",
      customer: "Amit Patel",
      phone: "7777777777",
      address: "Bhawarkua Main Road",
      area: "Bhawarkua",
      meal: "Lunch",
      status: "delivered",
      payment: "Paid",
      deliveryTime: "1:15 PM",
    },
  ];

  // =========================
  // STATUS COLORS
  // =========================

  const getStatusStyle = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";

      case "out_for_delivery":
        return "bg-blue-100 text-blue-700";

      case "pending_pickup":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* ================= HEADER ================= */}

      <div className="bg-white border-b sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Delivery Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back, {deliveryBoy.name}
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="relative bg-gray-100 p-3 rounded-2xl">

              <Bell className="w-5 h-5 text-gray-700" />

              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

            </button>

            <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-2xl border border-orange-100">

              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black">
                R
              </div>

              <div>
                <h4 className="font-bold text-sm">
                  {deliveryBoy.name}
                </h4>

                <p className="text-xs text-gray-500">
                  Delivery Executive
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ================= STATS ================= */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  Today's Orders
                </p>

                <h2 className="text-4xl font-black mt-2">
                  {deliveryBoy.todayOrders}
                </h2>
              </div>

              <div className="bg-blue-100 p-4 rounded-2xl">
                <Bike className="w-7 h-7 text-blue-600" />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  Delivered
                </p>

                <h2 className="text-4xl font-black mt-2 text-green-600">
                  {deliveryBoy.completed}
                </h2>
              </div>

              <div className="bg-green-100 p-4 rounded-2xl">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  Pending
                </p>

                <h2 className="text-4xl font-black mt-2 text-orange-500">
                  {deliveryBoy.pending}
                </h2>
              </div>

              <div className="bg-orange-100 p-4 rounded-2xl">
                <Clock3 className="w-7 h-7 text-orange-500" />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  Today's Earnings
                </p>

                <h2 className="text-4xl font-black mt-2">
                  ₹{deliveryBoy.earnings}
                </h2>
              </div>

              <div className="bg-purple-100 p-4 rounded-2xl">
                <Wallet className="w-7 h-7 text-purple-600" />
              </div>

            </div>

          </div>

        </div>

        {/* ================= TABS ================= */}

        <div className="flex gap-3 mb-8 overflow-auto">

          {[
            "orders",
            "areas",
            "attendance",
            "profile",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-2xl font-bold capitalize whitespace-nowrap ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* ================= ORDERS ================= */}

        {activeTab === "orders" && (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                  {/* LEFT */}
                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-4">

                      <h3 className="text-2xl font-black">
                        {order.id}
                      </h3>

                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status.replaceAll("_", " ")}
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <div className="space-y-3">

                        <div className="flex items-center gap-3">

                          <User className="w-5 h-5 text-orange-500" />

                          <span className="font-semibold">
                            {order.customer}
                          </span>

                        </div>

                        <div className="flex items-center gap-3">

                          <Phone className="w-5 h-5 text-blue-500" />

                          <span>{order.phone}</span>

                        </div>

                        <div className="flex items-start gap-3">

                          <MapPin className="w-5 h-5 text-red-500 mt-1" />

                          <span>{order.address}</span>

                        </div>

                      </div>

                      <div className="space-y-3">

                        <div className="flex items-center gap-3">

                          <PackageCheck className="w-5 h-5 text-green-500" />

                          <span>
                            Meal: {order.meal}
                          </span>

                        </div>

                        <div className="flex items-center gap-3">

                          <Clock3 className="w-5 h-5 text-purple-500" />

                          <span>
                            Delivery Time:{" "}
                            {order.deliveryTime}
                          </span>

                        </div>

                        <div className="flex items-center gap-3">

                          <Wallet className="w-5 h-5 text-yellow-500" />

                          <span>
                            Payment: {order.payment}
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col gap-3 w-full lg:w-64">

                    <button className="bg-black hover:bg-gray-900 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <Route className="w-5 h-5" />
                      Start Delivery
                    </button>

                    <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Mark Delivered
                    </button>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <TimerReset className="w-5 h-5" />
                      Reattempt
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Failed Delivery
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* ================= AREAS ================= */}

        {activeTab === "areas" && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-black mb-6">
              Assigned Areas
            </h2>

            <div className="flex flex-wrap gap-4">

              {deliveryBoy.assignedAreas.map((area) => (
                <div
                  key={area}
                  className="bg-orange-50 border border-orange-100 px-6 py-4 rounded-2xl flex items-center gap-3"
                >

                  <MapPin className="w-5 h-5 text-orange-500" />

                  <span className="font-bold text-gray-800">
                    {area}
                  </span>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= ATTENDANCE ================= */}

        {activeTab === "attendance" && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-black">
                  Attendance & Shift
                </h2>

                <p className="text-gray-500 mt-1">
                  Mark your today's attendance
                </p>
              </div>

              <button className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold">
                Mark Present
              </button>

            </div>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="bg-gray-50 rounded-2xl p-6">

                <p className="text-gray-500">
                  Check-In Time
                </p>

                <h3 className="text-3xl font-black mt-3">
                  10:00 AM
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6">

                <p className="text-gray-500">
                  Orders Delivered
                </p>

                <h3 className="text-3xl font-black mt-3">
                  11
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6">

                <p className="text-gray-500">
                  Current Shift
                </p>

                <h3 className="text-3xl font-black mt-3">
                  Lunch Shift
                </h3>

              </div>

            </div>

          </div>
        )}

        {/* ================= PROFILE ================= */}

        {activeTab === "profile" && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <div className="flex flex-col md:flex-row gap-8">

              <div className="w-36 h-36 rounded-3xl bg-orange-500 text-white flex items-center justify-center text-5xl font-black">
                R
              </div>

              <div className="flex-1">

                <h2 className="text-4xl font-black">
                  {deliveryBoy.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Delivery Executive
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-8">

                  <div className="bg-gray-50 rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Mobile Number
                    </p>

                    <h4 className="font-bold text-lg mt-2">
                      {deliveryBoy.phone}
                    </h4>

                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Assigned Areas
                    </p>

                    <h4 className="font-bold text-lg mt-2">
                      {deliveryBoy.assignedAreas.length} Areas
                    </h4>

                  </div>

                </div>

                <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default DeliveryBoyPanel;