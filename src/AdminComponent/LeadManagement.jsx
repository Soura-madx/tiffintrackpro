import React, { useState } from "react";
import {
  Phone,
  MapPin,
  CalendarDays,
  Clock3,
  CheckCircle2,
  XCircle,
  Search,
} from "lucide-react";

const Leads = () => {
  const [search, setSearch] = useState("");

  const leads = [
    {
      id: 1,
      customerName: "Rahul Sharma",
      phone: "+91 9876543210",
      address: "Vijay Nagar, Indore",
      plan: "Monthly Lunch Plan",
      meals: "Lunch",
      persons: 1,
      price: "₹2,500",
      startDate: "20 May 2026",
      requestTime: "10:30 AM",
      status: "pending",
      email: "korisourabh483@gmail.com"
    },

    {
      id: 2,
      customerName: "Priya Verma",
      phone: "+91 9988776655",
      address: "Palasia, Indore",
      plan: "Weekly Dinner Plan",
      meals: "Dinner",
      persons: 2,
      price: "₹1,800",
      startDate: "21 May 2026",
      requestTime: "12:15 PM",
      status: "active",
      email: "korisourabh483@gmail.com"
    },

    {
      id: 3,
      customerName: "Amit Patel",
      phone: "+91 9123456780",
      address: "Bhanwar Kuan, Indore",
      plan: "Full Day Combo",
      meals: "Breakfast + Lunch + Dinner",
      persons: 3,
      price: "₹5,400",
      startDate: "22 May 2026",
      requestTime: "09:00 AM",
      status: "pending",
      email: "korisourabh483@gmail.com"
    },

    {
      id: 4,
      customerName: "Sneha Jain",
      phone: "+91 9000011122",
      address: "Scheme No. 140, Indore",
      plan: "Monthly Dinner Plan",
      meals: "Dinner",
      persons: 1,
      price: "₹2,200",
      startDate: "24 May 2026",
      requestTime: "07:45 PM",
      status: "rejected",
      email: "korisourabh483@gmail.com"
    },
  ];

  const filteredLeads = leads.filter(
    (lead) =>
      lead.customerName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      lead.address
        .toLowerCase()
        .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-4 md:p-8">
      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800">
            Customer Leads
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer tiffin plan requests
          </p>
        </div>

        {/* SEARCH */}

        <div className="relative w-full md:w-[360px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search customer, phone or address"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-400 shadow-sm"
          />
        </div>
      </div>

      {/* LEADS */}

      <div className="grid gap-6">
        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* LEFT */}

              <div className="flex-1">
                {/* TOP */}

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <h2 className="text-2xl font-black text-gray-800">
                    {lead.customerName}
                  </h2>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold capitalize ${
                      lead.status === "active"
                        ? "bg-green-100 text-green-700"
                        : lead.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>

                {/* INFO */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Phone size={16} />
                      Phone
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.phone}
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <MapPin size={16} />
                      Address
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.address}
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      🍱 Plan
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.plan}
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      🍴 Meals
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.meals}
                    </h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                     Email
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.email}
                    </h4>
                  </div>

                 

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      💰 Price
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.price}
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={16} />
                      Start Date
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.startDate}
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Clock3 size={16} />
                      Request Time
                    </div>

                    <h4 className="font-bold text-gray-800">
                      {lead.requestTime}
                    </h4>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}

              <div className="flex lg:flex-col gap-3 min-w-[220px]">
                <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-5 rounded-2xl transition">
                  <CheckCircle2 size={20} />
                  Activate Plan
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-5 rounded-2xl transition">
                  <XCircle size={20} />
                  Reject Lead
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}

      {filteredLeads.length === 0 && (
        <div className="bg-white rounded-3xl p-16 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-700">
            No Leads Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try searching with another keyword
          </p>
        </div>
      )}
    </div>
  );
};

export default Leads;