import React, { useEffect, useState } from "react";

const CustomerManagement = () => {
  // =========================
  // STATES
  // =========================

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [form, setForm] = useState({
    // BASIC
    name: "",
    phone: "",
    email: "",
    address: "",
    locality: "",
    city: "",
    pincode: "",

    // SOURCE
    lead_source: "website",

    // PLAN
    selected_plan: "",
    selected_combo: "",

    // SUBSCRIPTION
    start_date: "",
    end_date: "",

    delivery_shift: "",

    subscription_status: "active",

    // PAYMENT
    payment_status: "pending",

    paid_amount: "",
    due_amount: "",

    payment_mode: "cash",

    // DELIVERY
    assigned_delivery_boy: "",

    delivery_notes: "",

    // ACCOUNT
    account_created: false,
    subscription_active: false,

    username: "",
    password: "",

    // SYSTEM
    status: "new_lead",
  });
  // =========================
  // DUMMY PLANS
  // =========================

  const plans = [
    {
      id: 1,
      name: "Monthly Plan",
      combos: ["Lunch", "Dinner", "Lunch + Dinner"],
    },
    {
      id: 2,
      name: "Weekly Plan",
      combos: ["Breakfast", "Lunch", "Breakfast + Lunch"],
    },
    {
      id: 3,
      name: "Custom Plan",
      combos: ["Lunch", "Dinner", "Breakfast + Lunch + Dinner"],
    },
  ];

  // =========================
  // LOAD STORAGE
  // =========================

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("customers"));

    if (saved) {
      setCustomers(saved);
    } else {
      // DUMMY LEADS
      const dummy = [
        {
          id: 1,
          name: "Rahul Sharma",
          phone: "9876543210",
          email: "rahul@gmail.com",
          address: "Bhopal MP",
          lead_source: "website",
          selected_plan: "",
          selected_combo: "",
          account_created: false,
          subscription_active: false,
          username: "",
          password: "",
          status: "new_lead",
        },
        {
          id: 2,
          name: "Priya Jain",
          phone: "9876549876",
          email: "priya@gmail.com",
          address: "Indore MP",
          lead_source: "manual",
          selected_plan: "",
          selected_combo: "",
          account_created: false,
          subscription_active: false,
          username: "",
          password: "",
          status: "called",
        },
      ];

      setCustomers(dummy);
    }
  }, []);

  // =========================
  // SAVE STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // ADD CUSTOMER
  // =========================

  const addCustomer = () => {
    const payload = {
      ...form,
      id: Date.now(),
    };

    const today = new Date();

    const end = new Date(form.end_date);

    const remaining_days = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

    setCustomers([...customers, payload, remaining_days]);

    resetForm();
  };

  // =========================
  // RESET
  // =========================

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",

      lead_source: "website",

      selected_plan: "",
      selected_combo: "",

      account_created: false,
      subscription_active: false,

      username: "",
      password: "",

      status: "new_lead",
    });
  };

  // =========================
  // UPDATE CUSTOMER
  // =========================

  const updateCustomer = (id, updates) => {
    const updated = customers.map((customer) =>
      customer.id === id ? { ...customer, ...updates } : customer,
    );

    setCustomers(updated);
  };

  // =========================
  // CREATE ACCOUNT
  // =========================

  const createAccount = (customer) => {
    const username =
      customer.name.toLowerCase().replace(/\s/g, "") +
      Math.floor(Math.random() * 1000);

    const password = "TP" + Math.floor(Math.random() * 100000);

    updateCustomer(customer.id, {
      account_created: true,
      username,
      password,
      status: "account_created",
    });

    alert(`Login Created\n\nUsername: ${username}\nPassword: ${password}`);
  };

  // =========================
  // ACTIVATE PLAN
  // =========================

  const activatePlan = (customer) => {
    if (!customer.selected_plan || !customer.selected_combo) {
      alert("Select plan & combo first");
      return;
    }

    updateCustomer(customer.id, {
      subscription_active: true,
      status: "active_customer",
    });

    alert("Plan Activated");
  };

  // =========================
  // SEND LOGIN
  // =========================

  const sendCredentials = (customer) => {
    alert(
      `Email Sent To ${customer.email}\n\nUsername: ${customer.username}\nPassword: ${customer.password}`,
    );
  };

  // =========================
  // EXCEL IMPORT
  // =========================

  const importDummyExcel = () => {
    const imported = [
      {
        id: Date.now(),
        name: "Imported Customer",
        phone: "9999999999",
        email: "import@gmail.com",
        address: "Imported Address",
        lead_source: "excel",
        selected_plan: "",
        selected_combo: "",
        account_created: false,
        subscription_active: false,
        username: "",
        password: "",
        status: "new_lead",
      },
    ];

    setCustomers([...customers, ...imported]);

    alert("Excel Imported");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black">Customer Management</h1>

          <p className="text-gray-500 mt-2">
            Manage leads, accounts and subscriptions
          </p>
        </div>

        <button
          onClick={importDummyExcel}
          className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold"
        >
          Upload Excel
        </button>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-3xl shadow p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">Add New Customer</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Customer Name"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-xl p-3"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-xl p-3"
          />

          <select
            name="lead_source"
            value={form.lead_source}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="website">Website Lead</option>

            <option value="manual">Manual Entry</option>

            <option value="excel">Excel Import</option>
          </select>

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="border rounded-xl p-3 md:col-span-2"
            rows={3}
          />

          {/* LOCALITY */}
          <input
            type="text"
            name="locality"
            value={form.locality}
            onChange={handleChange}
            placeholder="Locality / Area"
            className="border rounded-xl p-3"
          />

          {/* CITY */}
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="border rounded-xl p-3"
          />

          {/* PINCODE */}
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="border rounded-xl p-3"
          />

          {/* PLAN */}
          <select
            name="selected_plan"
            value={form.selected_plan}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="">Select Plan</option>

            {plans.map((plan) => (
              <option key={plan.id} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>

          {/* COMBO */}
          <select
            name="selected_combo"
            value={form.selected_combo}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="">Select Combo</option>

            {plans
              .find((p) => p.name === form.selected_plan)
              ?.combos.map((combo) => (
                <option key={combo} value={combo}>
                  {combo}
                </option>
              ))}
          </select>

          {/* START DATE */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Plan Start Date
            </label>

            <input
              type="date"
              name="start_date"
              value={form.start_date}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-1"
            />
          </div>

          {/* END DATE */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Plan End Date
            </label>

            <input
              type="date"
              name="end_date"
              value={form.end_date}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-1"
            />
          </div>

          {/* DELIVERY SHIFT */}
          <select
            name="delivery_shift"
            value={form.delivery_shift}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="">Delivery Shift</option>

            <option value="Breakfast">Breakfast</option>

            <option value="Lunch">Lunch</option>

            <option value="Dinner">Dinner</option>

            <option value="Lunch & Dinner">Lunch & Dinner</option>

            <option value="Full Day">Full Day</option>
          </select>

          {/* PAYMENT STATUS */}
          <select
            name="payment_status"
            value={form.payment_status}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="pending">Payment Pending</option>

            <option value="paid">Paid</option>

            <option value="partial">Partial Paid</option>
          </select>

          {/* PAYMENT MODE */}
          <select
            name="payment_mode"
            value={form.payment_mode}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="cash">Cash</option>

            <option value="upi">UPI</option>

            <option value="bank">Bank Transfer</option>
          </select>

          {/* PAID AMOUNT */}
          <input
            type="number"
            name="paid_amount"
            value={form.paid_amount}
            onChange={handleChange}
            placeholder="Paid Amount"
            className="border rounded-xl p-3"
          />

          {/* DUE AMOUNT */}
          <input
            type="number"
            name="due_amount"
            value={form.due_amount}
            onChange={handleChange}
            placeholder="Due Amount"
            className="border rounded-xl p-3"
          />

          {/* DELIVERY BOY */}
          <input
            type="text"
            name="assigned_delivery_boy"
            value={form.assigned_delivery_boy}
            onChange={handleChange}
            placeholder="Assigned Delivery Boy"
            className="border rounded-xl p-3"
          />

          {/* DELIVERY NOTES */}
          <textarea
            name="delivery_notes"
            value={form.delivery_notes}
            onChange={handleChange}
            placeholder="Delivery Notes"
            rows={3}
            className="border rounded-xl p-3 md:col-span-2"
          />
        </div>

        <button
          onClick={addCustomer}
          className="mt-6 bg-black text-white px-8 py-4 rounded-2xl font-bold"
        >
          Add Customer
        </button>
      </div>

      {/* CUSTOMER LIST */}
      <div className="grid lg:grid-cols-2 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-3xl shadow p-6">
            {/* TOP */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-2xl font-bold">{customer.name}</h3>

                <p className="text-gray-500">{customer.phone}</p>

                <p className="text-gray-500 text-sm">{customer.email}</p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-xs font-bold ${
                  customer.status === "active_customer"
                    ? "bg-green-100 text-green-700"
                    : customer.status === "account_created"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                }`}
              >
                {customer.status.replace("_", " ")}
              </span>
            </div>

            {/* ADDRESS */}
            <div className="mb-5">
              <p className="text-sm text-gray-500">Address</p>

              <p className="font-medium">{customer.address}</p>
            </div>

            {/* SOURCE */}
            <div className="mb-5">
              <span className="bg-gray-100 px-3 py-2 rounded-full text-sm font-semibold capitalize">
                {customer.lead_source}
              </span>
            </div>

            {/* PLAN */}
            <div className="space-y-4 mb-6">
              {/* PLAN */}
              <select
                value={customer.selected_plan}
                onChange={(e) =>
                  updateCustomer(customer.id, {
                    selected_plan: e.target.value,
                    selected_combo: "",
                  })
                }
                className="w-full border rounded-xl p-3"
              >
                <option value="">Select Plan</option>

                {plans.map((plan) => (
                  <option key={plan.id} value={plan.name}>
                    {plan.name}
                  </option>
                ))}
              </select>

              {/* COMBO */}
              {customer.selected_plan && (
                <select
                  value={customer.selected_combo}
                  onChange={(e) =>
                    updateCustomer(customer.id, {
                      selected_combo: e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">Select Combo</option>

                  {plans
                    .find((p) => p.name === customer.selected_plan)
                    ?.combos.map((combo) => (
                      <option key={combo} value={combo}>
                        {combo}
                      </option>
                    ))}
                </select>
              )}
            </div>

            {/* ACCOUNT INFO */}
            {customer.account_created && (
              <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                <h4 className="font-bold mb-3">Login Credentials</h4>

                <p className="text-sm">
                  Username:
                  <span className="font-bold ml-2">{customer.username}</span>
                </p>

                <p className="text-sm">
                  Password:
                  <span className="font-bold ml-2">{customer.password}</span>
                </p>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              {!customer.account_created && (
                <button
                  onClick={() => createAccount(customer)}
                  className="bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Create Login
                </button>
              )}

              {customer.account_created && !customer.subscription_active && (
                <button
                  onClick={() => activatePlan(customer)}
                  className="bg-green-500 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Activate Plan
                </button>
              )}

              {customer.account_created && (
                <button
                  onClick={() => sendCredentials(customer)}
                  className="bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Send ID & Password
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden mt-10">
        {/* HEADER */}
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">Active Customers</h2>

            <p className="text-gray-500 mt-1">
              Subscription overview with plan details
            </p>
          </div>
        </div>

        {/* SCROLLABLE TABLE */}
        <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
          <table className="w-full min-w-[1400px]">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr className="text-left text-sm text-gray-500">
                <th className="p-4 whitespace-nowrap">Customer</th>

                <th className="p-4 whitespace-nowrap">Phone</th>

                <th className="p-4 whitespace-nowrap">Plan</th>

                <th className="p-4 whitespace-nowrap">Combo</th>

                <th className="p-4 whitespace-nowrap">Start Date</th>

                <th className="p-4 whitespace-nowrap">End Date</th>

                <th className="p-4 whitespace-nowrap">Remaining</th>

                <th className="p-4 whitespace-nowrap">Delivery Shift</th>

                <th className="p-4 whitespace-nowrap">Payment</th>

                <th className="p-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  id: 1,
                  name: "Rahul Sharma",
                  phone: "9876543210",
                  email: "rahul@gmail.com",
                  plan: "Monthly Plan",
                  combo: "Lunch + Dinner",
                  start: "01 May 2026",
                  end: "31 May 2026",
                  remaining: "12 Days",
                  shift: "Lunch & Dinner",
                  payment: "Paid",
                  status: "Active",
                },

                {
                  id: 2,
                  name: "Priya Jain",
                  phone: "9898989898",
                  email: "priya@gmail.com",
                  plan: "Weekly Plan",
                  combo: "Breakfast + Lunch",
                  start: "10 May 2026",
                  end: "16 May 2026",
                  remaining: "2 Days",
                  shift: "Morning",
                  payment: "Pending",
                  status: "Active",
                },

                {
                  id: 3,
                  name: "Aman Verma",
                  phone: "9123456789",
                  email: "aman@gmail.com",
                  plan: "Custom Plan",
                  combo: "Dinner",
                  start: "15 May 2026",
                  end: "25 May 2026",
                  remaining: "7 Days",
                  shift: "Night",
                  payment: "Paid",
                  status: "Paused",
                },

                {
                  id: 4,
                  name: "Sneha Patel",
                  phone: "9988776655",
                  email: "sneha@gmail.com",
                  plan: "Monthly Plan",
                  combo: "Breakfast + Lunch + Dinner",
                  start: "03 May 2026",
                  end: "02 June 2026",
                  remaining: "14 Days",
                  shift: "Full Day",
                  payment: "Paid",
                  status: "Active",
                },

                {
                  id: 5,
                  name: "Rohit Singh",
                  phone: "9000011111",
                  email: "rohit@gmail.com",
                  plan: "Weekly Plan",
                  combo: "Lunch",
                  start: "12 May 2026",
                  end: "18 May 2026",
                  remaining: "3 Days",
                  shift: "Lunch",
                  payment: "Pending",
                  status: "Expired",
                },
              ].map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 whitespace-nowrap">{customer.name}</td>

                  <td className="p-4 whitespace-nowrap">{customer.phone}</td>

                  <td className="p-4 whitespace-nowrap">{customer.plan}</td>

                  <td className="p-4 whitespace-nowrap">{customer.combo}</td>

                  <td className="p-4 whitespace-nowrap">{customer.start}</td>

                  <td className="p-4 whitespace-nowrap">{customer.end}</td>

                  <td className="p-4 whitespace-nowrap">
                    {customer.remaining}
                  </td>

                  <td className="p-4 whitespace-nowrap">{customer.shift}</td>

                  <td className="p-4 whitespace-nowrap">{customer.payment}</td>

                  <td className="p-4 whitespace-nowrap">{customer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
