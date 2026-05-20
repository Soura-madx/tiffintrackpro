import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import {
  Calendar,
  Clock3,
  UtensilsCrossed,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const TiffinPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCombo, setSelectedCombo] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [customRange, setCustomRange] = useState({
    start: "",
    end: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  // =========================
  // PLANS
  // =========================

  const plans = [
    {
      id: 1,
      name: "Monthly Plan",
      duration_type: "monthly",
      delivery_days: 30,
      description:
        "Perfect for daily healthy meal subscribers with flexible pause support.",

      available_meals: ["breakfast", "lunch", "dinner"],

      max_pause_days: 5,
      pause_limit: 2,

      combos: [
        {
          combo_name: "Lunch",
          meals: ["lunch"],
          meals_per_day: 1,
          total_meals: 30,
          price: 2500,
        },
        {
          combo_name: "Dinner",
          meals: ["dinner"],
          meals_per_day: 1,
          total_meals: 30,
          price: 2500,
        },
        {
          combo_name: "Lunch + Dinner",
          meals: ["lunch", "dinner"],
          meals_per_day: 2,
          total_meals: 60,
          price: 4500,
        },
        {
          combo_name: "Breakfast + Lunch",
          meals: ["breakfast", "lunch"],
          meals_per_day: 2,
          total_meals: 60,
          price: 4200,
        },
        {
          combo_name: "Breakfast + Lunch + Dinner",
          meals: ["breakfast", "lunch", "dinner"],
          meals_per_day: 3,
          total_meals: 90,
          price: 6200,
        },
      ],
    },

    {
      id: 2,
      name: "Weekly Plan",
      duration_type: "weekly",
      delivery_days: 7,
      description: "Affordable weekly tiffin plan with fresh homemade meals.",

      max_pause_days: 1,
      pause_limit: 1,

      available_meals: ["lunch", "dinner"],

      combos: [
        {
          combo_name: "Lunch",
          meals: ["lunch"],
          meals_per_day: 1,
          total_meals: 7,
          price: 700,
        },
        {
          combo_name: "Dinner",
          meals: ["dinner"],
          meals_per_day: 1,
          total_meals: 7,
          price: 700,
        },
        {
          combo_name: "Lunch + Dinner",
          meals: ["lunch", "dinner"],
          meals_per_day: 2,
          total_meals: 14,
          price: 1200,
        },
      ],
    },

    {
      id: 3,
      name: "Custom Days Plan",
      duration_type: "custom",
      description: "Select your own delivery range and meal combinations.",

      min_days: 2,
      max_days: 30,

      price_per_day: {
        breakfast: 80,
        lunch: 110,
        dinner: 110,
      },

      max_pause_days: 0,
      pause_limit: 0,

      available_meals: ["breakfast", "lunch", "dinner"],
    },
  ];

  // =========================
  // CUSTOM PLAN CALCULATION
  // =========================

  const customDays = useMemo(() => {
    if (!customRange.start || !customRange.end) return 0;

    const start = new Date(customRange.start);
    const end = new Date(customRange.end);

    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return diff > 0 ? diff : 0;
  }, [customRange]);

  const customCombos = [
    {
      combo_name: "Breakfast",
      meals: ["breakfast"],
    },
    {
      combo_name: "Lunch",
      meals: ["lunch"],
    },
    {
      combo_name: "Dinner",
      meals: ["dinner"],
    },
    {
      combo_name: "Breakfast + Lunch",
      meals: ["breakfast", "lunch"],
    },
    {
      combo_name: "Lunch + Dinner",
      meals: ["lunch", "dinner"],
    },
    {
      combo_name: "Breakfast + Lunch + Dinner",
      meals: ["breakfast", "lunch", "dinner"],
    },
  ];

  const calculateCustomPrice = (combo) => {
    const customPlan = plans[2];

    let total = 0;

    combo.meals.forEach((meal) => {
      total += customPlan.price_per_day[meal];
    });

    return total * customDays;
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubscribe = (plan, combo) => {
    setSelectedPlan(plan);
    setSelectedCombo(combo);

    setShowForm(true);
  };

  const handleSubmit = () => {
    console.log({
      customer: formData,
      plan: selectedPlan,
      combo: selectedCombo,
      customRange,
    });

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#f7f7f7] py-32 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Choose Your Tiffin Plan
            </h1>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Healthy homemade meals with flexible subscriptions, pause support
              and custom meal combinations.
            </p>
          </div>

          {/* PLANS */}
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                {/* TOP */}
                <div className="p-7 border-b">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-orange-500" />

                    <span className="text-orange-500 font-semibold text-sm uppercase">
                      {plan.duration_type} Plan
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-gray-900 mb-2">
                    {plan.name}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* BODY */}
                <div className="p-7">
                  {/* DELIVERY DAYS */}
                  {plan.delivery_days && (
                    <div className="flex items-center gap-2 mb-5 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />

                      <span>{plan.delivery_days} Delivery Days</span>
                    </div>
                  )}

                  {/* CUSTOM PLAN DATE */}
                  {plan.duration_type === "custom" && (
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-500">
                            Start Date
                          </label>

                          <input
                            type="date"
                            className="w-full border rounded-xl p-3 mt-1"
                            onChange={(e) =>
                              setCustomRange({
                                ...customRange,
                                start: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-gray-500">
                            End Date
                          </label>

                          <input
                            type="date"
                            className="w-full border rounded-xl p-3 mt-1"
                            onChange={(e) =>
                              setCustomRange({
                                ...customRange,
                                end: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-4 bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <p className="text-sm text-orange-700 font-semibold">
                          Minimum {plan.min_days} days • Maximum {plan.max_days}{" "}
                          days
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          Selected Days: {customDays || 0}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* COMBOS */}
                  <div className="space-y-4">
                    {(plan.duration_type === "custom"
                      ? customCombos
                      : plan.combos
                    ).map((combo, idx) => {
                      const price =
                        plan.duration_type === "custom"
                          ? calculateCustomPrice(combo)
                          : combo.price;

                      const mealsPerDay = combo.meals.length;

                      const totalMeals =
                        plan.duration_type === "custom"
                          ? mealsPerDay * customDays
                          : combo.total_meals;

                      return (
                        <div
                          key={idx}
                          className="border rounded-2xl p-5 hover:border-orange-400 transition-all"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">
                                {combo.combo_name}
                              </h3>

                              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                <UtensilsCrossed className="w-4 h-4" />

                                <span>{mealsPerDay} Meals / Day</span>
                              </div>

                              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                                <BadgeCheck className="w-4 h-4" />

                                <span>{totalMeals || 0} Total Meals</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="text-3xl font-black text-gray-900">
                                ₹{price || 0}
                              </p>

                              <p className="text-xs text-gray-500">
                                total price
                              </p>
                            </div>
                          </div>

                          {/* SUBSCRIBE */}
                          <button
                            onClick={() => handleSubscribe(plan, combo)}
                            disabled={
                              plan.duration_type === "custom" &&
                              (customDays < plan.min_days ||
                                customDays > plan.max_days)
                            }
                            className="mt-5 w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-orange-500 transition-all disabled:opacity-50"
                          >
                            Select This Combo
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* PAUSE FEATURE */}
                  <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock3 className="w-5 h-5 text-green-600" />

                      <h4 className="font-bold text-green-700">
                        Flexible Pause Feature
                      </h4>
                    </div>

                    {plan.max_pause_days > 0 ? (
                      <>
                        <p className="text-sm text-gray-700">
                          Pause your subscription anytime during your active
                          plan.
                        </p>

                        <ul className="mt-3 space-y-1 text-sm text-gray-600">
                          <li>• Maximum Pause Days: {plan.max_pause_days}</li>

                          <li>• Pause Limit: {plan.pause_limit} times</li>

                          <li>• Plan automatically extends after pause</li>
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-gray-600">
                        Pause feature is not available for this plan.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-7">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-black mb-2">
                  Complete Your Request
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Our team will contact you shortly.
                </p>

                {/* SELECTED */}
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-5">
                  <p className="font-bold text-orange-700">
                    {selectedPlan?.name}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    {selectedCombo?.combo_name}
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl p-3 mb-3"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-xl p-3 mb-3"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl p-3 mb-3"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />

                <textarea
                  placeholder="Delivery Address"
                  className="w-full border rounded-xl p-3 mb-5"
                  rows={4}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-orange-500"
                >
                  Submit Request
                </button>

                <button
                  onClick={() => setShowForm(false)}
                  className="w-full mt-3 text-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>

                <h2 className="text-3xl font-black mb-2">Request Submitted</h2>

                <p className="text-gray-500">
                  Admin will contact you shortly and create your subscription
                  account.
                </p>

                <button
                  onClick={() => {
                    setShowForm(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 bg-black text-white px-6 py-3 rounded-2xl"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TiffinPlans;
