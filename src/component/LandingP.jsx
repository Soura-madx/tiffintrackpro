import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836")' 
        }}
      >
        {/* Dark Overlay (Replaces .hero::after) */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Fresh, Homemade <span className="text-[#ff6a00]">Tiffin</span> Delivered to Your Doorstep by <span className="text-[#ff6a00]">Sharma's Kitchen</span> 
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Enjoy healthy, hygienic, and delicious meals every day — just like home.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-[#ff6a00] hover:bg-[#e65f00] text-white font-semibold rounded-md transition-all duration-300 shadow-lg active:scale-95">
            View Plans
          </button>
          
          <button className="px-8 py-3 bg-transparent border-2 border-[#ff6a00] text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white font-semibold rounded-md transition-all duration-300 active:scale-95">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;