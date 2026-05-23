import React, { useState } from "react";
import { Upload, Clock3, MapPin, ImagePlus, Plus, Trash2 } from "lucide-react";

const TenantRegistration = () => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const localityOptions = [
    "Indira Nagar",
    "Aliganj",
    "Gomti Nagar",
    "Hazratganj",
    "Jankipuram",
    "Mahanagar",
  ];

  const [form, setForm] = useState({
    tiffinName: "",
    ownerName: "",
    tagline: "",
    address: "",
    mobile: "",
    city: "",
    pincode: "",
    googleReview: "",
    email: "",

    experience: "",

    serviceType: ["delivery"],

    specialties: [],

    socialLinks: {
      instagram: "",
      facebook: "",
      youtube: "",
      website: "",
    },

    shiftType: "timing",

    morningOpen: "",
    morningClose: "",

    eveningOpen: "",
    eveningClose: "",

    breakfastDelivery: "",
    lunchDelivery: "",
    dinnerDelivery: "",

    timingType: "everyday",

    selectedDays: [],

    deliveryAreas: [],

    extraLocality: "",
  });

  const [logo, setLogo] = useState(null);

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const specialtiesList = [
    "Everyday Changing Menu",
    "Hygienic Food",
    "Fast Delivery",
    "Low Oil Food",
    "Home Style Food",
    "Fresh Ingredients",
    "Pocket Friendly",
    "Diet Meals",
    "High Protein Meals",
    "Pure Veg",
  ];

  const services = ["delivery", "takeaway", "dine-in", "drive through"];

  // TOGGLE DAYS

  const toggleDay = (day) => {
    if (form.selectedDays.includes(day)) {
      setForm({
        ...form,
        selectedDays: form.selectedDays.filter((d) => d !== day),
      });
    } else {
      setForm({
        ...form,
        selectedDays: [...form.selectedDays, day],
      });
    }
  };

  // TOGGLE SERVICES

  const toggleService = (service) => {
    if (form.serviceType.includes(service)) {
      setForm({
        ...form,
        serviceType: form.serviceType.filter((s) => s !== service),
      });
    } else {
      setForm({
        ...form,
        serviceType: [...form.serviceType, service],
      });
    }
  };

  // TOGGLE SPECIALITIES

  const toggleSpeciality = (item) => {
    if (form.specialties.includes(item)) {
      setForm({
        ...form,
        specialties: form.specialties.filter((s) => s !== item),
      });
    } else {
      setForm({
        ...form,
        specialties: [...form.specialties, item],
      });
    }
  };

  // ADD DELIVERY AREA

  const addDeliveryArea = () => {
    if (!form.extraLocality) return;

    setForm({
      ...form,
      deliveryAreas: [...form.deliveryAreas, form.extraLocality],
      extraLocality: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-4xl font-black">Tiffin Center Registration</h1>

          <p className="text-gray-500 mt-2">
            Register your tiffin service & start receiving orders
          </p>
        </div>

        {/* FORM */}

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT SIDE */}

            <div className="space-y-6">
              {/* TIFFIN NAME */}

              <div>
                <label className="font-bold block mb-2">
                  Tiffin Center Name
                </label>

                <input
                  type="text"
                  placeholder="Sourabh Tiffin Service"
                  value={form.tiffinName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tiffinName: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* OWNER NAME */}

              <div>
                <label className="font-bold block mb-2">Owner Name</label>

                <input
                  type="text"
                  placeholder="Owner Name"
                  value={form.ownerName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ownerName: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* TAGLINE */}

              <div>
                <label className="font-bold block mb-2">Tag Line</label>

                <input
                  type="text"
                  placeholder="Healthy & Homemade Food"
                  value={form.tagline}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tagline: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="font-semibold text-sm">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>

              {/* ADDRESS */}

              <div>
                <label className="font-bold block mb-2">Address</label>

                <textarea
                  rows="4"
                  placeholder="Full Address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* MOBILE */}

              <div>
                <label className="font-bold block mb-2">Mobile Number</label>

                <input
                  type="number"
                  placeholder="9876543210"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobile: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* CITY & PINCODE */}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold block mb-2">City</label>

                  <input
                    type="text"
                    placeholder="Lucknow"
                    value={form.city}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                    className="w-full border rounded-2xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-2">Pincode</label>

                  <input
                    type="number"
                    placeholder="226010"
                    value={form.pincode}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pincode: e.target.value,
                      })
                    }
                    className="w-full border rounded-2xl px-4 py-3"
                  />
                </div>
              </div>

              {/* LOGO */}

              <div>
                <label className="font-bold block mb-3">Upload Logo</label>

                <label className="border-2 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50">
                  <Upload size={40} />

                  <p className="mt-3 font-semibold">Upload Logo</p>

                  <input
                    type="file"
                    hidden
                    onChange={(e) => setLogo(e.target.files[0])}
                  />
                </label>

                {logo && (
                  <p className="mt-3 text-sm text-green-600 font-semibold">
                    {logo.name}
                  </p>
                )}
              </div>

              {/* IMAGES */}

              <div>
                <label className="font-bold block mb-3">
                  Tiffin Center Images
                </label>

                <label className="border-2 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50">
                  <ImagePlus size={40} />

                  <p className="mt-3 font-semibold">Upload 4-5 Images</p>

                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={(e) => setImages([...e.target.files])}
                  />
                </label>

                {images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl text-sm font-semibold"
                      >
                        {img.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-6">
              {/* SERVICE DAYS */}

              <div>
                <label className="font-bold block mb-3">Service Days</label>

                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() =>
                      setForm({
                        ...form,
                        timingType: "everyday",
                      })
                    }
                    className={`px-5 py-3 rounded-2xl font-bold ${
                      form.timingType === "everyday"
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    Everyday
                  </button>

                  <button
                    onClick={() =>
                      setForm({
                        ...form,
                        timingType: "custom",
                      })
                    }
                    className={`px-5 py-3 rounded-2xl font-bold ${
                      form.timingType === "custom"
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    Select Days
                  </button>
                </div>

                {form.timingType === "custom" && (
                  <div className="flex flex-wrap gap-3">
                    {weekDays.map((day) => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`px-4 py-2 rounded-xl font-semibold ${
                          form.selectedDays.includes(day)
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* SHIFT */}

              <div>
                <label className="font-bold block mb-3">Service Shift</label>

                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() =>
                      setForm({
                        ...form,
                        shiftType: "timing",
                      })
                    }
                    className={`px-5 py-3 rounded-2xl font-bold ${
                      form.shiftType === "timing"
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    Timing
                  </button>

                  <button
                    onClick={() =>
                      setForm({
                        ...form,
                        shiftType: "24hrs",
                      })
                    }
                    className={`px-5 py-3 rounded-2xl font-bold ${
                      form.shiftType === "24hrs"
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    24 Hours
                  </button>
                </div>

                {form.shiftType === "timing" && (
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="time"
                      className="border rounded-2xl px-4 py-3"
                    />

                    <input
                      type="time"
                      className="border rounded-2xl px-4 py-3"
                    />
                  </div>
                )}
              </div>

              {/* DELIVERY TIMING */}

              <div>
                <label className="font-bold block mb-4">Delivery Timing</label>

                <div className="space-y-4">
                  {["breakfast", "lunch", "dinner"].map((meal) => (
                    <div key={meal} className="bg-gray-50 rounded-2xl p-4">
                      <p className="font-bold capitalize mb-3">{meal}</p>

                      <input
                        type="text"
                        placeholder="8 AM - 10 AM"
                        value={form[`${meal}Delivery`]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            [`${meal}Delivery`]: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SERVICES */}

              <div>
                <label className="font-bold block mb-3">
                  Services Available
                </label>

                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-3 rounded-2xl font-semibold capitalize ${
                        form.serviceType.includes(service)
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* SPECIALITIES */}

              <div>
                <label className="font-bold block mb-3">Specialities</label>

                <div className="flex flex-wrap gap-3">
                  {specialtiesList.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleSpeciality(item)}
                      className={`px-4 py-3 rounded-2xl font-semibold ${
                        form.specialties.includes(item)
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* SOCIAL LINKS */}

              <div>
                <label className="font-bold block mb-3">Social Links</label>

                <div className="space-y-3">
                  {["instagram", "facebook", "youtube", "website"].map(
                    (social) => (
                      <input
                        key={social}
                        type="text"
                        placeholder={`${social} link`}
                        value={form.socialLinks[social]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            socialLinks: {
                              ...form.socialLinks,
                              [social]: e.target.value,
                            },
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3"
                      />
                    ),
                  )}
                </div>
              </div>

              {/* GOOGLE REVIEW */}

              <div>
                <label className="font-bold block mb-2">
                  Google Review Link
                </label>

                <input
                  type="text"
                  placeholder="Paste Google Review Link"
                  value={form.googleReview}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      googleReview: e.target.value,
                    })
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />
              </div>

              {/* EXPERIENCE */}
              <div>
                <label className="font-semibold text-sm">
                  Years Of Experience
                </label>

                <input
                  type="number"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="5"
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>

              {/* DELIVERY AREAS */}

              <div>
                <label className="font-bold block mb-3">Delivery Areas</label>

                <div className="flex gap-3">
                  <select
                    value={form.extraLocality}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        extraLocality: e.target.value,
                      })
                    }
                    className="flex-1 border rounded-2xl px-4 py-3"
                  >
                    <option value="">Select Locality</option>

                    {localityOptions.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={addDeliveryArea}
                    className="bg-orange-500 text-white px-5 rounded-2xl"
                  >
                    <Plus />
                  </button>
                </div>

                {/* AREA LIST */}

                <div className="flex flex-wrap gap-3 mt-4">
                  {form.deliveryAreas.map((area, i) => (
                    <div
                      key={i}
                      className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                      <MapPin size={16} />

                      {area}

                      <button
                        onClick={() =>
                          setForm({
                            ...form,
                            deliveryAreas: form.deliveryAreas.filter(
                              (_, index) => index !== i,
                            ),
                          })
                        }
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}

          <button className="mt-10 w-full bg-black text-white py-4 rounded-2xl text-lg font-bold hover:scale-[1.01] transition">
            Register Tiffin Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantRegistration;
