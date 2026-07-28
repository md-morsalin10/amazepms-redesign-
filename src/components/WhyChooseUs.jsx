'use client';

import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiPhone, HiArrowRight } from 'react-icons/hi2';

const benefits = [
  'Managing an area of more than 20 million Sq.ft across different portfolios.',
  'All services are Inhouse.',
  'Availability of back up staff to take care of emergencies.',
  'Yearly training calendar will be shared and conducted by Training Officer.',
  'Risk Assessment of Equipment and its Operations and Recommend measures from time to time.',
  'Site specific SOP’s / Checklists for all the services.',
  'Internal team will audit the site on a regular basis and propose the site improvement plans (Power Saving Methods, Manpower Optimization).',
  'Coordination and Supervision towards Annual Shutdown Maintenance and mobilizing.',
  'Liaison with Government agencies.',
  'EHS, Security, Technical, Fire & Safety, Inventory, Process, Soft Services, Compliance, Customer Satisfaction audits.',
  'AMC Tracking and Negotiations.',
];

const staffWelfare =
  'STAFF WELFARE: 1. Diwali Sweets, 2. Gifts on RD/ID, Rewards on RD/ID, 2lakhs Insurance, 10k funeral expenses, 1 lakh compensation, Ranker students & staff 1 lakh, 50 thousand, 25 thousand from the company.';

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-white border-t border-slate-100 overflow-hidden">
      
      {/* Upper Main Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              {/* Main Background Image Card */}
              <div className="w-[88%] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-[4/5] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Floating "Why Us" Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-6 -right-2 sm:right-2 w-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white p-1.5"
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                  alt="Why Choose Us Graphic"
                  className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
                Our Service Benefits
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why <span className="text-blue-600">Choose Us</span>
              </h2>
            </div>

            {/* List Items */}
            <div className="space-y-3 pt-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 mt-0.5 flex-shrink-0 shadow-sm">
                    <HiOutlineSparkles className="h-4 w-4" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {benefit}
                  </p>
                </motion.div>
              ))}

              {/* Highlighted Staff Welfare Box */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 p-4 rounded-2xl bg-blue-50/90 border border-blue-200 text-slate-900 text-xs sm:text-sm font-semibold leading-relaxed shadow-sm"
              >
                <span className="text-blue-700 font-bold block mb-1">
                  🎁 {staffWelfare.split(':')[0]}:
                </span>
                <span className="text-slate-800 font-medium">
                  {staffWelfare.split(':')[1]}
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Floating CTA Call Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 p-8 sm:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Phone Info */}
          <div className="flex items-center gap-5 z-10">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-lg">
              <HiPhone className="h-8 w-8 animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                Call For More Info
              </p>
              <a
                href="tel:9908538137"
                className="text-2xl sm:text-3xl font-black text-white hover:text-blue-300 transition-colors"
              >
                9908538137
              </a>
            </div>
          </div>

          {/* Middle: Title */}
          <div className="text-center md:text-left z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Call Us For Our Services
            </h3>
          </div>

          {/* Right: Contact Button */}
          <div className="z-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border-2 border-white/80 bg-white/10 hover:bg-white hover:text-blue-900 text-white font-bold text-sm backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <span>CONTACT US</span>
              <HiArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}