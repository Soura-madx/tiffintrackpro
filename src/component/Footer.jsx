import React from 'react';
import { MapPin, Phone, Mail, } from 'lucide-react';

const Footer = () => {
  const infoLinks = [
    { name: 'Our Tiffin Plans', href: '#' },
    { name: 'Sunday Special Menu', href: '#' },
    { name: 'Delivery Areas', href: '#' },
    { name: 'Bulk Orders', href: '#' },
    { name: 'Hygiene Standards', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Customer Reviews', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];


  return (
    <footer className="bg-[#2c2c2c] text-white pt-20 pb-5 font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 px-5 pb-15 text-center sm:text-left">
        
        {/* Column 1: Brand/About */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-[1.8rem] mb-5 font-bold">
            Sharma Ji's <span className="text-[#ef4444] font-light">Kitchen</span>
          </h2>
          <p className="text-[#a0a0a0] leading-[1.6] text-[0.95rem] mb-5 max-w-sm">
            Serving fresh, homemade love in every tiffin. Join our family of happy eaters today.
          </p>
          <div className="space-y-3 text-[#a0a0a0] text-[0.9rem]">
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <MapPin size={18} className="text-[#ef4444]" />
              123 Foodie Lane, Indore
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <Phone size={18} className="text-[#ef4444]" />
              +91 98765 43210
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <Mail size={18} className="text-[#ef4444]" />
              hello@sharmajikitchen.com
            </p>
          </div>
        </div>

        {/* Column 2: Information */}
        <div>
          <h3 className="text-[1.1rem] mb-6 font-semibold uppercase tracking-[1px]">
            Information
          </h3>
          <ul className="space-y-3">
            {infoLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[#a0a0a0] text-[0.95rem] hover:text-[#ef4444] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-[1.1rem] mb-6 font-semibold uppercase tracking-[1px]">
            Company
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[#a0a0a0] text-[0.95rem] hover:text-[#ef4444] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

       

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#444] max-w-7xl mx-auto px-5 pt-8 pb-4 mt-8 flex flex-col md:flex-row justify-between items-center text-[0.85rem] text-[#888] gap-4">
        <p>&copy; 2026 Sharma Ji's Kitchen. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;