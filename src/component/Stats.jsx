import React from 'react';
import { motion } from 'motion/react';
import { Users, Utensils, Calendar, Zap, MapPin } from 'lucide-react';

const StatPlate = ({ icon: Icon, number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay 
        }}
        className="w-44 h-44 md:w-52 md:h-52 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10 hover:shadow-orange-200/50 transition-shadow duration-300"
      >
        <div className="bg-orange-50 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
          {number}
        </h2>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
          {label}
        </p>

        {/* Subtle Plate Depth Ring */}
        <div className="absolute inset-2 border border-dashed border-gray-100 rounded-full pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "5,000+", label: "Happy Customers" },
    { icon: Utensils, number: "25k+", label: "Meals Delivered" },
    { icon: Calendar, number: "10+", label: "Years Exp" },
    { icon: Zap, number: "99%", label: "On-time Rate" },
    { icon: MapPin, number: "15+", label: "Areas Served" },
  ];

  return (
    <section className="relative py-24 bg-[#0a0f14] overflow-hidden">
      {/* Animated Background Strip */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 w-[400%] h-32 bg-orange-500/10 -rotate-2 -translate-y-1/2 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatPlate 
              key={index} 
              {...stat} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

export default StatsSection;