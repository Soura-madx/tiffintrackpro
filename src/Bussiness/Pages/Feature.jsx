import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const PauseFeature = () => {
  const plans = [
    {
      name: "Monthly Plan",
      maxPauseDays: 5,
      pauseLimit: 2,
      CutOffDinner: '8:00 pm',
      CutOffLaunch: '11:00 am',
      timeline: "monthly",
    },
    {
      name: "Weekly Plan",
      maxPauseDays: 2,
      pauseLimit: 1,
     CutOffDinner: '8:00 pm',
      CutOffLaunch: '11:00 am',
      timeline: "weekly",
    },
    {
      name: "Custom Days Plan",
      maxPauseDays: 3,
      pauseLimit: 1,
      CutOffDinner: '8:00 pm',
      CutOffLaunch: '11:00 am',
      timeline: "custom",
      condition: "Pause is allowed only if selected days are more than 7"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto  p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-2 mt-15">
        Pause & Flexible Subscription
      </h1>
      <p className="text-gray-600 mb-6">
        Take a break anytime — your meals, your control.
      </p>

      {/* HIGHLIGHT */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-8">
        <p className="text-green-700 font-semibold">
          ✔ You can stop your subscription for specific days — anytime before cutoff.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">How It Works</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Select the days you want to pause</li>
          <li>Confirm before cutoff time</li>
          <li>Delivery will be skipped automatically</li>
          <li>Your plan duration will be extended</li>
        </ul>
      </div>

<div className="cut-off">
  <h2 className="text-xl font-semibold mb-3">Cut Off Time</h2>
      <p className="mb-15"> Cut-off time is the last time by which a customer can modify, pause, or cancel a meal for a specific delivery.
After this time, the order is considered final and cannot be changed because preparation or dispatch has already started.</p>
</div>
      {/* PLAN RULES (MULTIPLE) */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {plans.map((plan, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-5 border">

            <h2 className="text-lg font-bold mb-3">{plan.name}</h2>

            <div className="space-y-2 text-sm text-gray-700">
              <p>📅 Max Pause Days: <strong>{plan.maxPauseDays}</strong></p>
              <p>🔁 Pause Limit: <strong>{plan.pauseLimit}</strong></p>
              <p>🔁 Cut Off for lunch: <strong>{plan.CutOffLaunch}</strong></p>
              <p>🔁 Cut Off for dinner: <strong>{plan.CutOffDinner}</strong></p>
              
            </div>

            {/* Custom Condition */}
            {plan.timeline === "custom" && (
              <div className="mt-3 bg-yellow-50 border border-yellow-200 p-3 rounded text-xs text-yellow-800">
                ⚠ {plan.condition}
              </div>
            )}
          </div>
        ))}

      </div>

      {/* CONDITIONS */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Important Conditions</h2>

        <ul className="space-y-2 text-gray-700">
          <li>⏰ Pause must be applied before cut-off time</li>
          <li>📅 Pause days depend on your selected plan</li>
          <li>🔁 Limited pause frequency per plan cycle</li>
          <li>🔄 Subscription resumes automatically</li>
        </ul>
      </div>

      {/* EXAMPLES */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Monthly Example</h3>
          <p className="text-sm text-gray-700">
            30-day plan + 5 pause days → 35 days total
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Custom Plan Example</h3>
          <p className="text-sm text-gray-700">
            If you select 10 days, pause is allowed.  
            If you select less than 7 days, pause is not available.
          </p>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default PauseFeature;