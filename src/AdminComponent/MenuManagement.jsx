import React, { useMemo, useState } from "react";

const MenuManagement = () => {
  /*
  =========================================
  SERVED MEALS
  =========================================
  */

  const [servedMeals, setServedMeals] = useState(["lunch", "dinner"]);

  const [foodType, setFoodType] = useState("veg");

  /*
  =========================================
  MENU TYPE
  common = same menu for all meals
  separate = combo based menu
  =========================================
  */

  const [menuType, setMenuType] = useState("common");

  /*
  =========================================
  DAY TYPE
  =========================================
  */

  const [dayType, setDayType] = useState("everyday");

  /*
  =========================================
  TODAY MEAL TYPE
  =========================================
  */

  const [todayMealType, setTodayMealType] = useState("daywise");

  /*
  =========================================
  TODAY MENU STATES
  =========================================
  */

  const [todayMealMenus, setTodayMealMenus] = useState({});

  const [todayCommonItems, setTodayCommonItems] = useState({});

  /*
  =========================================
  FOOD LIBRARY
  =========================================
  */

  /*
=========================================
FOOD LIBRARY
=========================================
*/

  const foodCategories = {
    Veg: {
      Roti: ["Chapati", "Butter Roti", "Tandoori Roti", "Paratha", "Poori"],

      Rice: ["Plain Rice", "Jeera Rice", "Veg Pulao", "Khichdi"],

      Dal: ["Dal Fry", "Dal Tadka", "Dal Makhani", "Gujarati Dal"],

      Sabji: [
        "Paneer Butter Masala",
        "Mix Veg",
        "Aloo Gobhi",
        "Bhindi Masala",
        "Rajma",
        "Chole",
        "Kadhi",
      ],

      Breakfast: ["Poha", "Upma", "Idli", "Dosa", "Sandwich"],

      Snacks: ["Samosa", "Kachori", "Pakoda", "Burger"],

      Sweets: ["Gulab Jamun", "Rasgulla", "Jalebi", "Halwa", "Kheer"],

      Salad: ["Green Salad", "Onion Salad", "Sprouts"],

      Drinks: ["Tea", "Coffee", "Lassi", "Juice", "Buttermilk"],
    },

    NonVeg: {
      Chicken: [
        "Butter Chicken",
        "Chicken Curry",
        "Chicken Masala",
        "Chicken Fry",
        "Chicken Biryani",
      ],

      Egg: [
        "Boiled Egg",
        "Egg Curry",
        "Egg Bhurji",
        "Omelette",
        "Egg Fried Rice",
      ],

      Fish: ["Fish Curry", "Fish Fry", "Fish Masala"],

      Mutton: ["Mutton Curry", "Mutton Masala", "Mutton Biryani"],

      Snacks: ["Chicken Roll", "Chicken Momos", "Chicken Burger"],
    },
  };

  /*
  =========================================
  FOOD LIBRARY ARRAY
  =========================================
  */
  const currentFoodCategories =
    foodType === "veg" ? foodCategories.Veg : foodCategories.NonVeg;

  const foodLibrary = Object.entries(currentFoodCategories).flatMap(
    ([category, foods]) =>
      foods.map((food) => ({
        name: food,
        category,
        quantity: "1 Plate",
        type: foodType,
      })),
  );
  /*
  =========================================
  FORM
  =========================================
  */

  const [form, setForm] = useState({
    menuName: "",
    combo: "lunch",
    days: [],
    selectedItems: [],
    customItem: "",
    customQty: "",
    status: "active",
  });

  /*
  =========================================
  MENUS
  =========================================
  */

  const [menus, setMenus] = useState([]);

  /*
  =========================================
  WEEK DAYS
  =========================================
  */

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  /*
  =========================================
  SERVED MEALS TOGGLE
  =========================================
  */

  const toggleServedMeal = (meal) => {
    if (servedMeals.includes(meal)) {
      setServedMeals(servedMeals.filter((m) => m !== meal));
    } else {
      setServedMeals([...servedMeals, meal]);
    }
  };

  /*
  =========================================
  MEAL COMBOS
  =========================================
  */

  const mealCombos = useMemo(() => {
    const combos = [];

    if (servedMeals.includes("breakfast")) {
      combos.push("breakfast");
    }

    if (servedMeals.includes("lunch")) {
      combos.push("lunch");
    }

    if (servedMeals.includes("dinner")) {
      combos.push("dinner");
    }

    return combos;
  }, [servedMeals]);

  /*
  =========================================
  DAY TOGGLE
  =========================================
  */

  const toggleDay = (day) => {
    if (form.days.includes(day)) {
      setForm({
        ...form,
        days: form.days.filter((d) => d !== day),
      });
    } else {
      setForm({
        ...form,
        days: [...form.days, day],
      });
    }
  };

  /*
  =========================================
  FOOD ITEM TOGGLE
  =========================================
  */

  const toggleFoodItem = (food) => {
    const exists = form.selectedItems.find((i) => i.name === food);

    if (exists) {
      setForm({
        ...form,
        selectedItems: form.selectedItems.filter((i) => i.name !== food),
      });
    } else {
      setForm({
        ...form,
        selectedItems: [
          ...form.selectedItems,
          {
            name: food,
            quantity: "1 Plate",
          },
        ],
      });
    }
  };

  /*
  =========================================
  UPDATE QUANTITY
  =========================================
  */

  const updateQty = (itemName, quantity) => {
    setForm({
      ...form,
      selectedItems: form.selectedItems.map((i) =>
        i.name === itemName
          ? {
              ...i,
              quantity,
            }
          : i,
      ),
    });
  };

  /*
  =========================================
  ADD CUSTOM ITEM
  =========================================
  */

  const addCustomItem = () => {
    if (!form.customItem) return;

    setForm({
      ...form,
      selectedItems: [
        ...form.selectedItems,
        {
          name: form.customItem,
          quantity: form.customQty || "1 Plate",
        },
      ],

      customItem: "",
      customQty: "",
    });
  };

  /*
  =========================================
  CREATE MENU
  =========================================
  */

  const createMenu = () => {
    if (!form.menuName) return;

    const newMenu = {
      id: Date.now(),

      menuName: form.menuName,

      combo: menuType === "common" ? "common" : form.combo,

      menuType,

      days: dayType === "everyday" ? ["Everyday"] : form.days,

      items: form.selectedItems,

      status: form.status,
    };

    setMenus([...menus, newMenu]);

    setForm({
      menuName: "",
      combo: mealCombos[0] || "lunch",
      days: [],
      selectedItems: [],
      customItem: "",
      customQty: "",
      status: "active",
    });
  };

  /*
  =========================================
  TODAY COMMON FOOD TOGGLE
  =========================================
  */

  const toggleTodayCommonFood = (meal, food) => {
    const existing = todayCommonItems[meal] || [];

    const alreadySelected = existing.some((item) => item.name === food.name);

    if (alreadySelected) {
      setTodayCommonItems({
        ...todayCommonItems,

        [meal]: existing.filter((item) => item.name !== food.name),
      });
    } else {
      setTodayCommonItems({
        ...todayCommonItems,

        [meal]: [...existing, food],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-4xl font-black">Menu Management</h1>

        <p className="text-gray-500 mt-2">
          Create meal wise & combo wise menus
        </p>
      </div>

      {/* SERVED MEALS */}

      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-5">Select Served Meals</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {["breakfast", "lunch", "dinner"].map((meal) => (
            <button
              key={meal}
              onClick={() => toggleServedMeal(meal)}
              className={`py-4 rounded-2xl font-bold capitalize transition ${
                servedMeals.includes(meal)
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>

      {/* CREATE MENU */}

      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Create Menu</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT */}

          <div className="space-y-6">
            {/* MENU TYPE */}

            <div>
              <label className="font-semibold block mb-3">Menu System</label>

              <div className="flex gap-3">
                <button
                  onClick={() => setMenuType("common")}
                  className={`flex-1 py-3 rounded-2xl font-bold ${
                    menuType === "common"
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Common Menu
                </button>

                <button
                  onClick={() => setMenuType("separate")}
                  className={`flex-1 py-3 rounded-2xl font-bold ${
                    menuType === "separate"
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Combo Based
                </button>
              </div>
            </div>

            {/* COMBOS */}

            {menuType === "separate" && (
              <div>
                <label className="font-semibold block mb-3">Select Combo</label>

                <div className="flex flex-wrap gap-3">
                  {mealCombos.map((combo) => (
                    <button
                      key={combo}
                      onClick={() =>
                        setForm({
                          ...form,
                          combo,
                        })
                      }
                      className={`px-4 py-3 rounded-2xl font-semibold capitalize ${
                        form.combo === combo
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {combo}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MENU NAME */}

            <div>
              <label className="font-semibold block mb-2">Menu Name</label>

              <input
                type="text"
                value={form.menuName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    menuName: e.target.value,
                  })
                }
                placeholder="Sunday Special Menu"
                className="w-full border rounded-2xl px-4 py-3"
              />
            </div>

            {/* DAY TYPE */}

            <div>
              <label className="font-semibold block mb-3">
                Menu Availability
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => setDayType("everyday")}
                  className={`flex-1 py-3 rounded-2xl font-bold ${
                    dayType === "everyday"
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Everyday
                </button>

                <button
                  onClick={() => setDayType("custom")}
                  className={`flex-1 py-3 rounded-2xl font-bold ${
                    dayType === "custom" ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  Day Wise
                </button>
              </div>
            </div>

            {/* DAYS */}

            {dayType === "custom" && (
              <div className="flex flex-wrap gap-3">
                {weekDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`px-4 py-2 rounded-xl font-semibold ${
                      form.days.includes(day)
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}

            {/* CUSTOM ITEM */}

            <div>
              <label className="font-semibold block mb-3">
                Add Custom Food Item
              </label>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={form.customItem}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      customItem: e.target.value,
                    })
                  }
                  placeholder="Custom Item"
                  className="border rounded-2xl px-4 py-3"
                />

                <input
                  type="text"
                  value={form.customQty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      customQty: e.target.value,
                    })
                  }
                  placeholder="Quantity"
                  className="border rounded-2xl px-4 py-3"
                />
              </div>

              <button
                onClick={addCustomItem}
                className="mt-3 bg-orange-500 text-white px-5 py-3 rounded-2xl font-bold"
              >
                Add Custom Item
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h3 className="text-xl font-bold mb-5">Food Library</h3>

            {/* VEG / NON VEG */}

            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setFoodType("veg")}
                className={`px-5 py-3 rounded-2xl font-bold ${
                  foodType === "veg" ? "bg-green-600 text-white" : "bg-gray-100"
                }`}
              >
                Veg Menu
              </button>

              <button
                onClick={() => setFoodType("nonveg")}
                className={`px-5 py-3 rounded-2xl font-bold ${
                  foodType === "nonveg"
                    ? "bg-red-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Non Veg Menu
              </button>
            </div>

            <div className="space-y-6 max-h-[700px] overflow-y-auto pr-2">
              {Object.entries(currentFoodCategories).map(([category, foods]) => (
                <div
                  key={category}
                  className="bg-gray-50 rounded-3xl p-5 border"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="font-black text-lg">{category}</h4>

                    <span className="text-sm text-gray-500">
                      {foods.length} Items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {foods.map((food) => {
                      const selected = form.selectedItems.find(
                        (i) => i.name === food,
                      );

                      return (
                        <div key={food} className="relative">
                          <button
                            onClick={() => toggleFoodItem(food)}
                            className={`px-5 py-3 rounded-2xl font-semibold border-2 transition ${
                              selected
                                ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-105"
                                : "bg-white border-gray-200 hover:border-orange-300"
                            }`}
                          >
                            {food}
                          </button>

                          {selected && (
                            <div className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                              ✓
                            </div>
                          )}

                          {selected && (
                            <input
                              type="text"
                              value={selected.quantity}
                              onChange={(e) => updateQty(food, e.target.value)}
                              className="mt-2 w-full border border-orange-300 rounded-xl px-3 py-2 text-sm"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CREATE BUTTON */}

        <button
          onClick={createMenu}
          className="mt-8 w-full bg-black text-white py-4 rounded-2xl text-lg font-bold"
        >
          Create Menu
        </button>
      </div>

      {/* ALL MENUS */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-black">All Menus</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="p-4">Menu Name</th>

                <th className="p-4">Menu Type</th>

                <th className="p-4">Combo</th>

                <th className="p-4">Days</th>

                <th className="p-4">Items</th>

                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {menus.map((menu) => (
                <tr key={menu.id} className="border-t">
                  <td className="p-4 font-bold">{menu.menuName}</td>

                  <td className="p-4 capitalize">{menu.menuType}</td>

                  <td className="p-4 capitalize">{menu.combo}</td>

                  <td className="p-4">{menu.days.join(", ")}</td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {menu.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-orange-100 text-orange-700 px-3 py-2 rounded-xl text-sm font-semibold"
                        >
                          {item.name} ({item.quantity})
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold ${
                        menu.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {menu.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TODAY MEAL */}

      <div className="bg-white rounded-3xl shadow-lg p-6 mt-10 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black">Today's Meal Setup</h2>

            <p className="text-gray-500 mt-1">Select today's active menu</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTodayMealType("daywise")}
              className={`px-5 py-3 rounded-2xl font-semibold ${
                todayMealType === "daywise"
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              Day Wise Menu
            </button>

            <button
              onClick={() => setTodayMealType("common")}
              className={`px-5 py-3 rounded-2xl font-semibold ${
                todayMealType === "common"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Common Menu
            </button>
          </div>
        </div>

        {/* DAYWISE */}

        {todayMealType === "daywise" && (
          <div className="grid lg:grid-cols-3 gap-6">
            {servedMeals.map((meal) => (
              <div key={meal} className="bg-gray-50 rounded-3xl p-5">
                <h3 className="text-xl font-bold capitalize mb-4">{meal}</h3>

                <select
                  value={todayMealMenus[meal] || ""}
                  onChange={(e) =>
                    setTodayMealMenus({
                      ...todayMealMenus,
                      [meal]: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                >
                  <option value="">Select Menu</option>

                  {menus.map((menu) => (
                    <option key={menu.id} value={menu.menuName}>
                      {menu.menuName}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {/* COMMON */}

        {todayMealType === "common" && (
          <div className="space-y-8">
            {servedMeals.map((meal) => (
              <div key={meal} className="bg-gray-50 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-black capitalize">{meal}</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Select food items
                    </p>
                  </div>

                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                    {(todayCommonItems[meal] || []).length} Selected
                  </span>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                  {foodLibrary.map((food, i) => {
                    const isSelected = todayCommonItems[meal]?.some(
                      (item) => item.name === food.name,
                    );

                    return (
                      <button
                        key={i}
                        onClick={() => toggleTodayCommonFood(meal, food)}
                        className={`rounded-2xl border-2 p-4 text-left transition ${
                          isSelected
                            ? "bg-orange-500 border-orange-500 text-white"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold">{food.name}</h4>

                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              isSelected
                                ? "bg-white text-orange-600"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {food.category}
                          </span>
                        </div>

                        <p
                          className={`text-sm ${
                            isSelected ? "text-orange-100" : "text-gray-500"
                          }`}
                        >
                          {food.quantity}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuManagement;
