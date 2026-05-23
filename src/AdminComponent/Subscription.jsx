import React from "react";
import {
  Crown,
  Clock3,
  CheckCircle2,
  MessageCircle,
  CreditCard,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from "lucide-react";

const Subscription = () => {
  // =========================
  // DUMMY DATA
  // =========================

  const subscription = {
    current_plan: "Free Trial",

    start_date: "20 May 2026",

    expiry_date: "27 May 2026",

    remaining_days: 3,

    progress: 70,

    total_orders: 42,

    total_customers: 18,

    delivery_staff: 3,
  };

  // =========================
  // PLANS
  // =========================

  const plans = [
    {
      name: "Starter Plan",
      price: "₹999/month",

      features: [
        "Public Website",
        "Customer Orders",
        "Delivery Panel",
        "Basic Reports",
      ],
    },

    {
      name: "Business Plan",

      price: "₹1999/month",

      popular: true,

      features: [
        "Everything In Starter",
        "Advanced Reports",
        "Customer Management",
        "WhatsApp Support",
        "Unlimited Orders",
      ],
    },

    {
      name: "Enterprise Plan",

      price: "₹3999/month",

      features: [
        "All Business Features",
        "Multiple Delivery Boys",
        "Priority Support",
        "Custom Branding",
      ],
    },
  ];

  // =========================
  // WHATSAPP
  // =========================

  const requestUpgrade = (planName) => {
    const message = `
Hello,

I want to upgrade my SaaS plan.

Tiffin Center:
Sharma Ji Kitchen

Current Plan:
Free Trial

Selected Plan:
${planName}
`;

    const url = `https://wa.me/919981436647?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-black text-gray-900">
            Subscription
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your SaaS plan, trial and upgrades
          </p>

        </div>

        {/* TRIAL BADGE */}
        <div className="bg-orange-100 text-orange-700 px-5 py-3 rounded-2xl font-bold flex items-center gap-2 w-fit">

          <Clock3 className="w-5 h-5" />

          Free Trial •{" "}
          {subscription.remaining_days} Days Left

        </div>

      </div>

      {/* TOP CARDS */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* CURRENT PLAN */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Current Plan
              </p>

              <h2 className="text-3xl font-black text-gray-900 mt-2">
                {subscription.current_plan}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

              <Crown className="w-8 h-8 text-orange-500" />

            </div>

          </div>

          <div className="space-y-3">

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Trial Started
              </span>

              <span className="font-semibold">
                {subscription.start_date}
              </span>

            </div>

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Expiry Date
              </span>

              <span className="font-semibold">
                {subscription.expiry_date}
              </span>

            </div>

          </div>

        </div>

        {/* PROGRESS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Trial Usage
              </p>

              <h2 className="text-3xl font-black mt-2">
                {subscription.progress}%
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <BarChart3 className="w-8 h-8 text-blue-500" />

            </div>

          </div>

          {/* BAR */}
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">

            <div
              className="h-full bg-orange-500 rounded-full"
              style={{
                width: `${subscription.progress}%`,
              }}
            />

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Your trial ends soon. Upgrade to continue
            uninterrupted operations.
          </p>

        </div>

        {/* SUPPORT */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-orange-100 text-sm">
                Need Help?
              </p>

              <h2 className="text-3xl font-black mt-2">
                Support
              </h2>

            </div>

            <MessageCircle className="w-10 h-10" />

          </div>

          <p className="text-orange-100 leading-relaxed">
            Contact our team for upgrades, onboarding
            or billing support.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/919981436647",
                "_blank"
              )
            }
            className="mt-6 bg-white text-orange-600 px-5 py-3 rounded-2xl font-bold"
          >
            Chat On WhatsApp
          </button>

        </div>

      </div>

      {/* USAGE STATS */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <p className="text-gray-500">
            Orders Managed
          </p>

          <h2 className="text-5xl font-black mt-3">
            {subscription.total_orders}
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <p className="text-gray-500">
            Customers Added
          </p>

          <h2 className="text-5xl font-black mt-3">
            {subscription.total_customers}
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <p className="text-gray-500">
            Delivery Staff
          </p>

          <h2 className="text-5xl font-black mt-3">
            {subscription.delivery_staff}
          </h2>

        </div>

      </div>

      {/* FEATURES */}
      <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 mb-10">

        <div className="flex items-center gap-3 mb-6">

          <ShieldCheck className="w-7 h-7 text-green-500" />

          <h2 className="text-3xl font-black">
            Features Included
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {[
            "Public Website",
            "Customer Orders",
            "Delivery Panel",
            "Customer Authentication",
            "WhatsApp Support",
            "Order Management",
            "Reports & Analytics",
            "Delivery Assignment",
            "Menu Management",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-3"
            >

              <CheckCircle2 className="w-5 h-5 text-green-500" />

              <span className="font-semibold text-gray-700">
                {feature}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* PRICING */}
      <div>

        <div className="flex items-center gap-3 mb-8">

          <Sparkles className="w-8 h-8 text-orange-500" />

          <h2 className="text-4xl font-black text-gray-900">
            Upgrade Your Plan
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-7">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-7 border shadow-sm relative ${
                plan.popular
                  ? "bg-orange-500 text-white border-orange-500 scale-[1.02]"
                  : "bg-white border-gray-100"
              }`}
            >

              {/* POPULAR */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-white text-orange-500 text-xs font-black px-4 py-2 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-black mb-3">
                {plan.name}
              </h3>

              <p
                className={`text-5xl font-black mb-7 ${
                  plan.popular
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {plan.price}
              </p>

              <div className="space-y-4 mb-8">

                {plan.features.map(
                  (feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="w-5 h-5" />

                      <span className="font-medium">
                        {feature}
                      </span>

                    </div>
                  )
                )}

              </div>

              <button
                onClick={() =>
                  requestUpgrade(plan.name)
                }
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.popular
                    ? "bg-white text-orange-500"
                    : "bg-black text-white"
                }`}
              >
                Request Upgrade
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* PAYMENT HISTORY */}
      <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 mt-10">

        <div className="flex items-center gap-3 mb-6">

          <CreditCard className="w-7 h-7 text-blue-500" />

          <h2 className="text-3xl font-black">
            Payment History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>

              <tr className="border-b text-left">

                <th className="py-4 text-gray-500">
                  Plan
                </th>

                <th className="py-4 text-gray-500">
                  Date
                </th>

                <th className="py-4 text-gray-500">
                  Amount
                </th>

                <th className="py-4 text-gray-500">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-5 font-semibold">
                  Free Trial
                </td>

                <td className="py-5">
                  20 May 2026
                </td>

                <td className="py-5">
                  ₹0
                </td>

                <td className="py-5">

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                    Active
                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Subscription;