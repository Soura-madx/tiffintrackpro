import React, { useEffect, useState } from "react";
import {
  MapPin,
  Bike,
  Phone,
  User,
  Truck,
  RotateCcw,
  CheckCircle2,
  Clock3,
  Search,
} from "lucide-react";

const DeliveryManagement = () => {
  // =========================
  // STATES
  // =========================

  const [deliveryBoys, setDeliveryBoys] =
    useState([]);

  const [orders, setOrders] = useState([]);

  const [selectedOrders, setSelectedOrders] =
    useState([]);

  const [reassignBoy, setReassignBoy] =
    useState("");

  const [search, setSearch] = useState("");

  // =========================
  // DELIVERY BOY FORM
  // =========================

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle_type: "bike",

    assigned_areas: [],

    meal_shifts: [],

    max_orders_per_shift: 40,

    status: "active",
  });

  // =========================
  // DUMMY AREAS
  // =========================

  const allAreas = [
    "Palasia",
    "Vijay Nagar",
    "Bhawarkuan",
    "Saket",
    "New Palasia",
    "Tilak Nagar",
  ];

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    const dummyBoys = [
      {
        id: 1,
        name: "Rakesh",
        phone: "9999999999",
        vehicle_type: "bike",

        assigned_areas: [
          "Palasia",
          "New Palasia",
        ],

        meal_shifts: [
          "lunch",
          "dinner",
        ],

        max_orders_per_shift: 40,

        active_orders: 12,

        status: "active",
      },

      {
        id: 2,
        name: "Mohan",
        phone: "8888888888",
        vehicle_type: "scooty",

        assigned_areas: [
          "Vijay Nagar",
          "Saket",
        ],

        meal_shifts: ["lunch"],

        max_orders_per_shift: 30,

        active_orders: 8,

        status: "active",
      },
    ];

    const dummyOrders = [
      {
        id: 101,
        customer: "Rahul Sharma",
        locality: "Palasia",
        address:
          "Palasia Square Indore",
        meal: "Lunch",

        delivery_boy_id: 1,

        delivery_boy_name: "Rakesh",

        status: "pending",
      },

      {
        id: 102,
        customer: "Amit Jain",
        locality: "Palasia",
        address:
          "Near Apollo Tower",
        meal: "Dinner",

        delivery_boy_id: 1,

        delivery_boy_name: "Rakesh",

        status: "out_for_delivery",
      },

      {
        id: 103,
        customer: "Priya Verma",
        locality: "Vijay Nagar",
        address:
          "Sector 4 Vijay Nagar",
        meal: "Lunch",

        delivery_boy_id: 2,

        delivery_boy_name: "Mohan",

        status: "delivered",
      },
    ];

    setDeliveryBoys(dummyBoys);

    setOrders(dummyOrders);
  }, []);

  // =========================
  // HANDLE FORM
  // =========================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // TOGGLE AREA
  // =========================

  const toggleArea = (area) => {
    let updated = [
      ...form.assigned_areas,
    ];

    if (updated.includes(area)) {
      updated = updated.filter(
        (a) => a !== area
      );
    } else {
      updated.push(area);
    }

    setForm({
      ...form,
      assigned_areas: updated,
    });
  };

  // =========================
  // TOGGLE SHIFT
  // =========================

  const toggleShift = (shift) => {
    let updated = [
      ...form.meal_shifts,
    ];

    if (updated.includes(shift)) {
      updated = updated.filter(
        (s) => s !== shift
      );
    } else {
      updated.push(shift);
    }

    setForm({
      ...form,
      meal_shifts: updated,
    });
  };

  // =========================
  // ADD DELIVERY BOY
  // =========================

  const addDeliveryBoy = () => {
    const payload = {
      ...form,

      id: Date.now(),

      active_orders: 0,
    };

    setDeliveryBoys([
      ...deliveryBoys,
      payload,
    ]);

    resetForm();
  };

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      vehicle_type: "bike",

      assigned_areas: [],

      meal_shifts: [],

      max_orders_per_shift: 40,

      status: "active",
    });
  };

  // =========================
  // UPDATE STATUS
  // =========================

  const updateOrderStatus = (
    id,
    status
  ) => {
    const updated = orders.map(
      (order) =>
        order.id === id
          ? { ...order, status }
          : order
    );

    setOrders(updated);
  };

  // =========================
  // SELECT ORDER
  // =========================

  const toggleSelectOrder = (
    orderId
  ) => {
    if (
      selectedOrders.includes(orderId)
    ) {
      setSelectedOrders(
        selectedOrders.filter(
          (id) => id !== orderId
        )
      );
    } else {
      setSelectedOrders([
        ...selectedOrders,
        orderId,
      ]);
    }
  };

  // =========================
  // REASSIGN ORDERS
  // =========================

  const reassignOrders = () => {
    if (!reassignBoy) {
      alert(
        "Select delivery boy"
      );
      return;
    }

    const selectedBoy =
      deliveryBoys.find(
        (boy) =>
          boy.id === Number(reassignBoy)
      );

    const updated = orders.map(
      (order) =>
        selectedOrders.includes(
          order.id
        )
          ? {
              ...order,

              delivery_boy_id:
                selectedBoy.id,

              delivery_boy_name:
                selectedBoy.name,
            }
          : order
    );

    setOrders(updated);

    setSelectedOrders([]);

    setReassignBoy("");

    alert(
      "Orders reassigned successfully"
    );
  };

  // =========================
  // FILTERED ORDERS
  // =========================

  const filteredOrders = orders.filter(
    (order) =>
      order.customer
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      order.locality
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-black">
          Delivery Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage delivery boys,
          assignments and daily
          deliveries
        </p>

      </div>

      {/* TOP GRID */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">

        {/* FORM */}
        <div className="lg:col-span-1 bg-white rounded-3xl shadow p-6">

          <h2 className="text-2xl font-bold mb-6">
            Add Delivery Boy
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Delivery Boy Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3"
            />

            <select
              name="vehicle_type"
              value={form.vehicle_type}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option value="bike">
                Bike
              </option>

              <option value="scooty">
                Scooty
              </option>

              <option value="cycle">
                Cycle
              </option>
            </select>

            {/* AREAS */}
            <div>

              <label className="font-bold text-sm block mb-3">
                Assigned Areas
              </label>

              <div className="flex flex-wrap gap-2">

                {allAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() =>
                      toggleArea(area)
                    }
                    className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                      form.assigned_areas.includes(
                        area
                      )
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {area}
                  </button>
                ))}

              </div>

            </div>

            {/* SHIFTS */}
            <div>

              <label className="font-bold text-sm block mb-3">
                Meal Shifts
              </label>

              <div className="flex gap-2">

                {[
                  "breakfast",
                  "lunch",
                  "dinner",
                ].map((shift) => (
                  <button
                    key={shift}
                    onClick={() =>
                      toggleShift(shift)
                    }
                    className={`px-4 py-2 rounded-xl capitalize font-semibold ${
                      form.meal_shifts.includes(
                        shift
                      )
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {shift}
                  </button>
                ))}

              </div>

            </div>

            <input
              type="number"
              name="max_orders_per_shift"
              value={
                form.max_orders_per_shift
              }
              onChange={handleChange}
              placeholder="Max Orders"
              className="w-full border rounded-xl p-3"
            />

            <button
              onClick={addDeliveryBoy}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold"
            >
              Add Delivery Boy
            </button>

          </div>

        </div>

        {/* DELIVERY BOYS */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

          {deliveryBoys.map((boy) => (
            <div
              key={boy.id}
              className="bg-white rounded-3xl shadow p-6"
            >

              <div className="flex justify-between items-start mb-5">

                <div>

                  <h3 className="text-2xl font-bold">
                    {boy.name}
                  </h3>

                  <p className="text-gray-500">
                    {boy.phone}
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                  {boy.status}
                </span>

              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-2 text-gray-700">

                  <Bike className="w-5 h-5" />

                  <span className="capitalize">
                    {boy.vehicle_type}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-gray-700">

                  <Truck className="w-5 h-5" />

                  <span>
                    {
                      boy.active_orders
                    }{" "}
                    Active Orders
                  </span>

                </div>

                <div>

                  <p className="font-semibold mb-2">
                    Assigned Areas
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {boy.assigned_areas.map(
                      (area) => (
                        <span
                          key={area}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ORDERS */}
      <div className="bg-white rounded-3xl shadow p-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

          <div>

            <h2 className="text-3xl font-bold">
              Daily Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Manage assignments and
              delivery statuses
            </p>

          </div>

          <div className="flex gap-3">

            {/* SEARCH */}
            <div className="relative">

              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="pl-10 border rounded-xl p-3"
              />

            </div>

            {/* REASSIGN */}
            <select
              value={reassignBoy}
              onChange={(e) =>
                setReassignBoy(
                  e.target.value
                )
              }
              className="border rounded-xl p-3"
            >
              <option value="">
                Reassign To
              </option>

              {deliveryBoys.map(
                (boy) => (
                  <option
                    key={boy.id}
                    value={boy.id}
                  >
                    {boy.name}
                  </option>
                )
              )}

            </select>

            <button
              onClick={reassignOrders}
              className="bg-blue-500 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />

              Reassign
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead>

              <tr className="border-b">

                <th className="text-left p-4">
                  Select
                </th>

                <th className="text-left p-4">
                  Customer
                </th>

                <th className="text-left p-4">
                  Area
                </th>

                <th className="text-left p-4">
                  Meal
                </th>

                <th className="text-left p-4">
                  Address
                </th>

                <th className="text-left p-4">
                  Delivery Boy
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredOrders.map(
                (order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4">

                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(
                          order.id
                        )}
                        onChange={() =>
                          toggleSelectOrder(
                            order.id
                          )
                        }
                      />

                    </td>

                    <td className="p-4 font-semibold">
                      {order.customer}
                    </td>

                    <td className="p-4">
                      {order.locality}
                    </td>

                    <td className="p-4">
                      {order.meal}
                    </td>

                    <td className="p-4">
                      {order.address}
                    </td>

                    <td className="p-4">
                      {
                        order.delivery_boy_name
                      }
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold ${
                          order.status ===
                          "delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status ===
                              "out_for_delivery"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {order.status.replace(
                          /_/g,
                          " "
                        )}
                      </span>

                    </td>

                    <td className="p-4">

                      <div className="flex flex-wrap gap-2">

                        <button
                          onClick={() =>
                            updateOrderStatus(
                              order.id,
                              "out_for_delivery"
                            )
                          }
                          className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs"
                        >
                          Dispatch
                        </button>

                        <button
                          onClick={() =>
                            updateOrderStatus(
                              order.id,
                              "delivered"
                            )
                          }
                          className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs"
                        >
                          Delivered
                        </button>

                        <button
                          onClick={() =>
                            updateOrderStatus(
                              order.id,
                              "failed"
                            )
                          }
                          className="bg-red-500 text-white px-3 py-2 rounded-lg text-xs"
                        >
                          Failed
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

    </div>
  );
};

export default DeliveryManagement;