import React, {
  useMemo,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  Search,
  MapPin,
  Star,
  Clock3,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const TiffinLandingPage = () => {
  const navigate = useNavigate();

  const localitySectionRef = useRef(null);

  const [selectedCity, setSelectedCity] =
    useState("");

  const [selectedLocality, setSelectedLocality] =
    useState("");

  /*
  =========================================
  DUMMY DATA
  =========================================
  */

  const cityData = {
    Bilaspur: [
      "Rajkishore Nagar",
      "Nehru Nagar",
      "Mangla Chowk",
      "Vyapar Vihar",
    ],

    Raipur: [
      "Shankar Nagar",
      "Pandri",
      "Mowa",
      "Tatibandh",
    ],

    Delhi: [
      "Laxmi Nagar",
      "Rohini",
      "Dwarka",
      "Karol Bagh",
    ],
  };

  /*
  =========================================
  TIFFINS
  =========================================
  */

  const tiffins = [
    {
      id: 1,
      name: "Sharma Tiffin Service",
      city: "Bilaspur",
      locality: "Rajkishore Nagar",
      type: "Veg",
      price: "₹70 / Meal",
      rating: "4.8",
    },

    {
      id: 2,
      name: "Maa Ki Rasoi",
      city: "Bilaspur",
      locality: "Nehru Nagar",
      type: "Veg & Non Veg",
      price: "₹90 / Meal",
      rating: "4.7",
    },

    {
      id: 3,
      name: "Daily Meal Box",
      city: "Raipur",
      locality: "Mowa",
      type: "Veg",
      price: "₹80 / Meal",
      rating: "4.5",
    },

    {
      id: 4,
      name: "Delhi Tadka",
      city: "Delhi",
      locality: "Dwarka",
      type: "Non Veg",
      price: "₹120 / Meal",
      rating: "4.9",
    },
  ];

  /*
  =========================================
  HANDLE CITY SELECT
  =========================================
  */

  const handleCitySelect = (city) => {
    setSelectedCity(city);

    setSelectedLocality("");

    setTimeout(() => {
      localitySectionRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  /*
  =========================================
  FILTER TIFFINS
  =========================================
  */

  const filteredTiffins = tiffins.filter(
    (item) =>
      item.city === selectedCity &&
      item.locality === selectedLocality,
  );

  return (
    <>
      {/* HERO SECTION */}

      <div className="bg-[#0f0f0f] text-white overflow-hidden">
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

            <nav className="flex items-center justify-between py-6">
              {/* LOGO */}

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-xl font-black">
                  T
                </div>

                <div>
                  <h1 className="text-2xl font-black">
                    Tiffin Track Pro
                  </h1>

                  <p className="text-xs text-gray-300">
                    Homemade Food Delivery
                  </p>
                </div>
              </div>

              {/* CITY DROPDOWN */}

              <div className="hidden lg:flex items-center">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 px-5 h-14 flex items-center gap-4">
                  <MapPin className="text-orange-500" />

                  <select
                    value={selectedCity}
                    onChange={(e) =>
                      handleCitySelect(
                        e.target.value,
                      )
                    }
                    className="outline-none text-black font-semibold bg-transparent min-w-[240px]"
                  >
                    <option value="">
                      Select Your City
                    </option>

                    {Object.keys(cityData).map(
                      (city) => (
                        <option
                          key={city}
                          value={city}
                        >
                          {city}
                        </option>
                      ),
                    )}
                  </select>
                </div>
              </div>
            </nav>

            {/* HERO CONTENT */}

            <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
              {/* LEFT */}

              <div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  Search The Best
                  <span className="block text-orange-500">
                    Tiffin Service
                  </span>
                  Near You
                </h1>

                <p className="text-gray-300 text-lg mt-7 leading-relaxed max-w-xl">
                  Fresh homemade meals delivered
                  daily from trusted tiffin
                  centers in your city.
                  Healthy, affordable and always
                  on time.
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

                {/* MOBILE CITY SELECT */}

                <div className="mt-10 lg:hidden">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 px-5 h-14 flex items-center gap-4">
                    <MapPin className="text-orange-500" />

                    <select
                      value={selectedCity}
                      onChange={(e) =>
                        handleCitySelect(
                          e.target.value,
                        )
                      }
                      className="outline-none text-black font-semibold bg-transparent w-full"
                    >
                      <option value="">
                        Select Your City
                      </option>

                      {Object.keys(cityData).map(
                        (city) => (
                          <option
                            key={city}
                            value={city}
                          >
                            {city}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MAIN SECTION */}

      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* LOCALITY SECTION */}

        {selectedCity &&
          !selectedLocality && (
            <div
              ref={localitySectionRef}
              className="mt-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-4xl font-black">
                    Select Locality
                  </h3>

                  <p className="text-gray-500 mt-2 text-lg">
                    {selectedCity}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedCity("");
                  }}
                  className="text-orange-500 font-bold"
                >
                  Change City
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cityData[selectedCity].map(
                  (locality) => (
                    <button
                      key={locality}
                      onClick={() =>
                        setSelectedLocality(
                          locality,
                        )
                      }
                      className="bg-white border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-3xl p-6 text-left shadow-sm transition-all"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                        <MapPin className="text-orange-500" />
                      </div>

                      <h4 className="text-lg font-bold">
                        {locality}
                      </h4>

                      <p className="text-gray-500 text-sm mt-1">
                        View Tiffin Services
                      </p>
                    </button>
                  ),
                )}
              </div>
            </div>
          )}

        {/* TIFFIN LIST */}

        {selectedCity &&
          selectedLocality && (
            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-4xl font-black">
                    Tiffin Services
                  </h3>

                  <p className="text-gray-500 mt-2 text-lg">
                    {selectedLocality},{" "}
                    {selectedCity}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedLocality("")
                  }
                  className="text-orange-500 font-bold"
                >
                  Change Locality
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {filteredTiffins.map(
                  (tiffin) => (
                    <div
                      key={tiffin.id}
                      className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-2xl transition-all"
                    >
                      {/* IMAGE */}

                      <img
                        src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop"
                        alt={tiffin.name}
                        className="h-56 w-full object-cover"
                      />

                      {/* CONTENT */}

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-black">
                            {tiffin.name}
                          </h4>

                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                            ⭐ {tiffin.rating}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 mb-3">
                          <MapPin size={16} />

                          <span>
                            {tiffin.locality},{" "}
                            {tiffin.city}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-5">
                          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                            {tiffin.type}
                          </span>

                          <span className="text-xl font-black text-orange-500">
                            {tiffin.price}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            navigate("/");
                          }}
                          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-2xl font-bold"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* NO TIFFINS */}

              {filteredTiffins.length ===
                0 && (
                <div className="bg-gray-100 rounded-3xl p-10 text-center mt-8">
                  <h4 className="text-2xl font-black mb-2">
                    No Tiffins Found
                  </h4>

                  <p className="text-gray-500">
                    No tiffin services
                    available in this
                    locality
                  </p>
                </div>
              )}
            </div>
          )}
      </div>

      <div className="h-24" />
    </>
  );
};

export default TiffinLandingPage;