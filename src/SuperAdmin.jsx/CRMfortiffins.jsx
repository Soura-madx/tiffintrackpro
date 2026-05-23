import React from "react";
import {
  Play,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Clock3,
  Users,
  IndianRupee,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TiffinCRMWebsite = () => {
  const navigate = useNavigate();
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/919981436647?text=Hi%20I%20want%20to%20start%20free%20trial%20for%20Tiffin%20Business%20Management%20System",
      "_blank",
    );
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      desc: "Perfect for small tiffin centers",
      features: [
        "Customer Management",
        "Plan Management",
        "Delivery Tracking",
        "Daily Order Status",
        "WhatsApp Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2499",
      popular: true,
      desc: "Best for growing businesses",
      features: [
        "Everything in Starter",
        "Delivery Boy Panel",
        "Area-wise Auto Assignment",
        "Website for Customers",
        "Reports & Analytics",
        "Subscription Management",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For multi-center tiffin operations",
      features: [
        "Unlimited Staff",
        "Advanced CRM",
        "Custom Features",
        "Priority Support",
        "Dedicated Setup",
      ],
    },
  ];

  const services = [
    {
      title: "Customer Follow-up Problem",
      desc: "Track leads, active customers and renewals automatically.",
      icon: Users,
    },
    {
      title: "Delivery Confusion",
      desc: "Auto assign orders area-wise to delivery boys.",
      icon: MapPin,
    },
    {
      title: "Monthly Payment Issues",
      desc: "Manage subscriptions, dues and reminders easily.",
      icon: IndianRupee,
    },
    {
      title: "Manual Operations",
      desc: "Manage plans, meals and customers digitally.",
      icon: Clock3,
    },
    {
      title: "No Online Presence",
      desc: "Get your own customer-facing website instantly.",
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      q: "Is this software only for tiffin services?",
      a: "Yes, this CRM is specially designed for tiffin centers and meal subscription businesses.",
    },
    {
      q: "Will I get my own website?",
      a: "Yes, every tenant gets their own tiffin website for customers.",
    },
    {
      q: "Can I manage delivery boys?",
      a: "Yes, you can assign areas, orders and delivery routes easily.",
    },
    {
      q: "Do customers get login access?",
      a: "Yes, customers can track plans, deliveries and subscriptions.",
    },
    {
      q: "Is free trial available?",
      a: "Yes, we provide a 7 days free trial.",
    },
  ];

  return (
    <div className="bg-[#f8f8f8] text-gray-900 overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">
              Tiffin<span className="text-orange-500">CRM</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-10 font-medium">
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>

            <a href="#pricing" className="hover:text-orange-500">
              Pricing
            </a>

            <a href="#faq" className="hover:text-orange-500">
              FAQ
            </a>

            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </nav>

          <button
            onClick={openWhatsapp}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold transition-all"
          >
            Book Free Trial
          </button>
        </div>
      </header>

      {/* HERO */}
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                Tiffin Business Management System
              </span>

              <h1 className="text-3xl lg:text-5xl font-black leading-tight">
                You Focus On
                <span className="text-orange-500"> Food</span>,
                <br />
                We Manage The
                <span className="text-orange-500"> Operations</span>
              </h1>

              <p className="text-gray-300 text-sm mt-8 leading-relaxed max-w-2xl">
                Manage customers, subscriptions, deliveries, payments, delivery
                boys, plans and your complete tiffin business with one smart CRM
                system.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/919981436647"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Start Free Trial
                </a>

                <button
                  onClick={() => navigate("/register")}
                  className="border border-white/20 hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Register
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-14">
                <div>
                  <h3 className="text-3xl font-black text-orange-500">100+</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Orders Managed Daily
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-orange-500">24/7</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Delivery Tracking
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-orange-500">Smart</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Automation System
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-[40px]" />

              {/* VIDEO CARD */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                {/* TOP BAR */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-black/30">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />

                  <p className="text-sm text-gray-400 ml-4">
                    TiffinCRM Demo Video
                  </p>
                </div>

                {/* VIDEO */}
                <div className="aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/videos/demo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Problems We Solve</h2>

            <p className="text-gray-500 text-lg mt-5">
              Designed specially for modern tiffin centers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-[#f8f8f8] hover:bg-orange-500 hover:text-white transition-all rounded-[32px] p-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-black mb-4">{service.title}</h3>

                  <p className="leading-relaxed text-gray-600 group-hover:text-white/90">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FREE TRIAL */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-orange-500 rounded-[40px] p-14 text-center text-white">
          <h2 className="text-5xl font-black">Start Your 7 Days Free Trial</h2>

          <p className="text-xl text-orange-100 mt-6 max-w-3xl mx-auto">
            Experience customer management, delivery tracking, subscription
            handling and your own tiffin website.
          </p>

          <button
            onClick={openWhatsapp}
            className="mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Pricing Plans</h2>

            <p className="text-gray-500 text-lg mt-5">
              Flexible plans for every tiffin center
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-[36px] p-10 border relative ${
                  plan.popular
                    ? "bg-black text-white border-black scale-105"
                    : "bg-[#f8f8f8] border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-black">{plan.name}</h3>

                <p
                  className={`mt-3 ${
                    plan.popular ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mt-8">
                  <span className="text-6xl font-black">{plan.price}</span>

                  {plan.price !== "Custom" && (
                    <span className="text-lg ml-2">/month</span>
                  )}
                </div>

                <div className="space-y-4 mt-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openWhatsapp}
                  className={`w-full mt-10 py-4 rounded-2xl font-bold ${
                    plan.popular
                      ? "bg-orange-500 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM ACCESS SECTION */}
      <section className="py-24 bg-[#0f0f0f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* HEADING */}
          <div className="text-center mb-20">
            <span className="bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold border border-orange-500/20">
              Complete Ecosystem
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
              One System For
              <span className="text-orange-500"> Entire Tiffin Business</span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              From customer orders to delivery tracking and business management,
              every panel is connected together in one smart platform.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* TENANT PANEL */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Main Business Control
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">Tenant Panel</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Complete business management panel for tiffin owners to manage
                  customers, subscriptions, orders, plans, payments, delivery
                  boys, reports and daily operations.
                </p>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Customer Management",
                    "Plan Management",
                    "Order Tracking",
                    "Reports & Analytics",
                    "Delivery Assignment",
                    "Payment Management",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* PLATFORM */}
                <div className="flex gap-3 mt-8">
                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Web App
                  </span>

                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Mobile App
                  </span>
                </div>
              </div>
            </div>

            {/* DELIVERY PANEL */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Delivery Operations
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">Delivery Boy Panel</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Smart delivery management system where delivery boys can track
                  orders, delivery locations, customer details and update order
                  status.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Assigned Orders",
                    "Live Delivery Status",
                    "Customer Address",
                    "Call Customer",
                    "Daily Earnings",
                    "Route Tracking",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Web App
                  </span>

                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Mobile App
                  </span>
                </div>
              </div>
            </div>

            {/* PUBLIC WEBSITE */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Customer Acquisition
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">Public Website</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  SEO-friendly customer website where users can search nearby
                  tiffin services, view plans, menus, reviews and place
                  subscription requests.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Search Tiffin",
                    "View Plans",
                    "Menus & Pricing",
                    "Google Reviews",
                    "Subscription Request",
                    "Location Based Search",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CUSTOMER PANEL */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Customer Experience
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">
                  Customer Authentication
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Dedicated customer login system where customers can manage
                  subscriptions, pause meals, track deliveries and access
                  billing information.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Pause Subscription",
                    "Track Orders",
                    "View Bills",
                    "Manage Profile",
                    "Renew Plans",
                    "Meal Updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Secure Login
                  </span>

                  <span className="bg-black border border-white/10 px-4 py-2 rounded-full text-sm">
                    Mobile Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{faq.q}</h3>

                  <ChevronDown className="w-5 h-5" />
                </div>

                <p className="text-gray-600 mt-5 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Let’s Grow Your
              <br />
              Tiffin Business
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Talk with us and see how our CRM helps manage customers,
              deliveries and subscriptions easily.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Phone className="text-orange-500" />
                </div>

                <div>
                  <p className="text-gray-500">Phone Number</p>

                  <h4 className="font-bold text-xl">+91 9981436647</h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Mail className="text-orange-500" />
                </div>

                <div>
                  <p className="text-gray-500">Email</p>

                  <h4 className="font-bold text-xl">support@tiffincrm.com</h4>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#f8f8f8] rounded-[40px] p-10">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-white rounded-2xl px-5 py-4 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your tiffin business"
                className="bg-white rounded-2xl px-5 py-4 outline-none"
              />

              <button
                onClick={openWhatsapp}
                className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-black">TiffinCRM</h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Smart CRM software specially designed for tiffin centers and meal
              subscription businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">Quick Links</h4>

            <div className="space-y-3 text-gray-400">
              <p>Services</p>
              <p>Pricing</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">Features</h4>

            <div className="space-y-3 text-gray-400">
              <p>Customer Management</p>
              <p>Delivery Tracking</p>
              <p>Plan Management</p>
              <p>Subscription System</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">Contact</h4>

            <div className="space-y-3 text-gray-400">
              <p>+91 9981436647</p>
              <p>support@tiffincrm.com</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
          © 2026 TiffinCRM. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default TiffinCRMWebsite;
