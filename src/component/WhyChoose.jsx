import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Timer, Banknote, Settings2 } from 'lucide-react';
import whychoose  from '../assets/images/whychoose.png'

const FeatureItem = ({ icon: Icon, title, description, align = "center" }) => (
  <motion.div 
    initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col ${align === "left" ? "md:items-end md:text-right" : "md:items-start md:text-left"} items-center text-center`}
  >
    <div className="mb-4 p-3 bg-red-50 rounded-2xl text-red-500">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
      {description}
    </p>
  </motion.div>
);

const ChoiceSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:py-24 flex justify-center">
      <div className="bg-gray-300 max-w-6xl w-full rounded-[40px] p-8 md:p-14 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why choose <span className="font-serif italic font-light text-gray-400">us?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From routine maintenance to major repairs, we’ve got your car covered 
            with reliable and friendly service.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-16 order-2 lg:order-1">
            <FeatureItem 
              icon={ShieldCheck}
              title="Fresh & Hygienic"
              description="Prepared daily with quality ingredients and strict safety standards."
              align="left"
            />
            <FeatureItem 
              icon={Timer}
              title="On-time Delivery"
              description="Your meal reaches you hot and fresh, exactly when you expect it."
              align="left"
            />
          </div>

          {/* Center Image with Designer Offset Frame */}
          <div className="relative group order-1 lg:order-2 px-6">
            {/* The Offset Frame (Pinkish background) */}
            <div className="absolute top-6 -right-2 bottom-[-24px] left-10 bg-red-50 rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            
            {/* The Actual Image */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={whychoose}
                alt="Our Kitchen" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16 order-3">
            <FeatureItem 
              icon={Banknote}
              title="Affordable Pricing"
              description="Enjoy premium, nutritious homemade food at budget-friendly rates."
              align="right"
            />
            <FeatureItem 
              icon={Settings2}
              title="Customizable Plans"
              description="Adjust portion sizes or swap meals to fit your dietary needs."
              align="right"
            />
          </div>

        </div>

        {/* Footer Action */}
        <div className="text-center mt-20">
          <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-red-200 transition-all active:scale-95">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;