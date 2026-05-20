import React from "react";
import {
  Search,
  MapPin,
  Star,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import CustomerSearchPage from "../component/SearchbyCity";

const TiffinLandingPage = () => {
  return (

    <>
    <div className="bg-[#0f0f0f] text-white overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center">
        {/* BACKGROUND IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/landing.jpg')",
          }}
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/70" />

        {/* ORANGE GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px]" />

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* NAVBAR */}

          <nav className="flex items-center justify-between py-2">
            {/* LOGO */}

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center text-xl font-black">
                T
              </div>

              <div>
                <h1 className="text-2xl font-black">
                  Tiffin Track Pro
                </h1>

                <p className="text-xs text-gray-300">
                  Home Food Delivery
                </p>
              </div>
            </div>

            {/* MENU */}

            <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
              <a href="#">Home</a>

              <a href="#">Browse Tiffins</a>

              <a href="#">Plans</a>

              <a href="#">How It Works</a>

              <a href="#">Contact</a>
            </div>

            {/* BUTTONS */}

            <div className="flex items-center gap-4">
              <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">
                Login
              </button>

              <button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/30">
                Get Started
              </button>
            </div>
          </nav>

          {/* HERO CONTENT */}

          <div className="grid lg:grid-cols-2 gap-12 items-center pt-15">
            {/* LEFT */}

            <div>
             

              {/* TITLE */}

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Search The Best
                <span className="block text-orange-500">
                  Tiffin Service
                </span>
                Near You
              </h1>

              {/* DESCRIPTION */}

              <p className="text-gray-300 text-lg mt-7 leading-relaxed max-w-xl">
                Fresh homemade meals delivered daily
                from trusted tiffin centers in your
                city. Healthy, affordable and always on
                time.
              </p>



              {/* FEATURES */}

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-green-400" />

                  <span className="text-gray-200">
                    Hygienic Food
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="text-orange-400" />

                  <span className="text-gray-200">
                    On Time Delivery
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" />

                  <span className="text-gray-200">
                    Rated Tiffin Centers
                  </span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
    <CustomerSearchPage/>
    </>
  );
};

export default TiffinLandingPage;