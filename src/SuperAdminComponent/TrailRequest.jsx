import React, { useEffect, useState } from "react";
import {
  Search,
  Phone,
  CheckCircle2,
  Clock3,
  XCircle,
  Eye,
  MessageCircle,
  Calendar,
  Globe,
  ShieldCheck,
  User,
  Building2,
} from "lucide-react";

const TrialRequests = () => {
  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState("all");

  const [requests, setRequests] = useState([]);

  // =========================
  // LOAD DUMMY DATA
  // =========================

  useEffect(() => {
    const dummy = [
      {
        id: 1,

        business_name: "Sharma Ji Kitchen",

        owner_name: "Rajesh Sharma",

        phone: "9876543210",

        email: "sharma@gmail.com",

        city: "Indore",

        locality: "Palasia",

        website_slug: "sharmajikitchen",

        plan: "Free Trial",

        status: "pending",

        request_date: "20 May 2026",

        trial_days: 7,

        trial_start: "",

        trial_end: "",

        services: [
          "Public Website",
          "Admin Panel",
          "Delivery Panel",
          "Customer Login",
        ],
      },

      {
        id: 2,

        business_name: "Annapurna Tiffin",

        owner_name: "Deepak Verma",

        phone: "9999999999",

        email: "annapurna@gmail.com",

        city: "Bhopal",

        locality: "MP Nagar",

        website_slug: "annapurnatiffin",

        plan: "Starter Plan",

        status: "active",

        request_date: "15 May 2026",

        trial_days: 7,

        trial_start: "15 May 2026",

        trial_end: "22 May 2026",

        services: [
          "Public Website",
          "Admin Panel",
          "Delivery Panel",
        ],
      },

      {
        id: 3,

        business_name: "Maa Ka Swad",

        owner_name: "Amit Jain",

        phone: "8888888888",

        email: "maakaswad@gmail.com",

        city: "Indore",

        locality: "Vijay Nagar",

        website_slug: "maakaswad",

        plan: "Free Trial",

        status: "expired",

        request_date: "01 May 2026",

        trial_days: 7,

        trial_start: "01 May 2026",

        trial_end: "08 May 2026",

        services: [
          "Public Website",
          "Admin Panel",
        ],
      },
    ];

    setRequests(dummy);
  }, []);

  // =========================
  // FILTER
  // =========================

  const filteredRequests = requests.filter(
    (request) => {
      const matchesSearch =
        request.business_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        request.owner_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        request.city
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "all"
          ? true
          : request.status === selectedStatus;

      return matchesSearch && matchesStatus;
    }
  );

  // =========================
  // ACTIVATE TRIAL
  // =========================

  const activateTrial = (tenant) => {
    const start = new Date();

    const end = new Date();

    end.setDate(start.getDate() + 7);

    const updated = requests.map((item) =>
      item.id === tenant.id
        ? {
            ...item,

            status: "active",

            trial_start:
              start.toLocaleDateString(),

            trial_end:
              end.toLocaleDateString(),
          }
        : item
    );

    setRequests(updated);

    // WHATSAPP MESSAGE
    const message = `
Hello ${tenant.owner_name} 👋

Your FREE TRIAL for Tiffin Business Management System is now activated ✅

🔗 Public Website:
https://${tenant.website_slug}.tiffinwala.com

🔗 Admin Panel:
https://admin.tiffinwala.com

🔗 Delivery Panel:
https://delivery.tiffinwala.com

📅 Trial Duration:
7 Days

Thank you for joining us 🚀
`;

    const whatsappURL = `https://wa.me/919981436647?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  // =========================
  // REJECT TRIAL
  // =========================

  const rejectTrial = (tenant) => {
    const updated = requests.map((item) =>
      item.id === tenant.id
        ? {
            ...item,
            status: "rejected",
          }
        : item
    );

    setRequests(updated);
  };

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-black text-gray-900">
            Trial Requests
          </h1>

          <p className="text-gray-500 mt-2">
            Manage tenant free trials, activation
            and SaaS onboarding
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex gap-4 flex-wrap">

          <div className="relative">

            <Search className="w-5 h-5 absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search tenant..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="pl-12 pr-5 py-3 rounded-2xl border border-gray-200 bg-white w-[280px]"
            />

          </div>

          <select
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value)
            }
            className="px-5 py-3 rounded-2xl border border-gray-200 bg-white"
          >
            <option value="all">
              All Status
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="active">
              Active
            </option>

            <option value="expired">
              Expired
            </option>

            <option value="rejected">
              Rejected
            </option>
          </select>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="min-w-[1500px] w-full">

            <thead className="bg-gray-50 border-b">

              <tr className="text-left">

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Tiffin Center
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Owner
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Contact
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Location
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Services
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Trial
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Status
                </th>

                <th className="px-6 py-5 text-sm font-bold text-gray-600">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredRequests.map((tenant) => (
                <tr
                  key={tenant.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >

                  {/* TIFFIN */}
                  <td className="px-6 py-5">

                    <div className="flex items-start gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

                        <Building2 className="w-7 h-7 text-orange-500" />

                      </div>

                      <div>

                        <h3 className="font-bold text-lg text-gray-900">
                          {tenant.business_name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {tenant.website_slug}
                          .tiffinwala.com
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          Requested On{" "}
                          {tenant.request_date}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* OWNER */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="font-semibold text-gray-900">
                        {tenant.owner_name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {tenant.email}
                      </p>

                    </div>

                  </td>

                  {/* CONTACT */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <Phone className="w-4 h-4 text-gray-400" />

                      <span className="font-medium">
                        {tenant.phone}
                      </span>

                    </div>

                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="font-semibold">
                        {tenant.city}
                      </p>

                      <p className="text-sm text-gray-500">
                        {tenant.locality}
                      </p>

                    </div>

                  </td>

                  {/* SERVICES */}
                  <td className="px-6 py-5">

                    <div className="flex flex-wrap gap-2">

                      {tenant.services.map(
                        (service, index) => (
                          <span
                            key={index}
                            className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-2 rounded-full"
                          >
                            {service}
                          </span>
                        )
                      )}

                    </div>

                  </td>

                  {/* TRIAL */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="font-bold text-gray-900">
                        {tenant.plan}
                      </p>

                      {tenant.trial_start && (
                        <div className="mt-2 text-sm text-gray-500">

                          <p>
                            Start:{" "}
                            {tenant.trial_start}
                          </p>

                          <p>
                            End: {tenant.trial_end}
                          </p>

                        </div>
                      )}

                    </div>

                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold ${
                        tenant.status === "active"
                          ? "bg-green-100 text-green-700"
                          : tenant.status ===
                            "pending"
                          ? "bg-orange-100 text-orange-700"
                          : tenant.status ===
                            "expired"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tenant.status}
                    </span>

                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5">

                    <div className="flex flex-wrap gap-3">

                      {tenant.status ===
                        "pending" && (
                        <>
                          <button
                            onClick={() =>
                              activateTrial(
                                tenant
                              )
                            }
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Activate
                          </button>

                          <button
                            onClick={() =>
                              rejectTrial(
                                tenant
                              )
                            }
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </>
                      )}

                      {tenant.status ===
                        "active" && (
                        <>
                          <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>

                          <button
                            onClick={() => {
                              const message = `Hello ${tenant.owner_name},

Your trial is active ✅

Website:
https://${tenant.website_slug}.tiffinwala.com

Admin:
https://admin.tiffinwala.com`;

                              window.open(
                                `https://wa.me/919981436647?text=${encodeURIComponent(
                                  message
                                )}`,
                                "_blank"
                              );
                            }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </button>
                        </>
                      )}

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* STATS */}
      <div className="grid lg:grid-cols-4 gap-5 mt-8">

        <div className="bg-white rounded-3xl p-6 shadow">

          <h3 className="text-gray-500 font-semibold">
            Total Requests
          </h3>

          <p className="text-4xl font-black mt-3">
            {requests.length}
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow">

          <h3 className="text-gray-500 font-semibold">
            Active Trials
          </h3>

          <p className="text-4xl font-black mt-3 text-green-600">
            {
              requests.filter(
                (r) => r.status === "active"
              ).length
            }
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow">

          <h3 className="text-gray-500 font-semibold">
            Pending Requests
          </h3>

          <p className="text-4xl font-black mt-3 text-orange-500">
            {
              requests.filter(
                (r) => r.status === "pending"
              ).length
            }
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow">

          <h3 className="text-gray-500 font-semibold">
            Expired Trials
          </h3>

          <p className="text-4xl font-black mt-3 text-red-500">
            {
              requests.filter(
                (r) => r.status === "expired"
              ).length
            }
          </p>

        </div>

      </div>

    </div>
  );
};

export default TrialRequests;