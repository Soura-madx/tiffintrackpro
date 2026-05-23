import React from "react";
import {
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainLanding = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          {/* TOP */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-orange-400" />

              <span className="text-sm font-semibold">
                India's Smart Tiffin Business Ecosystem
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              TiffinTrackPro
            </h1>

            <p className="text-2xl text-orange-400 font-bold mt-4">
              One Platform. Two Experiences.
            </p>

          
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            {/* CUSTOMER */}
            <div className="group bg-white text-black rounded-[32px] p-10 shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 rounded-3xl bg-orange-100 flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-orange-500" />
              </div>

              <h2 className="text-4xl font-black mb-4">
                For Customers
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Explore healthy homemade tiffin services, choose meal plans,
                manage subscriptions and track your deliveries.
              </p>

              {/* FEATURES */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-orange-500" />

                  <span className="font-medium">
                    Browse Tiffin Centers
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-orange-500" />

                  <span className="font-medium">
                    Live Delivery Tracking
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />

                  <span className="font-medium">
                    Flexible Meal Plans
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <a
                href="http://localhost:5173/superadmin/customer"
                className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-500 transition-all"
              >
                Continue As Customer

                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* TENANT */}
            <div className="group bg-orange-500 text-white rounded-[32px] p-10 shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">
                <Building2 className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl font-black mb-4">
                For Tiffin Owners
              </h2>

              <p className="text-orange-100 text-lg leading-relaxed mb-8">
                Manage customers, plans, delivery boys, payments, renewals and
                operations with our powerful SaaS CRM.
              </p>

              {/* FEATURES */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-white" />

                  <span className="font-medium">
                    Full Business Management
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-white" />

                  <span className="font-medium">
                    Customer & Staff Panels
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-white" />

                  <span className="font-medium">
                    Smart Delivery Management
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <a
                href="http://localhost:5173/superadmin/crm"
                className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all"
              >
                Continue As Tiffin Owner

                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="text-center mt-20">
            <p className="text-gray-400">
              © 2026 TiffinTrackPro • Smart Tiffin Business Management System
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLanding;