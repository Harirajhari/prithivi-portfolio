import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoreComponent = () => {
  const competencies = [
    { icon: '⚡', title: 'ACLS Certified', category: 'Certifications' },
    { icon: '📊', title: 'Hemodynamic Monitoring', category: 'Clinical Skills' },
    { icon: '🏥', title: 'Post-Operative Critical Care', category: 'Specialized Care' },
    { icon: '💨', title: 'Ventilator and Airway Management', category: 'Respiratory' },
    { icon: '💉', title: 'Inotropic and Vasopressor Administration', category: 'Medication' },
    { icon: '🩹', title: 'Chest Drain and ECMO Care', category: 'Specialized Care' },
    { icon: '🦠', title: 'Infection Prevention & Control', category: 'Patient Safety' },
    { icon: '👨‍👩‍👧‍👦', title: 'Patient and Family Education', category: 'Communication' },
    { icon: '🚨', title: 'Emergency Response and Code Management', category: 'Critical Care' },
    { icon: '👥', title: 'Interdisciplinary Team Collaboration', category: 'Teamwork' },
    { icon: '😌', title: 'Pain and Sedation Management', category: 'Patient Comfort' }
  ];

  return (
    <section id="competencies" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366] inline-block relative pb-2">
          Core Competencies
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-400 rounded-full"></span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Specialized skills and expertise in cardiac thoracic nursing care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((skill, index) => {
          // Using the useInView hook for each competency card
          const { ref, inView } = useInView({
            triggerOnce: false, // Trigger every time it comes into the viewport
            threshold: 0.1, // Trigger animation when 10% of the section is visible
          });

          return (
            <motion.div
              key={index}
              ref={ref} // Applying the reference to each competency card
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500"
              initial={{ opacity: 0, y: 50 }} // Start offscreen with opacity 0
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate when in view
              transition={{ duration: 0.7, delay: index * 0.1 }} // Stagger animations based on index
            >
              <div className="p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative medical elements */}
      <div className="mt-12 flex justify-center space-x-8 opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    </section>
  );
};

export default CoreComponent;
