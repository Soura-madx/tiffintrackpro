// src/component/Navbar.jsx

import React, { useEffect, useState } from "react";

import {
  Menu,
  X,
  Rocket,
  User,
  LogOut,
  Bell,
  LayoutDashboard,
  UtensilsCrossed,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
const navigate = useNavigate();

const {
  customer,
  login,
  logout,
} = useAuth();

  const [isOpen, setIsOpen] =
    useState(false);

  // =========================
  // AUTH STATE
  // =========================

 

  const [showLogin, setShowLogin] =
    useState(false);

  const [phone, setPhone] =
    useState("");

  // =========================
  // LOAD AUTH
  // =========================

 

  // =========================
  // LOGIN
  // =========================

  const handleLogin = () => {
  if (!phone) {
    alert("Enter mobile number");
    return;
  }

  const demoCustomer = {
    id: 1,
    name: "Rahul Sharma",
    phone,
    email: "rahul@gmail.com",
    active_plan: "Monthly Premium",
    city: "Bilaspur",
  };

  login(demoCustomer);

  setShowLogin(false);

  setPhone("");
};
  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
  logout();

navigate("/");
  };

  // =========================
  // PUBLIC NAV LINKS
  // =========================

  const publicLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Plans",
      path: "/plans",
    },

    {
      name: "Menu",
      path: "/menu",
    },

    {
      name: "Features",
      path: "/features",
    },

    {
      name: "Testimonials",
      path: "/testimonials",
    },
  ];

  // =========================
  // CUSTOMER LINKS
  // =========================

  const customerLinks = [
    {
      name: "My Subscription",
      icon: LayoutDashboard,
      path: "/my-subscription",
    },

    {
      name: "Today's Meals",
      icon: UtensilsCrossed,
      path: "/today-meals",
    },

    {
      name: "Notifications",
      icon: Bell,
      path: "/notifications",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-orange-500 p-2.5 rounded-2xl">
                <Rocket className="text-white w-6 h-6" />
              </div>

              <div>
                <h1 className="text-2xl font-black text-white">
                  TiffinTrackPro
                </h1>

                <p className="text-xs text-gray-400">
                  Smart Tiffin Platform
                </p>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {/* BEFORE LOGIN */}
              {!customer &&
                publicLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() =>
                      navigate(link.path)
                    }
                    className="text-gray-300 hover:text-orange-400 transition font-medium"
                  >
                    {link.name}
                  </button>
                ))}

              {/* AFTER LOGIN */}
              {customer &&
                customerLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.name}
                      onClick={() =>
                        navigate(item.path)
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
                    >
                      <Icon size={18} />

                      <span>{item.name}</span>
                    </button>
                  );
                })}
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">
              {/* BEFORE LOGIN */}
              {!customer ? (
                <>
                  <button
                    onClick={() =>
                      navigate("/contact")
                    }
                    className="text-gray-300 hover:text-orange-400 font-medium"
                  >
                    Contact
                  </button>

                  <button
                    onClick={() =>
                      setShowLogin(true)
                    }
                    className="bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-2xl font-bold"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  {/* CUSTOMER INFO */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
                    <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
                      <User className="text-white w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-sm">
                        {customer.name}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {customer.active_plan}
                      </p>
                    </div>
                  </div>

                  {/* LOGOUT */}
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl font-bold"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="text-white"
              >
                {isOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#111111] border-t border-white/10 px-5 py-6">
            {/* BEFORE LOGIN */}
            {!customer && (
              <>
                <div className="space-y-3">
                  {publicLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        navigate(link.path);

                        setIsOpen(false);
                      }}
                      className="block w-full text-left text-white py-3"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setShowLogin(true);

                    setIsOpen(false);
                  }}
                  className="w-full mt-5 bg-orange-500 text-white py-4 rounded-2xl font-bold"
                >
                  Login
                </button>
              </>
            )}

            {/* AFTER LOGIN */}
            {customer && (
              <>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                      <User className="text-white" />
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {customer.name}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {customer.active_plan}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {customerLinks.map((item) => {
                    const Icon =
                      item.icon;

                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          navigate(item.path);

                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 text-white w-full py-3"
                      >
                        <Icon size={20} />

                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full mt-6 bg-red-500 text-white py-4 rounded-2xl font-bold"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* LOGIN MODAL */}
        {showLogin && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-md p-7">
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
                  setPhone(
                    e.target.value
                  )
                }
                className="w-full border rounded-2xl p-4 mb-5"
              />

              <button
                onClick={handleLogin}
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-bold"
              >
                Login
              </button>

              <button
                onClick={() =>
                  setShowLogin(false)
                }
                className="w-full mt-4 text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* AUTH BANNER */}
      {customer && (
        <div className="fixed top-20 left-0 w-full z-40 bg-orange-500 text-white py-2 px-4 text-center text-sm font-semibold">
          Welcome Back {customer.name} • Active Plan:
          {" "}
          {customer.active_plan}
        </div>
      )}
    </>
  );
};

export default Navbar;