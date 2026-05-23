// src/pages/PaymentManagement.jsx

import React, { useEffect, useMemo, useState } from "react";

const PaymentManagement = () => {
  // =========================
  // STATES
  // =========================

  const [payments, setPayments] = useState([]);

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [filters, setFilters] = useState({
    status: "all",
    paymentMode: "all",
    search: "",
  });

  // =========================
  // DUMMY DATA
  // =========================

  const dummyPayments = [
    {
      id: 1,
      customer_name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",

      plan_name: "Monthly Plan",

      combo_name: "Lunch + Dinner",

      amount: 4500,

      paid_amount: 4500,

      due_amount: 0,

      payment_mode: "UPI",

      transaction_id: "TXN12345",

      start_date: "2026-05-01",

      end_date: "2026-05-30",

      renewal_date: "2026-05-30",

      payment_status: "paid",

      subscription_status: "active",

      created_at: "2026-05-01",
    },

    {
      id: 2,

      customer_name: "Priya Jain",

      email: "priya@gmail.com",

      phone: "9898989898",

      plan_name: "Weekly Plan",

      combo_name: "Lunch",

      amount: 700,

      paid_amount: 300,

      due_amount: 400,

      payment_mode: "Cash",

      transaction_id: "CASH001",

      start_date: "2026-05-12",

      end_date: "2026-05-18",

      renewal_date: "2026-05-18",

      payment_status: "partial",

      subscription_status: "active",

      created_at: "2026-05-12",
    },

    {
      id: 3,

      customer_name: "Aman Verma",

      email: "aman@gmail.com",

      phone: "9123456789",

      plan_name: "Custom Plan",

      combo_name: "Dinner",

      amount: 2200,

      paid_amount: 0,

      due_amount: 2200,

      payment_mode: "Pending",

      transaction_id: "-",

      start_date: "2026-05-15",

      end_date: "2026-05-25",

      renewal_date: "2026-05-25",

      payment_status: "unpaid",

      subscription_status: "paused",

      created_at: "2026-05-15",
    },
  ];

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("customer_payments")
    );

    if (saved && saved.length > 0) {
      setPayments(saved);
    } else {
      setPayments(dummyPayments);
    }
  }, []);

  // =========================
  // SAVE DATA
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "customer_payments",
      JSON.stringify(payments)
    );
  }, [payments]);

  // =========================
  // TOTALS
  // =========================

  const stats = useMemo(() => {
    const totalRevenue = payments.reduce(
      (acc, item) =>
        acc + Number(item.paid_amount),
      0
    );

    const totalPending = payments.reduce(
      (acc, item) =>
        acc + Number(item.due_amount),
      0
    );

    const renewals = payments.filter((item) => {
      const renewal = new Date(
        item.renewal_date
      );

      const today = new Date();

      const diff =
        (renewal - today) /
        (1000 * 60 * 60 * 24);

      return diff <= 5;
    });

    return {
      totalRevenue,

      totalPending,

      renewals: renewals.length,
    };
  }, [payments]);

  // =========================
  // FILTERED DATA
  // =========================

  const filteredPayments = payments.filter(
    (payment) => {
      const matchStatus =
        filters.status === "all"
          ? true
          : payment.payment_status ===
            filters.status;

      const matchMode =
        filters.paymentMode === "all"
          ? true
          : payment.payment_mode ===
            filters.paymentMode;

      const matchSearch =
        payment.customer_name
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          ) ||
        payment.phone.includes(
          filters.search
        );

      return (
        matchStatus &&
        matchMode &&
        matchSearch
      );
    }
  );

  // =========================
  // MARK PAID
  // =========================

  const markAsPaid = (id) => {
    const updated = payments.map(
      (payment) => {
        if (payment.id === id) {
          return {
            ...payment,

            paid_amount: payment.amount,

            due_amount: 0,

            payment_status: "paid",
          };
        }

        return payment;
      }
    );

    setPayments(updated);

    alert("Payment marked as paid");
  };

  // =========================
  // RENEW PLAN
  // =========================

  const renewPlan = (payment) => {
    const currentEnd = new Date(
      payment.end_date
    );

    const newStart = new Date(
      currentEnd
    );

    newStart.setDate(
      newStart.getDate() + 1
    );

    const newEnd = new Date(currentEnd);

    newEnd.setDate(
      newEnd.getDate() + 30
    );

    const updated = payments.map((item) => {
      if (item.id === payment.id) {
        return {
          ...item,

          start_date: newStart
            .toISOString()
            .split("T")[0],

          end_date: newEnd
            .toISOString()
            .split("T")[0],

          renewal_date: newEnd
            .toISOString()
            .split("T")[0],

          payment_status: "unpaid",

          paid_amount: 0,

          due_amount: item.amount,
        };
      }

      return item;
    });

    setPayments(updated);

    alert("Plan Renewed");
  };

  // =========================
  // WHATSAPP REMINDER
  // =========================

  const sendReminder = (payment) => {
    const message = `
Hello ${payment.customer_name},

Your tiffin payment is pending.

Plan: ${payment.plan_name}

Amount Due: ₹${payment.due_amount}

Please renew your subscription.

Thank You
`;

    const whatsappUrl = `https://wa.me/91${
      payment.phone
    }?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // =========================
  // GENERATE INVOICE
  // =========================

  const generateInvoice = (payment) => {
    const invoiceNumber =
      "INV-" +
      Math.floor(Math.random() * 100000);

    const invoiceHTML = `
      <html>
        <head>
          <title>Invoice</title>

          <style>

            body{
              font-family: Arial;
              padding:40px;
              color:#222;
            }

            .header{
              display:flex;
              justify-content:space-between;
              margin-bottom:30px;
            }

            .title{
              font-size:32px;
              font-weight:bold;
            }

            table{
              width:100%;
              border-collapse:collapse;
              margin-top:30px;
            }

            th,td{
              border:1px solid #ddd;
              padding:14px;
              text-align:left;
            }

            th{
              background:#f5f5f5;
            }

            .total{
              margin-top:30px;
              text-align:right;
              font-size:24px;
              font-weight:bold;
            }

          </style>
        </head>

        <body>

          <div class="header">

            <div>
              <div class="title">
                TIFFIN TRACK PRO
              </div>

              <p>
                Homemade Food Subscription
              </p>
            </div>

            <div>
              <h2>INVOICE</h2>

              <p>
                Invoice No: ${invoiceNumber}
              </p>

              <p>
                Date:
                ${new Date().toLocaleDateString()}
              </p>
            </div>

          </div>

          <hr />

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong>
            ${payment.customer_name}
          </p>

          <p>
            <strong>Phone:</strong>
            ${payment.phone}
          </p>

          <p>
            <strong>Email:</strong>
            ${payment.email}
          </p>

          <table>

            <thead>
              <tr>
                <th>Plan</th>
                <th>Combo</th>
                <th>Start</th>
                <th>End</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>${payment.plan_name}</td>
                <td>${payment.combo_name}</td>
                <td>${payment.start_date}</td>
                <td>${payment.end_date}</td>
                <td>₹${payment.amount}</td>
              </tr>
            </tbody>

          </table>

          <div class="total">
            Total: ₹${payment.amount}
          </div>

        </body>
      </html>
    `;

    const win = window.open("", "_blank");

    win.document.write(invoiceHTML);

    win.document.close();
  };

  // =========================
  // EMAIL INVOICE
  // =========================

  const sendInvoiceEmail = (payment) => {
    const subject = `Invoice - ${payment.plan_name}`;

    const body = `
Hello ${payment.customer_name},

Your invoice is ready.

Plan: ${payment.plan_name}

Combo: ${payment.combo_name}

Amount: ₹${payment.amount}

Start Date: ${payment.start_date}

End Date: ${payment.end_date}

Thank You
Tiffin Track Pro
`;

    window.location.href = `
mailto:${payment.email}
?subject=${encodeURIComponent(
      subject
    )}
&body=${encodeURIComponent(body)}
`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-4xl font-black">
          Payment Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage customer payments and
          invoices
        </p>
      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl shadow p-6">
          <p className="text-gray-500">
            Total Revenue
          </p>

          <h2 className="text-4xl font-black mt-3">
            ₹{stats.totalRevenue}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <p className="text-gray-500">
            Pending Amount
          </p>

          <h2 className="text-4xl font-black mt-3 text-red-500">
            ₹{stats.totalPending}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <p className="text-gray-500">
            Upcoming Renewals
          </p>

          <h2 className="text-4xl font-black mt-3 text-orange-500">
            {stats.renewals}
          </h2>
        </div>
      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-3xl shadow p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="text"
            placeholder="Search customer"
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            className="border rounded-2xl p-3"
          />

          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({
                ...filters,
                status: e.target.value,
              })
            }
            className="border rounded-2xl p-3"
          >
            <option value="all">
              All Status
            </option>

            <option value="paid">
              Paid
            </option>

            <option value="partial">
              Partial
            </option>

            <option value="unpaid">
              Unpaid
            </option>
          </select>

          <select
            value={filters.paymentMode}
            onChange={(e) =>
              setFilters({
                ...filters,
                paymentMode: e.target.value,
              })
            }
            className="border rounded-2xl p-3"
          >
            <option value="all">
              All Modes
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Cash">
              Cash
            </option>

            <option value="Card">
              Card
            </option>
          </select>
        </div>
      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1600px]">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="p-5">
                  Customer
                </th>

                <th className="p-5">
                  Plan
                </th>

                <th className="p-5">
                  Amount
                </th>

                <th className="p-5">
                  Paid
                </th>

                <th className="p-5">
                  Due
                </th>

                <th className="p-5">
                  Payment Mode
                </th>

                <th className="p-5">
                  Renewal
                </th>

                <th className="p-5">
                  Status
                </th>

                <th className="p-5">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map(
                (payment) => (
                  <tr
                    key={payment.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-5">
                      <div>
                        <h3 className="font-bold">
                          {
                            payment.customer_name
                          }
                        </h3>

                        <p className="text-sm text-gray-500">
                          {payment.phone}
                        </p>
                      </div>
                    </td>

                    <td className="p-5">
                      <div>
                        <p className="font-semibold">
                          {
                            payment.plan_name
                          }
                        </p>

                        <p className="text-sm text-gray-500">
                          {
                            payment.combo_name
                          }
                        </p>
                      </div>
                    </td>

                    <td className="p-5 font-bold">
                      ₹{payment.amount}
                    </td>

                    <td className="p-5 text-green-600 font-bold">
                      ₹
                      {
                        payment.paid_amount
                      }
                    </td>

                    <td className="p-5 text-red-500 font-bold">
                      ₹
                      {
                        payment.due_amount
                      }
                    </td>

                    <td className="p-5">
                      {
                        payment.payment_mode
                      }
                    </td>

                    <td className="p-5">
                      {
                        payment.renewal_date
                      }
                    </td>

                    <td className="p-5">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold ${
                          payment.payment_status ===
                          "paid"
                            ? "bg-green-100 text-green-700"
                            : payment.payment_status ===
                              "partial"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {
                          payment.payment_status
                        }
                      </span>
                    </td>

                    <td className="p-5">
                      <div className="flex gap-3 flex-wrap">
                        {payment.payment_status !==
                          "paid" && (
                          <button
                            onClick={() =>
                              markAsPaid(
                                payment.id
                              )
                            }
                            className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                          >
                            Mark Paid
                          </button>
                        )}

                        <button
                          onClick={() =>
                            renewPlan(payment)
                          }
                          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          Renew
                        </button>

                        <button
                          onClick={() =>
                            sendReminder(
                              payment
                            )
                          }
                          className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          Reminder
                        </button>

                        <button
                          onClick={() =>
                            generateInvoice(
                              payment
                            )
                          }
                          className="bg-purple-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          Invoice
                        </button>

                        <button
                          onClick={() =>
                            sendInvoiceEmail(
                              payment
                            )
                          }
                          className="bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          Email Invoice
                        </button>

                        <button
                          onClick={() =>
                            setSelectedPayment(
                              payment
                            )
                          }
                          className="bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}

      {selectedPayment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black">
                Payment Details
              </h2>

              <button
                onClick={() =>
                  setSelectedPayment(null)
                }
                className="text-3xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <DetailCard
                label="Customer"
                value={
                  selectedPayment.customer_name
                }
              />

              <DetailCard
                label="Email"
                value={
                  selectedPayment.email
                }
              />

              <DetailCard
                label="Phone"
                value={
                  selectedPayment.phone
                }
              />

              <DetailCard
                label="Plan"
                value={
                  selectedPayment.plan_name
                }
              />

              <DetailCard
                label="Combo"
                value={
                  selectedPayment.combo_name
                }
              />

              <DetailCard
                label="Amount"
                value={`₹${selectedPayment.amount}`}
              />

              <DetailCard
                label="Paid"
                value={`₹${selectedPayment.paid_amount}`}
              />

              <DetailCard
                label="Due"
                value={`₹${selectedPayment.due_amount}`}
              />

              <DetailCard
                label="Start Date"
                value={
                  selectedPayment.start_date
                }
              />

              <DetailCard
                label="End Date"
                value={
                  selectedPayment.end_date
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =========================
// DETAIL CARD
// =========================

const DetailCard = ({
  label,
  value,
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h3 className="font-bold text-lg mt-1">
        {value}
      </h3>
    </div>
  );
};

export default PaymentManagement;