// src/pages/PaymentGateway.jsx

import React, { useState } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Wallet,
  BadgeCheck,
  Lock,
} from "lucide-react";

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const [form, setForm] = useState({
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul@gmail.com",

    plan: "Monthly Plan",
    combo: "Lunch + Dinner",

    amount: 4500,

    upi: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = () => {
    alert(
      `Payment Successful\n\n₹${form.amount} Paid Successfully`
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-8">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-8">

        {/* LEFT */}
        <div className="space-y-8">

          {/* HEADER */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <button className="flex items-center gap-2 text-gray-500 mb-6 hover:text-black transition">

              <ArrowLeft className="w-4 h-4" />

              Back

            </button>

            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-4xl font-black text-gray-900">
                  Complete Payment
                </h1>

                <p className="text-gray-500 mt-2 text-lg">
                  Secure payment for your tiffin subscription
                </p>
              </div>

              <div className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-bold flex items-center gap-2">

                <ShieldCheck className="w-5 h-5" />

                100% Secure

              </div>

            </div>

          </div>

          {/* CUSTOMER DETAILS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-black mb-6">
              Customer Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                value={form.name}
                placeholder="Full Name"
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                value={form.phone}
                placeholder="Phone Number"
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                value={form.email}
                placeholder="Email Address"
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-orange-500 md:col-span-2"
              />

            </div>

          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-black mb-6">
              Select Payment Method
            </h2>

            {/* METHODS */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">

              <button
                onClick={() =>
                  setPaymentMethod("upi")
                }
                className={`rounded-2xl border p-5 flex flex-col items-center justify-center transition ${
                  paymentMethod === "upi"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >

                <Smartphone className="w-8 h-8 mb-3" />

                <span className="font-bold">
                  UPI
                </span>

              </button>

              <button
                onClick={() =>
                  setPaymentMethod("card")
                }
                className={`rounded-2xl border p-5 flex flex-col items-center justify-center transition ${
                  paymentMethod === "card"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >

                <CreditCard className="w-8 h-8 mb-3" />

                <span className="font-bold">
                  Card
                </span>

              </button>

              <button
                onClick={() =>
                  setPaymentMethod("wallet")
                }
                className={`rounded-2xl border p-5 flex flex-col items-center justify-center transition ${
                  paymentMethod === "wallet"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >

                <Wallet className="w-8 h-8 mb-3" />

                <span className="font-bold">
                  Wallet
                </span>

              </button>

            </div>

            {/* UPI */}
            {paymentMethod === "upi" && (
              <div>

                <label className="text-sm font-bold text-gray-600">
                  UPI ID
                </label>

                <input
                  type="text"
                  placeholder="example@upi"
                  className="w-full border border-gray-200 rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                />

              </div>
            )}

            {/* CARD */}
            {paymentMethod === "card" && (
              <div className="space-y-5">

                <div>

                  <label className="text-sm font-bold text-gray-600">
                    Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-200 rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                  />

                </div>

                <div className="grid grid-cols-2 gap-5">

                  <div>

                    <label className="text-sm font-bold text-gray-600">
                      Expiry
                    </label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-200 rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-bold text-gray-600">
                      CVV
                    </label>

                    <input
                      type="password"
                      placeholder="***"
                      className="w-full border border-gray-200 rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    />

                  </div>

                </div>

              </div>
            )}

            {/* WALLET */}
            {paymentMethod === "wallet" && (
              <div className="grid md:grid-cols-3 gap-4">

                {[
                  "PhonePe",
                  "Google Pay",
                  "Paytm",
                ].map((wallet) => (
                  <button
                    key={wallet}
                    className="border border-gray-200 rounded-2xl p-5 font-bold hover:border-orange-500 hover:bg-orange-50 transition"
                  >
                    {wallet}
                  </button>
                ))}

              </div>
            )}

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-8">

            <h2 className="text-2xl font-black mb-6">
              Order Summary
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Plan
                </span>

                <span className="font-bold">
                  {form.plan}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Combo
                </span>

                <span className="font-bold">
                  {form.combo}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Duration
                </span>

                <span className="font-bold">
                  30 Days
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Meals
                </span>

                <span className="font-bold">
                  60 Meals
                </span>

              </div>

              <div className="border-t pt-5 flex justify-between items-center">

                <span className="text-lg font-bold">
                  Total Amount
                </span>

                <span className="text-4xl font-black text-orange-500">
                  ₹{form.amount}
                </span>

              </div>

            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={handlePayment}
              className="w-full mt-8 bg-black hover:bg-orange-500 transition-all text-white py-5 rounded-2xl text-lg font-black flex items-center justify-center gap-3"
            >

              <Lock className="w-5 h-5" />

              Pay Securely

            </button>

            {/* FEATURES */}
            <div className="mt-8 space-y-4">

              {[
                "Secure SSL Encrypted Payment",
                "Instant Subscription Activation",
                "Payment Receipt on WhatsApp",
                "24×7 Support Available",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >

                  <BadgeCheck className="w-5 h-5 text-green-500" />

                  {item}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PaymentGateway;