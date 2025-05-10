import React from "react";
import { HeartPulse, UserCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,  // Trigger every time it comes into the viewport
    threshold: 0.1,  // Trigger animation when 10% of the section is visible
  });

  return (
    <section id="about" className="w-full bg-[#0F172A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white inline-block relative">
            About Me
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_#2dd4bf] mt-2"></span>
          </h2>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Info Cards */}
          <motion.div
            ref={inViewRef}
            className="lg:w-1/3 grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl text-center shadow-lg border border-teal-700 hover:scale-105 hover:brightness-110 transition duration-300"
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <HeartPulse className="mx-auto mb-2 text-teal-400 drop-shadow-[0_0_5px_#2dd4bf]" size={36} />
              <p className="text-4xl font-bold text-teal-400">5+</p>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl text-center shadow-lg border border-teal-700 hover:scale-105 hover:brightness-110 transition duration-300"
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <UserCheck className="mx-auto mb-2 text-teal-400 drop-shadow-[0_0_5px_#2dd4bf]" size={36} />
              <p className="text-4xl font-bold text-teal-400">1000+</p>
              <p className="text-gray-300">Patients Cared For</p>
            </motion.div>
            <motion.div
              className="col-span-2 bg-[#1E293B] p-6 rounded-xl text-center shadow-lg border border-red-700 hover:scale-105 hover:brightness-110 transition duration-300"
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Stethoscope className="mx-auto mb-2 text-red-400 drop-shadow-[0_0_5px_#f87171]" size={32} />
              <p className="text-xl font-bold text-red-400">Cardiac Thoracic Specialist</p>
            </motion.div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            ref={inViewRef}
            className="lg:w-2/3 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl border-l-4 border-teal-400 shadow-md hover:shadow-teal-500/30 transition"
              whileHover={{ boxShadow: "0 0 10px rgba(45, 212, 191, 0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-200">
                Experienced Cardiac Thoracic Medical and Surgical Ward/ICU Nurse with expertise in
                managing critically ill patients following cardiothoracic and vascular surgeries.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl border-l-4 border-blue-400 shadow-md hover:shadow-blue-500/30 transition"
              whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-200">
                Skilled in advanced hemodynamic monitoring, ventilator management, inotropic support,
                and post-operative care settings. Proficient in handling emergency situations,
                maintaining infection control standards, and working with multidisciplinary teams
                to ensure optimal recovery.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-red-500/30 transition"
              whileHover={{ boxShadow: "0 0 10px rgba(248, 113, 113, 0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-200">
                Committed to delivering safe, evidence-based Cardiac Thoracic Medical and Surgical
                Ward and ICU environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
