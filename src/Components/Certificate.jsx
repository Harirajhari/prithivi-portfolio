import React from 'react'
import { FaCertificate, FaAward, FaUserShield } from 'react-icons/fa'

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Advanced Cardiac Life Support (ACLS)",
      issuer: "American Heart Association",
      date: "2022",
      description: "Certification in advanced interventions for cardiac arrest and other cardiovascular emergencies.",
      icon: <FaCertificate className="text-3xl text-red-500" />
    },
    {
      id: 2,
      title: "Critical Care Nursing Certification",
      issuer: "Indian Nursing Council",
      date: "2021",
      description: "Specialized training in critical care nursing practices and patient management.",
      icon: <FaUserShield className="text-3xl text-blue-500" />
    },
    {
      id: 3,
      title: "ECMO Specialist Certification",
      issuer: "ELSO (Extracorporeal Life Support Organization)",
      date: "2023",
      description: "Training in extracorporeal membrane oxygenation management for cardiac and respiratory failure.",
      icon: <FaAward className="text-3xl text-teal-500" />
    },
    {
      id: 4,
      title: "Infection Control Specialist",
      issuer: "National Infection Control Council",
      date: "2022",
      description: "Advanced training in hospital infection prevention and control protocols.",
      icon: <FaCertificate className="text-3xl text-purple-500" />
    }
  ]

  return (
    <section id="certifications" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications demonstrating specialized skills and knowledge in cardiac thoracic care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                  {cert.date}
                </span>
                <p className="text-gray-600 text-sm flex-grow">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition duration-300 shadow-sm">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  )
}

export default Certificate