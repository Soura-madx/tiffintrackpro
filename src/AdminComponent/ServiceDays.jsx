import React from "react";
import { useState } from "react";
const ServiceDays = () => {



  const [tenantSettings, setTenantSettings] = useState({
    specialities: [],
    service_days: {
      monday: { regular: true, special: false, special_title: "" },
      tuesday: { regular: true, special: false, special_title: "" },
      wednesday: { regular: true, special: false, special_title: "" },
      thursday: { regular: true, special: false, special_title: "" },
      friday: { regular: true, special: false, special_title: "" },
      saturday: { regular: true, special: false, special_title: "" },
      sunday: {
        regular: false,
        special: true,
        special_title: "Sunday Special Thali",
      },
    },
  });



   const addSpeciality = () => {
    const title = prompt("Enter speciality");

    if (!title) return;

    setTenantSettings({
      ...tenantSettings,
      specialities: [
        ...tenantSettings.specialities,
        title,
      ],
    });
  };

  // =========================
  // TOGGLE SERVICE DAY
  // =========================

  const toggleService = (day, type) => {
    setTenantSettings({
      ...tenantSettings,
      service_days: {
        ...tenantSettings.service_days,
        [day]: {
          ...tenantSettings.service_days[day],
          [type]:
            !tenantSettings.service_days[day][type],
        },
      },
    });
  };

  return (
    <div>
      {/* GLOBAL SETTINGS */}
      <div className="bg-white rounded-3xl shadow p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">Global Tiffin Settings</h2>

        {/* SPECIALITIES */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Specialities</h3>

            <button
              onClick={addSpeciality}
              className="bg-black text-white px-4 py-2 rounded-xl"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {tenantSettings.specialities.map((item, index) => (
              <div
                key={index}
                className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICE DAYS */}
        <div>
          <h3 className="font-bold text-lg mb-4">Service Schedule</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(tenantSettings.service_days).map(([day, data]) => (
              <div key={day} className="border rounded-2xl p-5">
                <h4 className="font-bold capitalize mb-4">{day}</h4>

                <div className="space-y-3">
                  <button
                    onClick={() => toggleService(day, "regular")}
                    className={`w-full py-2 rounded-xl font-semibold ${
                      data.regular ? "bg-green-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    Regular Service
                  </button>

                  <button
                    onClick={() => toggleService(day, "special")}
                    className={`w-full py-2 rounded-xl font-semibold ${
                      data.special ? "bg-orange-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    Special Service
                  </button>

                  {data.special && (
                    <input
                      type="text"
                      value={data.special_title}
                      placeholder="Special title"
                      onChange={(e) => {
                        setTenantSettings({
                          ...tenantSettings,
                          service_days: {
                            ...tenantSettings.service_days,
                            [day]: {
                              ...data,
                              special_title: e.target.value,
                            },
                          },
                        });
                      }}
                      className="w-full border rounded-xl p-3"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDays;
