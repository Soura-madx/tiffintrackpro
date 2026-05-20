import React, { useMemo, useState } from "react";
import { MapPin, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TiffinFinder = () => {
  /*
  =========================================
  STATES
  =========================================
  */

  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState("");

  const [selectedLocality, setSelectedLocality] = useState("");

  const [searchCity, setSearchCity] = useState("");

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

    Raipur: ["Shankar Nagar", "Pandri", "Mowa", "Tatibandh"],

    Delhi: ["Laxmi Nagar", "Rohini", "Dwarka", "Karol Bagh"],
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
  FILTER CITY
  =========================================
  */

  const filteredCities = useMemo(() => {
    if (!searchCity) return [];

    return Object.keys(cityData).filter((city) =>
      city.toLowerCase().includes(searchCity.toLowerCase()),
    );
  }, [searchCity]);

  /*
  =========================================
  FILTER TIFFINS
  =========================================
  */

  const filteredTiffins = tiffins.filter(
    (item) => item.city === selectedCity && item.locality === selectedLocality,
  );

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        {/* HEADING */}

        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900">
            Search Best Tiffin Service
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Find homemade meals near your area
          </p>
        </div>

        {/* SEARCH CITY */}

        {!selectedCity && (
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 flex items-center overflow-hidden">
              <div className="pl-6 text-orange-500">
                <Search size={24} />
              </div>

              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search your city..."
                className="flex-1 px-4 py-5 text-lg outline-none"
              />
            </div>

            {/* CITY LIST */}

            {filteredCities.length > 0 && (
              <div className="absolute w-full bg-white rounded-3xl shadow-2xl mt-3 border overflow-hidden z-50">
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setSearchCity(city);
                    }}
                    className="w-full px-6 py-4 hover:bg-orange-50 flex items-center justify-between transition"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="text-orange-500" />

                      <span className="font-semibold">{city}</span>
                    </div>

                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LOCALITY */}

        {selectedCity && !selectedLocality && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-black">Select Locality</h3>

                <p className="text-gray-500 mt-1">{selectedCity}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedCity("");
                  setSearchCity("");
                }}
                className="text-orange-500 font-bold"
              >
                Change City
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cityData[selectedCity].map((locality) => (
                <button
                  key={locality}
                  onClick={() => setSelectedLocality(locality)}
                  className="bg-white border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-3xl p-6 text-left shadow-sm transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                    <MapPin className="text-orange-500" />
                  </div>

                  <h4 className="text-lg font-bold">{locality}</h4>

                  <p className="text-gray-500 text-sm mt-1">
                    View Tiffin Services
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TIFFIN LIST */}

        {selectedCity && selectedLocality && (
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-black">Tiffin Services</h3>

                <p className="text-gray-500 mt-1">
                  {selectedLocality}, {selectedCity}
                </p>
              </div>

              <button
                onClick={() => setSelectedLocality("")}
                className="text-orange-500 font-bold"
              >
                Change Locality
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {filteredTiffins.map((tiffin) => (
                <div
                  key={tiffin.id}
                  className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition"
                >
                  {/* IMAGE */}

                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop"
                    alt={tiffin.name}
                    className="h-52 w-full object-cover"
                  />

                  {/* CONTENT */}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-black">{tiffin.name}</h4>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ {tiffin.rating}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 mb-3">
                      <MapPin size={16} />

                      <span>
                        {tiffin.locality}, {tiffin.city}
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
                        navigate(`/`);
                      }}
                      className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-2xl font-bold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* NO TIFFINS */}

            {filteredTiffins.length === 0 && (
              <div className="bg-gray-100 rounded-3xl p-10 text-center">
                <h4 className="text-2xl font-black mb-2">No Tiffins Found</h4>

                <p className="text-gray-500">
                  No tiffin services available in this locality
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space mb-30"></div>
    </>
  );
};

export default TiffinFinder;
