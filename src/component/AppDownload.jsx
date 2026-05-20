import React from 'react';

import download from '../assets/images/phone.png'
const AppDownloadSection = () => {
  return (
    <section className="py-24 px-5 bg-[#ffffff] flex justify-center">
      <div className="bg-[#d6a7d8] max-w-[1100px] w-full p-10 md:p-[60px] rounded-[20px] flex md:flex-row flex-col items-center gap-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 md:text-left text-center">
          <h4 className="text-[#ef4444] uppercase tracking-[2px] text-sm mb-2.5 font-medium">
            Experience the Best
          </h4>
          <h2 className="text-[2.8rem] leading-tight text-[#333] mb-5 font-bold">
            Download Our App
          </h2>
          <p className="text-[#666] leading-[1.8] text-lg mb-9">
            Enjoy the convenience of ordering your favorite home-style meals with just a few taps. 
            Get real-time delivery tracking, exclusive app-only discounts, and manage your 
            tiffin plans on the go.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            {/* App Store Button */}
            <a href="#" className="inline-block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store"
                className="h-[45px] transition-transform duration-200 hover:scale-105"
              />
            </a>
            {/* Google Play Button */}
            <a href="#" className="inline-block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play"
                className="h-[45px] transition-transform duration-200 hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Dummy App Mockup */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Decorative Circle Background */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#fee2e2] rounded-full z-0"></div>
          
          {/* App Screenshot Image */}
          <img 
            // Replace with your actual app screenshot path
            src={download} 
            alt="App Screenshot" 
            className="relative z-10 w-[220px] md:w-[280px] rounded-[30px] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AppDownloadSection;