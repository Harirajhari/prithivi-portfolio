import React from 'react';
import { FaGraduationCap, FaHospital, FaHeartbeat, FaUserMd, FaBook } from 'react-icons/fa';
import { GiHeartOrgan } from 'react-icons/gi';
import { motion } from 'framer-motion';

const ProfessionalProfile = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Professional Profile
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Core Competencies */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-gray-800 rounded-xl shadow-xl p-8 sticky top-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaHeartbeat className="text-teal-400 mr-3" />
                Core Competencies
              </h2>
              <ul className="space-y-4">
                {[
                  "ACLS Certified",
                  "Hemodynamic Monitoring",
                  "Ventilator Management",
                  "ECMO Care",
                  "Critical Care Nursing",
                  "Patient/Family Education",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Professional Experience */}
            <motion.div
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="bg-gradient-to-r from-teal-600 to-blue-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <FaHospital className="mr-3" />
                  Professional Experience
                </h2>
              </div>
              <div className="p-8">
                <div className="mb-8 pb-8 border-b border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white">Cardiac Thoracic Medical/Surgical Ward/ICU</h3>
                      <p className="text-gray-400">Manipal Hospital, Bangalore</p>
                    </div>
                    <span className="bg-teal-900/30 text-teal-400 px-3 py-1 rounded-full text-sm font-medium border border-teal-400/30">
                      JAN 2022 – Present
                    </span>
                  </div>
                  <ul className="mt-6 space-y-4 text-gray-300">
                    {[
                      "Provided comprehensive nursing care to post-operative patients following major cardiothoracic and vascular surgeries",
                      "Specialized in ECMO (VA & VV) care including circuit monitoring and anticoagulation management",
                      "Managed advanced life support equipment including IABP, CRRT, and ventilators",
                      "Delivered critical post-operative support to heart and lung transplant recipients",
                      "Assisted in preparation and stabilization of transplant patients in pre-op/post-op phases",
                      "Played active role in emergency codes and multidisciplinary rounds",
                      "Educated patients and families on post-transplant care and medication adherence",
                    ].map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-teal-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <FaGraduationCap className="mr-3" />
                  Education
                </h2>
              </div>
              <div className="p-8">
                {/* Nursing Degree */}
                <div className="mb-8 pb-8 border-b border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white">Bachelor of Science in Nursing</h3>
                      <p className="text-gray-400">Krupanidhi College of Nursing, Bangalore</p>
                    </div>
                    <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30">
                      OCT 2017 - DEC 2021
                    </span>
                  </div>
                </div>

                {/* Bio-Mathematics */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white">Bio-Mathematics</h3>
                      <p className="text-gray-400">Bhagavan Higher Secondary School</p>
                    </div>
                    <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30">
                      JUN 2015 - MAR 2017
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              className="bg-gray-800 rounded-xl shadow-xl p-8 border-l-4 border-teal-500 border border-gray-700"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaUserMd className="text-teal-400 mr-3" />
                Professional Summary
              </h2>
              <p className="text-gray-300 mb-4">
                Experienced Cardiac Thoracic Nurse with expertise in managing critically ill patients following cardiothoracic and vascular surgeries. Skilled in advanced hemodynamic monitoring, ventilator management, and post-operative care settings.
              </p>
              <p className="text-gray-300">
                Committed to delivering safe, evidence-based care and working with multidisciplinary teams to ensure optimal patient recovery and outcomes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;
