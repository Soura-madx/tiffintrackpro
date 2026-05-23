{/* =========================================
SUPER ADMIN → TENANT PLAN REQUESTS TAB
Authority Based Actions
========================================= */}

import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Crown,
  Phone,
  Building2,
  Globe,
  Calendar,
  IndianRupee,
  XCircle,
  Eye,
} from "lucide-react";

const SubscriptionRequests = () => {
  const [requests, setRequests] = useState([]);

  // =========================================
  // DUMMY REQUESTS
  // =========================================

  useEffect(() => {
    const dummy = [
      {
        id: 1,

        tenant_name: "Sharma Ji Kitchen",
        owner_name: "Rajesh Sharma",

        phone: "9876543210",
        city: "Indore",

        subdomain: "sharmajikhitchen.tiffinwala.com",

        current_plan: "Free Trial",
        requested_plan: "Professional Plan",

        amount: 2999,

        trial_start: "2026-05-01",
        trial_end: "2026-05-07",

        request_date: "2026-05-05",

        status: "pending",

        website_active: true,
        admin_panel_active: true,
        delivery_panel_active: true,
      },

      {
        id: 2,

        tenant_name: "Gupta Foods",
        owner_name: "Amit Gupta",

        phone: "9988776655",
        city: "Bhopal",

        subdomain: "guptafoods.tiffinwala.com",

        current_plan: "Starter Plan",
        requested_plan: "Business Plan",

        amount: 4999,

        trial_start: "2026-04-01",
        trial_end: "2026-04-07",

        request_date: "2026-05-03",

        status: "approved",

        website_active: true,
        admin_panel_active: true,
        delivery_panel_active: true,
      },

      {
        id: 3,

        tenant_name: "Maa Ka Swad",
        owner_name: "Pooja Jain",

        phone: "9898989898",
        city: "Ujjain",

        subdomain: "maakaswad.tiffinwala.com",

        current_plan: "Free Trial",
        requested_plan: "Starter Plan",

        amount: 1499,

        trial_start: "2026-05-02",
        trial_end: "2026-05-08",

        request_date: "2026-05-06",

        status: "rejected",

        website_active: false,
        admin_panel_active: false,
        delivery_panel_active: false,
      },
    ];

    setRequests(dummy);
  }, []);

  // =========================================
  // APPROVE PLAN
  // =========================================

  const approvePlan = (id) => {
    const updated = requests.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "approved",
            current_plan: item.requested_plan,
          }
        : item
    );

    setRequests(updated);

    alert("Plan Activated Successfully");
  };

  // =========================================
  // REJECT PLAN
  // =========================================

  const rejectPlan = (id) => {
    const updated = requests.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "rejected",
          }
        : item
    );

    setRequests(updated);

    alert("Request Rejected");
  };

  // =========================================
  // WHATSAPP CONTACT
  // =========================================

  const contactTenant = (phone, tenant) => {
    const message = `Hello ${tenant},

Your subscription request has been received by Tiffinwala CRM.

Our team will update your plan shortly.

Thank you.`;

    window.open(
      `https://wa.me/91${phone}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-3xl font-black text-gray-900">
            Subscription Requests
          </h2>

          <p className="text-gray-500 mt-1">
            Manage tenant SaaS upgrade requests
          </p>
        </div>

        <div className="bg-orange-100 text-orange-700 px-5 py-3 rounded-2xl font-bold">
          {requests.length} Requests
        </div>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="min-w-[1500px] w-full">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="text-left p-4 font-bold">
                Tenant
              </th>

              <th className="text-left p-4 font-bold">
                Current Plan
              </th>

              <th className="text-left p-4 font-bold">
                Requested Plan
              </th>

              <th className="text-left p-4 font-bold">
                Trial Period
              </th>

              <th className="text-left p-4 font-bold">
                Price
              </th>

              <th className="text-left p-4 font-bold">
                Platform Access
              </th>

              <th className="text-left p-4 font-bold">
                Status
              </th>

              <th className="text-left p-4 font-bold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-all"
              >

                {/* TENANT */}
                <td className="p-4">

                  <div>
                    <h3 className="font-bold text-lg">
                      {item.tenant_name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.owner_name}
                    </p>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">

                      <Phone className="w-4 h-4" />

                      {item.phone}

                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">

                      <Building2 className="w-4 h-4" />

                      {item.city}

                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-blue-600">

                      <Globe className="w-4 h-4" />

                      {item.subdomain}

                    </div>

                  </div>

                </td>

                {/* CURRENT PLAN */}
                <td className="p-4">

                  <div className="bg-gray-100 inline-flex px-4 py-2 rounded-xl font-semibold">
                    {item.current_plan}
                  </div>

                </td>

                {/* REQUESTED PLAN */}
                <td className="p-4">

                  <div className="bg-orange-100 text-orange-700 inline-flex px-4 py-2 rounded-xl font-bold">
                    {item.requested_plan}
                  </div>

                </td>

                {/* TRIAL */}
                <td className="p-4">

                  <div className="space-y-2 text-sm">

                    <div className="flex items-center gap-2">

                      <Calendar className="w-4 h-4 text-gray-500" />

                      Start: {item.trial_start}

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock3 className="w-4 h-4 text-gray-500" />

                      End: {item.trial_end}

                    </div>

                  </div>

                </td>

                {/* PRICE */}
                <td className="p-4">

                  <div className="flex items-center gap-2 font-black text-2xl">

                    <IndianRupee className="w-5 h-5" />

                    {item.amount}

                  </div>

                </td>

                {/* ACCESS */}
                <td className="p-4">

                  <div className="space-y-2">

                    <div className="flex items-center gap-2 text-sm">

                      <CheckCircle2 className="w-4 h-4 text-green-500" />

                      Public Website

                    </div>

                    <div className="flex items-center gap-2 text-sm">

                      <CheckCircle2 className="w-4 h-4 text-green-500" />

                      Admin Panel

                    </div>

                    <div className="flex items-center gap-2 text-sm">

                      <CheckCircle2 className="w-4 h-4 text-green-500" />

                      Delivery Panel

                    </div>

                  </div>

                </td>

                {/* STATUS */}
                <td className="p-4">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      item.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                {/* ACTIONS */}
                <td className="p-4">

                  <div className="flex flex-col gap-3">

                    {/* VIEW */}
                    <button
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl font-semibold flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>

                    {/* CONTACT */}
                    <button
                      onClick={() =>
                        contactTenant(
                          item.phone,
                          item.tenant_name
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold"
                    >
                      Contact
                    </button>

                    {/* APPROVE */}
                    {item.status !== "approved" && (
                      <button
                        onClick={() =>
                          approvePlan(item.id)
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                      >
                        <Crown className="w-4 h-4" />
                        Activate Plan
                      </button>
                    )}

                    {/* REJECT */}
                    {item.status !== "rejected" && (
                      <button
                        onClick={() =>
                          rejectPlan(item.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    )}

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SubscriptionRequests;