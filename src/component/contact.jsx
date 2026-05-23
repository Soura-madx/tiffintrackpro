import React, { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock3,
} from "lucide-react";
import Navbar from "./Navbar";

const ContactPage = () => {
  /*
  =========================================
  FORM
  =========================================
  */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    locality: "",
    tenant_name: "",
    query_type: "",
    message: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  /*
  =========================================
  HANDLE CHANGE
  =========================================
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  =========================================
  SUBMIT
  =========================================
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        locality: "",
        tenant_name: "",
        query_type: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f7f7f7] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-14">
          <h1 className="text-5xl font-black text-gray-900">
            Contact Tiffin Service
          </h1>

          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Send your food related queries,
            complaints, delivery issues or
            subscription questions directly
            to your selected tiffin provider.
          </p>
        </div>

        {/* MAIN */}

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black">
                Customer Query Form
              </h2>

              <p className="text-gray-500 mt-2">
                Fill all required details
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* NAME */}

                <div>
                  <label className="font-semibold text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    required
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label className="font-semibold text-sm">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    required
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="font-semibold text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@gmail.com"
                    className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                  />
                </div>

                {/* CITY */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-semibold text-sm">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Bhopal"
                      className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-sm">
                      Locality
                    </label>

                    <input
                      type="text"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      placeholder="MP Nagar"
                      className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* TIFFIN */}

               

                {/* QUERY TYPE */}

                <div>
                  <label className="font-semibold text-sm">
                    Query Type
                  </label>

                  <select
                    name="query_type"
                    value={
                      formData.query_type
                    }
                    onChange={handleChange}
                    className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    required
                  >
                    <option value="">
                      Select Query Type
                    </option>

                    <option value="subscription">
                      Subscription Issue
                    </option>

                    <option value="delivery">
                      Delivery Problem
                    </option>

                    <option value="food">
                      Food Quality
                    </option>

                    <option value="refund">
                      Refund Request
                    </option>

                    <option value="support">
                      Customer Support
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="font-semibold text-sm">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your query..."
                    className="w-full border rounded-2xl p-4 mt-2 outline-none focus:border-orange-500"
                    required
                  />
                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  <Send size={18} />

                  Submit Query
                </button>
              </form>
            ) : (
              <div className="py-20 text-center">
                <div className="text-7xl mb-5">
                  🎉
                </div>

                <h2 className="text-4xl font-black mb-3">
                  Query Submitted
                </h2>

                <p className="text-gray-500 text-lg">
                  Tenant will contact you
                  shortly.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            {/* CARD */}

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
                <Phone className="text-orange-500 w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black mb-2">
                Customer Support
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Contact your tiffin provider
                for meal delivery, subscription
                or payment related support.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-500" />

                  <span className="font-semibold">
                    +91 9981436647
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-orange-500" />

                  <span className="font-semibold">
                    support@tiffintrackpro.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-500" />

                  <span className="font-semibold">
                    Bhopal, Madhya Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* TIMINGS */}

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Clock3 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black mb-3">
                Support Timings
              </h3>

              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>

                  <span>8:00 AM - 10:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>

                  <span>9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}

            <div className="bg-green-500 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <MessageCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black mb-3">
                WhatsApp Support
              </h3>

              <p className="text-white/90 mb-6">
                Get quick support directly on
                WhatsApp.
              </p>

              <a
                href="https://wa.me/919981436647"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-2xl font-bold inline-flex"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;