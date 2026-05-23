// src/pages/SuperAdminDashboard.jsx

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Store,
  Truck,
  IndianRupee,
  ClipboardList,
  Bell,
  Search,
  Menu,
  X,
  ShieldCheck,
  UserCog,
  Building2,
  MapPinned,
  TrendingUp,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import TrialRequests from "../SuperAdminComponent/TrailRequest";
import Subscription from "../SuperAdminComponent/SaasRequest";

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // =========================
  // SIDEBAR MENUS
  // =========================

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "tenants",
      label: "Tiffin Centers",
      icon: Store,
    },
    {
      id: "customers",
      label: "Customers",
      icon: Users,
    },
    {
      id: "delivery",
      label: "Delivery Boys",
      icon: Truck,
    },
    {
      id: "subscriptions",
      label: "Subscriptions",
      icon: ClipboardList,
    },
    {
      id: "saasrequest",
      label: "Saas Request",
      icon: ClipboardList,
    },

    
    {
      id: "cities",
      label: "Cities & Areas",
      icon: MapPinned,
    },
    {
      id: "finance",
      label: "Revenue",
      icon: IndianRupee,
    },
    {
      id: "admins",
      label: "Admins",
      icon: UserCog,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "tenant_requests",
      label: "Tenant Requests",
      icon: ClipboardList,
    },
  ];

  // =========================
  // DUMMY DATA
  // =========================

  const tenants = [
    {
      id: 1,
      name: "Sharma Ji Kitchen",
      city: "Indore",
      owner: "Rajesh Sharma",
      plan: "Premium",
      status: "active",
    },
    {
      id: 2,
      name: "Maa Ka Swad",
      city: "Bhopal",
      owner: "Priya Jain",
      plan: "Basic",
      status: "pending",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Rahul Verma",
      city: "Indore",
      active_plan: "Monthly Lunch",
    },
    {
      id: 2,
      name: "Neha Sharma",
      city: "Bhopal",
      active_plan: "Dinner Combo",
    },
  ];

  return (
    <div className="flex h-full bg-[#f5f7fb] overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`bg-black text-white transition-all duration-300 ${
          sidebarOpen ? "w-[280px]" : "w-[90px]"
        }`}
      >
        {/* LOGO */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          {sidebarOpen && (
            <div>
              <h1 className="text-2xl font-black text-orange-500">TiffinCRM</h1>

              <p className="text-xs text-gray-400">Super Admin Panel</p>
            </div>
          )}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MENUS */}
        <div className="p-4 space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <button
                key={menu.id}
                onClick={() => setActiveTab(menu.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                  activeTab === menu.id
                    ? "bg-orange-500 text-white"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon size={22} />

                {sidebarOpen && (
                  <span className="font-semibold">{menu.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 overflow-auto">
        {/* TOPBAR */}
        <div className="bg-white h-20 border-b px-8 flex items-center justify-between sticky top-0 z-20">
          {/* SEARCH */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-5 py-3 w-[400px]">
            <Search className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Search tenants, customers..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <button className="relative">
              <Bell />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                4
              </span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                A
              </div>

              <div>
                <h4 className="font-bold">Admin</h4>

                <p className="text-xs text-gray-500">Super Administrator</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <>
              {/* STATS */}
              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-gray-500 text-sm">Total Tenants</p>

                      <h2 className="text-4xl font-black mt-2">48</h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center">
                      <Store />
                    </div>
                  </div>

                  <p className="text-green-500 text-sm font-semibold">
                    +12% This Month
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-gray-500 text-sm">Customers</p>

                      <h2 className="text-4xl font-black mt-2">2,845</h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center">
                      <Users />
                    </div>
                  </div>

                  <p className="text-green-500 text-sm font-semibold">
                    +20% Growth
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-gray-500 text-sm">Delivery Boys</p>

                      <h2 className="text-4xl font-black mt-2">112</h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center">
                      <Truck />
                    </div>
                  </div>

                  <p className="text-green-500 text-sm font-semibold">
                    Active Across Cities
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-gray-500 text-sm">Monthly Revenue</p>

                      <h2 className="text-4xl font-black mt-2">₹2.4L</h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-500 flex items-center justify-center">
                      <IndianRupee />
                    </div>
                  </div>

                  <p className="text-green-500 text-sm font-semibold">
                    +18% Revenue
                  </p>
                </div>
              </div>

              {/* TABLES */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* TENANTS */}
                <div className="bg-white rounded-3xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-black">Tiffin Centers</h2>

                    <button className="text-orange-500 font-bold">
                      View All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {tenants.map((tenant) => (
                      <div
                        key={tenant.id}
                        className="border rounded-2xl p-5 flex justify-between items-center"
                      >
                        <div>
                          <h3 className="font-bold text-lg">{tenant.name}</h3>

                          <p className="text-sm text-gray-500">
                            {tenant.city} • {tenant.owner}
                          </p>
                        </div>

                        <div className="text-right">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-bold ${
                              tenant.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {tenant.status}
                          </span>

                          <p className="text-sm mt-2 font-semibold">
                            {tenant.plan}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CUSTOMERS */}
                <div className="bg-white rounded-3xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-black">Active Customers</h2>

                    <button className="text-orange-500 font-bold">
                      View All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {customers.map((customer) => (
                      <div
                        key={customer.id}
                        className="border rounded-2xl p-5 flex justify-between items-center"
                      >
                        <div>
                          <h3 className="font-bold text-lg">{customer.name}</h3>

                          <p className="text-sm text-gray-500">
                            {customer.city}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">
                            {customer.active_plan}
                          </p>

                          <button className="text-orange-500 text-sm font-bold mt-2">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TENANT FREE TRIAL REQUESTS */}
          {activeTab === "tenant_requests" && (
            

            <TrialRequests/>
          )}
          {activeTab === "saasrequest" && (
            

            <Subscription/>
          )}

          {/* SUBSCRIPTIONS TAB */}
          {activeTab === "subscriptions" && (
            <div className="space-y-8">
              {/* TOP STATS */}
              <div className="grid grid-cols-5 gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm border">
                  <p className="text-gray-500 text-sm font-medium">
                    Total Tenants
                  </p>

                  <h2 className="text-4xl font-black mt-3">148</h2>
                </div>

                <div className="bg-orange-50 rounded-3xl p-6 shadow-sm border border-orange-100">
                  <p className="text-orange-600 text-sm font-medium">
                    Active Trials
                  </p>

                  <h2 className="text-4xl font-black mt-3 text-orange-600">
                    42
                  </h2>
                </div>

                <div className="bg-red-50 rounded-3xl p-6 shadow-sm border border-red-100">
                  <p className="text-red-600 text-sm font-medium">
                    Trial Ending Soon
                  </p>

                  <h2 className="text-4xl font-black mt-3 text-red-600">11</h2>
                </div>

                <div className="bg-green-50 rounded-3xl p-6 shadow-sm border border-green-100">
                  <p className="text-green-600 text-sm font-medium">
                    Paid Tenants
                  </p>

                  <h2 className="text-4xl font-black mt-3 text-green-600">
                    26
                  </h2>
                </div>

                <div className="bg-blue-50 rounded-3xl p-6 shadow-sm border border-blue-100">
                  <p className="text-blue-600 text-sm font-medium">Revenue</p>

                  <h2 className="text-4xl font-black mt-3 text-blue-600">
                    ₹1.42L
                  </h2>
                </div>
              </div>

              {/* SUBSCRIPTION TABLE */}
              <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
                {/* HEADER */}
                <div className="p-6 border-b flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-black">
                      Subscription Management
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Manage trials, renewals and paid plans
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-black text-white px-5 py-3 rounded-2xl font-bold">
                      Export Data
                    </button>

                    <button className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-bold">
                      Add Tenant
                    </button>
                  </div>
                </div>

                {/* FILTERS */}
                <div className="p-6 border-b bg-gray-50 flex gap-4">
                  <input
                    type="text"
                    placeholder="Search tenant..."
                    className="border rounded-2xl px-5 py-3 w-80 bg-white"
                  />

                  <select className="border rounded-2xl px-5 py-3 bg-white">
                    <option>All Status</option>

                    <option>Trial Active</option>

                    <option>Trial Ending</option>

                    <option>Paid</option>

                    <option>Expired</option>
                  </select>

                  <select className="border rounded-2xl px-5 py-3 bg-white">
                    <option>All Plans</option>

                    <option>Monthly</option>

                    <option>Yearly</option>
                  </select>
                </div>

                {/* TABLE */}
                <div className="overflow-auto">
                  <table className="min-w-[1700px] w-full">
                    <thead className="bg-gray-100">
                      <tr className="text-left">
                        <th className="p-5 font-bold">Tiffin Center</th>

                        <th className="p-5 font-bold">Owner Details</th>

                        <th className="p-5 font-bold">City</th>

                        <th className="p-5 font-bold">Customers</th>

                        <th className="p-5 font-bold">Trial Start</th>

                        <th className="p-5 font-bold">Trial End</th>

                        <th className="p-5 font-bold">Remaining</th>

                        <th className="p-5 font-bold">Subscription</th>

                        <th className="p-5 font-bold">Plan</th>

                        <th className="p-5 font-bold">Payment</th>

                        <th className="p-5 font-bold">Follow Up</th>

                        <th className="p-5 font-bold">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* ROW */}
                      <tr className="border-t hover:bg-gray-50">
                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            <img
                              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200"
                              alt=""
                              className="w-14 h-14 rounded-2xl object-cover"
                            />

                            <div>
                              <h3 className="font-bold text-lg">
                                Sharma Ji Kitchen
                              </h3>

                              <p className="text-sm text-gray-500">
                                Homemade Food Service
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-bold">Rajesh Sharma</h4>

                            <p className="text-sm text-gray-500">
                              +91 9876543210
                            </p>

                            <p className="text-sm text-gray-500">
                              rajesh@gmail.com
                            </p>
                          </div>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-semibold">Indore</h4>

                            <p className="text-sm text-gray-500">Palasia</p>
                          </div>
                        </td>

                        <td className="p-5 font-bold">84</td>

                        <td className="p-5">15 May 2026</td>

                        <td className="p-5">25 May 2026</td>

                        <td className="p-5">
                          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-bold">
                            2 Days Left
                          </span>
                        </td>

                        <td className="p-5">
                          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold">
                            Trial Active
                          </span>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-bold">Free Trial</h4>

                            <p className="text-sm text-gray-500">7 Days</p>
                          </div>
                        </td>

                        <td className="p-5">
                          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-bold">
                            Unpaid
                          </span>
                        </td>

                        <td className="p-5">
                          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs font-bold">
                            Call Pending
                          </span>
                        </td>

                        <td className="p-5">
                          <div className="flex gap-3">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-bold">
                              Convert
                            </button>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-bold">
                              Call
                            </button>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-bold">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* ROW */}
                      <tr className="border-t hover:bg-gray-50">
                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            <img
                              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200"
                              alt=""
                              className="w-14 h-14 rounded-2xl object-cover"
                            />

                            <div>
                              <h3 className="font-bold text-lg">Maa Ka Swad</h3>

                              <p className="text-sm text-gray-500">
                                Healthy Veg Meals
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-bold">Priya Jain</h4>

                            <p className="text-sm text-gray-500">
                              +91 9988776655
                            </p>

                            <p className="text-sm text-gray-500">
                              priya@gmail.com
                            </p>
                          </div>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-semibold">Bhopal</h4>

                            <p className="text-sm text-gray-500">MP Nagar</p>
                          </div>
                        </td>

                        <td className="p-5 font-bold">126</td>

                        <td className="p-5">01 Apr 2026</td>

                        <td className="p-5">01 May 2026</td>

                        <td className="p-5">
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                            Active
                          </span>
                        </td>

                        <td className="p-5">
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                            Paid
                          </span>
                        </td>

                        <td className="p-5">
                          <div>
                            <h4 className="font-bold">Premium Monthly</h4>

                            <p className="text-sm text-gray-500">
                              ₹3999 / month
                            </p>
                          </div>
                        </td>

                        <td className="p-5">
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                            Paid
                          </span>
                        </td>

                        <td className="p-5">
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                            Converted
                          </span>
                        </td>

                        <td className="p-5">
                          <div className="flex gap-3">
                            <button className="bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl font-bold">
                              Renew
                            </button>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-bold">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* OTHER TABS */}
          {activeTab !== "dashboard" && (
            <div className="bg-white rounded-3xl p-16 shadow-sm text-center">
              <div className="w-24 h-24 rounded-full bg-orange-100 text-orange-500 mx-auto flex items-center justify-center mb-6">
                <Building2 size={40} />
              </div>

              <h2 className="text-4xl font-black capitalize mb-3">
                {activeTab}
              </h2>

              <p className="text-gray-500 text-lg">
                This section is ready for your management system.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
