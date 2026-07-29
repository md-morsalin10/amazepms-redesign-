'use client';

import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { 
  HiMapPin, 
  HiPhone, 
  HiEnvelope, 
  HiMap 
} from 'react-icons/hi2';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services-page' },
  { name: 'Our Strength', href: '/our-strength' },
  { name: 'Gallery', href: '/gallery' },
];

const quickLinks = [
  { name: 'Our Clients', href: '/our-clients' },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

const presenceLocations = [
  'Telangana',
  'Andhra Pradesh',
  'Karnataka',
  'Tamilnadu',
  'Odisha',
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden border-t border-slate-800">
      
      {/* Top Subtle Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img
                src="https://www.amazepms.com/assets/logo.png"
                alt="Amaze PMSPL Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <h3 className="text-lg font-bold text-white leading-tight">
              Amaze Property Management Solutions Pvt Ltd
            </h3>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white">Menu</h4>
              <div className="w-8 h-1 bg-blue-600 rounded-full mt-1" />
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <div className="w-8 h-1 bg-blue-600 rounded-full mt-1" />
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Presence */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white">Our Presence</h4>
              <div className="w-8 h-1 bg-blue-600 rounded-full mt-1" />
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              {presenceLocations.map((location, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <HiMap className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white">Contact</h4>
              <div className="w-8 h-1 bg-blue-600 rounded-full mt-1" />
            </div>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start gap-3">
                <HiMapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:9100694137"
                  className="hover:text-blue-400 transition-colors"
                >
                  9100694137
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiEnvelope className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:Info@amazepms.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  Info@amazepms.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center text-xs text-slate-400 font-medium">
          <p>
            Copyright © {new Date().getFullYear()} Amaze Property Management | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}