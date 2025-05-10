import React from 'react'
import { FaUserMd, FaHospital, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Reference = () => {
  return (
    <section id="reference" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3 relative inline-block">
            Professional Reference
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-400">Contact information for professional verification</p>
        </div>

        {/* Reference Card */}
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-teal-400 transition duration-300">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Doctor Icon */}
              <div className="flex-shrink-0">
                <div className="bg-teal-900/30 p-5 rounded-full border border-teal-400/30">
                  <FaUserMd className="text-4xl text-teal-400" />
                </div>
              </div>

              {/* Reference Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Devananda N S</h3>
                <p className="text-teal-400 font-medium mb-4">
                  MBBS, MS (General Surgery), M Ch (Cardio Thoracic)
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-1 flex items-center">
                    <FaHospital className="text-gray-400 mr-2" />
                    HOD & Consultant CTVS Heart & Lung Transplant Surgery
                  </h4>
                  <p className="text-gray-400 ml-6">Manipal Hospitals, Bangalore</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">
                      Old Airport Road, Kodihalli, Bangalore 560017, Karnataka, India
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-3 flex-shrink-0" />
                    <a 
                      href="mailto:devananda.ns@manipalhospitals.com" 
                      className="text-teal-400 hover:text-teal-300 transition"
                    >
                      devananda.ns@manipalhospitals.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-gray-700 px-6 py-3 border-t border-gray-600 flex items-center justify-between">
            <span className="text-sm text-gray-400">Available for professional verification</span>
            <span className="bg-teal-900/30 text-teal-400 text-xs px-3 py-1 rounded-full border border-teal-400/30">
              Verified Reference
            </span>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>References available upon request with prior notice</p>
        </div>
      </div>
    </section>
  )
}

export default Reference