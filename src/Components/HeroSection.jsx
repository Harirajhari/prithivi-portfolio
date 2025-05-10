import React, { useEffect } from "react";
import { motion, useAnimation  } from "framer-motion";
import MyImages from "./Myimage.jpg";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
 const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,  // run every time it enters view
    threshold: 0.2,       // 20% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [controls, inView]);


  return (
    <main className="pt-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16"  ref={ref}>
        
        {/* Text Content - Left Side */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative medical badge */}
          <div className="hidden lg:block absolute -top-10 -left-10">
            <div className="bg-white p-3 rounded-full shadow-lg rotate-12">
              <div className="bg-red-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Name with underline effect */}
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 relative z-10">
              Prithivi Raj K
            </h1>
            <div className="absolute bottom-2 left-0 w-full h-3 bg-teal-300 opacity-40 z-0 rounded-full"></div>
          </div>
          
          {/* Title with icon */}
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="bg-teal-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-teal-700">Registered Cardiac Nurse</h2>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start space-y-3 mt-6">
            <p className="flex items-center text-gray-700 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-lg shadow-sm">
              <span className="bg-blue-100 p-2 rounded-full mr-3 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              +91 8667051584
            </p>
            <p className="flex items-center text-gray-700 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-lg shadow-sm">
              <span className="bg-blue-100 p-2 rounded-full mr-3 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              prithiviraj28k@gmail.com
            </p>
          </div>
          
          {/* Tagline with decorative border */}
          <motion.div
            className="relative mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="italic text-xl md:text-2xl text-red-600 pl-6 py-3 border-l-4 border-red-400 bg-red-50/50 rounded-r-lg relative z-10">
              "Compassionate Critical Care for Every Heartbeat"
            </p>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-red-100 rounded-full opacity-30 z-0"></div>
          </motion.div>
          
          {/* Buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <motion.a
              href="/path-to-resume.pdf"
              className="bg-[#003366] hover:bg-blue-800 text-white py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section - Right Side */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main profile image with decorative elements */}
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 transform hover:rotate-0 transition duration-500">
              <img
                src={MyImages}
                alt="Prithivi Raj K - Cardiac Nurse"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Decorative medical elements */}
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg z-10">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg z-10 animate-pulse">
              <div className="bg-red-500 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            
            {/* Floating dots decoration */}
            <div className="absolute -bottom-10 left-10 w-20 h-20 bg-teal-100 rounded-full opacity-30"></div>
            <div className="absolute top-10 -right-10 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HeroSection;
