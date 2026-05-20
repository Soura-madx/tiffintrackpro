import React from "react";
import {
  MapPin,
  Clock3,
  Phone,
  Star,
  Truck,
  UtensilsCrossed,
  BadgeCheck,
  
} from "lucide-react";
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import mainImage from "../assets/images/tiffin.jpg";
import smallImage from "../assets/images/about.avif";

const KitchenSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100">
        
        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          
          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            
            {/* TOP */}
            <div>
              {/* TAG */}
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <BadgeCheck size={16} />
                Verified Tiffin Partner
              </div>

              {/* TITLE */}
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                Sharma Ji’s
                <span className="text-orange-500"> Kitchen</span>
              </h2>

              {/* TAGLINE */}
              <p className="text-lg text-gray-500 mt-3 font-medium">
                Homemade Meals • Hygienic Kitchen • Fast Delivery
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed mt-6 text-[15px] md:text-base">
                Fresh and healthy tiffin service with changing daily menus,
                homemade taste, and quick delivery across your locality.
                Perfect for students, office workers, and families.
              </p>

              {/* INFO GRID */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <Clock3 size={18} />
                    <span className="font-bold text-sm">
                      Delivery Timing
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-6">
                    Breakfast: 8 AM <br />
                    Lunch: 1 PM <br />
                    Dinner: 8 PM
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <MapPin size={18} />
                    <span className="font-bold text-sm">
                      Service Areas
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-6">
                    MP Nagar <br />
                    Arera Colony
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <Truck size={18} />
                    <span className="font-bold text-sm">
                      Services
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-6">
                    Delivery <br />
                    Takeaway
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <UtensilsCrossed size={18} />
                    <span className="font-bold text-sm">
                      Food Type
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-6">
                    Veg & Non Veg <br />
                    Daily Changing Menu
                  </p>
                </div>

              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              
              {/* OWNER */}
              <div>
                <p className="text-gray-400 text-sm">
                  Owner
                </p>

                <h4 className="font-bold text-gray-900 text-lg">
                  Rajesh Sharma
                </h4>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <Phone size={14} />
                  +91 9876543210
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl font-bold shadow-lg shadow-orange-200 transition-all duration-300">
                  View Plans
                </button>

                <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-orange-50 flex items-center justify-center transition">
                  <FaInstagram
                    size={20}
                    className="text-gray-700"
                  />
                </button>

                <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-orange-50 flex items-center justify-center transition">
                  <FaFacebook
                    size={20}
                    className="text-gray-700"
                  />
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[420px] lg:min-h-full bg-[#fff7f2] flex items-center justify-center overflow-hidden">
            
            {/* BACKGROUND SHAPE */}
            <div className="absolute w-[420px] h-[420px] bg-orange-100 rounded-full blur-3xl opacity-60" />

            {/* MAIN IMAGE */}
            <img
              src={mainImage}
              alt="Tiffin"
              className="relative z-10 w-[78%] h-[78%] object-cover rounded-[36px] shadow-2xl border-8 border-white"
            />

            {/* FLOATING SMALL IMAGE */}
            <div className="absolute top-6 right-6 z-20">
              <img
                src={smallImage}
                alt="Dish"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-3xl border-4 border-white shadow-2xl"
              />
            </div>

            {/* FLOATING RATING */}
            <div className="absolute bottom-7 left-7 bg-white px-5 py-4 rounded-2xl shadow-xl z-20 border border-gray-100">
              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="text-yellow-500 fill-yellow-400"
                />
                <span className="font-black text-gray-900">
                  4.8 Rating
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                1200+ Happy Customers
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenSection;