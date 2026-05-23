import React, { useState } from "react";
import PlanManagement from "../AdminComponent/PlanManagement";
import CustomerManagement from "../AdminComponent/CustomerManagement";
import LeadManagement from "../AdminComponent/LeadManagement";
import OrderGeneration from "../AdminComponent/Order";
import MenuManagement from "../AdminComponent/MenuManagement";
import ServiceDays from "../AdminComponent/ServiceDays";
import DeliveryManagement from "../AdminComponent/DeliveryManagement";
import Subscription from "../AdminComponent/Subscription";
import PaymentManagement from "../AdminComponent/PaymentManagement";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    "dashboard",
    "plans",
    "customers",
    "orders",
    "delivery",
    "payments",
    "subscription",
    "complaints",
    "leads",
    "menu",
    "timing"
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-5">
        <h2 className="text-xl font-bold mb-6">Tiffin Admin</h2>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block w-full text-left px-3 py-2 rounded mb-2 ${
              activeTab === tab ? "bg-orange-500" : "hover:bg-gray-800"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="grid md:grid-cols-4 gap-4">
              <Card title="Customers" value="120" />
              <Card title="Orders Today" value="85" />
              <Card title="Revenue" value="₹4500" />
              <Card title="Pending Leads" value="12" />
            </div>
          </div>
        )}

        {activeTab === "timing" && (
          <ServiceDays/>
        )}

        {activeTab === "subscription" && (
          <Subscription/>
        )}

        {/* PLANS */}
        {activeTab === "plans" && (
          <PlanManagement/>
        )}

        {/* CUSTOMERS */}
        {activeTab === "customers" && (
          <CustomerManagement/>
        )}

{activeTab === "leads" && (
<LeadManagement/>
)}
{activeTab === "menu" && (
<MenuManagement/>
)}
        {/* ORDERS */}
        {activeTab === "orders" && (
          <OrderGeneration/>
        )}

        {/* DELIVERY */}
        {activeTab === "delivery" && (
          <DeliveryManagement/>
        )}

        {/* PAYMENTS */}
        {activeTab === "payments" && (
          <PaymentManagement/>
        )}

        {/* COMPLAINTS */}
        {activeTab === "complaints" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Complaints</h1>

            <Table
              headers={["Customer", "Issue", "Status"]}
              data={[
                ["Rahul", "Late delivery", "Open"],
                ["Priya", "Food quality", "Resolved"],
              ]}
            />
          </div>
        )}

      </div>
    </div>
  );
};

/* COMPONENTS */

const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <p className="text-gray-500">{title}</p>
    <h2 className="text-xl font-bold">{value}</h2>
  </div>
);

const Table = ({ headers, data }) => (
  <table className="w-full bg-white rounded shadow text-sm">
    <thead>
      <tr className="text-left bg-gray-100">
        {headers.map((h, i) => (
          <th key={i} className="p-3">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className="border-t">
          {row.map((cell, j) => (
            <td key={j} className="p-3">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default AdminPanel;