import React, { useEffect, useState } from "react";

const PlanManagement = () => {
  // =========================
  // GLOBAL TIFFIN SETTINGS
  // =========================

  // =========================
  // PLAN STATE
  // =========================

  const [plans, setPlans] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    plan_name: "",
    description: "",

    duration_type: "monthly",

    delivery_days: 30,

    min_days: 2,
    max_days: 30,

    available_meals: [],

    combos: [],

    max_pause_days: 5,
    pause_limit: 2,

    is_veg: true,

    special_offer: "",

    status: "active",

    cutoff_timings: {
      breakfast: "",
      lunch: "",
      dinner: "",
    },
  });

  const updateCutoffTiming = (
  meal,
  value
) => {
  setForm({
    ...form,
    cutoff_timings: {
      ...form.cutoff_timings,
      [meal]: value,
    },
  });
};

  // =========================
  // LOAD STORAGE
  // =========================

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("tiffin_plans"));

    const savedTenant = JSON.parse(localStorage.getItem("tenant_settings"));

    if (savedPlans) setPlans(savedPlans);
  }, []);

  // =========================
  // SAVE STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem("tiffin_plans", JSON.stringify(plans));
  }, [plans]);

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
  // TOGGLE MEAL
  // =========================

  const toggleMeal = (meal) => {
    let updated = [...form.available_meals];

    if (updated.includes(meal)) {
      updated = updated.filter((m) => m !== meal);
    } else {
      updated.push(meal);
    }

    setForm({
      ...form,
      available_meals: updated,
    });
  };

  // =========================
  // GENERATE COMBOS
  // =========================

  const generateCombos = () => {
    const meals = form.available_meals;

    const combos = [];

    for (let i = 1; i < 1 << meals.length; i++) {
      const comboMeals = meals.filter((_, index) => i & (1 << index));

      combos.push({
        combo_name: comboMeals.join(" + "),
        meals: comboMeals,
        meals_per_day: comboMeals.length,
        total_meals: comboMeals.length * Number(form.delivery_days || 30),
        price: "",
      });
    }

    setForm({
      ...form,
      combos,
    });
  };

  // =========================
  // UPDATE COMBO PRICE
  // =========================

  const updateComboPrice = (index, value) => {
    const updated = [...form.combos];

    updated[index].price = value;

    setForm({
      ...form,
      combos: updated,
    });
  };

  // =========================
  // SAVE PLAN
  // =========================

  const savePlan = () => {
    if (!form.plan_name) {
      alert("Enter plan name");
      return;
    }

    if (form.available_meals.length === 0) {
      alert("Select meals");
      return;
    }

    const payload = {
      ...form,
      id: editingId || Date.now(),
      created_at: new Date().toLocaleDateString(),
    };

    if (editingId) {
      const updated = plans.map((p) => (p.id === editingId ? payload : p));

      setPlans(updated);

      setEditingId(null);
    } else {
      setPlans([...plans, payload]);
    }

    resetForm();
  };

  // =========================
  // EDIT PLAN
  // =========================

  const editPlan = (plan) => {
    setForm(plan);

    setEditingId(plan.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE PLAN
  // =========================

  const deletePlan = (id) => {
    const confirmDelete = window.confirm("Delete this plan?");

    if (!confirmDelete) return;

    setPlans(plans.filter((p) => p.id !== id));
  };

  // =========================
  // RESET
  // =========================

  const resetForm = () => {
    setForm({
      plan_name: "",
      description: "",

      duration_type: "monthly",

      delivery_days: 30,

      min_days: 2,
      max_days: 30,

      available_meals: [],

      combos: [],

      max_pause_days: 5,
      pause_limit: 2,

      is_veg: true,

      special_offer: "",

      status: "active",
    });

    setEditingId(null);
  };

  // =========================
  // SPECIALITIES
  // =========================

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-black">Plan Management</h1>

        <p className="text-gray-500 mt-2">
          Create and manage your tiffin plans
        </p>
      </div>

      {/* PLAN FORM */}
      <div className="bg-white rounded-3xl shadow p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">Create Plan</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* PLAN NAME */}
          <div>
            <label className="font-semibold text-sm">Plan Name</label>

            <input
              type="text"
              name="plan_name"
              value={form.plan_name}
              onChange={handleChange}
              placeholder="Monthly Premium Plan"
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          {/* DURATION */}
          <div>
            <label className="font-semibold text-sm">Duration Type</label>

            <select
              name="duration_type"
              value={form.duration_type}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            >
              <option value="monthly">Monthly</option>

              <option value="weekly">Weekly</option>

              <option value="custom">Custom Days</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="md:col-span-2">
            <label className="font-semibold text-sm">Description</label>

            <textarea
              rows={3}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          {/* DELIVERY DAYS */}
          <div>
            <label className="font-semibold text-sm">Total Delivery Days</label>

            <input
              type="number"
              name="delivery_days"
              value={form.delivery_days}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          {/* CUSTOM */}
          {form.duration_type === "custom" && (
            <>
              <div>
                <label className="font-semibold text-sm">Min Days</label>

                <input
                  type="number"
                  name="min_days"
                  value={form.min_days}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>

              <div>
                <label className="font-semibold text-sm">Max Days</label>

                <input
                  type="number"
                  name="max_days"
                  value={form.max_days}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>
            </>
          )}

          {/* MEAL TYPES */}
          <div className="md:col-span-2">
            <label className="font-semibold text-sm block mb-4">
              Available Meals
            </label>

            <div className="flex flex-wrap gap-3">
              {["breakfast", "lunch", "dinner"].map((meal) => (
                <button
                  key={meal}
                  onClick={() => toggleMeal(meal)}
                  className={`px-5 py-3 rounded-xl border font-semibold capitalize ${
                    form.available_meals.includes(meal)
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white"
                  }`}
                >
                  {meal}
                </button>
              ))}
            </div>

            
          </div>

          {/* GENERATE COMBOS */}
          <div className="md:col-span-2">
            <button
              onClick={generateCombos}
              className="bg-black text-white px-6 py-3 rounded-xl font-bold"
            >
              Generate Meal Combos
            </button>
          </div>
        </div>

        {/* COMBOS */}
        {form.combos.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-5">Meal Combos</h3>

            <div className="space-y-5">
              {form.combos.map((combo, index) => (
                <div key={index} className="border rounded-2xl p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-xl capitalize">
                        {combo.combo_name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {combo.total_meals} meals
                      </p>
                    </div>

                    <div className="w-52">
                      <input
                        type="number"
                        placeholder="Price"
                        value={combo.price}
                        onChange={(e) =>
                          updateComboPrice(index, e.target.value)
                        }
                        className="w-full border rounded-xl p-3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAUSE RULES */}
       {/* PAUSE RULES */}
<div className="mt-10">

  <div className="mb-5">

    <h3 className="text-2xl font-bold">
      Pause Rules
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      Define how many times customer can pause their subscription
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-5">

    <div>

      <label className="font-semibold text-sm block mb-2">
        Maximum Pause Days
      </label>

      <input
        type="number"
        name="max_pause_days"
        value={form.max_pause_days}
        onChange={handleChange}
        placeholder="5"
        className="border rounded-xl p-3 w-full"
      />

      <p className="text-xs text-gray-500 mt-2">
        Total pause days allowed in this plan
      </p>

    </div>

    <div>

      <label className="font-semibold text-sm block mb-2">
        Pause Limit Count
      </label>

      <input
        type="number"
        name="pause_limit"
        value={form.pause_limit}
        onChange={handleChange}
        placeholder="2"
        className="border rounded-xl p-3 w-full"
      />

      <p className="text-xs text-gray-500 mt-2">
        How many times customer can request pause
      </p>

    </div>

  </div>

</div>

        {/* VEG / NON VEG */}
        <div className="mt-8">
          <label className="font-semibold text-sm block mb-3">Food Type</label>

          <div className="flex gap-3">
            <button
              onClick={() =>
                setForm({
                  ...form,
                  is_veg: true,
                })
              }
              className={`px-5 py-3 rounded-xl font-bold ${
                form.is_veg ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              Veg
            </button>

            <button
              onClick={() =>
                setForm({
                  ...form,
                  is_veg: false,
                })
              }
              className={`px-5 py-3 rounded-xl font-bold ${
                !form.is_veg ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
            >
              Non Veg
            </button>
          </div>
        </div>

        {/* SPECIAL OFFER */}
        <div className="mt-8">
          <label className="font-semibold text-sm">Special Offer</label>

          <input
            type="text"
            name="special_offer"
            value={form.special_offer}
            onChange={handleChange}
            placeholder="Free sweet every Sunday"
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        {/* STATUS */}
        <div className="mt-8">
          <label className="font-semibold text-sm">Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          >
            <option value="active">Active</option>

            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={savePlan}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold"
          >
            {editingId ? "Update Plan" : "Create Plan"}
          </button>

          <button
            onClick={resetForm}
            className="bg-gray-200 px-8 py-4 rounded-2xl font-bold"
          >
            Reset
          </button>
        </div>

        {/* CUT OFF TIMINGS */}
<div className="md:col-span-2 mt-4">

  <div className="flex items-center justify-between mb-5">

    <div>
      <h3 className="text-xl font-bold">
        Meal Cut-Off Timings
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Customer can place or modify orders only before this time
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-3 gap-5">

    {form.available_meals.includes(
      "breakfast"
    ) && (
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

        <label className="font-semibold text-sm block mb-2">
          Breakfast Cut-Off
        </label>

        <input
          type="time"
          value={
            form.cutoff_timings
              ?.breakfast || ""
          }
          onChange={(e) =>
            updateCutoffTiming(
              "breakfast",
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <p className="text-xs text-gray-500 mt-2">
          Example: 09:00 PM Previous Night
        </p>

      </div>
    )}

    {form.available_meals.includes(
      "lunch"
    ) && (
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

        <label className="font-semibold text-sm block mb-2">
          Lunch Cut-Off
        </label>

        <input
          type="time"
          value={
            form.cutoff_timings
              ?.lunch || ""
          }
          onChange={(e) =>
            updateCutoffTiming(
              "lunch",
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <p className="text-xs text-gray-500 mt-2">
          Example: 10:00 AM
        </p>

      </div>
    )}

    {form.available_meals.includes(
      "dinner"
    ) && (
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

        <label className="font-semibold text-sm block mb-2">
          Dinner Cut-Off
        </label>

        <input
          type="time"
          value={
            form.cutoff_timings
              ?.dinner || ""
          }
          onChange={(e) =>
            updateCutoffTiming(
              "dinner",
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <p className="text-xs text-gray-500 mt-2">
          Example: 04:00 PM
        </p>

      </div>
    )}

  </div>

</div>
      </div>

      {/* PLAN LIST */}
      <div className="bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">All Plans</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="border rounded-3xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{plan.plan_name}</h3>

                  <p className="text-gray-500 capitalize">
                    {plan.duration_type}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    plan.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {plan.status}
                </span>
              </div>

              <p className="text-gray-600 mt-4">{plan.description}</p>

              {/* COMBOS */}
              <div className="space-y-3 mt-5">
                {plan.combos.map((combo, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-4 flex justify-between"
                  >
                    <div>
                      <h4 className="font-bold capitalize">
                        {combo.combo_name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {combo.total_meals} meals
                      </p>
                    </div>

                    <h4 className="font-black text-xl">₹{combo.price}</h4>
                  </div>
                ))}
              </div>

              {/* OFFER */}
              {plan.special_offer && (
                <div className="mt-5 bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <h4 className="font-bold text-orange-600 mb-1">
                    Special Offer
                  </h4>

                  <p className="text-sm text-gray-700">{plan.special_offer}</p>
                </div>
              )}

              {/* ACTIONS */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => editPlan(plan)}
                  className="bg-blue-500 text-white px-5 py-3 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePlan(plan.id)}
                  className="bg-red-500 text-white px-5 py-3 rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanManagement;
