import React, { useState } from "react";
import {
  Clock3,
  Leaf,
  Drumstick,
  Star,
  Flame,
} from "lucide-react";
import Navbar from "./Navbar";

const MenuPage = () => {
  /*
  =========================================
  DUMMY MENU DATA
  =========================================
  */

  const menuData = [
    {
      id: 1,
      menuName: "Monday Lunch Special",
      mealType: "Lunch",
      category: "Veg",
      available: true,
      timing: "12:00 PM - 3:00 PM",

      items: [
        {
          name: "Chapati",
          qty: "4 pcs",
        },

        {
          name: "Dal Tadka",
          qty: "1 Bowl",
        },

        {
          name: "Jeera Rice",
          qty: "1 Plate",
        },

        {
          name: "Mix Veg",
          qty: "1 Bowl",
        },

        {
          name: "Salad",
          qty: "1 Plate",
        },
      ],

      price: 90,

      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      menuName: "Dinner Delight",
      mealType: "Dinner",
      category: "Non Veg",
      available: true,
      timing: "7:00 PM - 10:00 PM",

      items: [
        {
          name: "Butter Roti",
          qty: "4 pcs",
        },

        {
          name: "Chicken Curry",
          qty: "1 Bowl",
        },

        {
          name: "Veg Pulao",
          qty: "1 Plate",
        },

        {
          name: "Onion Salad",
          qty: "1 Plate",
        },
      ],

      price: 140,

      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      menuName: "Healthy Breakfast",
      mealType: "Breakfast",
      category: "Veg",
      available: true,
      timing: "8:00 AM - 10:00 AM",

      items: [
        {
          name: "Poha",
          qty: "1 Plate",
        },

        {
          name: "Tea",
          qty: "1 Cup",
        },

        {
          name: "Sprouts",
          qty: "1 Bowl",
        },
      ],

      price: 60,

      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  /*
  =========================================
  FILTERS
  =========================================
  */

  const [activeMeal, setActiveMeal] =
    useState("All");

  const [activeCategory, setActiveCategory] =
    useState("All");

  /*
  =========================================
  FILTERED MENUS
  =========================================
  */

  const filteredMenus = menuData.filter(
    (menu) => {
      const mealMatch =
        activeMeal === "All" ||
        menu.mealType === activeMeal;

      const categoryMatch =
        activeCategory === "All" ||
        menu.category === activeCategory;

      return mealMatch && categoryMatch;
    },
  );

  return (
    <>
    <Navbar/>
    <div className="min-h-screen pt-20  bg-[#f6f6f6]">
      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <div className="bg-white border-b ">
        <div className="max-w-7xl mx-auto px-5 py-12 ">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                🍱 Today's Fresh Meals
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Explore Delicious
                <span className="text-orange-500">
                  {" "}
                  Tiffin Menus
                </span>
              </h1>

              <p className="text-gray-500 text-lg mt-4 max-w-2xl">
                Fresh homemade food prepared daily
                with hygienic ingredients and
                changing menus.
              </p>
            </div>

            {/* RIGHT */}

            <div className="bg-orange-50 rounded-3xl p-6 min-w-[260px] border border-orange-100">
              <h3 className="font-black text-3xl text-gray-900">
                25+
              </h3>

              <p className="text-gray-500 mt-1">
                Daily Meal Options
              </p>

              <div className="mt-5 flex items-center gap-2 text-orange-500 font-semibold">
                <Star
                  size={18}
                  className="fill-orange-400"
                />
                4.8 Average Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* FILTERS */}
      {/* ========================================= */}

      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white rounded-3xl p-5 shadow-sm border">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
            {/* MEAL FILTER */}

            <div>
              <p className="font-semibold text-gray-700 mb-3">
                Meal Type
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "All",
                  "Breakfast",
                  "Lunch",
                  "Dinner",
                ].map((meal) => (
                  <button
                    key={meal}
                    onClick={() =>
                      setActiveMeal(meal)
                    }
                    className={`px-5 py-3 rounded-2xl font-semibold transition ${
                      activeMeal === meal
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {meal}
                  </button>
                ))}
              </div>
            </div>

            {/* CATEGORY FILTER */}

            <div>
              <p className="font-semibold text-gray-700 mb-3">
                Food Category
              </p>

              <div className="flex gap-3">
                {["All", "Veg", "Non Veg"].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setActiveCategory(
                          category,
                        )
                      }
                      className={`px-5 py-3 rounded-2xl font-semibold transition flex items-center gap-2 ${
                        activeCategory ===
                        category
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {category === "Veg" && (
                        <Leaf size={16} />
                      )}

                      {category ===
                        "Non Veg" && (
                        <Drumstick size={16} />
                      )}

                      {category}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* MENU GRID */}
      {/* ========================================= */}

      <div className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMenus.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}

              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.menuName}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* CATEGORY */}

                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold ${
                    menu.category === "Veg"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {menu.category}
                </div>

                {/* PRICE */}

                <div className="absolute bottom-4 right-4 bg-white text-gray-900 px-5 py-3 rounded-2xl font-black shadow-lg">
                  ₹{menu.price}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                {/* TOP */}

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      {menu.menuName}
                    </h2>

                    <div className="flex items-center gap-2 text-gray-500 mt-2">
                      <Clock3 size={16} />

                      <span className="text-sm font-medium">
                        {menu.timing}
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-xl text-sm font-bold">
                    {menu.mealType}
                  </div>
                </div>

                {/* ITEMS */}

                <div className="space-y-3">
                  {menu.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />

                        <span className="font-semibold text-gray-800">
                          {item.name}
                        </span>
                      </div>

                      <span className="text-sm text-gray-500 font-medium">
                        {item.qty}
                      </span>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-orange-500">
                    <Flame size={18} />

                    <span className="font-semibold text-sm">
                      Freshly Prepared
                    </span>
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}

        {filteredMenus.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center border">
            <h3 className="text-3xl font-black text-gray-900">
              No Menu Found
            </h3>

            <p className="text-gray-500 mt-3">
              Try changing filters.
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MenuPage;