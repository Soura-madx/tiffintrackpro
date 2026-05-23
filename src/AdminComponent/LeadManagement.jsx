import React, { useEffect, useState } from "react";

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock3,
  User,
  Search,
} from "lucide-react";

const TenantCustomerQueries = () => {
  /*
  =========================================
  STATES
  =========================================
  */

  const [search, setSearch] = useState("");

  const [queries, setQueries] = useState([]);

  /*
  =========================================
  DUMMY DATA
  =========================================
  */

  useEffect(() => {
    const dummyQueries = [
      {
        id: 1,
        customer_name: "Rahul Sharma",
        phone: "9876543210",
        email: "rahul@gmail.com",
        city: "Bhopal",
        locality: "MP Nagar",
        query_type: "Delivery Problem",
        message:
          "My lunch was not delivered today.",
        status: "Pending",
        created_at: "20 May 2026",
      },

      {
        id: 2,
        customer_name: "Priya Jain",
        phone: "9898989898",
        email: "priya@gmail.com",
        city: "Indore",
        locality: "Vijay Nagar",
        query_type: "Food Quality",
        message:
          "Food quantity was less yesterday.",
        status: "Resolved",
        created_at: "19 May 2026",
      },

      {
        id: 3,
        customer_name: "Aman Verma",
        phone: "9123456789",
        email: "aman@gmail.com",
        city: "Bhopal",
        locality: "Arera Colony",
        query_type: "Refund Request",
        message:
          "Please refund paused meal amount.",
        status: "In Progress",
        created_at: "18 May 2026",
      },
    ];

    setQueries(dummyQueries);
  }, []);

  /*
  =========================================
  FILTER
  =========================================
  */

  const filteredQueries = queries.filter(
    (query) =>
      query.customer_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      query.phone.includes(search) ||
      query.query_type
        .toLowerCase()
        .includes(search.toLowerCase()),
  );

  /*
  =========================================
  UPDATE STATUS
  =========================================
  */

  const updateStatus = (id, status) => {
    const updated = queries.map((query) =>
      query.id === id
        ? { ...query, status }
        : query,
    );

    setQueries(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-black">
            Customer Queries
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer complaints,
            support requests and delivery
            issues
          </p>
        </div>

        {/* SEARCH */}

        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md w-full lg:w-[380px]">
          <Search className="text-orange-500" />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="text-gray-500 font-semibold">
            Total Queries
          </h3>

          <h2 className="text-5xl font-black mt-3">
            {queries.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="text-gray-500 font-semibold">
            Pending Queries
          </h3>

          <h2 className="text-5xl font-black mt-3 text-orange-500">
            {
              queries.filter(
                (q) => q.status === "Pending",
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="text-gray-500 font-semibold">
            Resolved Queries
          </h3>

          <h2 className="text-5xl font-black mt-3 text-green-500">
            {
              queries.filter(
                (q) => q.status === "Resolved",
              ).length
            }
          </h2>
        </div>
      </div>

      {/* QUERY LIST */}

      <div className="space-y-6">
        {filteredQueries.map((query) => (
          <div
            key={query.id}
            className="bg-white rounded-3xl shadow-md p-7"
          >
            {/* TOP */}

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <User className="text-orange-500" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black">
                      {query.customer_name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {query.created_at}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />

                    <span>{query.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={16} />

                    <span>{query.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />

                    <span>
                      {query.locality},{" "}
                      {query.city}
                    </span>
                  </div>
                </div>
              </div>

              {/* STATUS */}

              <div>
                <span
                  className={`px-5 py-3 rounded-full text-sm font-bold ${
                    query.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : query.status ===
                        "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {query.status}
                </span>
              </div>
            </div>

            {/* QUERY */}

            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="text-orange-500" />

                <h3 className="font-bold text-lg">
                  {query.query_type}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {query.message}
              </p>
            </div>

            {/* ACTIONS */}

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${query.phone}`}
                className="bg-black text-white px-5 py-3 rounded-2xl font-semibold flex items-center gap-2"
              >
                <Phone size={18} />

                Call Customer
              </a>

              <a
                href={`https://wa.me/91${query.phone}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-5 py-3 rounded-2xl font-semibold flex items-center gap-2"
              >
                <MessageCircle size={18} />

                WhatsApp
              </a>

              <button
                onClick={() =>
                  updateStatus(
                    query.id,
                    "In Progress",
                  )
                }
                className="bg-blue-500 text-white px-5 py-3 rounded-2xl font-semibold"
              >
                Mark In Progress
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    query.id,
                    "Resolved",
                  )
                }
                className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold"
              >
                Mark Resolved
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}

      {filteredQueries.length === 0 && (
        <div className="bg-white rounded-3xl p-16 text-center shadow-md">
          <Clock3 className="mx-auto text-gray-300 w-20 h-20 mb-5" />

          <h2 className="text-3xl font-black mb-3">
            No Queries Found
          </h2>

          <p className="text-gray-500">
            Customer queries will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default TenantCustomerQueries;