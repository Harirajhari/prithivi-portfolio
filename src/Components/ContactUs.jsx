import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { RiLinkedinFill, RiTwitterXFill, RiInstagramFill } from 'react-icons/ri'

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Elegant Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 relative inline-block">
            <span className="relative z-10">Let's Connect</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-400/30 z-0 transform -rotate-1"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-teal-500/10 p-3 rounded-lg mr-4 text-teal-600">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 text-lg">+91 8667051584</p>
                  <p className="text-gray-500 text-sm mt-2">Available 9AM - 5PM, Mon-Fri</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4 text-blue-600">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-lg">prithiviraj28k@gmail.com</p>
                  <p className="text-gray-500 text-sm mt-2">Typically responds within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4 text-purple-600">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600 text-lg">Bangalore, Karnataka</p>
                  <p className="text-gray-500 text-sm mt-2">Open to relocation opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Contact Form */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-5">
              <h3 className="text-xl font-semibold text-white">Send Me a Message</h3>
            </div>
            <form className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Stylish Social Links */}
        <div className="mt-14 text-center">
          <h4 className="text-gray-600 mb-5 text-sm font-medium uppercase tracking-wider">Or connect via</h4>
          <div className="flex justify-center space-x-5">
            <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-all duration-300 group">
              <RiLinkedinFill className="text-gray-700 text-xl group-hover:text-blue-600" />
            </a>
            <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-black transition-all duration-300 group">
              <RiTwitterXFill className="text-gray-700 text-xl group-hover:text-black" />
            </a>
            <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-pink-100 transition-all duration-300 group">
              <RiInstagramFill className="text-gray-700 text-xl group-hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs